import React, { useEffect } from 'react';
import Head from 'next/head';

const GTranslate = () => {
  useEffect(() => {
    // Ensure the script runs in the browser
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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.gtranslateSettings = {
                "default_language": "en",
                "detect_browser_language": true,
                
                "languages": ["en", "de", "it", "es", "ar", "lb", "ru", "bg", "id", "nl", "pt", "lt", "th", "uk", "sv", "ko", "tr", "cs"],
                "wrapper_selector": ".gtranslate_wrapper",
                "alt_flags": { "en": "usa" }
              };
            `,
          }}
        />
      </Head>
      <div className="gtranslate_wrapper"></div>
    </>
  );
};

export default GTranslate;
