# Organización del código

- `App.jsx`: carga los datos y conecta las rutas con las páginas.
- `pages/`: inicio, catálogo, detalle de producto y contacto.
- `components/layout/`: estructura compartida, cabecera, pie y cinta de confianza.
- `components/products/`: tarjeta, precio, botón de compra y controles de filtros.
- `components/common/`: imagen con respaldo y límite de errores.
- `components/reviews/`: reseñas compartidas entre inicio y contacto.
- `hooks/`: carga de datos y estado, filtrado y orden del catálogo.
- `context/`: acceso a los ajustes del negocio mediante `useSite`.
- `services/api.js`: elección entre datos mock y API y peticiones al servidor.
- `utils/`: imágenes, precios, ofertas y enlaces de WhatsApp.
- `config.js`: ajustes del sitio y valores iniciales.
- `data/mock.js`: catálogo, categorías y reseñas de ejemplo.

Para cambiar una pantalla, empieza por su archivo en `pages/`. Si el cambio
afecta a las tarjetas, precios o compra en varias pantallas, busca el componente
en `components/products/`. La lógica de los filtros está en
`hooks/useProductFilters.js`; sus controles están en `ProductFilters.jsx`.

`lib.js` conserva las exportaciones anteriores por compatibilidad. Los módulos
nuevos importan directamente desde la carpeta correspondiente.

Los estilos compartidos siguen en `styles.css` y `flex.css`.

Ejecuta `npm run dev` para desarrollar y `npm run build` para compilar.
