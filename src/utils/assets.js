const baseUrl = (import.meta.env.VITE_ASSETS_URL || "/img").replace(/\/$/, "");
export const assetUrl = (path) =>
  !path ? "" : /^https?:/.test(path) ? path : `${baseUrl}/${path}`;
