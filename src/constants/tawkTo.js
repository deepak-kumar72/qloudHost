import  { useEffect } from 'react';

const TawkToScript = () => {
    useEffect(() => {
        if (typeof window !== 'undefined' && !navigator.userAgent.includes('ReactSnap')) {
            // Initialize Tawk.to variables
            window.Tawk_API = window.Tawk_API || {};
            window.Tawk_LoadStart = new Date();

            // Create Tawk.to script
            const script = document.createElement("script");
            script.async = true;
            script.src = 'https://embed.tawk.to/638476aeb0d6371309d17453/1giumv6vm';
            script.charset = 'UTF-8';
            script.setAttribute('crossorigin', '*');

            // Append script to the document
            document.body.appendChild(script);
        }
    }, []);
    
    return null;
};

export default TawkToScript;
