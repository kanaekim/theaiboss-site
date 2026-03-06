const metrics = [
  { value: "$110M", label: "Revenue managed" },
  { value: "~40", label: "People. Total." },
  { value: "4x", label: "Revenue per headcount" },
  { value: "80%", label: "Support handled by AI" },
];

export function MetricsBar() {
  return (
    <section className="bg-[var(--color-foreground)] text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {metrics.map((m) => (
          <div key={m.label}>
            <div className="text-4xl sm:text-5xl font-bold tracking-tight">
              {m.value}
            </div>
            <div className="text-sm text-gray-400 mt-2">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
