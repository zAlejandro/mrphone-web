import { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { wa } from "../../utils/whatsapp.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import TrustTicker from "./TrustTicker.jsx";
import ErrorBoundary from "../common/ErrorBoundary.jsx";

export default function Layout({ categories, children }) {
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <TrustTicker />
      <Header categories={categories} />
      <main>
        <ErrorBoundary at={pathname + searchParams.toString()}>
          {children}
        </ErrorBoundary>
      </main>
      <Footer />
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="fab"
        href={wa("Hola, quiero información")}
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
}
