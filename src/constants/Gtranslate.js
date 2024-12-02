import React, { useEffect } from 'react';
import Head from 'next/head';

const GTranslate = () => {
  useEffect(() => {
    // Dynamically add the script on the client side
    const script = document.createElement('script');
    script.src = 'https://cdn.gtranslate.net/widgets/latest/popup.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Head>
        {/* Add gtranslateSettings in the head */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "native_language_names": true,
                "detect_browser_language": true,
                "url_structure": "sub_directory",
                "languages": ["en", "de", "it", "es", "ar", "lb", "ru", "bg", "id", "nl", "pt", "lt", "th", "uk", "sv", "ko", "tr", "cs", "ro"],
                "wrapper_selector": ".gtranslate_wrapper",
                "flag_style": "3d",
                "alt_flags": { "en": "usa" }
              };
            `,
          }}
        />
      </Head>
      <div className="gtranslate_wrapper mt-4"></div>
    </>
  );
};

export default GTranslate;
