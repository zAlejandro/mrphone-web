// Ajustes del sitio. En modo mock se usa "site" (datos de Mr. Phone); en modo api vienen de GET /public/site y "blank" es la base.
export const blank = {
  name: "",
  slogan: "",
  description: "",
  logo: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  hours: "",
  mapQuery: "",
  mapEmbedUrl: "",
  socials: {},
  primary: "",
  dark: "",
  heroTitle: "",
  heroSubtitle: "",
  heroImage: "",
  bannerTitle: "",
  bannerText: "",
  trust: [],
  showReviews: true,
  showBanner: true,
  showTicker: true,
};
export const site = {
  ...blank,
  name: "Mr. Phone",
  slogan: "Tu iPhone, más cerca",
  description:
    "iPhones y celulares con garantía, financiamiento y envíos a todo el país.",
  phone: "809-445-8442",
  whatsapp: "18094458442",
  address:
    "Ave. Martin Luther King Jr., Plaza Granada Oriental, 2do nivel, local 26, Invivienda, Santo Domingo Este",
  mapQuery: "Plaza Granada Oriental, Santo Domingo Este",
  hours: "Lunes a sábado, 9:00 a. m. a 6:00 p. m.\nDomingos cerrados",
  socials: { instagram: "https://www.instagram.com/mrphone_rd" },
  bannerTitle: "¿Tienes un iPhone viejo?",
  bannerText:
    "Lo recibimos como parte de pago por uno nuevo. Evaluación justa en menos de 5 minutos.",
  trust: [
    ["🛡️", "Garantía incluida", "Equipos originales con garantía"],
    ["💳", "Financiamiento", "Llévalo hoy con facilidades"],
    [
      "🔁",
      "Aceptamos tu iPhone",
      "Parte de pago, evaluado en menos de 5 minutos",
    ],
    ["🚚", "Envíos nacionales", "A todo el país"],
  ].map(([icon, title, text]) => ({ icon, title, text })),
};
