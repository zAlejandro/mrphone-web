import { Link } from "react-router-dom";
import Image from "../common/Image.jsx";
import ProductPrice from "./ProductPrice.jsx";
import BuyButton from "./BuyButton.jsx";
import { isOnSale } from "../../utils/product.js";

const ProductCard = ({ product }) => {
  const status = product.status || "available";
  return (
    <article className={"card" + (status === "available" ? "" : " " + status)}>
      <Link to={`/producto/${product.id}`}>
        <Image src={product.image} alt={product.name} />
        {status !== "available" && (
          <em className="badge">
            {status === "out" ? "Agotado" : "Próximamente"}
          </em>
        )}
        {status === "available" && isOnSale(product) && (
          <em className="badge sale">
            Oferta -{Math.round((1 - product.salePrice / product.price) * 100)}%
          </em>
        )}
      </Link>
      <h3>{product.name}</h3>
      <small>{product.spec}</small>
      <ProductPrice product={product} />
      <BuyButton product={product} />
    </article>
  );
};
export default ProductCard;
