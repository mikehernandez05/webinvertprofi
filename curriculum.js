/**
 * CURRICULUM.js — InvertProfit Academy Progress System
 * Manages level status, completion tracking, and world progression.
 * All data persisted in localStorage.
 */
var CURRICULUM = (function () {

  // ══════════════════════════════════════
  //  WORLD & LEVEL DEFINITIONS
  // ══════════════════════════════════════
  var worlds = [
    { id: 1, name: 'Génesis',    page: 'niveles-novato.html',      levels: [1,2,3,4,5,6,7,8,9,10] },
    { id: 2, name: 'Cartografía', page: 'niveles-intermedio.html',  levels: [11,12,13,14,15,16,17,18,19,20,21,22] },
    { id: 3, name: 'Anatomía',   page: 'niveles-experto.html',     levels: [23,24,25,26,27,28,29,30,31,32,33,34] },
    { id: 4, name: 'Sincronía',  page: 'niveles-mundo4.html',      levels: [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60] },
    { id: 5, name: 'Estrategia', page: 'niveles-mundo5.html',      levels: [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75] },
    { id: 6, name: 'Soberanía',  page: 'niveles-mundo6.html',      levels: [76,77,78,79,80,81,82,83,84,85,86,87,88,89,90] },
    { id: 7, name: 'Legado',     page: 'niveles-mundo7.html',      levels: [91,92,93,94,95,96,97,98,99,100] }
  ];

  // Build a flat ordered list of ALL level numbers for determining "next level"
  var allLevels = [];
  worlds.forEach(function (w) {
    w.levels.forEach(function (n) { allLevels.push(n); });
  });

  // ══════════════════════════════════════
  //  LOCAL STORAGE HELPERS
  // ══════════════════════════════════════
  var STORAGE_KEY = 'ip_completed_levels';

  function getCompleted() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      var arr = JSON.parse(raw);
      if (!Array.isArray(arr)) return [];
      return arr;
    } catch (e) { return []; }
  }

  function saveCompleted(arr) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (e) { /* silently fail in private browsing */ }
  }

  // ══════════════════════════════════════
  //  FIND WHICH WORLD A LEVEL BELONGS TO
  // ══════════════════════════════════════
  function findWorldByLevel(levelNum) {
    for (var i = 0; i < worlds.length; i++) {
      if (worlds[i].levels.indexOf(levelNum) !== -1) return worlds[i];
    }
    return null;
  }

  // ══════════════════════════════════════
  //  GET THE FIRST LEVEL THAT SHOULD BE
  //  "ACTIVE" (unlocked but not completed)
  // ══════════════════════════════════════
  function getFirstActiveLevel() {
    var completed = getCompleted();
    for (var i = 0; i < allLevels.length; i++) {
      if (completed.indexOf(allLevels[i]) === -1) return allLevels[i];
    }
    return null; // all done
  }

  // ══════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════

  /**
   * getLevelStatus(levelNum) → 'completed' | 'active' | 'locked'
   * 
   * Rules:
   *   - If level is in the completed array → 'completed'
   *   - The first non-completed level in global order → 'active'
   *   - Everything else → 'locked'
   *   - EXCEPTION: Level 1 is always at least 'active' (never locked)
   */
  function getLevelStatus(levelNum) {
    var completed = getCompleted();

    // Already completed
    if (completed.indexOf(levelNum) !== -1) return 'completed';

    // Find the first uncompleted level globally
    var firstActive = getFirstActiveLevel();

    // If this level is the first active → 'active'
    if (firstActive === levelNum) return 'active';

    // Special: level 1 should always be playable
    if (levelNum === allLevels[0] && completed.indexOf(levelNum) === -1) return 'active';

    return 'locked';
  }

  /**
   * completeLevel(levelNum) — marks level as completed and persists
   * Also unlocks the next level automatically
   */
  function completeLevel(levelNum) {
    var completed = getCompleted();
    if (completed.indexOf(levelNum) === -1) {
      completed.push(levelNum);
      saveCompleted(completed);
    }
    // Dispatch event so other parts of the page can react
    try {
      window.dispatchEvent(new CustomEvent('ip-level-completed', { detail: { level: levelNum } }));
    } catch (e) { /* old browsers */ }
  }

  /**
   * isLevelCompleted(levelNum) → boolean
   */
  function isLevelCompleted(levelNum) {
    return getCompleted().indexOf(levelNum) !== -1;
  }

  /**
   * getCompletedCount() → number of completed levels
   */
  function getCompletedCount() {
    return getCompleted().length;
  }

  /**
   * getCompletedInWorld(worldId) → number of completed levels in a world
   */
  function getCompletedInWorld(worldId) {
    var w = worlds.find(function (x) { return x.id === worldId; });
    if (!w) return 0;
    var completed = getCompleted();
    return w.levels.filter(function (n) { return completed.indexOf(n) !== -1; }).length;
  }

  /**
   * getTotalXPInWorld(worldId, levelsWithXP)
   * levelsWithXP is the array from _wLevels with .xp property
   */
  function getTotalXPInWorld(levelsArr) {
    var completed = getCompleted();
    return levelsArr.reduce(function (acc, lv) {
      return acc + (completed.indexOf(lv.n) !== -1 ? (lv.xp || 0) : 0);
    }, 0);
  }

  /**
   * findLevel(levelNum) → { world: {...}, level: {n, ...} } or null
   */
  function findLevel(levelNum) {
    var w = findWorldByLevel(levelNum);
    if (!w) return null;
    return {
      world: w,
      level: { n: levelNum }
    };
  }

  /**
   * getNextLevel(currentLevelNum) → { world: {...}, level: {n} } or null
   */
  function getNextLevel(currentLevelNum) {
    var idx = allLevels.indexOf(currentLevelNum);
    if (idx === -1 || idx >= allLevels.length - 1) return null;
    var nextNum = allLevels[idx + 1];
    var nextWorld = findWorldByLevel(nextNum);
    if (!nextWorld) return null;
    return {
      world: nextWorld,
      level: { n: nextNum }
    };
  }

  /**
   * getWorlds() → array of world objects
   */
  function getWorlds() {
    return worlds;
  }

  /**
   * getAllLevels() → flat array of all level numbers in order
   */
  function getAllLevels() {
    return allLevels.slice();
  }

  /**
   * resetProgress() — clears all saved progress (for debugging)
   */
  function resetProgress() {
    localStorage.removeItem(STORAGE_KEY);
  }

  /**
   * isWorldUnlocked(worldId) → boolean
   * A world is unlocked if:
   *  - it's World 1 (always unlocked)
   *  - all levels of the previous world are completed (the boss/final level)
   *  - OR any level in this world has already been completed
   */
  function isWorldUnlocked(worldId) {
    if (worldId === 1) return true;
    var completed = getCompleted();

    // Check if any level in this world is already active/completed
    var w = worlds.find(function (x) { return x.id === worldId; });
    if (!w) return false;

    // Check if the first level of this world is active
    var firstLevel = w.levels[0];
    var firstActiveGlobal = getFirstActiveLevel();
    if (firstActiveGlobal !== null && w.levels.indexOf(firstActiveGlobal) !== -1) return true;

    // Check if any level in this world is completed
    for (var i = 0; i < w.levels.length; i++) {
      if (completed.indexOf(w.levels[i]) !== -1) return true;
    }

    // Check if previous world's last level is completed
    var prevWorld = worlds.find(function (x) { return x.id === worldId - 1; });
    if (!prevWorld) return false;
    var lastLevelPrev = prevWorld.levels[prevWorld.levels.length - 1];
    return completed.indexOf(lastLevelPrev) !== -1;
  }

  // ══════════════════════════════════════
  //  EXPOSE PUBLIC API
  // ══════════════════════════════════════
  return {
    getLevelStatus: getLevelStatus,
    completeLevel: completeLevel,
    isLevelCompleted: isLevelCompleted,
    getCompletedCount: getCompletedCount,
    getCompletedInWorld: getCompletedInWorld,
    getTotalXPInWorld: getTotalXPInWorld,
    findLevel: findLevel,
    getNextLevel: getNextLevel,
    getWorlds: getWorlds,
    getAllLevels: getAllLevels,
    isWorldUnlocked: isWorldUnlocked,
    resetProgress: resetProgress
  };

})();
