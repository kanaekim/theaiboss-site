export default function BlogPostLoading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="bg-[var(--color-foreground)] pt-24">
        <div className="max-w-3xl mx-auto px-6 py-16 sm:py-20 space-y-4">
          <div className="h-4 bg-white/10 rounded animate-pulse w-48 mb-8" />
          <div className="h-3 bg-white/10 rounded animate-pulse w-24" />
          <div className="h-12 bg-white/10 rounded-lg animate-pulse" />
          <div className="h-12 bg-white/10 rounded-lg animate-pulse w-3/4" />
          <div className="h-5 bg-white/10 rounded animate-pulse max-w-lg mt-2" />
          <div className="flex items-center gap-3 mt-6">
            <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse shrink-0" />
            <div className="space-y-1">
              <div className="h-3 bg-white/10 rounded animate-pulse w-32" />
              <div className="h-3 bg-white/10 rounded animate-pulse w-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Thumbnail skeleton */}
      <div className="bg-[var(--color-foreground)]">
        <div className="max-w-3xl mx-auto px-6 pb-0">
          <div className="w-full rounded-xl bg-white/10 animate-pulse" style={{ aspectRatio: "16/9" }} />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-200 rounded animate-pulse"
              style={{ width: `${75 + Math.random() * 25}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
