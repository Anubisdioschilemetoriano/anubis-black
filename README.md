# ANUBIS BLACK MARKETING / CORPORACIÓN

Sitio web privado oficial.

## Estructura

```
anubis-black/
├── index.html              # Landing GOD MODE
├── about.html              # Corporación / Doctrina
├── services.html           # Divisiones operativas
├── contact.html            # Canal privado
├── assets/
│   ├── css/main.css
│   ├── js/main.js
│   └── img/
│       ├── logo.png        # Logo ABM (Anubis Black Marketing)
│       └── hero-godmode.jpg # Imagen principal GOD MODE
└── README.md
```

## Despliegue

1. Sube toda la carpeta a cualquier hosting estático (Nginx, Caddy, Cloudflare Pages, Vercel, Netlify, VPS propio).
2. Para máxima privacidad: sirve detrás de Cloudflare Zero Trust, Tailscale, o acceso por VPN.
3. No requiere backend. El formulario de contacto es frontend-only (puedes conectarlo a Formspree, un webhook o tu propio endpoint después).

## Personalización rápida

- Colores principales en `:root` dentro de `assets/css/main.css`
- Textos de doctrina y divisiones en las páginas HTML correspondientes
- Imágenes: reemplaza `logo.png` y `hero-godmode.jpg` manteniendo los mismos nombres

## Versión

v1.0.7 | STORM PROTOCOL
