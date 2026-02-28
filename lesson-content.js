/**
 * LESSON-CONTENT.js — InvertProfit Lesson Steps
 * Returns lesson steps (intro, theory, quiz, summary) for each level.
 */
var LESSON_CONTENT = (function () {

  // ══════════════════════════════════════════════════════
  //  LEVEL CONTENT DATABASE
  //  Each level → array of steps: intro, theory, quiz, summary
  // ══════════════════════════════════════════════════════

  var content = {

    // ── WORLD 1: GÉNESIS (Levels 1-10) ──

    1: [
      { type:'intro', emoji:'💡', title:'¿Qué es Invertir?', subtitle:'Tu primer paso hacia la libertad financiera. Entiende el juego antes de jugarlo.' },
      { type:'theory', emoji:'📖', title:'El Concepto de Inversión', content:'Invertir es poner tu dinero a trabajar para generar rendimientos a lo largo del tiempo.\n\nA diferencia del ahorro tradicional, donde tu dinero pierde valor por la inflación, invertir te permite hacer crecer tu capital.\n\nExisten diferentes tipos de inversión: acciones, bonos, bienes raíces, criptomonedas, y más. Cada uno tiene su nivel de riesgo y potencial de retorno.\n\n<strong style="color:#D4AF37">Regla de oro:</strong> Mayor riesgo = Mayor potencial de retorno (pero también mayor potencial de pérdida).' },
      { type:'quiz', question:'¿Cuál es la principal diferencia entre ahorrar e invertir?', options:['No hay diferencia','Invertir busca generar rendimientos, ahorrar solo guarda dinero','Ahorrar es más riesgoso','Invertir es solo para ricos'], correct:1, explanation:'Invertir pone tu dinero a trabajar para generar rendimientos, mientras que ahorrar simplemente guarda tu dinero (perdiendo valor por inflación).', xp:25 },
      { type:'theory', emoji:'💰', title:'¿Por Qué Invertir?', content:'La inflación erosiona el poder adquisitivo de tu dinero cada año. Si tienes $10,000 bajo el colchón, en 10 años podrás comprar menos con ese dinero.\n\nInvertir te permite:\n• Vencer la inflación\n• Generar ingresos pasivos\n• Construir riqueza a largo plazo\n• Alcanzar la libertad financiera\n\n<strong style="color:#D4AF37">El interés compuesto</strong> es tu mejor aliado: es el efecto de ganar rendimientos sobre tus rendimientos anteriores.' },
      { type:'quiz', question:'¿Qué es el interés compuesto?', options:['Un impuesto sobre las inversiones','Ganar rendimientos sobre rendimientos previos','Una comisión del banco','El interés que pagas por un préstamo'], correct:1, explanation:'El interés compuesto es cuando ganas rendimientos no solo sobre tu capital inicial, sino también sobre los rendimientos acumulados. Es el motor del crecimiento exponencial.', xp:25 },
      { type:'quiz', question:'¿Qué sucede con $10,000 ahorrados sin invertir durante 10 años con inflación del 3% anual?', options:['Mantienen su valor','Aumentan de valor','Pierden poder adquisitivo','Se duplican'], correct:2, explanation:'Con un 3% de inflación anual, tus $10,000 perderán aproximadamente un 26% de su poder adquisitivo en 10 años. ¡Por eso es importante invertir!', xp:30 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    2: [
      { type:'intro', emoji:'📦', title:'Tipos de Activos', subtitle:'Acciones, forex, crypto, commodities. El universo financiero te espera.' },
      { type:'theory', emoji:'📊', title:'Los 4 Grandes Mercados', content:'<strong style="color:#D4AF37">1. Acciones (Stocks)</strong>\nCompras una parte de una empresa. Si la empresa crece, tu inversión crece.\n\n<strong style="color:#D4AF37">2. Forex (Divisas)</strong>\nCompras y vendes pares de monedas (EUR/USD, GBP/JPY). El mercado más líquido del mundo.\n\n<strong style="color:#D4AF37">3. Criptomonedas</strong>\nActivos digitales como Bitcoin y Ethereum. Alta volatilidad, alto potencial.\n\n<strong style="color:#D4AF37">4. Commodities</strong>\nMaterias primas: oro, petróleo, trigo. Se mueven por oferta y demanda global.' },
      { type:'quiz', question:'¿Cuál es el mercado más líquido del mundo?', options:['Acciones de EE.UU.','Criptomonedas','Forex (Divisas)','Commodities'], correct:2, explanation:'El mercado Forex mueve más de 7.5 TRILLONES de dólares al día, haciéndolo el mercado más líquido del planeta.', xp:25 },
      { type:'quiz', question:'Cuando compras una acción, ¿qué estás adquiriendo?', options:['Un préstamo a la empresa','Una parte de propiedad de la empresa','Un contrato de seguro','Una deuda corporativa'], correct:1, explanation:'Al comprar una acción, te conviertes en copropietario de la empresa. Si la empresa prospera, el valor de tu acción sube.', xp:25 },
      { type:'quiz', question:'¿Qué commodity se considera tradicionalmente un "refugio seguro"?', options:['Petróleo','Trigo','Oro','Cobre'], correct:2, explanation:'El oro es considerado un refugio seguro porque tiende a mantener o aumentar su valor en tiempos de incertidumbre económica.', xp:30 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    3: [
      { type:'intro', emoji:'🏦', title:'Tu Primera Cuenta', subtitle:'Crea tu cuenta de broker paso a paso. Es hora de entrar al juego.' },
      { type:'theory', emoji:'🏦', title:'Eligiendo un Broker', content:'Un broker es tu puerta de entrada al mercado. Es la plataforma que ejecuta tus órdenes de compra y venta.\n\n<strong style="color:#D4AF37">Factores clave al elegir broker:</strong>\n• Regulación (SEC, FCA, CNMV)\n• Comisiones y spreads\n• Plataforma de trading\n• Atención al cliente\n• Depósito mínimo\n\n<strong style="color:#ef4444">¡Cuidado!</strong> Nunca uses brokers no regulados. Verifica siempre la licencia.' },
      { type:'quiz', question:'¿Qué es lo MÁS importante al elegir un broker?', options:['Que tenga app bonita','Que esté regulado por una autoridad financiera','Que tenga el depósito mínimo más bajo','Que ofrezca bonos de bienvenida'], correct:1, explanation:'La regulación es lo más importante. Un broker regulado protege tu dinero y sigue normas estrictas. Los bonos y diseño bonito no protegen tu capital.', xp:25 },
      { type:'quiz', question:'¿Qué es un "spread" en trading?', options:['La ganancia del trader','La diferencia entre precio de compra y venta','Una comisión fija','Un tipo de orden'], correct:1, explanation:'El spread es la diferencia entre el precio de compra (ask) y el precio de venta (bid). Es como el broker gana dinero en muchos casos.', xp:25 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    4: [
      { type:'intro', emoji:'📈', title:'Leer un Gráfico', subtitle:'Entiende los ejes, el tiempo y el precio. Tu mapa del tesoro.' },
      { type:'theory', emoji:'📈', title:'Anatomía de un Gráfico', content:'Un gráfico de precios es tu herramienta principal como trader.\n\n<strong style="color:#D4AF37">Eje X (horizontal):</strong> El tiempo — puede ser minutos, horas, días, semanas.\n\n<strong style="color:#D4AF37">Eje Y (vertical):</strong> El precio del activo.\n\nCada punto en el gráfico representa un precio en un momento específico.\n\n<strong style="color:#D4AF37">Tipos de gráficos:</strong>\n• Línea: Simple, conecta precios de cierre\n• Barras: Muestra apertura, cierre, máximo, mínimo\n• Velas japonesas: El más popular, visual e informativo' },
      { type:'quiz', question:'¿Qué representa el eje Y (vertical) en un gráfico de trading?', options:['El volumen','El tiempo','El precio','Los indicadores'], correct:2, explanation:'El eje Y siempre muestra el precio del activo. El eje X muestra el tiempo.', xp:25 },
      { type:'quiz', question:'¿Cuál es el tipo de gráfico más usado por traders?', options:['Gráfico de línea','Gráfico de barras','Gráfico de velas japonesas','Gráfico de puntos'], correct:2, explanation:'Las velas japonesas son el estándar de la industria porque muestran apertura, cierre, máximo y mínimo de forma visual y clara.', xp:25 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    5: [
      { type:'intro', emoji:'🕯️', title:'Velas Japonesas Básicas', subtitle:'El lenguaje visual del mercado. Aprende a leer cada vela.' },
      { type:'theory', emoji:'🕯️', title:'Anatomía de una Vela', content:'Cada vela japonesa te cuenta una historia:\n\n<strong style="color:#22c55e">Vela VERDE (Alcista):</strong> El precio cerró MÁS ALTO que donde abrió. Los compradores ganaron.\n\n<strong style="color:#ef4444">Vela ROJA (Bajista):</strong> El precio cerró MÁS BAJO que donde abrió. Los vendedores ganaron.\n\n<strong style="color:#D4AF37">Cuerpo:</strong> La diferencia entre apertura y cierre.\n<strong style="color:#D4AF37">Mechas/Sombras:</strong> Los extremos que alcanzó el precio (máximo y mínimo).\n\nUna mecha larga superior = rechazo del precio alto.\nUna mecha larga inferior = rechazo del precio bajo.' },
      { type:'quiz', question:'Si una vela tiene cuerpo verde, ¿qué significa?', options:['El precio bajó','El precio cerró más alto que donde abrió','Hubo poco volumen','Es un patrón de reversión'], correct:1, explanation:'Una vela verde (alcista) indica que el precio de cierre fue superior al precio de apertura. Los compradores dominaron esa sesión.', xp:30 },
      { type:'quiz', question:'¿Qué indica una mecha inferior muy larga?', options:['Que el precio subió mucho','Que hubo rechazo en precios bajos','Que el mercado está cerrado','Que hay poco volumen'], correct:1, explanation:'Una mecha inferior larga indica que los vendedores empujaron el precio hacia abajo, pero los compradores lo rechazaron y lo empujaron de vuelta.', xp:30 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:200 }
    ],

    6: [
      { type:'intro', emoji:'⚡', title:'BOSS: Primera Operación', subtitle:'¡Es tu momento! Ejecuta tu primera operación simulada.' },
      { type:'theory', emoji:'⚡', title:'Preparando tu Operación', content:'Antes de operar necesitas:\n\n<strong style="color:#D4AF37">1. Análisis:</strong> ¿Por qué quieres entrar? ¿Qué ves en el gráfico?\n\n<strong style="color:#D4AF37">2. Plan de entrada:</strong> ¿A qué precio compras o vendes?\n\n<strong style="color:#D4AF37">3. Stop Loss:</strong> ¿Cuánto estás dispuesto a perder? (SIEMPRE define esto ANTES).\n\n<strong style="color:#D4AF37">4. Take Profit:</strong> ¿Dónde tomarás ganancias?\n\n<strong style="color:#ef4444">REGLA #1:</strong> Nunca arriesgues más del 1-2% de tu cuenta en una sola operación.' },
      { type:'quiz', question:'¿Qué DEBES definir ANTES de abrir una operación?', options:['Solo el take profit','Solo el precio de entrada','Stop loss Y take profit','Nada, improvisas sobre la marcha'], correct:2, explanation:'Siempre debes tener un plan completo: entrada, stop loss y take profit definidos ANTES de ejecutar. Operar sin plan es apostar.', xp:40 },
      { type:'quiz', question:'¿Cuál es la regla de riesgo máximo recomendada por operación?', options:['10% de tu cuenta','50% de tu cuenta','1-2% de tu cuenta','No hay límite'], correct:2, explanation:'La regla de oro es no arriesgar más del 1-2% de tu capital en una sola operación. Esto protege tu cuenta de rachas perdedoras.', xp:40 },
      { type:'quiz', question:'¿Qué es un Stop Loss?', options:['Una orden que cierra tu posición automáticamente si el precio va en tu contra','Un indicador técnico','Un tipo de vela japonesa','La ganancia mínima que aceptas'], correct:0, explanation:'El Stop Loss es una orden automática que cierra tu posición a un precio predeterminado para limitar tus pérdidas. ¡Es tu seguro de vida como trader!', xp:40 },
      { type:'summary', title:'¡BOSS Completado!', xpTotal:350 }
    ],

    7: [
      { type:'intro', emoji:'🧱', title:'Soportes y Resistencias', subtitle:'Los muros invisibles del precio. Aprende a identificarlos.' },
      { type:'theory', emoji:'🧱', title:'Zonas Clave del Precio', content:'<strong style="color:#22c55e">Soporte:</strong> Un nivel de precio donde la demanda es suficientemente fuerte para evitar que el precio baje más. El precio "rebota" hacia arriba.\n\n<strong style="color:#ef4444">Resistencia:</strong> Un nivel de precio donde la oferta es suficientemente fuerte para evitar que el precio suba más. El precio "rebota" hacia abajo.\n\n<strong style="color:#D4AF37">Clave:</strong> Cuando un soporte se rompe, se convierte en resistencia. Y viceversa. Cuantas más veces el precio toque un nivel sin romperlo, más fuerte es ese nivel.' },
      { type:'quiz', question:'¿Qué sucede cuando un nivel de soporte se rompe?', options:['Desaparece','Se convierte en resistencia','Se hace más fuerte','No cambia'], correct:1, explanation:'Cuando un soporte se rompe, típicamente se convierte en resistencia. Esto se llama "cambio de polaridad" y es un concepto fundamental.', xp:25 },
      { type:'quiz', question:'¿Qué indica que un nivel de soporte/resistencia es "fuerte"?', options:['Que es un número redondo','Que el precio lo ha tocado muchas veces sin romperlo','Que está cerca del precio actual','Que fue creado recientemente'], correct:1, explanation:'Cuantas más veces el precio respete un nivel (rebote en él), más fuerte se considera. Múltiples toques confirman la importancia de esa zona.', xp:25 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    8: [
      { type:'intro', emoji:'📊', title:'Tendencias del Mercado', subtitle:'Alcista, bajista, lateral. Lee la dirección del mercado.' },
      { type:'theory', emoji:'📊', title:'Las 3 Tendencias', content:'<strong style="color:#22c55e">Tendencia Alcista (Uptrend):</strong>\nEl precio hace máximos más altos y mínimos más altos. Los compradores dominan.\n\n<strong style="color:#ef4444">Tendencia Bajista (Downtrend):</strong>\nEl precio hace máximos más bajos y mínimos más bajos. Los vendedores dominan.\n\n<strong style="color:#D4AF37">Lateral (Range):</strong>\nEl precio se mueve entre un soporte y una resistencia sin dirección clara.\n\n<strong style="color:#D4AF37">Regla:</strong> "La tendencia es tu amiga." Operar a favor de la tendencia aumenta significativamente tus probabilidades de éxito.' },
      { type:'quiz', question:'¿Cómo identificas una tendencia alcista?', options:['El precio baja constantemente','Máximos más altos y mínimos más altos','El precio se mueve en línea recta','El volumen es bajo'], correct:1, explanation:'Una tendencia alcista se identifica por una serie de máximos más altos (higher highs) y mínimos más altos (higher lows).', xp:25 },
      { type:'quiz', question:'¿Qué significa "la tendencia es tu amiga"?', options:['Que siempre compres','Que operes en la dirección de la tendencia dominante','Que nunca vendas','Que ignores los retrocesos'], correct:1, explanation:'Operar a favor de la tendencia aumenta tus probabilidades de éxito. Ir contra la tendencia es como nadar contra la corriente.', xp:25 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    9: [
      { type:'intro', emoji:'🛡️', title:'Gestión de Riesgo Básica', subtitle:'Protege tu capital desde el día 1. La regla más importante.' },
      { type:'theory', emoji:'🛡️', title:'El Arte de No Perder', content:'La gestión de riesgo es LO MÁS IMPORTANTE en trading. No es cuánto ganas, es cuánto no pierdes.\n\n<strong style="color:#D4AF37">Regla del 1-2%:</strong> Nunca arriesgues más del 1-2% de tu cuenta por operación.\n\n<strong style="color:#D4AF37">Ratio Riesgo/Beneficio:</strong> Siempre busca operaciones donde puedas ganar al menos 2x lo que arriesgas (ratio 1:2).\n\n<strong style="color:#D4AF37">Ejemplo:</strong> Si arriesgas $100 (stop loss), tu objetivo debe ser ganar al menos $200 (take profit).\n\nCon un ratio 1:2, solo necesitas ganar el 40% de tus operaciones para ser rentable a largo plazo.' },
      { type:'quiz', question:'Con un ratio riesgo/beneficio de 1:2, ¿qué porcentaje de acierto necesitas para ser rentable?', options:['80%','60%','40%','20%'], correct:2, explanation:'Con ratio 1:2, si ganas $2 por cada $1 que arriesgas, solo necesitas acertar el 40% de las veces para ser rentable. ¡Las matemáticas están a tu favor!', xp:25 },
      { type:'quiz', question:'Si tu cuenta tiene $5,000 y usas la regla del 2%, ¿cuánto es lo máximo que deberías arriesgar por operación?', options:['$500','$250','$100','$1,000'], correct:2, explanation:'2% de $5,000 = $100. Esa es la pérdida máxima que deberías aceptar en una sola operación.', xp:25 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:150 }
    ],

    10: [
      { type:'intro', emoji:'🏆', title:'EXAMEN FINAL: Principiante', subtitle:'Demuestra lo aprendido y desbloquea el Mundo Intermedio.' },
      { type:'quiz', question:'¿Qué mercado mueve más de 7 trillones de dólares al día?', options:['Acciones','Forex','Criptomonedas','Commodities'], correct:1, explanation:'El mercado Forex es el más grande y líquido del mundo, con más de 7.5 trillones de USD en volumen diario.', xp:40 },
      { type:'quiz', question:'¿Qué es un soporte?', options:['Un nivel donde el precio tiende a dejar de bajar','Un indicador técnico','Un tipo de orden','Una comisión'], correct:0, explanation:'Un soporte es una zona donde la demanda es fuerte y el precio tiende a rebotar al alza.', xp:40 },
      { type:'quiz', question:'Una vela roja con mecha inferior larga indica:', options:['Los vendedores dominaron completamente','Los compradores rechazaron precios bajos','El mercado está cerrado','No hay actividad'], correct:1, explanation:'La mecha inferior larga indica que los compradores rechazaron los precios más bajos, empujando el precio de vuelta hacia arriba.', xp:40 },
      { type:'quiz', question:'¿Cuál es la primera regla de gestión de riesgo?', options:['Diversificar siempre','Usar apalancamiento','No arriesgar más del 1-2% por operación','Invertir todo en una sola posición'], correct:2, explanation:'La regla fundamental es nunca arriesgar más del 1-2% de tu capital total en una sola operación.', xp:50 },
      { type:'quiz', question:'Para identificar una tendencia bajista buscas:', options:['Máximos más altos','Mínimos más altos','Máximos más bajos y mínimos más bajos','Volumen creciente'], correct:2, explanation:'Una tendencia bajista se confirma con una serie de lower highs y lower lows consecutivos.', xp:50 },
      { type:'summary', title:'¡MUNDO 1 COMPLETADO!', xpTotal:500 }
    ]
  };

  // ── Fallback generator for levels without custom content ──
  function generateFallback(levelNum) {
    var info = typeof CURRICULUM !== 'undefined' ? CURRICULUM.findLevel(levelNum) : null;
    var title = 'Nivel ' + levelNum;
    return [
      { type:'intro', emoji:'📚', title: title, subtitle:'Contenido de la lección en desarrollo.' },
      { type:'theory', emoji:'📖', title: title + ' — Teoría', content:'Este nivel está siendo desarrollado con contenido premium.\n\nMuy pronto encontrarás aquí lecciones completas con teoría avanzada, ejemplos reales del mercado y ejercicios prácticos.\n\n<strong style="color:#D4AF37">¡Gracias por tu paciencia!</strong>' },
      { type:'quiz', question:'¿Cuál es la regla más importante del trading?', options:['Ganar siempre','Gestionar el riesgo','Usar máximo apalancamiento','Seguir a los influencers'], correct:1, explanation:'La gestión de riesgo es la base de todo trading exitoso. Sin ella, incluso las mejores estrategias fracasan.', xp:30 },
      { type:'summary', title:'¡Nivel Completado!', xpTotal:100 }
    ];
  }

  // ══════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════
  function getSteps(levelNum) {
    if (content[levelNum]) return content[levelNum];
    return generateFallback(levelNum);
  }

  return {
    getSteps: getSteps
  };

})();
