export function formatarParaReal (valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
