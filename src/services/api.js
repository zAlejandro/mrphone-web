import { products, categories, reviews } from "../data/mock.js";
import { site, blank } from "../config.js";

const env = import.meta.env;
const useMockData = (env.VITE_DATA_SOURCE || "mock") === "mock";
const tenantSlug = env.VITE_TENANT_SLUG || "mrphone";
const getJson = async (path) => {
  const response = await fetch(env.VITE_API_URL + path);
  if (!response.ok) throw new Error(response.status);
  return response.json();
};
// Capa de datos: para Supabase reemplaza el "getJson" por supabase.from('products').select('*') (RLS filtra por negocio).
export const api = {
  categories: async () =>
    useMockData ? categories : getJson(`/categories?tenant=${tenantSlug}`),
  products: async () =>
    useMockData ? products : getJson(`/products?tenant=${tenantSlug}`),
  reviews: async () =>
    useMockData ? reviews : getJson(`/reviews?tenant=${tenantSlug}`),
  site: async () => {
    if (useMockData) return site;
    const response = await getJson(`/site?tenant=${tenantSlug}`);
    return {
      ...blank,
      ...response,
      socials: response.socials || {},
      trust: response.trust || [],
    };
  },
};

export const initialSite = useMockData ? site : blank;
