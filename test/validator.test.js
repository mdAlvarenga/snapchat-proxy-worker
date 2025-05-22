import { test, expect } from 'vitest';
import { isOriginAllowed, isApiKeyValid } from "../src/validator";

test("permite origen válido", () => {
  const origins = ["https://tusitio.github.io", "https://otro.com"];
  expect(isOriginAllowed("https://tusitio.github.io", origins)).toBe(true);
});

test("rechaza origen inválido", () => {
  const origins = ["https://tusitio.github.io"];
  expect(isOriginAllowed("https://invalido.com", origins)).toBe(false);
});

test("valida API key correcta", () => {
  expect(isApiKeyValid("ABC123", "ABC123")).toBe(true);
});

test("rechaza API key incorrecta", () => {
  expect(isApiKeyValid("WRONG", "ABC123")).toBe(false);
});