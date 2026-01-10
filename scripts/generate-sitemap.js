import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE_URL = 'https://www.michael-walsh.dev';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');
const POSTS_FILE = path.join(__dirname, '../src/posts/posts.js');

const staticRoutes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/blog', priority: '0.9', changefreq: 'weekly' },
];

/**
 * Extract post metadata from posts.js without executing imports
 * Parses the posts array to get slug, title, and date
 */
function extractPostsMetadata() {
  const postsFileContent = fs.readFileSync(POSTS_FILE, 'utf-8');
  const posts = [];
  
  const postPattern = /\{\s*slug:\s*['"]([^'"]+)['"],\s*title:\s*['"]([^'"]+)['"],\s*date:\s*['"]([^'"]+)['"]/g;
  
  let match;
  while ((match = postPattern.exec(postsFileContent)) !== null) {
    posts.push({
      slug: match[1],
      title: match[2],
      date: match[3],
    });
  }
  
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

function generateSitemap() {
  const posts = extractPostsMetadata();
  
  const blogRoutes = posts.map(post => ({
    path: `/blog/${post.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: post.date ? new Date(post.date).toISOString().split('T')[0] : null,
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const currentDate = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  allRoutes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${SITE_URL}${route.path}</loc>\n`;
    if (route.lastmod) {
      xml += `    <lastmod>${route.lastmod}</lastmod>\n`;
    } else {
      xml += `    <lastmod>${currentDate}</lastmod>\n`;
    }
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  fs.writeFileSync(OUTPUT_PATH, xml, 'utf-8');
  console.log(`Sitemap generated successfully at ${OUTPUT_PATH}`);
  console.log(`   - ${allRoutes.length} URLs included`);
  console.log(`   - ${posts.length} blog posts included`);
}

generateSitemap();
