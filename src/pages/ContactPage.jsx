import { useSite } from "../context/SiteContext.jsx";
import { wa } from "../utils/whatsapp.js";
// import Reviews from "../components/reviews/Reviews.jsx";

const ContactPage = ({ reviews }) => {
  const site = useSite();
  const mapQuery = (site.mapQuery || site.address || "").trim();
  const mapSrc =
    site.mapEmbedUrl ||
    (mapQuery
      ? `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`
      : "");
  return (
    <>
      <section className="band">
        <h1>Contáctanos</h1>
      </section>
      <div className="wrap sec">
        <div className="grid c3">
          <div className="rev">
            <b>Dirección</b>
            <p>{site.address}</p>
          </div>
          <div className="rev">
            <b>Horario</b>
            <p className="pre">{site.hours}</p>
          </div>
          <div className="rev">
            <b>WhatsApp</b>
            <p>{site.phone}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn wa"
              href={wa("Hola, quisiera información")}
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
        {mapSrc && (
          <iframe
            key={mapSrc}
            className="map"
            title={`Ubicación de ${site.name || "la tienda"}`}
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            src={mapSrc}
          />
        )}
        {mapQuery && (
          <p className="map-link">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir ubicación en Google Maps ↗
            </a>
          </p>
        )}
      </div>
      {/* Pendiente de integrar las reseñas de Google. Para reactivar, descomentar también el import.
      {site.showReviews !== false && <Reviews items={reviews} />}
      */}
    </>
  );
};
export default ContactPage;
