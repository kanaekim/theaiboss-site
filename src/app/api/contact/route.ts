import { NextRequest, NextResponse } from "next/server";

const ATTIO_API = "https://api.attio.com/v2";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, role, inquiryType, ...extra } = body;

    if (!email || !name || !company) {
      return NextResponse.json(
        { error: "Name, email, and company are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.ATTIO_API_KEY;
    if (!apiKey) {
      console.error("Missing ATTIO_API_KEY environment variable");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    };

    // --- 1. Assert (create or update) the Person record ---
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const personRes = await fetch(
      `${ATTIO_API}/objects/people/records?matching_attribute=email_addresses`,
      {
        method: "PUT",
        headers,
        body: JSON.stringify({
          data: {
            values: {
              email_addresses: [email],
              name: [
                {
                  first_name: firstName,
                  last_name: lastName,
                  full_name: name.trim(),
                },
              ],
            },
          },
        }),
      }
    );

    if (!personRes.ok) {
      const err = await personRes.json();
      console.error("Attio People error:", JSON.stringify(err));
      return NextResponse.json(
        { error: "Failed to create contact." },
        { status: personRes.status }
      );
    }

    const person = await personRes.json();
    const personId = person.data?.id?.record_id;

    // --- 2. Build a readable note from the form data ---
    const inquiryLabel =
      inquiryType.charAt(0).toUpperCase() + inquiryType.slice(1);

    const lines: string[] = [
      `Inquiry Type: ${inquiryLabel}`,
      `Company: ${company}`,
      `Role: ${role}`,
    ];

    const fieldLabels: Record<string, string> = {
      revenue: "Annual Revenue",
      driver: "Interest Driver",
      event_name: "Event Name",
      event_date: "Event Date",
      location: "Location",
      audience_size: "Audience Size",
      format: "Format",
      budget: "Budget Range",
      workshop_format: "Workshop Format",
      participants: "Participants",
      date_range: "Preferred Date Range",
      delivery: "Delivery",
      notes: "Additional Notes",
    };

    for (const [key, value] of Object.entries(extra)) {
      if (value) {
        lines.push(`${fieldLabels[key] || key}: ${value}`);
      }
    }

    const noteContent = lines.join("\n");

    // --- 3. Create a Note on the Person record ---
    const noteRes = await fetch(`${ATTIO_API}/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          parent_object: "people",
          parent_record_id: personId,
          title: `Website Inquiry — ${inquiryLabel}`,
          format: "plaintext",
          content: noteContent,
        },
      }),
    });

    if (!noteRes.ok) {
      const noteErr = await noteRes.json();
      console.error("Attio Note error:", JSON.stringify(noteErr));
      // Person was still created, so return success
    }

    // --- 4. Send Google Chat notification ---
    const chatWebhookUrl = process.env.GOOGLE_CHAT_WEBHOOK_URL;
    if (chatWebhookUrl) {
      try {
        const chatMessage = [
          "📬 *New Website Inquiry*",
          "",
          `👤 *Name:* ${name.trim()}`,
          `📧 *Email:* ${email}`,
          `🏢 *Company:* ${company}`,
          `💼 *Role:* ${role || "N/A"}`,
          `📋 *Inquiry Type:* ${inquiryLabel}`,
          `💰 *Annual Revenue:* ${extra.revenue || "N/A"}`,
          `🎯 *Interest Driver:* ${extra.driver || "N/A"}`,
        ].join("\n");

        await fetch(chatWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text: chatMessage }),
        });
      } catch (chatErr) {
        console.error("Google Chat webhook error:", chatErr);
      }
    }

    // --- 5. Send Gmail notification via Apps Script ---
    const gmailWebhookUrl = process.env.GMAIL_WEBHOOK_URL;
    if (gmailWebhookUrl) {
      try {
        await fetch(gmailWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email,
            company,
            role: role || "N/A",
            inquiry_type: inquiryLabel,
            annual_revenue: extra.revenue || "N/A",
            interest_driver: extra.driver || "N/A",
          }),
        });
      } catch (gmailErr) {
        console.error("Gmail webhook error:", gmailErr);
      }
    }

    return NextResponse.json({ success: true, personId });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
