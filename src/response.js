export function jsonResponse(data, status = 200, origin = "*") {
  return new Response(data, {
    status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": origin,
    }
  });
}

export function errorResponse(message, status = 403) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}