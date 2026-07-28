export default function BlogLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-[var(--color-foreground)] pt-24">
        <div className="max-w-4xl mx-auto px-4 py-20 sm:py-28 text-center space-y-4">
          <div className="h-14 bg-white/10 rounded-lg animate-pulse max-w-2xl mx-auto" />
          <div className="h-6 bg-white/10 rounded animate-pulse max-w-lg mx-auto" />
          <div className="h-6 bg-white/10 rounded animate-pulse max-w-xs mx-auto" />
          <div className="h-12 bg-white/10 rounded-lg animate-pulse max-w-md mx-auto mt-6" />
        </div>
      </div>

      {/* Grid skeleton */}
      <div className="py-20 px-4 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden"
            >
              <div className="h-48 bg-gray-200 animate-pulse" />
              <div className="p-6 space-y-3">
                <div className="h-3 bg-gray-200 rounded animate-pulse w-1/3" />
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
                <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3 mt-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
