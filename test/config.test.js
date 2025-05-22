import {
  getAllowedOrigins,
  getApiKey,
  getSnapchatApiUrl,
  getSnapchatToken
} from "../src/config";
import { test, expect } from 'vitest';

const mockEnv = {
  ALLOWED_ORIGINS: "https://a.com,https://b.com",
  API_KEY: "KEY123",
  SNAPCHAT_API_URL: "https://snapchat.api",
  SNAPCHAT_TOKEN: "secreta"
};

test("parsea origins correctamente", () => {
  expect(getAllowedOrigins(mockEnv)).toEqual(["https://a.com", "https://b.com"]);
});

test("devuelve api key", () => {
  expect(getApiKey(mockEnv)).toBe("KEY123");
});

test("devuelve url api", () => {
  expect(getSnapchatApiUrl(mockEnv)).toBe("https://snapchat.api");
});

test("devuelve token secreto", () => {
  expect(getSnapchatToken(mockEnv)).toBe("secreta");
});