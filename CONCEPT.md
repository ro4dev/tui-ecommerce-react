# E-commerce TUI — React

## ¿De qué se trata?

Una tienda online con estética **TUI (Terminal User Interface)** para componentes electrónicos y hardware de desarrollo (ESP32, Raspberry Pi, sensores, kits IoT). Implementada en React siguiendo el sistema de diseño de `DESIGN.md`: tipografía monospace, ASCII markers, sin imágenes, sin sombras.

## Stack

- **React 18** con componentes funcionales y hooks
- **Vite 5** como bundler
- **`tui-components-react`** — librería TUI desde `github:ro4dev/tui-components-react-library`
- **React Router** para navegación (catálogo, carrito, checkout)
- **React Context** para estado global (carrito, filtros)
- Tipografía monospace Berkeley Mono, canvas crema, `4px` radius

## Componentes (desde tui-components-react)

| Categoría | Componentes |
|-----------|-------------|
| Layout | `SidebarNav`, `HorizontalDivider` |
| Navegación | `Breadcrumb`, `Pagination` |
| Datos | `Table`, `CardStats`, `StatusBadge`, `CounterBadge` |
| Búsqueda | `SearchInput` |
| Filtros | `Tabs` (strip / pills) |
| Feedback | `Alert`, `ToastContainer`, `ProgressBar`, `EmptyState` |
| Contenedores | `Panel`, `Dialog` |

## Flujo de datos

```
Productos (JSON / API)
  → React Context
    → Componentes tui-components-react
      → React Router (catálogo → carrito → checkout)
```

## Ideal para

Tiendas nicho de hardware, catálogos técnicos, marketplaces dev-friendly.
