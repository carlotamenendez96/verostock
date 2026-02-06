# Arquitectura propuesta: verostock-web

## 1. Estado actual (resumen)

### Estructura actual

```
verostock-web/
├── App.tsx                 # Router + layout blog duplicado por ruta
├── index.tsx
├── types.ts                # Tipos en raíz
├── mockData.ts             # Datos en raíz
├── metadata.json
├── components/             # Mezcla landing + blog
│   ├── Navbar.tsx, Hero.tsx, Problem.tsx, ...
│   └── blog/
│       ├── ArticleCard.tsx, Navbar.tsx, Footer.tsx, NewsletterCard.tsx
├── pages/
│   ├── LandingPage.tsx
│   └── blog/
│       ├── Home.tsx
│       └── ArticleDetail.tsx
└── vite.config.ts          # Alias @ → raíz
```

### Problemas detectados

| Problema | Impacto |
|----------|---------|
| **Tipos y datos en raíz** | Difícil localizar por dominio; `types.ts` crece sin criterio. |
| **Components mezclados** | Landing y blog comparten carpeta; no queda claro qué pertenece a cada feature. |
| **Layout duplicado en App** | El layout del blog (Navbar + contenido + Footer) se repite en cada ruta. |
| **Sin capa de datos** | Las páginas importan `mockData` directamente; cambiar a API obliga a tocar varias páginas. |
| **Categorías duplicadas** | La lista de categorías está en `types` y vuelve a definirse en `Home.tsx`. |
| **Imports relativos largos** | `../../mockData`, `../../types`; el alias `@` existe pero no se usa de forma consistente. |
| **Servicios futuros** | Comentarios a Gemini/service en `ArticleDetail` sin un sitio claro donde vivir. |

---

## 2. Arquitectura propuesta: por features + shared

Objetivos: **separación por dominio**, **escalabilidad** y **sustitución fácil de mock por API**.

### 2.1 Árbol de carpetas recomendado

```
src/
├── app/
│   ├── App.tsx              # Router y providers
│   ├── routes.tsx            # Definición de rutas (opcional)
│   └── index.tsx             # Entry (o mantener index.tsx en raíz)
│
├── features/
│   ├── landing/
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Problem.tsx
│   │   │   ├── Solution.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── Pioneer.tsx
│   │   │   ├── About.tsx
│   │   │   ├── TechSpecs.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── Footer.tsx
│   │   └── pages/
│   │       └── LandingPage.tsx
│   │
│   └── blog/
│       ├── components/
│       │   ├── ArticleCard.tsx
│       │   ├── NewsletterCard.tsx
│       │   ├── Navbar.tsx
│       │   └── Footer.tsx
│       ├── pages/
│       │   ├── BlogHome.tsx
│       │   └── ArticleDetail.tsx
│       ├── data/
│       │   ├── mockArticles.ts    # Datos mock
│       │   └── articles.ts        # getArticles(), getArticleById(), getCategories()
│       ├── types.ts               # Article, Category (o re-exportar desde shared)
│       └── layouts/
│           └── BlogLayout.tsx     # Navbar + outlet + Footer
│
├── shared/
│   ├── types/
│   │   └── index.ts               # Tipos globales (si los hay)
│   ├── constants/
│   │   └── index.ts               # Constantes globales
│   ├── layouts/
│   │   └── PageLayout.tsx         # Opcional: layout base común
│   └── utils/
│       └── index.ts               # Helpers reutilizables
│
└── lib/                           # Servicios externos (API, Gemini, etc.)
    └── gemini.ts                  # Cuando implementes Gemini
```

La **raíz del proyecto** puede quedarse con `index.html`, `vite.config.ts`, `tsconfig.json`, `package.json` y `documentation/`. El código de la app vive bajo `src/`.

### 2.2 Aliases de Vite/TypeScript

En `vite.config.ts` y `tsconfig.json`:

```ts
// Ejemplo vite
resolve: {
  alias: {
    '@': path.resolve(__dirname, 'src'),
    '@app': path.resolve(__dirname, 'src/app'),
    '@features': path.resolve(__dirname, 'src/features'),
    '@shared': path.resolve(__dirname, 'src/shared'),
    '@lib': path.resolve(__dirname, 'src/lib'),
  },
}
```

