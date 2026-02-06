# VeroStock — Smart Inventory Control

Landing y blog corporativo para **VeroStock**, producto de control de inventario inteligente. Web construida con React, Vite y TypeScript, con soporte multiidioma (ES/EN) y arquitectura por features.

## Stack

- **React** 19 + **TypeScript**
- **Vite** 6
- **React Router** 7
- **i18next** + **react-i18next** (español e inglés)
- **Tailwind CSS** (CDN con tema claro/oscuro y tokens propios)

## Estructura del proyecto

Arquitectura por **features** y **shared** (detalle en [`documentation/ARCHITECTURE.md`](documentation/ARCHITECTURE.md)):

```
src/
├── app/              # Router y providers
├── features/
│   ├── landing/      # Página principal (Hero, Problem, Solution, Benefits, Pioneer, About, TechSpecs, CTA)
│   └── blog/         # Blog (home, detalle de artículo, layout, datos mock)
├── shared/           # Componentes y tipos compartidos (LanguageSelector, constants, types)
├── lang/             # i18n (es/en): common, landing, blog
└── lib/              # Servicios externos (Gemini placeholder)
```

### Aliases

Imports con alias configurados en Vite y TypeScript:

- `@app`, `@features`, `@shared`, `@lib`, `@lang`, `@`

## Requisitos

- **Node.js** (recomendado LTS)

## Cómo ejecutar

1. **Instalar dependencias**

   ```bash
   npm install
   ```

2. **Variables de entorno** (opcional, para futura integración con Gemini)

   Crea `.env.local` en la raíz y define:

   ```env
   GEMINI_API_KEY=tu_api_key
   ```

3. **Modo desarrollo**

   ```bash
   npm run dev
   ```

   La app se sirve en **http://localhost:3000** (configurable en `vite.config.ts`).

4. **Build y vista previa**

   ```bash
   npm run build
   npm run preview
   ```

## Rutas

| Ruta              | Descripción              |
|-------------------|--------------------------|
| `/`               | Landing (VeroStock)      |
| `/blog`           | Inicio del blog          |
| `/blog/article/:id` | Detalle de artículo    |

## Idiomas

- **Español** (por defecto) y **Inglés**.
- Detección por `localStorage` y navegador; clave: `verostock-locale`.
- Namespaces: `common`, `landing`, `blog`.

## Tests

El proyecto usa **Vitest**. Los tests van en el mismo directorio del elemento que se testea (no en `__tests__`).

## Documentación

- [Arquitectura y convenciones](documentation/ARCHITECTURE.md)
