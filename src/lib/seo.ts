type OpenGraph = {
  title: string;
  description: string;
  canonical: string;
  image?: string; // optional
  locale?: string; // en_IN
};

export function buildMeta({ title, description, canonical, image, locale = "en_IN" }: OpenGraph) {
  const siteName = "M N Rajendrakumar Insurance Services";
  const url = canonical;

  return {
    title,
    description,
    canonical,
    tags: {
      // Basic
      "description": description,
      "robots": "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      "googlebot": "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",

      // Canonical handled by <link rel="canonical" ...>

      // OpenGraph
      "og:type": "website",
      "og:site_name": siteName,
      "og:locale": locale,
      "og:title": title,
      "og:description": description,
      "og:url": url,

      // Twitter
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,

      ...(image
        ? {
            "og:image": image,
            "twitter:image": image,
          }
        : {}),
    },
  };
}
