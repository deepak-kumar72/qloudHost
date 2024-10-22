// generate-sitemap.js
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define the base URL for your site
const BASE_URL = 'http://next.qloudhost.com';

// Define all the paths you want to include in the sitemap
const pages = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/offshore-vps-hosting/', changefreq: 'weekly', priority: 0.8 },
  { url: '/offshore-dedicated-servers/', changefreq: 'weekly', priority: 0.8 },
  { url: '/offshore-streaming-server/', changefreq: 'weekly', priority: 0.8 },
  { url: '/offshore-web-hosting/', changefreq: 'weekly', priority: 0.8 },
  { url: '/offshore-wordpress-hosting/', changefreq: 'weekly', priority: 0.8 },
  { url: '/offshore-video-hosting/', changefreq: 'weekly', priority: 0.8 },
  { url: '/adult-hosting/', changefreq: 'weekly', priority: 0.7 },
  { url: '/dmca-ignored-vps/', changefreq: 'weekly', priority: 0.7 },
  { url: '/offshore-vps-hosting/netherlands/', changefreq: 'weekly', priority: 0.7 },
  { url: '/high-performance-vps-hosting/', changefreq: 'weekly', priority: 0.7 },
  { url: '/dmca-ignored-dedicated-servers/', changefreq: 'weekly', priority: 0.7 },
  { url: '/offshore-dedicated-servers/russia/', changefreq: 'weekly', priority: 0.7 },
  { url: '/offshore-streaming-server/netherlands/', changefreq: 'weekly', priority: 0.7 },
  { url: '/offshore-dedicated-servers/netherlands/', changefreq: 'weekly', priority: 0.7 },
  { url: '/offshore-vps-hosting/windows-rdp/', changefreq: 'weekly', priority: 0.7 },
  { url: '/coupons/', changefreq: 'monthly', priority: 0.6 },
  { url: '/affiliates/', changefreq: 'monthly', priority: 0.6 },
  { url: '/privacy-policy/', changefreq: 'yearly', priority: 0.5 },
  { url: '/terms/', changefreq: 'yearly', priority: 0.5 },
  { url: '/fair-usage-policy/', changefreq: 'yearly', priority: 0.5 },
  { url: '/refund/', changefreq: 'yearly', priority: 0.5 },
  { url: '/report-abuse/', changefreq: 'yearly', priority: 0.5 },
  { url: '/about/', changefreq: 'yearly', priority: 0.5 },
  { url: '/contact-us/', changefreq: 'yearly', priority: 0.5 },
  { url: '/sitemap/', changefreq: 'monthly', priority: 0.6 }
];

(async () => {
  try {
    // Create a SitemapStream instance
    const stream = new SitemapStream({ hostname: BASE_URL });

    // Define the file path to write the sitemap
    const filePath = path.join(__dirname, 'public', 'sitemap.xml');
    const writeStream = createWriteStream(filePath);

    // Pipe the sitemap stream to the write stream
    stream.pipe(writeStream);

    // Add each page to the sitemap
    pages.forEach(page => stream.write(page));
    stream.end();

    // Wait for the sitemap to finish writing
    await streamToPromise(stream);
    console.log(`Sitemap has been generated successfully at ${filePath}`);
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
})();
