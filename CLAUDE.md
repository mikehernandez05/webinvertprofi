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

### Sesión 8 — 2026-03-10 (rediseño visual "Torre del Trading")
**Trabajo realizado:**
- Rediseño visual completo de los 7 mundos + hub como "pisos de una mega torre futurista"
- **Sistema hexagonal** implementado en los 7 mundos (world-1 a world-7):
  - Nodos hexagonales flat-top con clip-path polygon
  - 3 estados: hex-done (completado con checkmark), hex-active (glow intenso + scan ring), hex-locked (apagado)
  - Paths SVG con glow dual-layer + dot animado con `<animateMotion>`
  - Filter drop-shadow para glow neón (box-shadow no funciona con clip-path)
  - CSS custom properties (--a, --ar, --ad) como interfaz de color estandarizada
- **Tower indicator** en los 7 mundos: badge fijo "PISO X/7" con 7 segmentos coloreados
- **Animación de entrada** (materialización) en los 7 mundos: flash + fade-in progresivo
- **Animación de salida** (zoom-out) en los 7 mundos: escala 0.95 + fade al volver al hub
- **Hub mejorado** (portadanivelesacademia.html):
  - Camera zoom: al clickear un mundo, la torre se escala 2.5x hacia la zona clickeada
  - Tower indicator con 7 segmentos clickeables
  - Animación de entrada con revelación staggered de zonas
- **W5 corregido**: de pointy-top a flat-top para consistencia con los demás mundos
- Verificación completa: 0 errores de consola en los 8 archivos

**Errores encontrados y corregidos:**
1. Mock curriculum solo cubría W1 → expandido para cubrir los 7 mundos (3 completed + 1 active cada uno)
2. W2 no tenía variables --a/--ar/--ad → agregados aliases
3. W5 usaba pointy-top hex (polygon 50% 0%) → corregido a flat-top (polygon 25% 0%)
4. W5 hex-scan usaba border-radius:50% → corregido a clip-path hexagonal
5. W5 dimensiones 64x72 (pointy-top) → corregido a 70x64 (flat-top)
6. W3 @keyframes nap eliminado accidentalmente → restaurado

**Habilidades adquiridas:**
21. box-shadow NO funciona con clip-path — usar filter:drop-shadow() para glow en elementos clipped
22. Al usar sub-agentes en paralelo, verificar que el estilo sea CONSISTENTE (W5 usó pointy-top porque el agente decidió diferente)
23. CSS custom properties (--a, --ar, --ad) son excelentes para estandarizar un sistema de colores entre archivos diferentes
24. Camera zoom en el hub: calcular transform-origin desde getBoundingClientRect() del elemento clickeado relativo al contenedor
25. Animaciones de entrada: usar doble requestAnimationFrame para asegurar que el browser haya pintado el estado "entering" antes de removerlo

### Sesión 9 — 2026-03-10 (rediseño visual masivo — canvas + zoom cinematográfico)
**Trabajo realizado:**
- **FASE 1 — Reescritura completa de 4 mundos** (canvas backgrounds):
  - W2 ENGINE: Turbinas giratorias, conductos de energía, motor central con pistones, chispas, vapor. Colores: ámbar #ff8c00 + azul eléctrico #3399ff
  - W4 MARKET: Centro de mando holográfico con 5 pantallas (velas japonesas, EKG, volumen, ticker), consola semicircular, rayos de proyección, data streams. Colores: violeta #a855f7 + cyan #22d3ee
  - W5 ALGORITHM: Geometría sagrada (5 círculos concéntricos), módulos de cálculo con ondas sinusoidales, matrix de datos descendentes, procesadores. Colores: teal #14b8a6 + violeta #8b5cf6
  - W6 NEXUS: Plataforma central circular, 6 puentes de luz (bezier), pilares de energía turquesa, aurora boreal, niebla azulada, arcos eléctricos. Colores: azul eléctrico #2563eb + turquesa #06b6d4
