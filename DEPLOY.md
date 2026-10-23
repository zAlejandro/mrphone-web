# Publicación en Render

## Rutas de React

El proyecto usa BrowserRouter con URLs sin `#`:

- `/productos`
- `/contacto`
- `/producto/ID`

Para que las visitas directas y las recargas funcionen, mantener esta regla
en el Static Site de Render, en **Redirects/Rewrites**:

| Source | Destination | Action |
| --- | --- | --- |
| `/*` | `/index.html` | `Rewrite` |

Después de publicar, comprobar la recarga en esas rutas y que se conservan
los filtros de categoría. Usar Rewrite, no Redirect.

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
