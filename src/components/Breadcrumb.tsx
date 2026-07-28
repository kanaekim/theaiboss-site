import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";

const BASE = "https://theaiboss.ai";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export function Breadcrumb({
  items,
  variant = "dark",
}: {
  items: BreadcrumbItem[];
  variant?: "dark" | "light";
}) {
  const allItems = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE}${item.href}`,
    })),
  };

  const linkClass =
    variant === "light"
      ? "text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
      : "text-gray-400 hover:text-gray-200 transition-colors";

  const currentClass =
    variant === "light" ? "text-[var(--color-foreground)] font-medium" : "text-gray-300";

  const chevronClass =
    variant === "light" ? "text-[var(--color-border)]" : "text-gray-600";

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-8">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1.5">
                {!isLast ? (
                  <Link href={item.href} className={linkClass}>
                    {item.name}
                  </Link>
                ) : (
                  <span aria-current="page" className={currentClass}>
                    {item.name}
                  </span>
                )}
                {!isLast && (
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                    className={chevronClass}
                  >
                    <path d="M4 2l4 4-4 4" />
                  </svg>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
