import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { isOnSale, effectivePrice } from "../utils/product.js";

export default function useProductFilters(products) {
  const [searchParams, setSearchParams] = useSearchParams();
  const cat = searchParams.get("cat") || "";
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [availableOnly, setAvailableOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const hasPriceFilter = minPrice || maxPrice;
  let filteredProducts = products.filter(
    (product) =>
      (!cat || product.category === cat) &&
      (!availableOnly || (product.status || "available") === "available") &&
      (!onSaleOnly || isOnSale(product)) &&
      product.name.toLowerCase().includes(search.toLowerCase()) &&
      (!hasPriceFilter ||
        (effectivePrice(product) != null &&
          effectivePrice(product) >= (+minPrice || 0) &&
          effectivePrice(product) <= (+maxPrice || Infinity))),
  );
  if (sort)
    filteredProducts = [...filteredProducts].sort((a, b) =>
      sort === "name"
        ? a.name.localeCompare(b.name)
        : ((effectivePrice(a) ?? 1e12) - (effectivePrice(b) ?? 1e12)) *
          (sort === "asc" ? 1 : -1),
    );

  function resetFilters() {
    setSearchParams({});
    setSearch("");
    setMinPrice("");
    setMaxPrice("");
    setSort("");
    setAvailableOnly(false);
    setOnSaleOnly(false);
  }
  return {
    cat,
    setSearchParams,
    search,
    setSearch,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    sort,
    setSort,
    availableOnly,
    setAvailableOnly,
    onSaleOnly,
    setOnSaleOnly,
    filteredProducts,
    resetFilters,
  };
}
