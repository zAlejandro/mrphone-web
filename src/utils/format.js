export const money = (n, from) =>
  n == null
    ? "Consultar precio"
    : `${from ? "Desde " : ""}RD$${n.toLocaleString("en-US")}`;
