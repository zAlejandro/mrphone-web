import { site } from "../config.js";

let currentSite = site; // ajustes vigentes (los fija App) para que wa() use el WhatsApp del negocio
export const setSite = (siteSettings) => {
  currentSite = siteSettings;
};
export const wa = (message) =>
  `https://wa.me/${currentSite.whatsapp}?text=${encodeURIComponent(message)}`;
