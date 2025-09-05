export function unitPriceFormatStr(
  unitPrice: number,
  unitsNumber: number,
): string {
  return `${unitPrice.toFixed(2)} x ${unitsNumber}`;
}

export function priceFormatStr(unitPrice: number): string {
  return `$${unitPrice.toFixed(2)}`;
}

export function totalPriceFormatStr(totalPrice: number): string {
  return `Total: $${totalPrice.toFixed(2)}`;
}
