import { test, expect, Mock } from "vitest";
import { calculoFrete } from "./3";

//atividade 3
test("Calculo de frete", () => {
  expect(calculoFrete(50)).toBe(20);
  expect(calculoFrete(99.99)).toBe(20);
  expect(calculoFrete(100)).toBe(10);
  expect(calculoFrete(199.99)).toBe(10);
  expect(calculoFrete(200)).toBe(0);
});
