//atividade 2
export function verificacaoDesconto(valorCompra: number): number {
  if (valorCompra < 100) {
    valorCompra;
  } else if (valorCompra >= 100 && valorCompra < 200) {
    valorCompra = valorCompra - valorCompra * (10 / 100);
  } else if (valorCompra >= 200) {
    valorCompra = valorCompra - valorCompra * (20 / 100);
  }
  return +valorCompra.toFixed(2);
}
