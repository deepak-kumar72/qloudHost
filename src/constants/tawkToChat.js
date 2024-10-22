import React, { useEffect } from 'react';

function TawkToChat() {
  useEffect(() => {
    // Add the Tawk.to script dynamically
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement('script');
      s1.async = true;
      s1.src = 'https://embed.tawk.to/638476aeb0d6371309d17453/1giumv6vm';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      var s0 = document.getElementsByTagName('script')[0];
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return null; // No UI to render
}

export default TawkToChat;
