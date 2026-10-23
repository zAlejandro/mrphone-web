import { useSite } from "../../context/SiteContext.jsx";

export default function TrustTicker() {
  const site = useSite();
  return (
    site.showTicker !== false &&
    site.trust.length > 0 && (
      <div className="ticker" aria-hidden="true">
        <div>
          {[0, 1, 2, 3].map((k) => (
            <span key={k}>{site.trust.map((t) => t.title).join(" ✦ ")} ✦</span>
          ))}
        </div>
      </div>
    )
  );
}
