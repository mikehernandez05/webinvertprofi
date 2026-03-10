# CLAUDE.md — InvertProfit

## Reglas del Proyecto

- **Idioma**: Todas las respuestas deben ser en **español**. Sin excepciones.
- **Código inline**: Mantener todo el JavaScript dentro de los archivos HTML. No crear archivos JS separados salvo que el usuario lo pida explícitamente.
- **Diseño visual**: Nunca modificar estilos, animaciones, partículas ni el sistema HUD existente a menos que se solicite.
- **Bitácora obligatoria**: Al final de cada sesión, actualizar este archivo con los aprendizajes del día. Registrar errores cometidos, soluciones encontradas y nuevas reglas descubiertas. Mantener la bitácora al día en TODO momento durante la sesión.

## Stack del Proyecto

- HTML + Tailwind CSS (CDN) + JavaScript inline
- Firebase v10.12.0 (compat): Auth + Firestore
- Tipografías: Inter, Orbitron, Rajdhani, Share Tech Mono, JetBrains Mono
- Paleta: dorado #D4AF37, fondo #0a0f1a, tarjetas #111827, bordes #1f2937
- Librería de gráficos: lightweight-charts

## Estructura de Archivos Clave

- `Login.html` — Autenticación (Firebase Auth + Firestore)
- `test-nivel.html` — Test de nivel (8 preguntas de trading)
- `dashboard.html` — Panel principal de la academia
- `index.html` — Homepage con noticias y gráficos de mercado
- `world-1.html` a `world-7.html` — Módulos gamificados de educación
- `mercado.html` — Terminal de trading con datos en tiempo real
- `firestore.rules` — Reglas de seguridad de Firestore

## Habilidades Aprendidas (Errores Corregidos)

### 1. Responder siempre en español
- **Error**: Primera interacción fue completamente en inglés (commit messages, resúmenes, explicaciones).
- **Lección**: El usuario requiere toda la comunicación en español. Esto incluye respuestas, comentarios en código, y mensajes de commit cuando sea posible.
- **Regla**: Idioma predeterminado = español. Solo usar inglés en nombres técnicos (Firebase, Firestore, CDN, etc.).

### 2. Mantener bitácora actualizada siempre
- **Error**: No se estableció desde el inicio un sistema de registro continuo de aprendizajes.
- **Lección**: El usuario necesita un historial vivo de errores y mejoras para cada sesión.
- **Regla**: Actualizar CLAUDE.md al final de cada sesión y durante la sesión si hay descubrimientos importantes.

### 3. Validar flujo completo antes de dar por terminada una integración
- **Error**: Se integró Firebase Auth en Login.html pero no se actualizaron las demás páginas que dependen de la autenticación (auth.js, test-nivel.html, dashboard.html, worlds, etc.).
- **Lección**: Cuando se cambia el sistema de autenticación, TODAS las páginas que validan sesión deben actualizarse. Nunca asumir que un cambio en un archivo no afecta a otros.
- **Regla**: Siempre analizar el flujo completo (login → páginas protegidas → logout) antes de cerrar una tarea de autenticación.

### 4. auth.js es el guardián central — debe estar sincronizado con el método de auth
- **Error**: auth.js validaba con localStorage pero Login.html ya usaba Firebase Auth. Resultado: loop infinito de redirecciones.
- **Lección**: `auth.js` es el punto único de control de acceso. Si se cambia de localStorage a Firebase Auth, auth.js DEBE actualizarse primero.
- **Regla**: Cualquier cambio en el sistema de auth requiere actualizar auth.js inmediatamente.

### 5. Los datos críticos deben estar en Firestore, no solo localStorage
- **Error**: `test-nivel.html` guardaba `ip_level_test_done` solo en localStorage. Firestore nunca se enteraba → loop infinito al test.
- **Lección**: localStorage es volátil y local. Los datos de estado del usuario (nivel, test completado, etc.) deben persistir en Firestore.
- **Regla**: Guardar en Firestore primero, localStorage como caché rápida.

---

## Bitácora de Sesiones

