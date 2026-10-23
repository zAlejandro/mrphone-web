export const isOnSale = (product) =>
  product.onSale &&
  product.price != null &&
  product.salePrice != null &&
  product.salePrice < product.price;
export const effectivePrice = (product) =>
  isOnSale(product) ? product.salePrice : product.price;
