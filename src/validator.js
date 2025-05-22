export function isOriginAllowed(origin, allowedOrigins) {
  return allowedOrigins.includes(origin);
}

export function isApiKeyValid(providedKey, expectedKey) {
  return providedKey === expectedKey;
}