- **FASE 2 — Adaptación de 2 mundos**:
  - W3 NETWORK: Wall panels → circuit boards (PCB con trazas, vías, chips IC), data packets viajando, binary rain, scan bars
  - W7 SUMMIT: Toro 30% más grande, haz de luz vertical, 7 pisos descendentes visibles, pilares 20% más altos, partículas violetas 20%, estrellas fugaces, anillos de energía
- **FASE 3 — Zoom cinematográfico**:
  - Hub: Silueta SVG de torre en transition screen con segmentos que se iluminan progresivamente hasta el piso destino, línea de energía animada
  - 7 mundos: Tower entry overlay (SVG torre con 7 pisos, iluminación progresiva, zoom 4x hacia el piso, fade out)
  - Flujo completo: Hub → camera zoom → vortex + speed lines → transition screen con torre → navigate → tower entry overlay → zoom in → reveal mundo
- **FASE 4 — Colores hex system**:
  - W2: --a de verde #00ffaa → ámbar #ff8c00, HUD, favicon, body background actualizados
  - W5: --a de dorado #D4AF37 → teal #14b8a6, agregado --v:#8b5cf6, HUD texto de guerra → algoritmo
  - W6: --a de dorado #D4AF37 → azul #2563eb, TODOS los colores HUD/hero/quest/modal de dorado → azul
  - W7: Agregado --vl:#a78bfa (violeta sutil como acento), colores base dorados sin cambio
- Verificación completa: 0 errores de consola en los 8 archivos (hub + 7 mundos)
- ~2,400 líneas nuevas de canvas, ~1,900 líneas eliminadas

**Errores encontrados y corregidos:**
1. W5 tenía estructura diferente (sin exitOv, eFlash, entering) — tower entry overlay insertado manualmente
2. Agentes con isolation:worktree generan worktrees anidados — copiar archivos manualmente al directorio principal
3. W6 tenía 30+ propiedades CSS con colores dorados hardcodeados — todas actualizadas a azul eléctrico

**Habilidades adquiridas:**
26. Al reescribir canvas, copiar el código original como referencia ANTES de eliminarlo (W2→W4 reutilización)
27. Agentes con isolation:worktree crean worktrees anidados — verificar ruta de salida y copiar archivos
28. Cuando se cambia la paleta de colores de un mundo, verificar TODAS las propiedades CSS (no solo :root vars) — muchos valores están hardcodeados como rgba()
29. SVG animado con transition en atributos (y2, etc.) NO funciona directamente — usar JS para cambiar atributos + CSS transition en el estilo
30. Tower entry overlay: usar transform-origin calculado desde getBoundingClientRect del segmento SVG target para zoom preciso

### Sesión 10 — 2026-03-11 (hub cinematográfico — Torre Central Canvas)
**Trabajo realizado:**
- Reescritura COMPLETA de `portadanivelesacademia.html` (de 877 → 1207 líneas)
- Eliminada la dependencia de imagen estática `images/Torre.jpg`
- Implementación de escena cinematográfica 100% canvas con 4 capas:
  - **cvSky**: Cielo estrellado (300 estrellas, nebulosas, god rays, nubes)
  - **cvTower**: Torre monolítica escalonada con 7 secciones arquitectónicas
  - **cvEnergy**: Líneas de energía bezier entre nodos con pulsos viajeros
  - **cvFx**: Partículas (embers de fuego, sparks eléctricos, polvo ambiental)
