function getQueryParam(url, param) {
  if (!url || typeof url !== 'string') return;
  
  const query = url.substr(url.indexOf('?') + 1);  
  if (query.search(param) === -1) return;

  const indexParam = query.indexOf(param) + param.length;
  const rawStart = query.substr(indexParam + 1);

  const indexSeparator = rawStart.indexOf('&');
  if (indexSeparator === -1) return rawStart;
  return rawStart.substr(0, indexSeparator);
}
