import { useEffect } from 'react';

export function GoogleTagManagerHead() {
  useEffect(() => {
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      const f = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      const dl = l !== 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PBXJ4Z9T');
  }, []);

  return null;
}

export function GoogleTagManagerBody() {
  return (
    <noscript>
      <iframe
        src='https://www.googletagmanager.com/ns.html?id=GTM-PBXJ4Z9T'
        height='0'
        width='0'
        style={{ display: 'none', visibility: 'hidden' }}
        title='Google Tag Manager'
      ></iframe>
    </noscript>
  );
}
