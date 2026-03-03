# InvertProfit Academy — Correcciones de Flujo
**Fecha:** 2026-03-03

## Flujo Corregido
```
Login.html → test-nivel.html → dashboard.html → portadanivelesacademia.html → niveles-X.html → leccion.html
                                      ↕                    ↕
                                portadaniveles.html ←→ (vista mapa alternativa)
```

---

## Resumen de Cambios

### 🔴 CRÍTICO — curriculum.js
- **Gap eliminado**: Los niveles 35-45 no pertenecían a ningún mundo. Se renumeraron los mundos 4-7:
  - Mundo 4 Sincronía: `46-60` → `35-49` (15 niveles)
  - Mundo 5 Estrategia: `61-75` → `50-64` (15 niveles)
  - Mundo 6 Soberanía: `76-90` → `65-79` (15 niveles)
  - Mundo 7 Legado: `91-100` → `80-89` (10 niveles)
- **Total**: 89 niveles secuenciales sin gaps (1-89)

### 🔴 CRÍTICO — niveles-mundo4.html
- Tenía niveles 61-75 (duplicado de mundo5) → Ahora tiene niveles **35-49**
- Parámetro `world=5` → Corregido a `world=4`
- Contenido duplicado → Ahora tiene **títulos únicos** temática Sincronía (IA, bots, APIs, ML)

### 🔴 CRÍTICO — niveles-mundo5.html
- Niveles renumerados de 61-75 → **50-64** para coincidir con curriculum.js

### 🟡 niveles-mundo6.html
- Niveles renumerados de 76-90 → **65-79**

### 🟡 niveles-mundo7.html
- Niveles renumerados de 91-100 → **80-89**

### 🟢 dashboard.html
- Las 3 tarjetas (Básico/Intermedio/Avanzado) ahora navegan a `portadanivelesacademia.html` en vez de ir directo a las páginas de niveles
- El flujo ahora pasa obligatoriamente por el mapa de mundos

### 🟢 portadanivelesacademia.html
- Botón "Volver" cambiado de `index.html` → `dashboard.html`
- Nuevo botón "MAPA" (esquina superior derecha) → enlaza a `portadaniveles.html`

### 🟢 portadaniveles.html (integrada al flujo)
- Agregados `auth.js` + `curriculum.js` (antes no tenía protección ni sistema de progreso)
- 10 nodos genéricos → **7 nodos** correspondientes a los 7 mundos reales
- Nombres actualizados: Génesis, Cartografía, Anatomía, Sincronía, Estrategia, Soberanía, Legado
- Sistema de progreso ahora usa `CURRICULUM.isWorldUnlocked()` en vez de localStorage independiente
- Links corregidos (antes apuntaban a `nivel-6.html`, `nivel-7.html` etc. que no existían)
- Título actualizado a "InvertProfit — Mapa de Mundos"

### 🟢 Todos los niveles-X.html (7 archivos)
- Botón "Volver" cambiado de `dashboard.html` → `portadanivelesacademia.html`

---

## Archivos NO modificados (sin cambios necesarios)
- `Login.html` — Flujo correcto
- `test-nivel.html` — Flujo correcto
- `leccion.html` — Navegación dinámica via CURRICULUM, funciona automáticamente con los nuevos datos
- `lesson-content.js` — Niveles 11+ usan fallback genérico (contenido pendiente de desarrollo)
- `auth.js` — Sin cambios
- `firebase.json` — Sin cambios
- `robots.txt` — Sin cambios

## ⚠️ Nota sobre localStorage
Si algún usuario ya tenía progreso guardado con los números de nivel antiguos (46-100), ese progreso **no se migrará automáticamente** a los nuevos números (35-89). Considerar agregar una función de migración si hay usuarios activos.
