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

---

## Bitácora de Sesiones

### Sesión 1 — 2025-03-09
**Trabajo realizado:**
- Integración completa de Firebase Auth + Firestore en `Login.html`
- Login con Google, Apple, email/contraseña
- Modal de registro con `createUserWithEmailAndPassword`
- Recuperación de contraseña con `sendPasswordResetEmail`
- Guardado de datos de usuario en Firestore (`users/{uid}`)
- Persistencia de sesión con `onAuthStateChanged`
- Redirección automática según `ip_level_test_done`
- Errores traducidos al español (12 códigos de Firebase)
- Creación de `firestore.rules`
- Creación de este archivo `CLAUDE.md`

**Errores cometidos:**
1. Toda la comunicación inicial fue en inglés (respuestas, commits, resúmenes)
2. No se estableció bitácora desde el inicio

**Habilidades adquiridas:**
1. Responder siempre en español
2. Mantener bitácora actualizada en cada sesión

---
*Este archivo se actualiza al final de cada sesión y durante la misma si hay descubrimientos importantes.*
