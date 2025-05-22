export async function forwardToSnapchat(baseUrl, query, token) {
  const fullUrl = `${baseUrl}?${query}`;
  return await fetch(fullUrl, {
    headers: { Authorization: `Bearer ${token}` }
  });
}