// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Schema = Record<string, any>;

export function JsonLd({ data }: { data: Schema }) {
  if (process.env.NODE_ENV === "development") {
    console.log(
      `[JSON-LD] @type=${String(data["@type"])}`,
      JSON.stringify(data, null, 2)
    );
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
