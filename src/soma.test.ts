import { test, expect } from 'vitest';
import {
  soma,
  subtracao,
  multiplicacao,
  divisao,
  calculoNotaMeta,
} from './conta';

test('soma', () => {
  expect(soma(3, 5)).toBe(8);
});

//atividade
test('substracao', () => {
  expect(subtracao(10, 4)).toBe(6);
});

test('multiplicacao', () => {
  expect(multiplicacao(4, 3)).toBe(12);
});

test('divisao', () => {
  expect(divisao(10, 2)).toBe(5);
});

// test('Error em divisão', () => {
//   expect(divisao(0, 0)).toBe();
// });

test('Retornar aprovado em caso de média >= 7', () => {
  expect(calculoNotaMeta(7, 7, 7)).toBe('Aprovado');
});

test('Retornar reprovado em caso de média < 7', () => {
  expect(calculoNotaMeta(5, 5, 5)).toBe('Reprovado');
});
