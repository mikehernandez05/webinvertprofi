// Shared curriculum data for all worlds
var CURRICULUM = {
    worlds: [
        { id: 1, name: 'Génesis', page: 'niveles-novato.html', levels: [
            {n:1,t:'Filosofía InvertProfit y AmigoTrade',d:'Conoce la misión, visión y tu compañero de viaje: AmigoTrade.',xp:200},
            {n:2,t:'Historia del Dinero y los Mercados',d:'Desde el trueque hasta Wall Street. Entiende cómo nació el sistema financiero moderno.',xp:200},
            {n:3,t:'¿Qué es una Acción? El Origen del Equity',d:'Aprende qué significa ser dueño de una parte de una empresa.',xp:200},
            {n:4,t:'Participantes del Mercado',d:'Retail vs Institucional. Descubre quiénes mueven el mercado y cómo.',xp:200},
            {n:5,t:'Tipos de Activos: Divisas, Metales e Índices',d:'Forex, oro, S&P 500… Conoce los instrumentos del trader.',xp:200},
            {n:6,t:'Tipos de Activos: Commodities y Criptomonedas',d:'Petróleo, gas, Bitcoin. El universo de activos alternativos.',xp:200},
            {n:7,t:'Anatomía de una Orden: Market, Limit y Stop',d:'Domina todos los tipos de órdenes para entrar y salir del mercado.',xp:200},
            {n:8,t:'El Lenguaje del Precio: Pips, Lotes y Spread',d:'Habla el idioma del trader. Pip a pip hacia la maestría.',xp:200},
            {n:9,t:'Horarios y Sesiones (El Reloj del Dinero)',d:'Londres, Nueva York, Tokio. Aprende cuándo opera el mundo.',xp:200},
            {n:10,t:'⚡ BOSS: El Primer Trade Simulado',d:'Examen de entrada. Ejecuta tu primer trade simulado y obtén el Pasaporte del Inversor.',xp:500,boss:'BOSS'}
        ]},
        { id: 2, name: 'Cartografía', page: 'niveles-intermedio.html', levels: [
            {n:11,t:'Patrones de Velas',d:'Doji, martillo, estrella fugaz. Domina los patrones de velas japonesas.',xp:200},
            {n:12,t:'Fibonacci Retracements',d:'La herramienta mágica. Aprende a trazar niveles de Fibonacci.',xp:200},
            {n:13,t:'RSI & MACD Avanzado',d:'Divergencias, señales de sobrecompra/sobreventa.',xp:200},
            {n:14,t:'Zonas de Oferta y Demanda',d:'Supply & demand. Las zonas donde los grandes players mueven el mercado.',xp:200},
            {n:15,t:'Stop Loss Profesional',d:'No es cuánto ganas, es cuánto no pierdes.',xp:200},
            {n:16,t:'⚡ BOSS: Análisis Multi-Timeframe',d:'Analiza un activo en 4 timeframes distintos.',xp:400,boss:'BOSS'},
            {n:17,t:'Estructura de Mercado',d:'Break of structure, change of character.',xp:200},
            {n:18,t:'Order Blocks Básicos',d:'Identifica las zonas donde las instituciones colocan sus órdenes.',xp:200},
            {n:19,t:'Liquidez del Mercado',d:'Dónde está el dinero. Comprende cómo se mueve la liquidez.',xp:200},
            {n:20,t:'Gestión Avanzada de Riesgo',d:'Risk/reward ratio, position sizing, correlación.',xp:200},
            {n:21,t:'Backtesting & Journaling',d:'Tu diario de trading. Evalúa tu rendimiento.',xp:200},
            {n:22,t:'🏆 FINAL: Examen Intermedio',d:'Demuestra tu dominio del análisis técnico avanzado.',xp:600,boss:'FINAL'}
        ]},
        { id: 3, name: 'Anatomía', page: 'niveles-experto.html', levels: [
            {n:23,t:'Smart Money Concepts',d:'Comprende cómo operan las instituciones: order blocks, liquidity pools.',xp:300},
            {n:24,t:'ICT Power of 3',d:'Acumulación, manipulación, distribución.',xp:300},
            {n:25,t:'Order Flow & Volume Profile',d:'Lee el flujo de órdenes como un profesional.',xp:300},
            {n:26,t:'Wyckoff Method',d:'El método legendario. Fases de acumulación y distribución.',xp:300},
            {n:27,t:'Breaker Blocks & Mitigation',d:'Cuando los order blocks fallan.',xp:300},
            {n:28,t:'⚡ BOSS: Lectura Institucional',d:'Analiza un gráfico real usando SMC, ICT y Wyckoff.',xp:500,boss:'BOSS'},
            {n:29,t:'Trading Algorítmico Intro',d:'Automatiza tus estrategias. Introducción a bots.',xp:300},
            {n:30,t:'Correlaciones Macro',d:'DXY, bonos, commodities. Cómo se conectan los mercados.',xp:300},
            {n:31,t:'Gestión de Portafolio Pro',d:'Diversificación avanzada, hedging.',xp:300},
            {n:32,t:'Psicología Avanzada',d:'Peak performance, estado de flujo.',xp:300},
            {n:33,t:'Plan de Trading Institucional',d:'Crea tu edge definitivo.',xp:300},
            {n:34,t:'🏆 FINAL: El Gran Examen',d:'Demuestra dominio total del trading profesional.',xp:800,boss:'FINAL'}
        ]},
        { id: 4, name: 'Sincronía', page: 'niveles-mundo4.html', levels: [
            {n:46,t:'Medias Móviles: El Promedio de la Masa',d:'SMA, EMA. El indicador más utilizado del mundo.',xp:200},
            {n:47,t:'RSI y Estocástico: Detectando el Agotamiento',d:'Sobrecompra y sobreventa. Señales de reversión.',xp:200},
            {n:48,t:'Bandas de Bollinger y Desviación Estándar',d:'Volatilidad visual.',xp:200},
            {n:49,t:'El MACD: El Pulso de la Tendencia',d:'Convergencia y divergencia.',xp:200},
            {n:50,t:'Fibonacci: El Retroceso Maestro',d:'Los niveles áureos del mercado.',xp:250},
            {n:51,t:'Extensiones de Fibonacci para Targets',d:'Proyecta objetivos de precio.',xp:200},
            {n:52,t:'Microestructura: El Libro de Órdenes',d:'Dentro del motor del mercado.',xp:250},
            {n:53,t:'Tape Reading: Lectura de la Cinta',d:'El arte de leer el flujo de órdenes.',xp:250},
            {n:54,t:'Filtro de Señales con 94% de Confianza',d:'Combina indicadores para señales de alta probabilidad.',xp:300},
            {n:55,t:'Estrategia de Scalping (Minutos)',d:'Operaciones rápidas.',xp:200},
            {n:56,t:'Estrategia de Day Trading (Horas)',d:'Opera intradía.',xp:200},
            {n:57,t:'Estrategia de Swing Trading (Días/Semanas)',d:'Captura movimientos medianos.',xp:200},
            {n:58,t:'Estrategia de Position Trading (Meses/Años)',d:'La visión macro.',xp:200},
            {n:59,t:'Gestión de la Salida: Trail Stop Inteligente',d:'Saber salir es más importante que saber entrar.',xp:250},
            {n:60,t:'⚡ BOSS: Operativa Sincronizada 100% IA',d:'Despliega una estrategia híbrida completa.',xp:500,boss:'BOSS'}
        ]},
        { id: 5, name: 'Estrategia', page: 'niveles-mundo5.html', levels: [
            {n:61,t:'Macroeconomía: El Sol del Sistema',d:'Todo gira alrededor de la macro.',xp:200},
            {n:62,t:'El Ciclo de Deuda',d:'Ray Dalio decodificado.',xp:250},
            {n:63,t:'Tipos de Interés y la FED',d:'La herramienta más poderosa del banco central.',xp:200},
            {n:64,t:'Inflación (IPC) y Deflación: Impacto Real',d:'Cómo la inflación afecta tus inversiones.',xp:200},
            {n:65,t:'El Índice Dólar (DXY) y su Correlación',d:'El rey de las divisas.',xp:200},
            {n:66,t:'Geopolítica y Commodities (Oro/WTI)',d:'Guerras, tratados y precios.',xp:250},
            {n:67,t:'Mercado de Bonos: Renta Fija',d:'El mercado más grande del mundo.',xp:200},
            {n:68,t:'Derivados I: Introducción a Opciones',d:'Calls, Puts, primas.',xp:250},
            {n:69,t:'Derivados II: Futuros Financieros',d:'Contratos que mueven billones.',xp:250},
            {n:70,t:'Psicología del 1%: Dominio del Ego',d:'La mentalidad que separa a los ganadores.',xp:200},
            {n:71,t:'Sesgos Cognitivos: El Enemigo Interno',d:'Confirmación, anclaje, aversión a la pérdida.',xp:200},
            {n:72,t:'Bio-Hacking: El Cuerpo del Trader',d:'Dopamina, cortisol, sueño.',xp:200},
            {n:73,t:'Planificación Fiscal para Inversores',d:'Impuestos y estrategias legales.',xp:200},
            {n:74,t:'Diversificación en Real Estate',d:'De las pantallas al mundo real.',xp:200},
            {n:75,t:'⚡ BOSS: Tesis Global Macro',d:'Presenta tu tesis macroeconómica completa.',xp:500,boss:'BOSS'}
        ]},
        { id: 6, name: 'Soberanía', page: 'niveles-mundo6.html', levels: [
            {n:76,t:'Conceptos de Smart Money (SMC)',d:'La dinámica del dinero inteligente.',xp:200},
            {n:77,t:'Liquidez Interna vs Externa',d:'Pools de liquidez que mueven el precio.',xp:250},
            {n:78,t:'Order Blocks: Zonas de Interés Bancario',d:'Identifica dónde compran y venden los bancos.',xp:250},
            {n:79,t:'FVG (Fair Value Gaps) e Imbalances',d:'Vacíos de liquidez.',xp:250},
            {n:80,t:'Estructura: BOS, ChoCh e IDM',d:'Break of Structure y Change of Character.',xp:250},
            {n:81,t:'Ciclos de Wyckoff: Acumulación',d:'Cómo los institucionales cargan.',xp:250},
            {n:82,t:'Ciclos de Wyckoff: Distribución',d:'Cómo los institucionales descargan.',xp:250},
            {n:83,t:'Killzones Operativas: London y NY Open',d:'Horarios de máxima volatilidad institucional.',xp:200},
            {n:84,t:'El Modelo de Compra/Venta Institucional',d:'El framework completo.',xp:300},
            {n:85,t:'Análisis Multi-temporal Sniper',d:'Sincronización de HTF a LTF.',xp:250},
            {n:86,t:'Mitigación y Re-entrada Precisa',d:'Entradas de cirujano.',xp:250},
            {n:87,t:'Manipulación y Captura de Liquidez',d:'Cómo los market makers cazan stop-losses.',xp:250},
            {n:88,t:'Ratios de Riesgo Beneficio 1:5+',d:'Operativa con ratios extremos.',xp:250},
            {n:89,t:'Backtesting de SMC Profesional',d:'Valida tu estrategia.',xp:200},
            {n:90,t:'⚡ BOSS: Operación de Cacería Bancaria',d:'Ejecuta una operación SMC completa.',xp:500,boss:'BOSS'}
        ]},
        { id: 7, name: 'Legado', page: 'niveles-mundo7.html', levels: [
            {n:91,t:'Estadística y Esperanza Matemática',d:'La base científica del trading rentable.',xp:250},
            {n:92,t:'Teoría de Juegos Aplicada',d:'Estrategias competitivas en el mercado.',xp:250},
            {n:93,t:'Ingeniería de Riesgo y Gestión de Drawdown',d:'Protege tu capital.',xp:300},
            {n:94,t:'Introducción a Bots y Algoritmos (EA)',d:'Automatiza tu trading.',xp:300},
            {n:95,t:'Optimización de Portafolios Cuantitativos',d:'Ratios de Sharpe, Sortino.',xp:300},
            {n:96,t:'Correlación Intermercado y Coeficiente Beta',d:'Cómo se conectan todos los mercados.',xp:250},
            {n:97,t:'Creación de un Plan Maestro de Retiro',d:'Libertad financiera sistemática.',xp:250},
            {n:98,t:'Auditoría Final: 100 Operaciones Reales',d:'Demuestra consistencia.',xp:500},
            {n:99,t:'Ética y Legado del Inversor Élite',d:'Trading como filosofía de vida.',xp:250},
            {n:100,t:'🏆 GRADUACIÓN: Certificación Grand Master',d:'El examen final. Certificación oficial.',xp:1000,boss:'FINAL'}
        ]}
    ],

    // Find a level by its global number
    findLevel: function(levelNum) {
        for (var w = 0; w < this.worlds.length; w++) {
            var world = this.worlds[w];
            for (var l = 0; l < world.levels.length; l++) {
                if (world.levels[l].n === levelNum) {
                    return { world: world, level: world.levels[l], worldIndex: w, levelIndex: l };
                }
            }
        }
        return null;
    },

    // Get the next level after a given level number
    getNextLevel: function(levelNum) {
        var current = this.findLevel(levelNum);
        if (!current) return null;
        if (current.levelIndex < current.world.levels.length - 1) {
            var next = current.world.levels[current.levelIndex + 1];
            return { world: current.world, level: next };
        }
        if (current.worldIndex < this.worlds.length - 1) {
            var nextWorld = this.worlds[current.worldIndex + 1];
            return { world: nextWorld, level: nextWorld.levels[0] };
        }
        return null;
    }
};