### Sesión 1 — 2026-03-09
**Trabajo realizado:**
- Integración de Firebase Auth + Firestore en `Login.html`
- Login con Google, Apple, email/contraseña
- Modal de registro, recuperación de contraseña
- Guardado de datos de usuario en Firestore (`users/{uid}`)
- Persistencia de sesión con `onAuthStateChanged`
- Creación de `firestore.rules` y `CLAUDE.md`

**Parte 2 — Corrección de flujo completo:**
- Reescritura completa de `auth.js`: de localStorage a Firebase Auth
- Firebase SDK agregado a 11 páginas protegidas (dashboard, test-nivel, world-1 a 7, leccion, portadanivelesacademia)
- `test-nivel.html`: resultados ahora se guardan en Firestore + localStorage
- `test-nivel.html`: verificación de test completado ahora consulta Firestore
- `dashboard.html`: logout ahora usa `AUTH.logout()` → `firebase.auth().signOut()`
- Contenido oculto hasta verificar auth (previene flash de contenido no autorizado)

**Errores encontrados y corregidos:**
1. Loop infinito Login→test-nivel→Login (auth.js usaba localStorage, Login.html usaba Firebase)
2. test-nivel guardaba en localStorage pero Login leía de Firestore
3. 11 páginas no tenían Firebase SDK → auth.js fallaba silenciosamente
4. Logout no cerraba sesión de Firebase
5. Flash de contenido protegido antes de verificar auth

**Habilidades adquiridas:**
1. Responder siempre en español
2. Mantener bitácora actualizada en cada sesión
3. Validar flujo completo antes de cerrar tarea de autenticación
4. auth.js debe estar sincronizado con el método de auth usado
5. Datos críticos en Firestore, localStorage solo como caché

### Sesión 2 — 2026-03-09 (continuación)
**Trabajo realizado:**
- Menú interactivo dropdown en avatar del dashboard (Configuración + Cerrar Sesión)
- Validación responsiva completa de dashboard.html
- Corrección de mapa de mundos (portadanivelesacademia.html): ruta de imagen, layout retry, zonas táctiles
- Sistema triple de almacenamiento (localStorage + sessionStorage + cookies) para progreso del test
- Botón Apple Sign-In activado visualmente
- AudioContext.resume() en 9 archivos para sonido en móviles

### Sesión 3 — 2026-03-10
**Trabajo realizado:**
- Auditoría completa de TODO el proyecto (14+ archivos)
- Corrección de `/` suelto visible en portadanivelesacademia.html (línea 280)
- Ruta de imagen corregida: `/images/Torre.jpg` → `images/Torre.jpg`
- Implementación robusta de audio para iOS/Android con unlock global:
  - AudioContext global con silent buffer unlock en primer gesto del usuario
  - `resume()` automático en cada acceso al AudioContext
  - Aplicado a: portadanivelesacademia, world-1 a world-7, dashboard
- test-nivel.html: `.update()` → `.set({merge:true})` para robustez en Firestore
- auth.js: timeout de 10s en `waitForFirebase()` (previene loop infinito)
- Login.html: validación null en `showError()`
- portadanivelesacademia.html: límite de 15 reintentos en `tryLayout()`

**Errores encontrados y corregidos:**
1. `/` suelto después de tag `<img>` se mostraba como texto visible
2. Ruta absoluta de imagen fallaba en hosting
3. AudioContext suspendido en iOS Safari — ningún archivo tenía unlock global
4. `.update()` en Firestore falla si el documento no existe
5. `waitForFirebase` podía entrar en loop infinito si Firebase no cargaba
6. `showError()` crash si el elemento DOM no existía
7. `tryLayout()` sin límite de reintentos → CPU alta

**Habilidades adquiridas:**
6. iOS Safari requiere silent buffer trick para desbloquear AudioContext
7. Firestore `.set({merge:true})` es más seguro que `.update()` para docs que pueden no existir
8. Siempre poner límites en funciones de retry/polling
9. Auditar TODOS los archivos antes de implementar cambios grandes