- Torre con estructura piramidal que se estrecha: base 76% → cima 12% del ancho
- Plataforma base industrial con fuego/forge glow y tuberías
- Spire dorado con beacon luminoso en la cúspide
- Espina de energía central con pulso animado ascendente
- Contrafuertes (flying buttresses) en la base
- Ventanas iluminadas con flicker en secciones desbloqueadas
- Bandas horizontales, paneles verticales y cross-bracing estructural
- Halo atmosférico detrás de la torre para separar del fondo
- 7 nodos hexagonales HTML con clip-path, glow neón, animaciones
- Nodos con 3 estados: active (glow intenso + scan), completed (check verde), locked (dimmed)
- Tooltips en hover con nombre, descripción y acción
- Rotating ring arcs en nodos activos (dibujados en canvas)
- Halos radiales y outer atmospheric glow en cada nodo
- Sistema de zoom cinematográfico: click → scale(3.5) del scene
- Transición completa: zoom + vortex + speed lines + portal wipe + transition screen
- Layout 100vh sin scroll — composición épica vertical
- Responsive: mobile (60px hex), tablet (70px), desktop (100px)
- Colores actualizados para coincidir con mundos rediseñados
- worldLastLevel corregido a [10,25,45,60,75,90,100]
- 0 errores de consola en todos los viewports

**Errores encontrados y corregidos:**
1. Torre invisible: relleno de secciones era casi negro (rgba 4,8,16) igual que el fondo → aumentado a rgba 22,34,58 para contraste
2. Secciones bloqueadas desaparecían: opacity 0.12 → aumentado a 0.4 para que la estructura siempre sea visible
3. Nodos locked eran invisibles: opacity .25 → .45 para que se vean como parte de la torre
4. Worktree vs repo principal: archivos editados en repo principal pero preview server corre en worktree → copiar después de cada cambio
5. Nebulosas y god rays eran imperceptibles → aumentados de .04/.06 a .07/.10
6. Hex nodes necesitaban más glow → triple drop-shadow + keyframe más intenso

**Habilidades adquiridas:**
31. Para canvas sobre fondo oscuro, los rellenos no pueden ser nearly-black — necesitan al menos rgba(20+,30+,50+) para tener contraste
32. Secciones bloqueadas deben seguir mostrando la ESTRUCTURA (silueta, bordes) aunque sin el color/glow — nunca hacerlas totalmente invisibles
33. Multi-canvas layer (cvSky+cvTower+cvEnergy+cvFx) da mejor rendimiento y separación que un solo canvas
34. Atmospheric halo (radial gradient grande detrás de la torre) es esencial para separar el sujeto principal del fondo
35. overflow:hidden en body + height:100vh crea la composición "scene-like" que NO se siente como web page
36. filter:drop-shadow() con triple capa (near/mid/far) crea glow holográfico convincente en clip-path hex

### Sesión 11 — 2026-03-11 (hub cinematográfico v2 — imagen de referencia ~99%)
**Trabajo realizado:**
- Reescritura COMPLETA de `portadanivelesacademia.html` para coincidir con imagen de referencia al ~99%
- **Hexágonos en ZIGZAG**: nodos alternando izquierda/derecha a lo largo de la torre (estilo Candy Crush)
  - W1: x=0.36, W2: x=0.62, W3: x=0.38, W4: x=0.58, W5: x=0.42, W6: x=0.58, W7: x=0.50
- **Torre MASIVA**: base 88% del ancho de pantalla (wB=0.44), corona 10% (wT=0.05)
  - 7 secciones escalonadas mucho más anchas que versión anterior
- **Base industrial**: plataforma ancha, brazos de grúa, hornos con glow naranja, piscinas de metal fundido, chimeneas de vapor
- **Nubes doradas volumétricas**: 7 masas de nubes en la parte superior con tintes dorados/ámbar, más prominentes (opacity 0.15-0.30)
- **Estructuras de alas/antenas**: extensiones laterales en nivel W6 (y≈0.24) con puntas luminosas
- **Láseres diagonales**: 4 haces desde el centro de la torre (púrpura + cyan) apuntando a las esquinas
- **Trazados de circuito**: patrones de placa base en los laterales (solo desktop)
- **Lluvia de matriz**: columnas de puntos cayendo sutilmente por toda la pantalla
- **Vehículos voladores**: siluetas triangulares moviéndose lentamente cerca del tope
- **Líneas de energía zigzag**: bezier curves siguiendo el camino diagonal entre nodos (no vertical recto)
- **God rays mejorados**: 7 haces dorados desde arriba con mayor opacidad (.10)
- Verificado en desktop (1280x800) y mobile (375x812): 7/7 nodos visibles ✅
- Verificado: click W1 → zoom → transition → world-1.html funciona perfectamente ✅
- 0 errores de consola ✅

