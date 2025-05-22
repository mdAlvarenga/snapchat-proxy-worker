import {
  getAllowedOrigins,
  getApiKey,
  getSnapchatToken,
  getSnapchatApiUrl
} from "./config";
import {
  isOriginAllowed,
  isApiKeyValid
} from "./validator";
import { forwardToSnapchat } from "./snapchatProxy";
import { jsonResponse, errorResponse } from "./response";

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get("Origin") || "";
    const apiKey = request.headers.get("x-api-key");

    if (!isOriginAllowed(origin, getAllowedOrigins(env))) {
      return errorResponse("Forbidden: invalid origin", 403);
    }

    if (!isApiKeyValid(apiKey, getApiKey(env))) {
      return errorResponse("Unauthorized: invalid API key", 401);
    }

    const query = new URL(request.url).searchParams.toString();
    const apiUrl = getSnapchatApiUrl(env);
    const snapResponse = await forwardToSnapchat(apiUrl, query, getSnapchatToken(env));
    const result = await snapResponse.text();

    return jsonResponse(result, snapResponse.status, origin);
  }
};