import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext.jsx";
import { wa } from "../utils/whatsapp.js";
import Image from "../components/common/Image.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
// import Reviews from "../components/reviews/Reviews.jsx";

export default function HomePage({ categories, products, reviews }) {
  const site = useSite();
  return (
    <div className="home-page">
      <section className="hero">
        <div className="wrap hero-in">
          <div>
            <h1>{site.heroTitle || site.slogan}</h1>
            <p>{site.heroSubtitle || site.description}</p>
            <div className="row">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                href={wa("Hola, quiero ver los productos disponibles")}
              >
                Escríbenos por WhatsApp
              </a>
              {site.socials?.instagram && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn ghost"
                  href={site.socials.instagram}
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
          <Image
            className="hero-img"
            src={site.heroImage || "hero.jpg"}
            alt={site.name}
          />
        </div>
        {site.trust.length > 0 && (
          <div className="wrap">
            <div className="trust">
              {site.trust.map(({ icon, title, text }) => (
                <div key={title}>
                  <span>{icon}</span>
                  <div>
                    <b>{title}</b>
                    <small>{text}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
      {/* Pendiente de integrar las reseñas de Google. Para reactivar, descomentar también el import.
      {site.showReviews !== false && <Reviews items={reviews} />}
      */}
      <section className="sec">
        <div className="wrap">
          <h2>Conoce nuestros productos</h2>
          <div className="grid c3">
            {categories.map((c) => (
              <Link
                key={c.slug}
                className="catcard"
                to={`/productos?cat=${c.slug}`}
              >
                <b className="catcard-name">{c.name}</b>
                {c.image ? (
                  <Image src={c.image} alt="" />
                ) : (
                  <span className="cat-fallback" aria-hidden="true">
                    {c.name[0]}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <div className="between">
            <h2>Los más buscados</h2>
            <Link className="btn ghost sm" to="/productos">
              Ver todos los productos
            </Link>
          </div>
          <div className="grid">
            {products.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      {site.showBanner !== false && site.bannerTitle && (
        <section className="sec">
          <div className="wrap">
            <div className="banner">
              <div>
                <h2>{site.bannerTitle}</h2>
                <p>{site.bannerText}</p>
              </div>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                href={wa(`Hola, quiero cotizar: ${site.bannerTitle}`)}
              >
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