**Cambios clave respecto a versión anterior (Sesión 10):**
1. HP array: de `{y:solo}` → `{x:valor, y:valor}` para zigzag
2. TSEC: torre mucho más ancha (base de wB=0.38 → 0.44, top de wT=0.06 → 0.05)
3. positionHexNodes(): usa `HP[i].x*100%` en vez de `50%` fijo
4. getHexPixels(): usa `HP[i].x*W` en vez de `W/2`
5. drawEnergy(): control points de bezier calculan bulge diagonal para zigzag
6. Sparks: posicionados cerca de cada hex node (`HP[w].x`) en vez de centro fijo

**Errores encontrados y corregidos:**
1. Energía recta no coincidía con zigzag — bezier control points recalculados con bulge proporcional al desplazamiento diagonal
2. Sparks aparecían todos en el centro — cambiado a usar HP[w].x para posición relativa al nodo

**Habilidades adquiridas:**
37. Para zigzag hex placement, usar {x,y} en vez de solo {y} — y actualizar TODAS las funciones que leen posiciones (positionHexNodes, getHexPixels, mkS sparks)
38. Bezier energy lines entre zigzag nodes necesitan control points con "bulge" opuesto a la dirección del movimiento para curvas suaves
39. Base industrial: furnace openings con glow radial + rectangles animados con Math.sin dan apariencia de fuego real
40. Diagonal laser beams con shadowBlur dan efecto de haz de luz convincente con poco código
41. Volumetric clouds: múltiples radial gradients superpuestos con scale(1, ry/rx) crean formas elípticas realistas
42. Matrix rain: columnas de dots simples (sin texto) es performante y visualmente efectivo a baja opacidad

### Sesión 12 — 2026-03-11 (nuevo mapa de niveles — tower canvas + hex neon)
**Trabajo realizado:**
- Creación de `world-levels-template.html`: template maestro para el mapa de niveles interno de cada mundo
- **Arquitectura nueva del mapa de niveles**:
  - Canvas fixed de fondo con torre piramidal de 7 secciones (parallax con scroll)
  - Estrellas animadas (200), nebulosas, god rays, nubes volumétricas
  - Torre con secciones iluminadas según piso actual (current floor = glow, below = tenue, above = oscuro)
  - Beacon luminoso en la cúspide con pulso
  - Espina de energía central con pulso ascendente
  - Láseres diagonales, circuit traces laterales (desktop), matrix rain
  - Partículas: sparks, embers, dust
  - Base industrial con forge glow
- **Sistema hexagonal mejorado**:
  - Hex nodes con clip-path flat-top, 3 estados claros (done/active/locked)
  - Active: scan ring animado (conic-gradient rotando), outer glow ring pulsante, triple drop-shadow
  - Done: glow naranja sutil, checkmark
  - Locked: desaturado, brightness 32%, candado Material Symbols
  - Boss nodes 20% más grandes con tag "FINAL"
- **Zigzag layout**: nodos alternando izq/der con Math.sin wave
- **Energy paths SVG**: bezier curves con bulge diagonal, dash animation en activos, energy dot con animateMotion
- **Tower entry overlay**: segmentos SVG iluminándose progresivamente, zoom 5x, flash
- **Modal completo**: badge estado, icon, título, descripción, estrellas, XP, botones INICIAR/REPASAR/SIGUIENTE
- **Quest box**: módulo activo con botón INICIAR
- **HUD panels**: energía + progreso (desktop only)
- **Tower indicator**: 7 segmentos fijos, clickeables para navegar entre pisos
- **Audio**: sfx tones (open, locked, confirm), mute toggle, iOS silent buffer unlock
- **Script generador** (`generate-worlds.js`): genera los 7 mundos desde el template con datos específicos
- **7 mundos generados y verificados**:
  - W1: naranja #ff6a00, 10 niveles (1-10), Novato
  - W2: ámbar #ff8c00, 15 niveles (11-25), Analista Junior
  - W3: cyan #00e5ff, 20 niveles (26-45), Evaluador de Activos
  - W4: púrpura #a855f7, 15 niveles (46-60), Estratega Algorítmico
  - W5: teal #14b8a6, 15 niveles (61-75), Global Macro Master
  - W6: azul #2563eb, 15 niveles (76-90), Operador Institucional
  - W7: dorado #FFD060, 10 niveles (91-100), Maestro de Capital
