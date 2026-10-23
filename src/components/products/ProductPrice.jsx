import { money } from "../../utils/format.js";
import { isOnSale } from "../../utils/product.js";

const ProductPrice = ({ product, big }) => (
  <b className={"price" + (big ? " big" : "")}>
    {isOnSale(product) ? (
      <>
        <s className="was">{money(product.price)}</s>
        {money(product.salePrice, product.from)}
      </>
    ) : (
      money(product.price, product.from)
    )}
  </b>
);
export default ProductPrice;
