const RSS_URL = "https://rss.beehiiv.com/feeds/DAoX2ngnkW.xml";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  thumbnail: string;
  content: string;
  beehiivUrl: string;
}

export function extractSlug(url: string): string {
  const match = url.match(/\/p\/([^/?#]+)/);
  return match?.[1] ?? "";
}

export function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function parseRSS(xml: string): BlogPost[] {
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  const posts: BlogPost[] = [];
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const item = match[1];

    const title =
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/)?.[1]?.trim() ??
      item.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim() ??
      "";

    const beehiivUrl =
      item.match(/<link>\s*(.*?)\s*<\/link>/)?.[1]?.trim() ?? "";

    const slug = extractSlug(beehiivUrl);
    if (!slug) continue;

    const pubDate =
      item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1]?.trim() ?? "";

    const description =
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/)?.[1]?.trim() ??
      item.match(/<description>([\s\S]*?)<\/description>/)?.[1]?.trim() ??
      "";

    const content =
      item.match(
        /<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/
      )?.[1] ?? "";

    const thumbnail =
      item.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ??
      item.match(/<media:content[^>]+url="([^"]+)"/)?.[1] ??
      content.match(/<img[^>]+src="([^"]+)"/)?.[1] ??
      "";

    posts.push({
      slug,
      title,
      description,
      pubDate,
      thumbnail,
      content,
      beehiivUrl,
    });
  }

  return posts;
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(RSS_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const xml = await res.text();
    return parseRSS(xml);
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<BlogPost | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