// ══ Persistence ══
CURRICULUM.completeLevel = function(levelNum) {
    var completed = JSON.parse(localStorage.getItem('ip_completed_levels') || '[]');
    if (completed.indexOf(levelNum) === -1) {
        completed.push(levelNum);
        localStorage.setItem('ip_completed_levels', JSON.stringify(completed));
    }
};
CURRICULUM.getCompletedLevels = function() {
    return JSON.parse(localStorage.getItem('ip_completed_levels') || '[]');
};
CURRICULUM.getLevelStatus = function(levelNum) {
    var completed = this.getCompletedLevels();
    if (completed.indexOf(levelNum) !== -1) return 'completed';
    var info = this.findLevel(levelNum);
    if (!info) return 'locked';
    // First level of first world is always active
    if (info.worldIndex === 0 && info.levelIndex === 0) return 'active';
    // If previous level in sequence is completed, this one is active
    var prevLevel;
    if (info.levelIndex > 0) {
        prevLevel = info.world.levels[info.levelIndex - 1];
    } else if (info.worldIndex > 0) {
        var prevWorld = this.worlds[info.worldIndex - 1];
        prevLevel = prevWorld.levels[prevWorld.levels.length - 1];
    }
    if (prevLevel && completed.indexOf(prevLevel.n) !== -1) return 'active';
    return 'locked';
};
