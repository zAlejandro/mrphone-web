export default function Reviews({ items }) {
  return (
    <section className="sec">
      <div className="wrap">
        <h2 className="center">Lo que dicen nuestros clientes</h2>
        {items.some((r) => r.sample) && (
          <p className="center mut">
            Reseñas de ejemplo: se reemplazan con las reales de Google.
          </p>
        )}
        <div className="grid">
          {items.map((r, i) => (
            <div className="rev" key={i}>
              <b>{r.name}</b>
              <span className="stars">{"★".repeat(r.stars)}</span>
              <p>{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
