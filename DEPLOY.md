# Publicación en Render

## Rutas de React

El proyecto usa BrowserRouter. En el Static Site existente, ir a
**Redirects/Rewrites** y añadir esta regla:

| Source | Destination | Action |
| --- | --- | --- |
| `/*` | `/index.html` | `Rewrite` |

Guardar la regla y probar la recarga en `/productos`, `/contacto` y una ruta
de detalle `/producto/...`. No usar Redirect: la URL debe conservarse.

`render.yaml` incluye la misma regla para despliegues administrados mediante
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
