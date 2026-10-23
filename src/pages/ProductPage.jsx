import { Link, useParams } from "react-router-dom";
import Image from "../components/common/Image.jsx";
import ProductCard from "../components/products/ProductCard.jsx";
import ProductPrice from "../components/products/ProductPrice.jsx";
import BuyButton from "../components/products/BuyButton.jsx";

export default function ProductPage({ categories, products }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  if (!products.length) return null;
  if (!product)
    return (
      <div className="wrap sec">
        <h2>Producto no encontrado</h2>
        <Link to="/productos">Ver productos</Link>
      </div>
    );
  const relatedProducts = products
    .filter(
      (item) => item.category === product.category && item.id !== product.id,
    )
    .slice(0, 4);
  const category = categories.find((item) => item.slug === product.category);
  return (
    <div className="wrap sec">
      <div className="crumbs">
        <Link to="/">Inicio</Link> /{" "}
        <Link to={`/productos?cat=${product.category}`}>{category?.name}</Link>{" "}
        / {product.name}
      </div>
      <div className="pd">
        <Image src={product.image} alt={product.name} />
        <div>
          <h1>{product.name}</h1>
          <ProductPrice product={product} big />
          <p>{product.spec}</p>
          <p className="mut">
            Garantía incluida. Aceptamos tu iPhone como parte de pago. Envíos a
            todo el país.
          </p>
          <BuyButton product={product} big />
        </div>
      </div>
      {relatedProducts.length > 0 && (
        <>
          <h2>También te puede interesar</h2>
          <div className="grid">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