### Sesión 4 — 2026-03-10 (continuación)
**Trabajo realizado:**
- Auditoría completa de botones, links e interactividad en TODOS los archivos
- Dashboard: Reconstruido dropdown del avatar con nombre/email/logout
- Dashboard: Menú mobile agregado con info de usuario + cerrar sesión
- Dashboard: "CONECTAR BROKER" → enlace funcional a mercado.html
- Dashboard: Links muertos "PORTAFOLIO" y "Logros" → redirigen a páginas reales
- Dashboard: Navegación consistente desktop + mobile + sidebar
- Index: "CONECTAR BROKER" → enlace funcional a mercado.html
- Index: "PORTAFOLIO" → "MI CUENTA" con link a Login.html
- Auditoría de seguridad: API keys Polygon/FMP expuestas en index.html y mercado.html
- Plan de migración a Supabase documentado

**Errores encontrados y corregidos:**
1. Dropdown del avatar no existía en dashboard.html (se había perdido)
2. Botón "CONECTAR BROKER" sin handler en dashboard e index → ahora va a mercado.html
3. Links a "#" (PORTAFOLIO, Logros) → redirigen a páginas reales
4. Menú mobile sin opción de cerrar sesión → agregada
5. Header avatar no era clickeable → ahora abre dropdown

**Habilidades adquiridas:**
10. SIEMPRE verificar que los cambios del worktree se copiaron al repo principal
11. Botones/links sin handler son invisibles para el usuario — auditar flujo completo
12. Menú mobile debe tener TODAS las acciones que tiene el desktop (especialmente logout)

### Sesión 5 — 2026-03-10 (continuación)
**Trabajo realizado:**
- Verificación completa de todos los cambios de sesión 4 (confirmados en repo principal)
- Auditoría final de archivos faltantes: world-1 a world-7, mercado.html, leccion.html
- mercado.html: "PORTAFOLIO" href="#" → "MI CUENTA" href="Login.html" (desktop + mobile)
- mercado.html: Botón "CONECTAR BROKER" sin handler → agregado onclick con mensaje "Próximamente"
- Verificación de que NO quedan links muertos (href="#" sin handler) en ningún archivo principal
- Confirmado: world-1 a world-7 y leccion.html están limpios y funcionales
- Confirmado: diseño responsive robusto en todos los archivos (5+ breakpoints, safe areas, touch targets 44px)

**Errores encontrados y corregidos:**
1. mercado.html tenía "PORTAFOLIO" como dead link (href="#") en desktop y mobile nav
2. mercado.html tenía botón "CONECTAR BROKER" sin ningún handler

**Habilidades adquiridas:**
13. Al auditar botones, verificar TODOS los archivos incluido mercado.html (es fácil olvidar páginas públicas)
14. Un botón con texto pero sin handler es peor que no tener botón — confunde al usuario

### Sesión 6 — 2026-03-10 (reestructuración curricular)
**Trabajo realizado:**
- Lectura completa del Excel "Reestructuración de Mundos de Trading.numbers" (2 hojas: resumen + temario detallado)
- Reestructuración COMPLETA del currículum de 100 niveles en 7 mundos
- curriculum.js: Rangos de niveles corregidos, nombres de mundos actualizados, rangos añadidos
- world-1.html: 10 niveles (1-10) — La Génesis del Capital → Rango: Novato
- world-2.html: 15 niveles (11-25) — El Laberinto de la Acción del Precio → Rango: Analista Junior
- world-3.html: 20 niveles (26-45) — El ADN de la Riqueza → Rango: Evaluador de Activos
- world-4.html: 15 niveles (46-60) — Sincronía: El Motor del Oráculo → Rango: Estratega Algorítmico
- world-5.html: 15 niveles (61-75) — El Tablero del Poder Global → Rango: Global Macro Master
- world-6.html: 15 niveles (76-90) — Soberanía Institucional (SMC) → Rango: Operador Institucional
- world-7.html: 10 niveles (91-100) — La Cúspide del Legado → Rango: Maestro de Capital
- Verificación automática: secuencia perfecta 1-100 sin huecos, todos los world pages coinciden con curriculum.js

