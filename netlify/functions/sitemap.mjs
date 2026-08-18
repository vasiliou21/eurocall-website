// Dynamic sitemap for eurocall-faragiannis.gr
// Serves /sitemap.xml: static pages + active categories from Supabase.
// The catalog is client-managed (no deploy on changes), so the sitemap must be
// dynamic too — built at request time, cached for crawlers.
// Reads only public data (same anon key + RLS as the site). No secrets.

const EURO_SITE = 'https://eurocall-faragiannis.gr';

const ISTOS = {
  url: 'https://buwmhccjxuimhnscsujm.supabase.co',
  anon: 'sb_publishable_fypmgJXNazcKFid6Uqh2_g_IbQQrlC1',
  clientId: 'd011289f-1382-4229-b3a5-74f8c602f77d',
};

const STATIC_PAGES = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/epikoinonia/', priority: '0.7', changefreq: 'monthly' },
  { loc: '/endiaferon/', priority: '0.8', changefreq: 'monthly' },
  { loc: '/efxaristoume/', priority: '0.3', changefreq: 'yearly' },
  { loc: '/proionta/metaxeirismena/', priority: '0.8', changefreq: 'weekly' }
];

function xmlUrl(loc, priority, changefreq) {
  return `  <url>\n    <loc>${loc}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

export default async () => {
  let slugs = [];
  try {
    const q =
      `${ISTOS.url}/rest/v1/catalog_categories` +
      `?select=slug&client_id=eq.${ISTOS.clientId}&status=eq.active`;
    const res = await fetch(q, { headers: { apikey: ISTOS.anon } });
    if (res.ok) {
      const rows = await res.json();
      slugs = Array.isArray(rows)
        ? [...new Set(rows.map((c) => c.slug).filter(Boolean))]
        : [];
    }
  } catch {
    // Fail-soft: if Supabase is unreachable, still serve the static pages.
  }

  const staticUrls = STATIC_PAGES.map((p) => xmlUrl(EURO_SITE + p.loc, p.priority, p.changefreq));
  const categoryUrls = slugs.map((slug) =>
    xmlUrl(`${EURO_SITE}/proionta/${encodeURIComponent(slug)}/`, '0.8', 'weekly')
  );

  const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    staticUrls.join('\n') +
    (categoryUrls.length ? '\n' + categoryUrls.join('\n') : '') +
    '\n</urlset>';

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    },
    body: xml
  };
};
