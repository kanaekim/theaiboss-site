"use client";

import { useState } from "react";
import Image from "next/image";

interface YoutubeEmbedProps {
  videoId: string;
  title?: string;
}

export function YoutubeEmbed({ videoId, title = "Watch video" }: YoutubeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <div className="relative w-full rounded-xl shadow-lg overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <iframe
          className="absolute inset-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Play: ${title}`}
      className="relative w-full rounded-xl shadow-lg overflow-hidden group cursor-pointer block"
      style={{ aspectRatio: "16/9" }}
    >
      {/* Thumbnail */}
      <Image
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt={title}
        fill
        sizes="(max-width: 1024px) 100vw, 896px"
        className="object-cover"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"
        aria-hidden="true"
      />

      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div className="w-20 h-20 rounded-full bg-white/90 group-hover:bg-white flex items-center justify-center shadow-xl transition-colors">
          <svg
            className="w-8 h-8 text-red-600 ml-1"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>

      {/* Click-to-load label */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <span className="text-white/80 text-xs font-medium bg-black/40 px-3 py-1 rounded-full">
          Click to play
        </span>
      </div>
    </button>
  );
}
