import { Link, NavLink, useLocation, useSearchParams } from "react-router-dom";
import { useSite } from "../../context/SiteContext.jsx";
import { wa } from "../../utils/whatsapp.js";
import Image from "../common/Image.jsx";

export default function Header({ categories }) {
  const site = useSite();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();
  return (
    <header>
      <div className="wrap top">
        <Link to="/" className="logo">
          <Image src={site.logo || "logo.png"} alt={site.name} />
        </Link>
        <nav className="nav">
          <NavLink end to="/">
            Inicio
          </NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/contacto">Contáctanos</NavLink>
        </nav>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="btn sm"
          href={wa("Hola, quiero información")}
        >
          WhatsApp
        </a>
      </div>
      <div className="cats">
        <div className="wrap">
          {categories.map((category) => (
            <Link
              key={category.slug}
              className={
                pathname === "/productos" &&
                searchParams.get("cat") === category.slug
                  ? "on"
                  : ""
              }
              to={`/productos?cat=${category.slug}`}
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
