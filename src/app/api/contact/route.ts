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

    // --- 1. Create or update the Person record ---
    const nameParts = name.trim().split(/\s+/);
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const personRes = await fetch(`${ATTIO_API}/objects/people/records`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          values: {
            email_addresses: [{ email_address: email }],
            name: [{ first_name: firstName, last_name: lastName }],
            job_title: [{ value: role }],
          },
        },
        matching_attribute: "email_addresses",
      }),
    });

    if (!personRes.ok) {
      const err = await personRes.json();
      console.error("Attio People error:", err);
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

    const noteBody = lines.join("\n");

    // --- 3. Create a Note on the Person record ---
    await fetch(`${ATTIO_API}/notes`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        data: {
          title: `Website Inquiry — ${inquiryLabel}`,
          content_plaintext: noteBody,
          parent_object: "people",
          parent_record_id: personId,
        },
      }),
    });

    return NextResponse.json({ success: true, personId });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
