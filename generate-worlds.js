#!/usr/bin/env node
// Generates world-1.html through world-7.html from the template
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const template = fs.readFileSync(path.join(dir, 'world-levels-template.html'), 'utf8');

const FIREBASE_BLOCK = `<!-- Firebase v9+ compat -->
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"><\/script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-auth-compat.js"><\/script>
<script src="https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore-compat.js"><\/script>
<script>
    firebase.initializeApp({
        apiKey: "AIzaSyCrgbks3ifIIN7RJzSlzH5hgQMw4ogA1CY",
        authDomain: "invertprofitweb.firebaseapp.com",
        projectId: "invertprofitweb",
        storageBucket: "invertprofitweb.firebasestorage.app",
        messagingSenderId: "696411646211",
        appId: "1:696411646211:web:037c2a6fb8752f8b2d6136"
    });
<\/script>
<script src="auth.js"><\/script>
<script src="curriculum.js"><\/script>
<script>tailwind.config={darkMode:"class",theme:{extend:{fontFamily:{"sans":["Rajdhani","sans-serif"]}}}}<\/script>`;

const FAVICON = `<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect fill='%230a0f1a' width='32' height='32' rx='6'/><text x='50%25' y='55%25' dominant-baseline='central' text-anchor='middle' font-size='18' fill='%23D4AF37'>IP</text></svg>">`;