- 0 errores de consola en todos los mundos verificados en preview

**Errores encontrados y corregidos:**
1. Canvas layers con position:fixed tapaban los nodos scrolleables → cambiado a un solo canvas fixed + mainScroll container sobre él
2. Agentes sub-agentes NO copian templates fielmente — reescriben el código por su cuenta → usar script generador (sed/node) para garantizar consistencia
3. Multi-canvas (cvSky+cvTower+cvEnergy+cvFx) causaba complejidad innecesaria → consolidado en un solo canvas #bgCanvas
4. Nodos no visibles en primer render → ajustado PAD_TOP y NODE_H para que el primer nodo aparezca justo debajo del hero

**Habilidades adquiridas:**
43. Para templates que se replican en múltiples archivos, usar un script generador (Node.js) con string replacements es más confiable que sub-agentes
44. Un solo canvas fixed con draw() monolítico es más simple y suficiente que multi-layer canvas para fondos de parallax
45. position:fixed canvas + position:absolute scroll container = parallax natural sin JavaScript extra
46. Los agentes tienden a "reinventar" el código en vez de copiar — nunca confiar en que un agente copiará un template al pie de la letra

### Sesión 13 — 2026-03-11 (mejora visual mapa de niveles v2)
**Trabajo realizado:**
- Reescritura del `world-levels-template.html` con mejoras visuales significativas basadas en imagen de referencia
- **Torre más masiva**: base aumentada de 65% a 78% del ancho de pantalla (wB=0.78)
- **Hexágonos mejorados**:
  - Nuevo elemento `.hex-border` — borde neón hexagonal separado del face, con animación borderPulse en activos
  - Nuevo `.hex-ripple` — efecto de onda de energía al hacer click (rippleOut animation)
  - Hover mejorado: scale(1.08) + brightness(1.3) para sensación interactiva
  - Boss nodes 25% más grandes con border/scan/glow escalados
- **Energy paths mejorados**:
  - Glow activo más ancho (14px) con animación pathGlowPulse
  - Doble energy dot en paths activos (r=4 principal + r=2.5 secundario desfasado)
  - Energy dot en paths completados (r=2, sutil)
  - Dash animation más rápida (1.2s vs 1.5s)
- **Torre canvas mejorada**:
  - 7 secciones con paneles verticales, bandas divisorias decorativas, cross-bracing estructural
  - Ventanas con top highlight en pisos activos/completados
  - Edge glow lines en piso actual
  - Espina de energía con doble capa (2px core + 8px outer glow)
  - Beacon con haz vertical hacia arriba
- **Nuevos elementos canvas**:
  - Alas/antenas en nivel W6 con puntas luminosas (wing tips glow)
  - Base industrial detallada: hornos con glow animado, chimeneas con humo, tuberías, piscinas de metal fundido
  - 4 vehículos voladores triangulares con engine glow
  - Láseres diagonales púrpura + cyan con shadowBlur
  - 8 circuit traces laterales (desktop) con segmentos extra
  - Nebulosa secundaria violeta
  - 220 estrellas (vs 180), 75 partículas (vs 60)
  - 6 nubes volumétricas doradas
