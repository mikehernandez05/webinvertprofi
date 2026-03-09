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

---
*Este archivo se actualiza al final de cada sesión y durante la misma si hay descubrimientos importantes.*
