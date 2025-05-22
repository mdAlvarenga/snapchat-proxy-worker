import { test, expect } from 'vitest';
import { jsonResponse, errorResponse } from "../src/response";

test("genera jsonResponse con contenido y status", async () => {
  const res = jsonResponse("ok", 201, "https://origin.com");
  expect(res.status).toBe(201);
  expect(await res.text()).toBe("ok");
  expect(res.headers.get("Access-Control-Allow-Origin")).toBe("https://origin.com");
});

test("genera errorResponse con mensaje json y status", async () => {
  const res = errorResponse("denegado", 401);
  expect(res.status).toBe(401);
  expect(await res.json()).toEqual({ error: "denegado" });
});