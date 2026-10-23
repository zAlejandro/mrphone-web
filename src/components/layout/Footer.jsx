import { useSite } from "../../context/SiteContext.jsx";
import { wa } from "../../utils/whatsapp.js";

export default function Footer() {
  const site = useSite();
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <b>{site.name}</b>
          <p>{site.slogan}</p>
        </div>
        <div>
          <p>{site.address}</p>
          <p className="pre">{site.hours}</p>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href={wa("Hola")}>
            WhatsApp {site.phone}
          </a>
          {Object.entries(site.socials || {})
            .filter(([, url]) => url)
            .map(([network, url]) => (
              <div key={network}>
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  {network[0].toUpperCase() + network.slice(1)}
                </a>
              </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
