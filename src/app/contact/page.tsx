"use client";

import { useState } from "react";

const PAGE_TITLE = "Book an AI Keynote or Advisory Engagement";
const PAGE_DESCRIPTION =
  "Inquire about AI advisory engagements, keynote speaking, or executive workshops with Kathy Slowinski and The AI Boss.";

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState<
    "advisory" | "speaking" | "workshop"
  >("advisory");

  return (
    <>
      <title>{PAGE_TITLE}</title>
      <meta name="description" content={PAGE_DESCRIPTION} />
      <main className="bg-white text-[var(--color-foreground)]">
        {/* -- Hero -- */}
        <section className="pt-24 pb-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              Let Us Determine If We Are the Right Fit
            </h1>
            <p className="text-xl sm:text-2xl text-[var(--color-muted)] leading-relaxed max-w-2xl mx-auto">
              We work with a small number of companies at any given time. This
              form starts a conversation &mdash; not a sales pitch.
            </p>
          </div>
        </section>

        {/* -- Form + Sidebar -- */}
        <section className="py-20 px-6 bg-[var(--color-surface)]">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[2fr_1fr] gap-16">
            {/* -- Form -- */}
            <form action="#" className="space-y-8">
              {/* Inquiry Type Tabs */}
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Inquiry Type
                </label>
                <div className="flex gap-2">
                  {(
                    [
                      ["advisory", "Advisory"],
                      ["speaking", "Speaking"],
                      ["workshop", "Workshop"],
                    ] as const
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setInquiryType(value)}
                      className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        inquiryType === value
                          ? "bg-[var(--color-foreground)] text-white"
                          : "bg-white border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-foreground)]"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Universal Fields */}
              <div className="grid sm:grid-cols-2 gap-6">
                <FormField label="Full Name" name="name" required />
                <FormField
                  label="Business Email"
                  name="email"
                  type="email"
                  required
                />
                <FormField label="Company Name" name="company" required />
                <FormField label="Role / Title" name="role" required />
              </div>

              {/* Advisory Fields */}
              {inquiryType === "advisory" && (
                <div className="space-y-6">
                  <FormSelect
                    label="Annual Revenue"
                    name="revenue"
                    options={[
                      "$50M - $100M",
                      "$100M - $250M",
                      "$250M - $500M",
                      "$500M+",
                    ]}
                  />
                  <FormSelect
                    label="What Is Driving Your Interest?"
                    name="driver"
                    options={[
                      "Board pressure",
                      "Competitive threat",
                      "Revenue opportunity",
                      "Cost reduction",
                      "Exploring",
                    ]}
                  />
                  <FormTextarea
                    label="Anything else you would like us to know? (Optional)"
                    name="notes"
                  />
                </div>
              )}

              {/* Speaking Fields */}
              {inquiryType === "speaking" && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField label="Event Name" name="event_name" required />
                    <FormField
                      label="Event Date"
                      name="event_date"
                      type="date"
                      required
                    />
                    <FormField label="Location" name="location" required />
                    <FormSelect
                      label="Audience Size"
                      name="audience_size"
                      options={[
                        "Under 100",
                        "100 - 500",
                        "500 - 1,000",
                        "1,000+",
                      ]}
                    />
                    <FormSelect
                      label="Preferred Format"
                      name="format"
                      options={[
                        "Keynote",
                        "Fireside Chat",
                        "Panel",
                        "Half-Day",
                      ]}
                    />
                    <FormSelect
                      label="Budget Range (Optional)"
                      name="budget"
                      options={[
                        "Under $15,000",
                        "$15,000 - $25,000",
                        "$25,000 - $50,000",
                        "$50,000+",
                      ]}
                    />
                  </div>
                  <FormTextarea
                    label="Anything else you would like us to know? (Optional)"
                    name="notes"
                  />
                </div>
              )}

              {/* Workshop Fields */}
              {inquiryType === "workshop" && (
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormSelect
                      label="Format"
                      name="workshop_format"
                      options={["Full-Day", "Half-Day", "2-Hour"]}
                    />
                    <FormField
                      label="Number of Participants"
                      name="participants"
                      type="number"
                    />
                    <FormField
                      label="Preferred Date Range"
                      name="date_range"
                    />
                    <FormSelect
                      label="In-Person or Virtual"
                      name="delivery"
                      options={["In-Person", "Virtual", "Open to Either"]}
                    />
                  </div>
                  <FormTextarea
                    label="Anything else you would like us to know? (Optional)"
                    name="notes"
                  />
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 bg-[var(--color-cta)] text-white font-medium rounded-lg hover:bg-[var(--color-cta-hover)] transition-colors"
              >
                Start the Conversation
              </button>
            </form>

            {/* -- What Happens Next -- */}
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-bold mb-6">What happens next</h3>
                <ol className="space-y-6">
                  {[
                    ["1", "You submit this form"],
                    ["2", "We review within 2 business days"],
                    ["3", "If there is a fit, we schedule a 30-minute call"],
                    ["4", "You receive a clear proposal or a candid no"],
                  ].map(([num, text]) => (
                    <li key={num} className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[var(--color-foreground)] text-white text-sm font-bold flex items-center justify-center">
                        {num}
                      </span>
                      <span className="text-[var(--color-muted)] leading-relaxed pt-1">
                        {text}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="border-t border-[var(--color-border)] pt-8">
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  <span className="font-semibold text-[var(--color-foreground)]">
                    We do not:
                  </span>{" "}
                  add you to a sales sequence, share your information, or follow
                  up more than once. If it is not the right fit, we will tell
                  you directly and point you in a better direction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* -- Trust Elements -- */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">
            {[
              {
                title: "Confidentiality",
                body: "Every conversation is confidential. We will never share your information or discuss your company without explicit permission.",
              },
              {
                title: "No Sales Sequence",
                body: "You will not receive automated follow-ups, drip campaigns, or cold calls. One human response. That is it.",
              },
              {
                title: "Credibility",
                body: "Kathy has led real AI transformation as a CEO. This is not theoretical. You are talking to someone who has done the work.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="p-6 rounded-xl border border-[var(--color-border)] bg-white"
              >
                <h4 className="font-bold mb-2">{card.title}</h4>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

/* -- Local Components -- */

function FormField({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
        {required && <span className="text-[var(--color-cta)]"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] focus:border-transparent transition-shadow"
      />
    </div>
  );
}

function FormSelect({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] focus:border-transparent transition-shadow"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function FormTextarea({ label, name }: { label: string; name: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-1.5">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        rows={4}
        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-foreground)] focus:border-transparent transition-shadow resize-y"
      />
    </div>
  );
}
