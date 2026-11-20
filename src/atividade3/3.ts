//atividade 3
export function calculoFrete(valorFrete: number): number {
  
  if (valorFrete < 100.00) {
    valorFrete = 20.00
  } else if (valorFrete === 100.00 || valorFrete < 200.00 ) {
    valorFrete = 10.00
  } else if (valorFrete >= 200.00) {
    valorFrete = 0.00
  }

  return valorFrete;
}
