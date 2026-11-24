(() => {
  const languageLinks = [...document.querySelectorAll('nav a[hreflang]')];
  const preferredLanguages = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const preference of preferredLanguages) {
    const base = preference?.toLowerCase().split('-')[0];
    const language = base === 'no' || base === 'nn' ? 'nb' : base;
    const match = languageLinks.find(link => link.hreflang === language);
    if (match) {
      if (language !== document.documentElement.lang) {
        window.location.replace(match.href);
      }
      return;
    }
  }
})();
