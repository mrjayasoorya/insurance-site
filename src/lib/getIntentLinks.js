import {siteData, EN} from "../content/siteData";

export function getIntentLinks(pageType) {
  const curated = siteData.intentPagesURLs?.[pageType] || [];
  const autoLinks = [];

  for (const [slug, page] of Object.entries(siteData.intentPages || {})) {
    if (!page.autoLink?.enabled) continue;
    if (!page.autoLink.contexts?.includes(pageType)) continue;

    autoLinks.push({
      title: page.heroH1 || page.seoTitle,
      desc: page.heroP || page.seoDesc,
      href: EN(`/${slug}/`),
      priority: page.autoLink.priority ?? 100,
      _auto: true,
    });
  }

  return [
    ...curated.map(l => ({ ...l, priority: 10, _auto: false })),
    ...autoLinks,
  ]
    .sort((a, b) => a.priority - b.priority)
    .slice(0, 10); // cap links to avoid clutter
}
