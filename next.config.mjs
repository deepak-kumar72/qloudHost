/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Keep this setting as is
trailingSlash: true,
  // Enable internationalized routing for GTranslate
  i18n: {
    locales: [
      'en', 'de', 'it', 'es', 'ar', 'lb', 'ru', 'bg', 'id',
      'nl', 'pt', 'lt', 'th', 'uk', 'sv', 'ko', 'tr', 'cs', 'ro'
    ],
    defaultLocale: 'en',
    localeDetection: false, // Set explicitly to true or false
  },

  // Add custom rewrites for GTranslate
  async rewrites() {
    return [
      {
        source: '/:lang(gtranslate|af|sq|am|ar|hy|az|eu|be|bn|bs|bg|ca|ceb|ny|zh-CN|zh-TW|co|hr|cs|da|nl|en|eo|et|tl|fi|fr|fy|gl|ka|de|el|gu|ht|ha|haw|iw|hi|hmn|hu|is|ig|id|ga|it|ja|jw|kn|kk|km|ko|ku|ky|lo|la|lv|lt|lb|mk|mg|ms|ml|mt|mi|mr|mn|my|ne|no|ps|fa|pl|pt|pa|ro|ru|sm|gd|sr|st|sn|sd|si|sk|sl|so|es|su|sw|sv|tg|ta|te|th|tr|uk|ur|uz|vi|cy|xh|yi|yo|zu)/:path*',
        destination: '/gtranslate.php?glang=:lang&gurl=:path*',
      },
    ];
  },
};

export default nextConfig;