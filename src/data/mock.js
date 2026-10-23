// Imágenes: public/img/{id}.jpg (o URL completa). price:null = "Consultar precio". from:true = "Desde".
const P = (
  id,
  name,
  category,
  price,
  spec,
  from,
  status = "available",
  salePrice = null,
) => ({
  id,
  name,
  category,
  price,
  spec,
  from: !!from,
  image: `${id}.jpg`,
  status,
  onSale: salePrice != null,
  salePrice,
}); // status: available | soon | out
export const categories = [
  { slug: "iphone", name: "iPhone" },
  { slug: "celulares", name: "Otros celulares" },
  { slug: "accesorios", name: "Accesorios" },
];
export const products = [
  P("iphone-11", "iPhone 11", "iphone", 15500, '6.1" · 64/128 GB', 1),
  P("iphone-12", "iPhone 12", "iphone", 14500, '6.1" · 128 GB', 1, "out"),
  P("iphone-12-pro", "iPhone 12 Pro", "iphone", 17500, '6.1" · 128/256 GB', 1),
  P(
    "iphone-13",
    "iPhone 13",
    "iphone",
    18500,
    '6.1" · 128 GB',
    0,
    "available",
    17500,
  ), // oferta de ejemplo,
  P("iphone-13-pro-max", "iPhone 13 Pro Max", "iphone", 30000, '6.7" · 128 GB'),
  P("iphone-14", "iPhone 14", "iphone", 25000, '6.1" · 128 GB', 1),
  P("iphone-14-plus", "iPhone 14 Plus", "iphone", 25500, '6.7" · 128 GB'),
  P(
    "iphone-15",
    "iPhone 15",
    "iphone",
    25000,
    '6.1" · 128 GB · Con caja, clase A',
  ),
  P("iphone-15-plus", "iPhone 15 Plus", "iphone", null, '6.7" · 128 GB'), // el flyer muestra 30,500 y 31,000: confirmar
  P("iphone-15-pro-max", "iPhone 15 Pro Max", "iphone", 42000, '6.7" · 256 GB'),
  P(
    "iphone-17-pro-max",
    "iPhone 17 Pro Max",
    "iphone",
    73000,
    '6.9" · 256/512 GB',
  ),
  P(
    "iphone-18-pro-max",
    "iPhone 18 Pro Max",
    "iphone",
    108000,
    '6.9" · 256/512 GB',
    1,
    "soon",
  ),
  P(
    "m-horse-m17-pro-max",
    "M-Horse M17 Pro Max 4G",
    "celulares",
    null,
    '6.6" · 128 GB + 8 GB RAM · 5000 mAh',
  ),
  P("fundas", "Fundas y protectores", "accesorios", null, "Varios modelos"),
  P("cargadores", "Cargadores y cables", "accesorios", null, "Varios modelos"),
  P("audifonos", "Audífonos inalámbricos", "accesorios", null, "Varias marcas"),
];
const R = (n) => ({
  name: "Cliente " + n,
  stars: 5,
  sample: true,
  text: "Reseña de ejemplo. Se reemplaza con reseñas reales de Google.",
});
export const reviews = [R(1), R(2), R(3)];