const worlds = [
  {
    num: 1, floor: 1,
    title: 'InvertProfit — Mundo 1: La Génesis del Capital',
    colors: '--a:#ff6a00;--ad:#cc4400;--ar:255,106,0;',
    bg: '--bg:#0a0f1a;',
    badge: 'MUNDO 01 — LA GÉNESIS DEL CAPITAL',
    heroTitle: '🔥 La Génesis del Capital',
    heroSub: '// RANGO: NOVATO — FUNDAMENTOS',
    levels: `[
  {"n":1,"t":"Filosofía InvertProfit","d":"Filosofía InvertProfit y AmigoTrade.","xp":150,"icon":"🧠"},
  {"n":2,"t":"Historia del Dinero","d":"Historia del Dinero y los Mercados.","xp":150,"icon":"📜"},
  {"n":3,"t":"¿Qué es una Acción?","d":"El origen del Equity.","xp":150,"icon":"📊"},
  {"n":4,"t":"Participantes del Mercado","d":"Retail vs Institucional.","xp":150,"icon":"👥"},
  {"n":5,"t":"Divisas, Metales e Índices","d":"Tipos de Activos financieros.","xp":150,"icon":"💱"},
  {"n":6,"t":"Commodities y Cripto","d":"Tipos de Activos: commodities y criptomonedas.","xp":150,"icon":"⛏️"},
  {"n":7,"t":"Anatomía de una Orden","d":"Market, Limit y Stop.","xp":150,"icon":"📋"},
  {"n":8,"t":"Pips, Lotes y Spread","d":"El lenguaje del precio.","xp":150,"icon":"🔢"},
  {"n":9,"t":"Sesiones del Mercado","d":"Horarios y Sesiones: El reloj del dinero.","xp":150,"icon":"🕐"},
  {"n":10,"t":"🏆 Primer Trade Simulado","d":"Examen de Entrada: El Primer Trade Simulado.","xp":500,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 2, floor: 2,
    title: 'InvertProfit — Mundo 2: El Laberinto de la Acción del Precio',
    colors: '--a:#ff8c00;--ad:#cc5500;--ar:255,140,0;',
    bg: '--bg:#0a0f1a;',
    badge: 'MUNDO 02 — EL LABERINTO DEL PRECIO',
    heroTitle: '📊 El Laberinto de la Acción del Precio',
    heroSub: '// RANGO: ANALISTA JUNIOR — PRICE ACTION',
    levels: `[
  {"n":11,"t":"Velas Japonesas","d":"Introducción a las Velas Japonesas.","xp":200,"icon":"🕯️"},
  {"n":12,"t":"Patrones de Reversión","d":"Patrones de Reversión Individuales.","xp":200,"icon":"🔄"},
  {"n":13,"t":"Patrones de Continuidad","d":"Patrones de Continuidad y Grupos de Velas.","xp":200,"icon":"➡️"},
  {"n":14,"t":"Soportes y Resistencias","d":"Zonas de Oferta y Demanda.","xp":200,"icon":"🧱"},
  {"n":15,"t":"Tendencias y Canales","d":"Líneas de Tendencia y Canales Dinámicos.","xp":200,"icon":"📐"},
  {"n":16,"t":"HCH y Figuras","d":"Figuras Chartistas: Hombro-Cabeza-Hombro.","xp":200,"icon":"🗻"},
  {"n":17,"t":"Banderines y Cuñas","d":"Figuras de Continuación.","xp":200,"icon":"🚩"},
  {"n":18,"t":"Fractalidad Temporal","d":"El Concepto de Fractalidad en el Tiempo.","xp":200,"icon":"🔬"},
  {"n":19,"t":"Análisis de Volumen","d":"El motor de la vela.","xp":200,"icon":"📊"},
  {"n":20,"t":"Rompimientos","d":"Rompimientos vs. Falsos Rompimientos.","xp":200,"icon":"💥"},
  {"n":21,"t":"Teoría de Dow","d":"La Teoría de Dow y los Ciclos.","xp":200,"icon":"📈"},
  {"n":22,"t":"Price Action Puro","d":"Acción del Precio Pura (Raw Price Action).","xp":250,"icon":"🎯"},
  {"n":23,"t":"Triángulos y Diamantes","d":"Triángulos y Diamantes Técnicos.","xp":200,"icon":"🔺"},
  {"n":24,"t":"Gaps de Mercado","d":"Gaps de Apertura y de Escape.","xp":200,"icon":"⚡"},
  {"n":25,"t":"🏆 BOSS: Gráfico en Blanco","d":"Lectura de Gráfico en Blanco.","xp":600,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 3, floor: 3,
    title: 'InvertProfit — Mundo 3: El ADN de la Riqueza',
    colors: '--a:#00e5ff;--ad:#0097a7;--ar:0,229,255;',
    bg: '--bg:#00050f;',
    badge: 'MUNDO 03 — EL ADN DE LA RIQUEZA',
    heroTitle: '🧬 El ADN de la Riqueza',
    heroSub: '// RANGO: EVALUADOR DE ACTIVOS — FUNDAMENTAL',
    levels: `[
  {"n":26,"t":"Valor vs. Precio","d":"La base del negocio.","xp":250,"icon":"💰"},
  {"n":27,"t":"Balance General","d":"Activos, Pasivos, Patrimonio.","xp":250,"icon":"📒"},
  {"n":28,"t":"Estado de Resultados","d":"P&L: Pérdidas y Ganancias.","xp":250,"icon":"📊"},
  {"n":29,"t":"Flujo de Caja Libre","d":"Free Cash Flow.","xp":250,"icon":"💧"},
  {"n":30,"t":"Ratios de Liquidez","d":"Current y Quick Ratio.","xp":250,"icon":"🧪"},
  {"n":31,"t":"ROE y ROA","d":"Ratios de Eficiencia y Rentabilidad.","xp":250,"icon":"📈"},
  {"n":32,"t":"Margen y EBITDA","d":"El Margen Operativo y EBITDA.","xp":250,"icon":"🔬"},
  {"n":33,"t":"Dividendos","d":"Introducción a los Dividendos y Recompras.","xp":250,"icon":"💎"},
  {"n":34,"t":"PER y EPS","d":"Valoración por PER y Ganancia por Acción.","xp":250,"icon":"🏷️"},
  {"n":35,"t":"El Moat Financiero","d":"Ventajas Competitivas.","xp":250,"icon":"🏰"},
  {"n":36,"t":"Análisis Sectorial","d":"Análisis del Sector y la Industria.","xp":250,"icon":"🏭"},
  {"n":37,"t":"Reporte 10-K","d":"Cómo leer un Reporte Anual.","xp":300,"icon":"📋"},
  {"n":38,"t":"Deuda y Solvencia","d":"El peligro del apalancamiento.","xp":250,"icon":"⚠️"},
  {"n":39,"t":"Crecimiento Proyectado","d":"Modelado de Crecimiento.","xp":250,"icon":"🌱"},
  {"n":40,"t":"Valoración DCF","d":"Flujo de Caja Descontado.","xp":300,"icon":"🧮"},
  {"n":41,"t":"Stock Picking","d":"Selección de Acciones.","xp":250,"icon":"🎯"},
  {"n":42,"t":"Análisis Cuantitativo","d":"Análisis Cuantitativo de Estados Financieros.","xp":250,"icon":"📐"},
  {"n":43,"t":"Ciclo de Empresa","d":"El ciclo de vida de una empresa pública.","xp":250,"icon":"🔄"},
  {"n":44,"t":"Auditoría de Datos","d":"Verdad tras los números.","xp":250,"icon":"🔍"},
  {"n":45,"t":"🏆 BOSS: Valuación Big Tech","d":"Valuación Real de una Big Tech.","xp":700,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 4, floor: 4,
    title: 'InvertProfit — Mundo 4: El Motor del Oráculo',
    colors: '--a:#a855f7;--ad:#7c3aed;--ar:168,85,247;',
    bg: '--bg:#04000c;',
    badge: 'MUNDO 04 — EL MOTOR DEL ORÁCULO',
    heroTitle: '⚡ Sincronía — El Motor del Oráculo',
    heroSub: '// RANGO: ESTRATEGA ALGORÍTMICO — SINCRONIZACIÓN',
    levels: `[
  {"n":46,"t":"Medias Móviles","d":"El promedio de la masa.","xp":250,"icon":"📉"},
  {"n":47,"t":"RSI y Estocástico","d":"Detectando el agotamiento.","xp":250,"icon":"📊"},
  {"n":48,"t":"Bandas de Bollinger","d":"Desviación Estándar.","xp":250,"icon":"〰️"},
  {"n":49,"t":"El MACD","d":"El pulso de la tendencia.","xp":250,"icon":"💓"},
  {"n":50,"t":"Fibonacci Retroceso","d":"El Retroceso Maestro.","xp":250,"icon":"🌀"},
  {"n":51,"t":"Fibonacci Extensiones","d":"Extensiones para Targets.","xp":250,"icon":"🎯"},
  {"n":52,"t":"Libro de Órdenes","d":"Microestructura del mercado.","xp":300,"icon":"📖"},
  {"n":53,"t":"Tape Reading","d":"Lectura de la Cinta.","xp":300,"icon":"📜"},
  {"n":54,"t":"Filtro de Señales","d":"Filtro con 94% de Confianza.","xp":250,"icon":"🔧"},
  {"n":55,"t":"Scalping","d":"Estrategia de Scalping (Minutos).","xp":250,"icon":"⚡"},
  {"n":56,"t":"Day Trading","d":"Estrategia Intradía (Horas).","xp":250,"icon":"☀️"},
  {"n":57,"t":"Swing Trading","d":"Estrategia de Swing (Días/Semanas).","xp":250,"icon":"🌊"},
  {"n":58,"t":"Position Trading","d":"Estrategia de Posición (Meses/Años).","xp":250,"icon":"🏔️"},
  {"n":59,"t":"Trail Stop Inteligente","d":"Gestión de la Salida.","xp":250,"icon":"🛡️"},
  {"n":60,"t":"🏆 BOSS: Operativa IA","d":"Operativa Sincronizada 100% IA.","xp":600,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 5, floor: 5,
    title: 'InvertProfit — Mundo 5: El Tablero del Poder Global',
    colors: '--a:#14b8a6;--ad:#0d9488;--ar:20,184,166;',
    bg: '--bg:#010c18;',
    badge: 'MUNDO 05 — EL TABLERO DEL PODER GLOBAL',
    heroTitle: '🌐 El Tablero del Poder Global',
    heroSub: '// RANGO: GLOBAL MACRO MASTER — MACROECONOMÍA',
    levels: `[
  {"n":61,"t":"Macroeconomía Global","d":"El Sol del Sistema.","xp":200,"icon":"🌍"},
  {"n":62,"t":"Ciclo de Deuda","d":"Ciclos de deuda y Bancos Centrales.","xp":250,"icon":"🔄"},
  {"n":63,"t":"Tipos de Interés y FED","d":"Tasas de interés, QE y QT.","xp":200,"icon":"🏦"},
  {"n":64,"t":"Inflación y Deflación","d":"Impacto Real del IPC.","xp":200,"icon":"📊"},
  {"n":65,"t":"Índice Dólar (DXY)","d":"Correlación del DXY.","xp":200,"icon":"💵"},
  {"n":66,"t":"Geopolítica y Commodities","d":"Oro, WTI y refugio de valor.","xp":250,"icon":"🛢️"},
  {"n":67,"t":"Mercado de Bonos","d":"Renta fija, deuda gubernamental y privada.","xp":200,"icon":"📜"},
  {"n":68,"t":"Opciones Financieras","d":"Derivados I: Introducción a Opciones.","xp":250,"icon":"📋"},
  {"n":69,"t":"Futuros Financieros","d":"Derivados II: Futuros Financieros.","xp":250,"icon":"📈"},
  {"n":70,"t":"Psicología del 1%","d":"Dominio del Ego.","xp":200,"icon":"🧠"},
  {"n":71,"t":"Sesgos Cognitivos","d":"El Enemigo Interno.","xp":200,"icon":"🪞"},
  {"n":72,"t":"Bio-Hacking Trader","d":"Manejo de dopamina, cortisol y alto rendimiento.","xp":200,"icon":"🧬"},
  {"n":73,"t":"Planificación Fiscal","d":"Fiscalidad Internacional para inversores.","xp":200,"icon":"📑"},
  {"n":74,"t":"Real Estate","d":"Diversificación en activos físicos.","xp":200,"icon":"🏠"},
  {"n":75,"t":"🏆 BOSS: Tesis Global Macro","d":"Examen Macro y Defensa de Tesis Patrimonial.","xp":500,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 6, floor: 6,
    title: 'InvertProfit — Mundo 6: Soberanía Institucional',
    colors: '--a:#2563eb;--ad:#1d4ed8;--ar:37,99,235;',
    bg: '--bg:#010814;',
    badge: 'MUNDO 06 — SOBERANÍA INSTITUCIONAL',
    heroTitle: '🏛️ Soberanía Institucional (SMC)',
    heroSub: '// RANGO: OPERADOR INSTITUCIONAL — MERCADO INTELIGENTE',
    levels: `[
  {"n":76,"t":"Conceptos SMC","d":"Dinámica de dinero inteligente y manipulación.","xp":200,"icon":"🏛️"},
  {"n":77,"t":"Liquidez Int/Ext","d":"Ingeniería de Liquidez: cacería de stop-losses.","xp":250,"icon":"💧"},
  {"n":78,"t":"Order Blocks","d":"Identificación de zonas de compra bancaria.","xp":250,"icon":"🧱"},
  {"n":79,"t":"FVG e Imbalances","d":"Vacíos de liquidez y reequilibrio de precio.","xp":250,"icon":"⚖️"},
  {"n":80,"t":"BOS, ChoCh e IDM","d":"Confirmaciones reales de cambio de tendencia.","xp":250,"icon":"🔀"},
  {"n":81,"t":"Wyckoff Acumulación","d":"Ciclos de Wyckoff: Acumulación.","xp":250,"icon":"📦"},
  {"n":82,"t":"Wyckoff Distribución","d":"Ciclos de Wyckoff: Distribución.","xp":250,"icon":"📤"},
  {"n":83,"t":"Killzones","d":"London y NY Open: horarios institucionales.","xp":200,"icon":"🎯"},
  {"n":84,"t":"Modelo Institucional","d":"El Modelo de Compra/Venta Institucional.","xp":300,"icon":"🏦"},
  {"n":85,"t":"Multi-temporal Sniper","d":"Sincronización de HTF a LTF.","xp":250,"icon":"🔭"},
  {"n":86,"t":"Mitigación","d":"Entradas precisas tras la manipulación.","xp":250,"icon":"🎪"},
  {"n":87,"t":"Captura de Liquidez","d":"Manipulación y Captura de Liquidez.","xp":250,"icon":"🕸️"},
  {"n":88,"t":"R:R 1:5+","d":"Ratios de Riesgo Beneficio extremos.","xp":250,"icon":"⚡"},
  {"n":89,"t":"Backtesting SMC","d":"Backtesting de SMC Profesional.","xp":200,"icon":"🔬"},
  {"n":90,"t":"🏆 BOSS: Cacería Bancaria","d":"Operación de Cacería Bancaria en vivo.","xp":500,"boss":"FINAL","icon":"🏆"}
]`
  },
  {
    num: 7, floor: 7,
    title: 'InvertProfit — Mundo 7: La Cúspide del Legado',
    colors: '--a:#FFD060;--ad:#CBA052;--ar:255,208,96;',
    bg: '--bg:#010812;',
    badge: 'MUNDO 07 — LA CÚSPIDE DEL LEGADO',
    heroTitle: '✨ La Cúspide del Legado',
    heroSub: '// RANGO: MAESTRO DE CAPITAL — MAESTRÍA FINAL',
    levels: `[
  {"n":91,"t":"Estadística Aplicada","d":"Esperanza matemática aplicada al trading.","xp":250,"icon":"📊"},
  {"n":92,"t":"Teoría de Juegos","d":"Estrategias competitivas en el mercado.","xp":250,"icon":"♟️"},
  {"n":93,"t":"Ingeniería de Riesgo","d":"Drawdown y Recuperación: protección de capital.","xp":300,"icon":"🛡️"},
  {"n":94,"t":"Bots y Algoritmos","d":"Introducción a bots y lógica de programación.","xp":300,"icon":"🤖"},
  {"n":95,"t":"Portafolios Cuantitativos","d":"Ratios de Sharpe y optimización.","xp":300,"icon":"📐"},
  {"n":96,"t":"Correlación Beta","d":"Coeficiente Beta y flujos de capital.","xp":250,"icon":"🔗"},
  {"n":97,"t":"Plan Maestro de Retiro","d":"Libertad financiera sistemática.","xp":250,"icon":"🏖️"},
  {"n":98,"t":"100 Operaciones Reales","d":"Auditoría Final: historial real.","xp":500,"icon":"📋"},
  {"n":99,"t":"Ética del Inversor","d":"Ética y Legado del Inversor Élite.","xp":250,"icon":"⚖️"},
  {"n":100,"t":"🏆 GRADUACIÓN","d":"Certificación Grand Master — SOCIO AMIGOTRADE.","xp":1000,"boss":"FINAL","icon":"🏆"}
]`
  }
];

for (const w of worlds) {
  let html = template;

  // 1. Title
  html = html.replace(
    '<title>Mundo 01 — La Génesis del Capital</title>',
    `<title>${w.title}</title>`
  );

  // 2. Favicon
  html = html.replace(
    /<link rel="icon" type="image\/svg\+xml"[^>]*>/,
    FAVICON
  );

  // 3. Inject Firebase + auth + curriculum AFTER tailwind script
  html = html.replace(
    '<script src="https://cdn.tailwindcss.com"></script>',
    `<script src="https://cdn.tailwindcss.com"></script>\n${FIREBASE_BLOCK}`
  );

  // 4. Colors
  html = html.replace(
    '--a:#ff6a00;--ad:#cc4400;--ar:255,106,0;',
    w.colors
  );
  html = html.replace(
    '--bg:#0a0f1a;',
    w.bg
  );

  // 5. Config vars
  html = html.replace(
    'var WORLD_NUM=1, WORLD_FLOOR=1, TOTAL_FLOORS=7;',
    `var WORLD_NUM=${w.num}, WORLD_FLOOR=${w.floor}, TOTAL_FLOORS=7;`
  );

  // 6. Levels — replace the entire array
  html = html.replace(
    /var levels=window\._wL=\[[\s\S]*?\];/,
    `var levels=window._wL=${w.levels};`
  );

  // 7. Remove mock CURRICULUM
  html = html.replace(
    /\/\* Mock curriculum for template \*\/\nvar CURRICULUM=window\.CURRICULUM\|\|\{getLevelStatus:function\(n\)\{if\(n<=3\)return'completed';if\(n===4\)return'active';return'locked'\}\};/,
    '// Uses curriculum.js (loaded externally)'
  );

  // 8. Hero badge
  html = html.replace(
    'MUNDO 01 — LA GÉNESIS DEL CAPITAL',
    w.badge
  );
  // Hero title
  html = html.replace(
    '🔥 La Génesis del Capital',
    w.heroTitle
  );
  // Hero sub
  html = html.replace(
    '// RANGO: NOVATO — FUNDAMENTOS',
    w.heroSub
  );

  // Also replace the hero-badge id content in HTML
  html = html.replace(
    `>${w.badge}<`,
    `>${w.badge}<`
  ); // Already correct from above

  const outPath = path.join(dir, `world-${w.num}.html`);
  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`✅ world-${w.num}.html (${html.length} bytes)`);
}

console.log('\n🎉 All 7 worlds generated!');
