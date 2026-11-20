import { test, expect, Mock } from "vitest";
import { calculoFrete } from "./3";

//atividade 3
test("Calculo de frete", () => {
  expect(calculoFrete(50)).toBe(50);
 
});
