export function soma(a: number, b: number): number {
  return a + b;
}

export function subtracao(a: number, b: number): number {
  return a - b;
}

export function multiplicacao(a: number, b: number): number {
  return a * b;
}

export function divisao(a: number, b: number): number {
  if ((b === 0)) {
    throw new Error();
  } else {
    return a / b;
  }
}

export function calculoNotaMeta(av1: number, av2: number, av3: number): String {
  let media1 = (av1 + av2) / 2;
  let result = (media1 + av3) / 2;
  if (result >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}