Imports resultantes:

- `@features/blog/data/articles` → datos del blog.
- `@features/blog/types` → tipos del blog.
- `@features/landing/pages/LandingPage` → página landing.
- `@shared/types` → tipos compartidos.

### 2.3 Capa de datos del blog

En lugar de que las páginas importen el array de mock directamente:

**`features/blog/data/articles.ts`**

```ts
import { Article } from '../types';
import { ARTICLES } from './mockArticles';

export function getArticles(): Article[] {
  return ARTICLES;
}

export function getArticleById(id: string): Article | undefined {
  return ARTICLES.find((a) => a.id === id);
}

export function getCategories(): string[] {
  return ['Todos los Insights', 'Control y verdad operativa', ...];
}
```

Más adelante puedes sustituir el cuerpo por llamadas `fetch()` o un cliente API sin cambiar las páginas.

### 2.4 Layout del blog

**`features/blog/layouts/BlogLayout.tsx`**

```tsx
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export function BlogLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
```

En **`App.tsx`** una sola ruta padre:

```tsx
<Route path="/blog" element={<BlogLayout />}>
  <Route index element={<BlogHome />} />
  <Route path="article/:id" element={<ArticleDetail />} />
</Route>
```

Así evitas repetir Navbar + Footer en cada ruta.

### 2.5 Categorías: una sola fuente de verdad

- Definir la lista de categorías en **`features/blog/data/articles.ts`** (o en `constants`) y exportar `getCategories()`.
- El tipo `Category` puede ser `string` o un union type generado a partir de esa lista.
- En `BlogHome` solo usar `getCategories()` y no volver a escribir el array.

### 2.6 Servicios externos (Gemini, API)

- Crear **`src/lib/gemini.ts`** (o `src/features/blog/services/summary.ts`) para la lógica de “resumen con IA”.
- `ArticleDetail` solo llama a algo del estilo `summarizeArticle(title, content)`; la implementación (mock o Gemini) vive en `lib` o en el feature.

---

## 3. Resumen de beneficios

| Aspecto | Antes | Después |
|---------|--------|---------|
| **Organización** | Todo mezclado en `components/` y raíz | Features claros: `landing`, `blog` |
| **Datos** | Páginas acopladas a `mockData` | Capa `data/articles` intercambiable por API |
| **Layout blog** | Duplicado en cada ruta | `BlogLayout` + rutas anidadas |
| **Categorías** | Duplicadas en tipo y en página | Una sola fuente en `data` o `constants` |
| **Imports** | `../../mockData` | `@features/blog/data/articles` |
| **Nuevas features** | Dónde poner cosas poco claro | Nueva carpeta bajo `features/` |
| **Tests** | Misma carpeta del elemento (según tus reglas) | Tests junto a cada feature en su carpeta |

---

## 4. Pasos sugeridos para la migración

1. **Crear `src/`** y mover `App.tsx` → `src/app/App.tsx`, `index.tsx` → `src/app/index.tsx` (o mantener entry en raíz apuntando a `src/app/index.tsx`).
2. **Configurar aliases** `@`, `@app`, `@features`, `@shared`, `@lib` en Vite y en `tsconfig.json`.
3. **Feature landing**: crear `src/features/landing/`, mover componentes y `LandingPage`, actualizar imports con aliases.
4. **Feature blog**: crear `src/features/blog/`, mover componentes y páginas; crear `data/mockArticles.ts` y `data/articles.ts`; extraer `BlogLayout` y usar rutas anidadas en `App`.
5. **Shared**: crear `src/shared/`, mover `types` globales (si los hay) y constantes.
6. **Limpiar raíz**: eliminar `types.ts` y `mockData.ts` de la raíz una vez migrados.
7. **Ajustar entry**: en `index.html` el script debe apuntar al nuevo entry (por ejemplo `src/app/index.tsx`).

Si quieres, el siguiente paso puede ser aplicar esta estructura en el repo (mover archivos y actualizar imports) siguiendo estos pasos.
