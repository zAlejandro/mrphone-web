// Compatibility exports. Import directly from each module in new code.
export { api, initialSite } from "./services/api.js";
export { assetUrl } from "./utils/assets.js";
export { money } from "./utils/format.js";
export { wa, setSite } from "./utils/whatsapp.js";
export { useApi } from "./hooks/useApi.js";
export { useSite, SiteCtx } from "./context/SiteContext.jsx";
