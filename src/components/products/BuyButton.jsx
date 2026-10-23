import { wa } from "../../utils/whatsapp.js";

const BuyButton = ({ product, big }) => {
  const status = product.status || "available";
  const className = "btn wa" + (big ? " big" : "");
  return status === "out" ? (
    <span className={className + " off"} aria-disabled="true">
      Agotado
    </span>
  ) : (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      href={wa(
        status === "soon"
          ? `Hola, quiero que me avisen cuando llegue el ${product.name}.`
          : `Hola, me interesa el ${product.name}. ¿Está disponible?`,
      )}
    >
      {status === "soon" ? "Avisarme cuando llegue" : "Comprar por WhatsApp"}
    </a>
  );
};
export default BuyButton;
