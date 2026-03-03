# InvertProfit Academy — Corrección Integral
**Fecha:** 2026-03-03

## Nuevo Flujo
```
Login → Test → Dashboard → portadanivelesacademia (torre) → portadaniveles?world=X (nodos) → leccion?world=X&level=N
```

## Cambio Principal: portadaniveles.html reemplaza los 7 archivos niveles-*.html

Antes había 7 archivos separados (niveles-novato.html, niveles-intermedio.html, etc.).
Ahora **un solo archivo dinámico** (`portadaniveles.html?world=X`) muestra los niveles de cualquier mundo.

### ¿Cómo funciona?
- Recibe `?world=1` a `?world=7` en la URL
- Carga los niveles de ese mundo desde un objeto LEVEL_DATA interno
- Usa `CURRICULUM.getLevelStatus(levelNum)` para saber si cada nivel está completado, activo o bloqueado
- Genera nodos en zigzag de abajo hacia arriba (igual que el diseño original)
- Los BOSS tienen nodos más grandes y animación especial
- Si el mundo está bloqueado, redirige a la torre automáticamente

### Archivos modificados
| Archivo | Cambio |
|---------|--------|
| `portadaniveles.html` | **Reescrito completo** — ahora es dinámico con ?world=X |
| `portadanivelesacademia.html` | URLs de mundos cambiadas a `portadaniveles.html?world=X` |
| `curriculum.js` | Gap 35-45 cerrado + pages actualizadas a `portadaniveles.html?world=X` |
| `leccion.html` | Fallback de goMap() actualizado |
| `dashboard.html` | Tarjetas apuntan a portadanivelesacademia (no directo a niveles) |

### Archivos obsoletos (pueden eliminarse)
- niveles-novato.html
- niveles-intermedio.html
- niveles-experto.html
- niveles-mundo4.html
- niveles-mundo5.html
- niveles-mundo6.html
- niveles-mundo7.html

Están en la carpeta `obsoletos/` por si quieres referencia.

### Niveles (curriculum.js corregido)
- Mundo 1 Génesis: 1-10 (10 niveles)
- Mundo 2 Cartografía: 11-22 (12 niveles)
- Mundo 3 Anatomía: 23-34 (12 niveles)
- Mundo 4 Sincronía: 35-49 (15 niveles)
- Mundo 5 Estrategia: 50-64 (15 niveles)
- Mundo 6 Soberanía: 65-79 (15 niveles)
- Mundo 7 Legado: 80-89 (10 niveles)
- **Total: 89 niveles secuenciales sin gaps**
