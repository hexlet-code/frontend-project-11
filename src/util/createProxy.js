export default (link, proxyBase = 'https://allorigins.hexlet.app') => {
  const href = new URL('/get', proxyBase);
  href.searchParams.append('disableCache', 'true');
  href.searchParams.append('url', link);
  return href;
};
