export default function ProductFilters({ categories, filters }) {
  const {
    cat,
    setSearchParams,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    availableOnly,
    setAvailableOnly,
    onSaleOnly,
    setOnSaleOnly,
    resetFilters,
  } = filters;
  return (
    <aside className="side" aria-label="Filtros de productos">
      <h4>Categoría</h4>
      {[{ slug: "", name: "Todas" }, ...categories].map((c) => (
        <label key={c.slug}>
          <input
            type="radio"
            checked={cat === c.slug}
            onChange={() => setSearchParams(c.slug ? { cat: c.slug } : {})}
          />{" "}
          {c.name}
        </label>
      ))}
      <h4>Precio (RD$)</h4>
      <div className="row">
        <input
          placeholder="Mín"
          inputMode="numeric"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          placeholder="Máx"
          inputMode="numeric"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
      </div>
      <label>
        <input
          type="checkbox"
          checked={availableOnly}
          onChange={(e) => setAvailableOnly(e.target.checked)}
        />{" "}
        Solo disponibles
      </label>
      <label>
        <input
          type="checkbox"
          checked={onSaleOnly}
          onChange={(e) => setOnSaleOnly(e.target.checked)}
        />{" "}
        Solo ofertas
      </label>
      <button className="btn ghost sm" onClick={resetFilters}>
        Limpiar filtros
      </button>
    </aside>
  );
}
