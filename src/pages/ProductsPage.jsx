import ProductFilters from "../components/products/ProductFilters.jsx";
import useProductFilters from "../hooks/useProductFilters.js";
import ProductCard from "../components/products/ProductCard.jsx";

export default function ProductsPage({ categories, products }) {
  const filters = useProductFilters(products);
  const { cat, search, setSearch, sort, setSort, filteredProducts } = filters;
  return (
    <>
      <section className="band">
        <h1>{categories.find((c) => c.slug === cat)?.name || "Productos"}</h1>
      </section>
      <div className="wrap sec">
        <input
          className="search"
          placeholder="Buscar producto…"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="shop">
          <ProductFilters categories={categories} filters={filters} />
          <div>
            <div className="between">
              <small className="mut">
                Mostrando {filteredProducts.length} productos
              </small>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Orden predeterminado</option>
                <option value="asc">Precio: menor a mayor</option>
                <option value="desc">Precio: mayor a menor</option>
                <option value="name">Nombre</option>
              </select>
            </div>
            {filteredProducts.length ? (
              <div className="grid">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p className="mut">
                No hay productos con esos filtros. Prueba quitando alguno.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
