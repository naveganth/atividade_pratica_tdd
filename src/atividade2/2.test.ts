import { test, expect, Mock } from "vitest";
import { verificacaoDesconto } from "./2";

//atividade 2
test("Sistema de descontos", () => {
  expect(verificacaoDesconto(50)).toBe(50);
  expect(verificacaoDesconto(100)).toBe(90);
  expect(verificacaoDesconto(150)).toBe(135);
  expect(verificacaoDesconto(200)).toBe(160);
  expect(verificacaoDesconto(250)).toBe(200);
});