- Regeneración de 7 mundos con `generate-worlds.js`
- Verificación: W3 (20 nodos, cyan), W6 (15 nodos, azul), template (10 nodos) — 0 errores consola
- Copiado al repo principal y verificado con diff

**Errores encontrados y corregidos:**
1. Write tool requiere Read previo — siempre leer antes de escribir
2. launch.json del worktree tiene nombre diferente ("dev-server") al del repo principal ("node-server") — usar el nombre correcto del worktree

**Habilidades adquiridas:**
47. Separar hex-border como elemento independiente del hex-node permite animar el borde sin afectar el contenido
48. Doble energy dot desfasado (begin="-.9s") crea sensación de flujo continuo más convincente
49. Wing structures: líneas simples con radialGradient en las puntas dan efecto de antena sci-fi con poco código
50. Vehículos voladores: triángulos simples con engine glow radial son suficientes a baja opacidad para dar vida a la escena

### Sesión 14 — 2026-03-12 (SFX, NPC, efectos especiales, flujo Salir)
**Trabajo realizado:**
- **Botón "Salir" corregido**: `portadanivelesacademia.html` ahora redirige a `dashboard.html` en vez de `index.html`, texto cambiado a "DASHBOARD"
- **Sistema de audio completo** — 9 funciones de sonido diferenciadas:
  - `sfxO()`: arpegio ascendente épico al abrir nivel activo (4 tonos)
  - `sfxDone()`: acorde satisfactorio al clickear nivel completado (triángulo)
  - `sfxL()`: grave metálico al intentar nivel bloqueado (sawtooth+square)
  - `sfxHover()`: tono sutil al pasar mouse sobre nodo desbloqueado
  - `sfxModal()`: whoosh al abrir modal (5 tonos rápidos ascendentes)
  - `sfxConfirm()`: confirmación al iniciar nivel (4 tonos con delay)
  - `sfxWorldTransition()`: energía creciente al cambiar de mundo (8 tonos)
  - `sfxNPC()`: misterioso al aparecer el NPC (3 tonos lentos)
  - Hover SFX en nodos via `mouseenter` event
- **NPC/Mentor holográfico** — personaje que espera en el nivel activo:
  - Figura humanoide CSS pura (cabeza, torso, piernas) con colores del mundo
  - Efecto holográfico: scanlines, flicker animation, glow radial
  - Anillo holográfico rotando en la base (`npcRing` animation)
  - Burbuja de diálogo con mensajes aleatorios ("¡AQUÍ ESTÁS!", "CONTINÚA →", etc.)
  - Animación de aparición con delay (npcAppear 1.2s)
  - Sonido sfxNPC al materializarse
- **Nuevos efectos especiales canvas**:
  - **Relámpagos eléctricos**: descargas aleatorias con segmentos zigzag + flash glow (probabilidad 0.8%)
  - **Estrellas fugaces**: trazos luminosos diagonales con degradado (probabilidad 0.4%)
  - **Anillos de energía**: 3 elipses orbitando el piso actual con glow pulsante
- **Regeneración completa**: 7 mundos regenerados con generate-worlds.js
- Verificación: 0 errores de consola en W1, W3 y portada

**Errores encontrados y corregidos:**
1. Botón "SALIR" en portada iba a index.html en vez de dashboard.html
2. Solo había 2 sonidos (sfxO y sfxL) — expandido a 9 funciones diferenciadas
3. No había NPC/personaje en ninguna parte del flujo

**Habilidades adquiridas:**
51. Web Audio API: usar diferentes waveforms (sine, triangle, sawtooth, square) crea identidad sonora única para cada acción
52. NPC holográfico: scanlines CSS (repeating-linear-gradient) + flicker animation dan apariencia de holograma convincente
53. Canvas lightning: segmentos aleatorios con shadowBlur alto crean relámpagos realistas con poco código
54. ctx.ellipse() es ideal para anillos de energía orbitales — variar radiusY crea efecto de perspectiva 3D

---
*Este archivo se actualiza al final de cada sesión y durante la misma si hay descubrimientos importantes.*