**Errores encontrados y corregidos:**
1. Mundo 2 tenía 12 niveles (11-22) en vez de 15 (11-25) — temas incorrectos
2. Mundo 3 tenía niveles 23-34 con temas de SMC/ICT en vez de Análisis Fundamental (26-45)
3. Mundo 4 empezaba en nivel 35 en vez de 46 — rango completamente mal
4. Niveles 50-60 NO EXISTÍAN en el código — hueco en la secuencia
5. Nombres de mundos no coincidían con el diseño oficial del Excel
6. Títulos y descripciones de niveles no correspondían al temario oficial

**Habilidades adquiridas:**
15. SIEMPRE validar el currículum contra el documento fuente (Excel) antes de asumir que es correcto
16. Usar verificación automática (script Python) para confirmar secuencia sin huecos
17. Cuando se cambian rangos de niveles, actualizar curriculum.js Y cada world page simultáneamente

### Sesión 7 — 2026-03-10 (personalización visual de mundos)
**Trabajo realizado:**
- Completados hero titles/badges/subs FALTANTES para world-5, world-6, world-7 (habían fallado en sesión anterior por error del Edit tool)
- Corregidos badges desactualizados en world-2 ("CÁMARA DEL PRECIO" → "EL LABERINTO DEL PRECIO")
- Corregidos badges desactualizados en world-3 ("LABORATORIO" → "EL ADN DE LA RIQUEZA")
- Corregidos badges desactualizados en world-4 ("CÁMARA DE SINCRONÍA" → "MOTOR DEL ORÁCULO")
- Verificación completa de los 7 mundos: todos los `<title>`, badges, hero-title y hero-sub coinciden con el Excel
- Auditoría visual de los 7 mundos — cada uno YA tiene tema visual único y elaborado:
  - World 1: 🔥 Forja industrial (engranajes SVG, tuberías, pistones, vapor, chispas) — Naranja #ff6a00
  - World 2: 📊 Cámara de precios (velas japonesas canvas, zonas S/D, fibonacci, líneas de precio) — Verde #00ffaa
  - World 3: 🧬 Laboratorio de análisis (cámara escáner, pantallas flotantes, EKG, siluetas) — Azul/Cyan
  - World 4: ⚡ Reactor del oráculo (pilares de energía, reactor central, red neuronal, rayos fractales) — Púrpura
  - World 5: 🌐 Sala de guerra (mesa holográfica, pantallas tácticas, cúpula, columnas doradas) — Navy/Dorado
  - World 6: 🏛️ Palacio soberano (columnas arquitectónicas, ornamentos, reglas doradas) — Dorado puro
  - World 7: ✨ Cúspide celestial (templo, pilares, nubes, rayos de luz estelar) — Dorado cálido
- Verificación de curriculum.js: 7 mundos, 100 niveles (1-100), rangos correctos
- Verificación de conteo de niveles por archivo: 10+15+20+15+15+15+10 = 100 ✅
- Todos los archivos copiados al worktree modest-shamir

**Errores encontrados y corregidos:**
1. world-5 hero: title decía "Estrategia", badge "SALA DE GUERRA", icon ♟️ → corregido a "El Tablero del Poder Global", "EL TABLERO DEL PODER GLOBAL", 🌐
2. world-6 hero: title decía "Soberanía", badge "PALACIO DEL MERCADO", icon 👑 → corregido a "Soberanía Institucional (SMC)", "SOBERANÍA INSTITUCIONAL", 🏛️
3. world-7 hero: title decía "Legado", badge "LEGADO FINAL" → corregido a "La Cúspide del Legado", "LA CÚSPIDE DEL LEGADO"
4. world-2 badge "CÁMARA DEL PRECIO" no coincidía con nombre oficial del Excel
5. world-3 badge "LABORATORIO" no coincidía con nombre oficial del Excel
6. world-4 badge "CÁMARA DE SINCRONÍA" no coincidía con nombre oficial del Excel

**Habilidades adquiridas:**
18. SIEMPRE leer un archivo con Read tool antes de editarlo — el Edit tool falla si no se ha leído
19. Los badges, hero-title y hero-sub deben verificarse TODOS juntos — es fácil actualizar uno y olvidar otro
20. Verificar con grep que TODOS los archivos tienen textos consistentes después de un cambio masivo

---
*Este archivo se actualiza al final de cada sesión y durante la misma si hay descubrimientos importantes.*
