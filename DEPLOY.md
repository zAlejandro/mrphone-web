# Publicación en Render

## Rutas de React

El proyecto usa HashRouter para que la recarga funcione sin reglas especiales
en Render. Después de publicar, abrir la portada y navegar con el menú.
Las direcciones tendrán este formato:

- `/#/productos`
- `/#/contacto`
- `/#/producto/ID`

La parte que sigue a `#` la procesa React; el servidor recibe solamente `/`.
Comprobar que al recargar se conservan la pantalla y los filtros de categoría.

Las direcciones antiguas sin `#`, como `/productos`, siguen necesitando
configuración del servidor: el cambio de router no puede interceptar un 404
antes de que cargue la web. Para que Render entregue también esas rutas,
añadir en el Static Site, en **Redirects/Rewrites**, esta regla:

| Source | Destination | Action |
| --- | --- | --- |
| `/*` | `/index.html` | `Rewrite` |

Esta regla es opcional con las nuevas URLs con `#`. Para volver a usar las
URLs sin `#`, primero aplicar la regla y después restaurar BrowserRouter.

`render.yaml` conserva la regla para despliegues administrados mediante
Blueprints. Subir ese archivo no configura por sí solo un sitio creado
manualmente. Mantener las variables VITE_* del servicio; se usan al compilar.

## Mapa

El mapa espera a tener `mapQuery` o `address` y se carga sin depender del scroll.
También incluye un enlace para abrir la ubicación directamente en Google Maps.

Se puede configurar `mapEmbedUrl` en los ajustes del sitio devueltos por la API
(o en `src/config.js` para modo mock) con el `src` del iframe obtenido en
Google Maps → Compartir → Insertar un mapa. Copiar solo la URL, no el HTML ni
el enlace corto de Compartir. Esta opción tiene prioridad sobre `mapQuery`.

Si el iframe sigue sin aparecer, comprobar errores de red del navegador y las
cabeceras CSP del servicio: deben permitir Google Maps en `frame-src`.

## iPhone

Las tarjetas y el detalle de producto no usan animaciones de opacidad ligadas
al scroll. Los estilos móviles se importan después de los estilos generales.
Tras publicar, comprobar en Safari que los productos permanecen visibles al
bajar, subir y volver desde otra página.
