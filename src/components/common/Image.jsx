import { assetUrl } from "../../utils/assets.js";

const ph = (t) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="#e8eefc"/><text x="50%" y="50%" text-anchor="middle" font-family="sans-serif" font-size="30" fill="#6b7fb5">${t}</text></svg>`)}`;
// key={src}: un <img> nuevo por cada src; el respaldo se aplica una sola vez (evita bucles de error)
const Image = ({ src, alt = "", ...p }) => (
  <img
    key={src}
    src={assetUrl(src)}
    alt={alt}
    loading="lazy"
    onError={(e) => {
      const i = e.currentTarget;
      if (i.dataset.fb) return;
      i.dataset.fb = "1";
      i.src = ph(alt);
    }}
    {...p}
  />
);
export default Image;
