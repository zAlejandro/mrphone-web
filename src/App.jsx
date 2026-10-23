import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { api, initialSite } from "./services/api.js";
import { useApi } from "./hooks/useApi.js";
import { SiteCtx } from "./context/SiteContext.jsx";
import { setSite } from "./utils/whatsapp.js";
import { assetUrl } from "./utils/assets.js";
import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

export default function App() {
  const categories = useApi(api.categories, []);
  const products = useApi(api.products, []);
  const reviews = useApi(api.reviews, []);
  const site = useApi(api.site, initialSite);

  setSite(site);

  useEffect(() => {
    let favicon = document.querySelector('link[rel="icon"]');
    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }
    favicon.href = assetUrl(site.logo || "logo.png");
  }, [site.logo]);

  useEffect(() => {
    const rootStyle = document.documentElement.style;
    if (site.primary) rootStyle.setProperty("--blue", site.primary);
    if (site.dark) rootStyle.setProperty("--navy", site.dark);
    if (site.name) {
      document.title = site.slogan
        ? `${site.name} | ${site.slogan}`
        : site.name;
    }
  }, [site]);

  return (
    <SiteCtx.Provider value={site}>
      <Layout categories={categories}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                categories={categories}
                products={products}
                reviews={reviews}
              />
            }
          />
          <Route
            path="/productos"
            element={
              <ProductsPage categories={categories} products={products} />
            }
          />
          <Route
            path="/producto/:id"
            element={
              <ProductPage categories={categories} products={products} />
            }
          />
          <Route path="/contacto" element={<ContactPage reviews={reviews} />} />
        </Routes>
      </Layout>
    </SiteCtx.Provider>
  );
}
