// Study Mode Enhanced JavaScript (FULL REWRITE)
// Works everywhere by design: Focus overlay always works,
// fullscreen/orientation lock are best-effort (may be blocked). [web:144][web:134]

/* ==================== TIMER VARIABLES ==================== */
let timerInterval = null;
let totalSeconds = 25 * 60;
let currentSeconds = totalSeconds;
let isRunning = false;
let currentMode = "focus"; // focus | short | long

/* ==================== STATS VARIABLES ==================== */
let sessionsCompleted = parseInt(localStorage.getItem("sessionsCompleted"), 10) || 0;
let totalMinutes = parseInt(localStorage.getItem("totalMinutes"), 10) || 0;
let currentStreak = parseInt(localStorage.getItem("currentStreak"), 10) || 0;

/* ==================== TO-DO VARIABLES ==================== */
let todos = JSON.parse(localStorage.getItem("todos") || "[]");

/* ==================== MUSIC VARIABLES ==================== */
let currentSound = null;
const audioPlayer = document.getElementById("audioPlayer");

const soundLibrary = {
  lofi: "https://www.youtube.com/watch?v=jfKfPfyJRdk",
  rain: "https://www.youtube.com/watch?v=mPZkdNFkNps",
  cafe: "https://www.youtube.com/watch?v=gaGdKu_a-kY",
  nature: "https://www.youtube.com/watch?v=ln3wAdRAim4",
  ocean: "https://www.youtube.com/watch?v=WHPEKLQID4U",
  fire: "https://www.youtube.com/watch?v=L_LUpnjgPso"
};

/* ==================== BREAK ACTIVITIES ==================== */
const breakActivities = {
  short: [
    { icon: "💧", title: "Drink Water", desc: "Stay hydrated! Drink a glass of water to refresh your mind and body." },
    { icon: "👁️", title: "20-20-20 Rule", desc: "Look at something 20 feet away for 20 seconds to rest your eyes." },
    { icon: "🧘", title: "Quick Stretch", desc: "Stand up and stretch your arms, neck, and back for 2 minutes." },
    { icon: "🚶", title: "Walk Around", desc: "Take a short walk around your room or house to get blood flowing." },
    { icon: "🎵", title: "Listen to Music", desc: "Play your favorite upbeat song to energize yourself!" },
    { icon: "🌬️", title: "Deep Breathing", desc: "Take 10 deep breaths: inhale for 4, hold for 4, exhale for 4." },
    { icon: "🪟", title: "Look Outside", desc: "Gaze out the window at nature or the sky for a mental refresh." },
    { icon: "📱", title: "Quick Message", desc: "Send a quick text to a friend or family member (set a timer!)" }
  ],
  long: [
    { icon: "🍎", title: "Healthy Snack", desc: "Eat a nutritious snack: fruit, nuts, or yogurt to fuel your brain." },
    { icon: "🏃", title: "Quick Exercise", desc: "Do 5 minutes of jumping jacks, push-ups, or yoga stretches." },
    { icon: "📞", title: "Call Someone", desc: "Have a short chat with a friend or family member to recharge." },
    { icon: "🌿", title: "Go Outside", desc: "Step outside for fresh air and sunlight. Walk around your yard." },
    { icon: "🧊", title: "Wash Your Face", desc: "Splash cold water on your face to wake up and feel refreshed." },
    { icon: "🎮", title: "Quick Game", desc: "Play a 5-minute mobile game or puzzle (set a timer!)" },
    { icon: "📖", title: "Read for Fun", desc: "Read a chapter of a novel or interesting article (not study material!)" },
    { icon: "🧹", title: "Tidy Up", desc: "Organize your desk or room for 10 minutes. A clean space = clear mind!" }
  ]
};

/* ==================== QUOTES ==================== */
const quotes = [
  { text: "Education is the most powerful weapon which you can use to change the world.", author: "Nelson Mandela" },
  { text: "The beautiful thing about learning is that no one can take it away from you.", author: "B.B. King" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The expert in anything was once a beginner.", author: "Helen Hayes" },
  { text: "Your education is a dress rehearsal for a life that is yours to lead.", author: "Nora Ephron" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "It always seems impossible until it's done.", author: "Nelson Mandela" },
  { text: "အိပ်တော့မှာလား သူများတွေကတော့စာကြည့်နေအုံးမှာပဲ။.", author: "HST Team" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Success is the sum of small efforts repeated day in and day out.", author: "Robert Collier" },
  { text: "Education is not preparation for life; education is life itself.", author: "John Dewey" },
  { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { text: "Don't let what you cannot do interfere with what you can do.", author: "John Wooden" },
  { text: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" }
];

/* ==================== INIT ==================== */
document.addEventListener("DOMContentLoaded", () => {
  console.log("🍅 Study Mode Enhanced Ready!");

  updateStatsDisplay();
  loadTodos();
  setupEventListeners();
  loadThemePreference();
  loadMusicPreference();

  updateDisplay();
  updateProgress();

  // Request notification permission
  if ("Notification" in window && Notification.permission === "default") {
    Notification.requestPermission();
  }

  console.log("✅ Study Mode Enhanced Loaded!");
  console.log("💡 Shortcuts: SPACE = Start/Pause, CTRL+R = Reset");
});

/* ==================== TIMER FUNCTIONS ==================== */
function setTimer(minutes) {
  totalSeconds = minutes * 60;
  currentSeconds = totalSeconds;
  updateDisplay();
  updateProgress();
}

function updateDisplay() {
  const minutes = Math.floor(currentSeconds / 60);
  const seconds = currentSeconds % 60;
  const display = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  const el = document.getElementById("timerDisplay");
  if (el) el.textContent = display;
}

function updateProgress() {
  const bar = document.getElementById("progressBar");
  if (!bar) return;

  const circumference = 2 * Math.PI * 130;
  const progress = totalSeconds > 0 ? currentSeconds / totalSeconds : 0;
  const offset = circumference * (1 - progress);
  bar.style.strokeDashoffset = offset;
}

function clearTimerInterval() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

function startTimer() {
  if (isRunning) return;

  isRunning = true;
  document.getElementById("startBtn").innerHTML = "⏸️ Pause";
  document.getElementById("timerCircle")?.classList.add("active");

  clearTimerInterval();
  timerInterval = setInterval(() => {
    currentSeconds--;
    if (currentSeconds < 0) currentSeconds = 0;

    updateDisplay();
    updateProgress();

    if (currentSeconds <= 0) timerComplete();
  }, 1000);
}

function pauseTimer() {
  if (!isRunning) return;

  isRunning = false;
  document.getElementById("startBtn").innerHTML = "▶️ Resume";
  document.getElementById("timerCircle")?.classList.remove("active");
  clearTimerInterval();
}

function resetTimerToActiveMode() {
  clearTimerInterval();
  isRunning = false;
  document.getElementById("startBtn").innerHTML = "▶️ Start";
  document.getElementById("timerCircle")?.classList.remove("active");

  const activeMode = document.querySelector(".mode-btn.active");
  const minutes = activeMode ? parseInt(activeMode.dataset.time, 10) : 25;
  setTimer(minutes);
}

function timerComplete() {
  clearTimerInterval();
  isRunning = false;

  document.getElementById("startBtn").innerHTML = "▶️ Start";
  document.getElementById("timerCircle")?.classList.remove("active");

  playNotificationSound();

  if (currentMode === "focus") {
    sessionsCompleted++;
    totalMinutes += 25;
    updateStats();

    alert("🎉 Great work! Time for a break!");
    autoSwitchMode();

    setTimeout(() => showBreakSuggestion(), 500);
  } else {
    alert("✨ Break over! Ready to focus?");
    autoSwitchMode();

    const breakDiv = document.getElementById("breakSuggestions");
    if (breakDiv) breakDiv.style.display = "none";
  }
}

function autoSwitchMode() {
  if (currentMode === "focus") document.querySelector('[data-mode="short"]')?.click();
  else document.querySelector('[data-mode="focus"]')?.click();
}

function playNotificationSound() {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification("Timer Complete! 🎉", {
      body: currentMode === "focus" ? "Great work! Time for a break!" : "Break over! Ready to focus?",
      icon: "📚"
    });
  }

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtx) return;

  const audioContext = new AudioCtx();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.frequency.value = 800;
  oscillator.type = "sine";

  gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.5);
}

/* ==================== STATS FUNCTIONS ==================== */
function updateStats() {
  localStorage.setItem("sessionsCompleted", sessionsCompleted);
  localStorage.setItem("totalMinutes", totalMinutes);

  const today = new Date().toDateString();
  const lastStudyDate = localStorage.getItem("lastStudyDate");

  if (lastStudyDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    if (lastStudyDate === yesterday.toDateString()) currentStreak++;
    else currentStreak = 1;

    localStorage.setItem("currentStreak", currentStreak);
    localStorage.setItem("lastStudyDate", today);
  }

  updateStatsDisplay();
}

function updateStatsDisplay() {
  document.getElementById("sessionsCompleted").textContent = sessionsCompleted;
  document.getElementById("totalMinutes").textContent = totalMinutes;
  document.getElementById("currentStreak").textContent = currentStreak;
}

/* ==================== TODO FUNCTIONS ==================== */
function addTodo() {
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (!text) return;

  const todo = { id: Date.now(), text, completed: false, pomodoros: 0 };
  todos.push(todo);

  saveTodos();
  renderTodos();
  input.value = "";
}

function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (!todo) return;

  todo.completed = !todo.completed;
  if (todo.completed) todo.pomodoros++;

  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  renderTodos();
}

function renderTodos() {
  const list = document.getElementById("todoList");
  const counter = document.getElementById("taskCounter");

  counter.textContent = todos.filter(t => !t.completed).length;

  if (todos.length === 0) {
    list.innerHTML = '<div class="todo-empty">📝 No tasks yet. Add one to get started!</div>';
    return;
  }

  list.innerHTML = todos.map(todo => `
    <div class="todo-item ${todo.completed ? "completed" : ""}">
      <input type="checkbox" class="todo-checkbox"
        ${todo.completed ? "checked" : ""} onchange="toggleTodo(${todo.id})">
      <span class="todo-text">${escapeHtml(todo.text)}</span>
      ${todo.pomodoros > 0 ? `<span class="todo-pomodoro">🍅 ${todo.pomodoros}</span>` : ""}
      <button class="todo-delete" onclick="deleteTodo(${todo.id})">🗑️</button>
    </div>
  `).join("");
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function loadTodos() {
  renderTodos();
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* ==================== MUSIC FUNCTIONS ==================== */
function playSound(soundType) {
  const musicButtons = document.querySelectorAll(".music-btn");

  if (currentSound === soundType) {
    stopMusic();
    return;
  }

  musicButtons.forEach(btn => btn.classList.remove("active"));
  document.querySelector(`[data-sound="${soundType}"]`)?.classList.add("active");

  currentSound = soundType;
  document.getElementById("musicStatus").textContent = `Playing ${soundType}`;

  const url = soundLibrary[soundType];
  alert(`🎵 Opening ${soundType} music in new window!\n\nTip: Keep the window minimized while studying.`);
  window.open(url, "musicPlayer", "width=400,height=300");

  localStorage.setItem("currentSound", soundType);
}

function stopMusic() {
  document.querySelectorAll(".music-btn").forEach(btn => btn.classList.remove("active"));
  currentSound = null;
  document.getElementById("musicStatus").textContent = "Stopped";
  localStorage.removeItem("currentSound");
}

function loadMusicPreference() {
  const savedSound = localStorage.getItem("currentSound");
  if (!savedSound) return;

  document.querySelector(`[data-sound="${savedSound}"]`)?.classList.add("active");
  currentSound = savedSound;
  document.getElementById("musicStatus").textContent = `Last: ${savedSound}`;
}

/* ==================== THEME FUNCTIONS ==================== */
function setTheme(themeName) {
  const body = document.body;

  body.className = body.className
    .split(" ")
    .filter(c => !c.startsWith("theme-"))
    .join(" ");

  if (themeName !== "default") body.classList.add(`theme-${themeName}`);

  document.querySelectorAll(".theme-option").forEach(opt => opt.classList.remove("active"));
  document.querySelector(`[data-theme="${themeName}"]`)?.classList.add("active");

  localStorage.setItem("selectedTheme", themeName);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem("selectedTheme") || "default";
  setTheme(savedTheme);

  const savedDarkMode = localStorage.getItem("studyTheme") === "dark";
  if (savedDarkMode) {
    document.body.classList.add("dark-mode");
    document.getElementById("themeToggle").textContent = "☀️";
  }
}

/* ==================== MODAL FUNCTIONS ==================== */
function closeModal(modalId) {
  document.getElementById(modalId)?.classList.remove("active");
}

/* ==================== BREAK SUGGESTIONS ==================== */
function showBreakSuggestion() {
  const breakDiv = document.getElementById("breakSuggestions");
  if (!breakDiv) return;

  const activities = currentMode === "short" ? breakActivities.short : breakActivities.long;
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  document.querySelector(".activity-icon").textContent = randomActivity.icon;
  document.querySelector(".activity-content h4").textContent = randomActivity.title;
  document.querySelector(".activity-content p").textContent = randomActivity.desc;

  breakDiv.style.display = "block";

  const breakDuration = currentMode === "short" ? 5 * 60 * 1000 : 15 * 60 * 1000;
  setTimeout(() => {
    if (currentMode !== "focus") breakDiv.style.display = "none";
  }, breakDuration);
}

function getNewActivity() {
  const activities = currentMode === "short" ? breakActivities.short : breakActivities.long;
  const randomActivity = activities[Math.floor(Math.random() * activities.length)];

  document.querySelector(".activity-icon").textContent = randomActivity.icon;
  document.querySelector(".activity-content h4").textContent = randomActivity.title;
  document.querySelector(".activity-content p").textContent = randomActivity.desc;
}

/* ==================== QUOTES ==================== */
function getNewQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quoteText").textContent = `"${randomQuote.text}"`;
  document.getElementById("quoteAuthor").textContent = `— ${randomQuote.author}`;
}

/* ==================== FOCUS DISPLAY (flip clock) ==================== */
function setupFocusDisplay() {
  const btn = document.getElementById("focusDisplayBtn");
  const overlay = document.getElementById("focusDisplay");
  const exitBtn = document.getElementById("focusExitBtn");
  const mainTimerEl = document.getElementById("timerDisplay");
  const sub = document.getElementById("focusSub");
  const rotateHint = document.getElementById("rotateHint");

  if (!btn || !overlay || !exitBtn || !mainTimerEl) return;

  let syncId = null;

  const mm = window.matchMedia ? window.matchMedia("(orientation: landscape)") : null;

  function modeLabel() {
    const active = document.querySelector(".mode-btn.active");
    return active ? (active.textContent || "").trim() : "Focus";
  }

  function updateHint() {
    if (!rotateHint) return;
    if (!mm) return; // CSS still handles it
    rotateHint.style.display = mm.matches ? "none" : "block";
  }

  function sync() {
    const text = (mainTimerEl.textContent || "").trim() || "00:00";
    const digits = text.replace(":", "").split("");
    const digitEls = overlay.querySelectorAll("[data-digit]");
    digitEls.forEach((el, i) => { el.textContent = digits[i] || "0"; });

    if (sub) sub.textContent = modeLabel();
    updateHint();
  }

  async function enterFullscreen() {
    // Requires user gesture; may fail depending on browser/user settings. [web:144]
    if (!document.fullscreenElement && document.documentElement.requestFullscreen) {
      await document.documentElement.requestFullscreen();
    }
  }

  async function lockLandscape() {
    // Orientation lock is restricted and often requires fullscreen. [web:134]
    if (screen.orientation && screen.orientation.lock) {
      await screen.orientation.lock("landscape");
    }
  }

  function openOverlay() {
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    sync();
    syncId = setInterval(sync, 200);

    if (mm && mm.addEventListener) mm.addEventListener("change", updateHint);
  }

  function closeOverlay() {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (syncId) clearInterval(syncId);
    syncId = null;

    if (mm && mm.removeEventListener) mm.removeEventListener("change", updateHint);

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    }
    if (screen.orientation && screen.orientation.unlock) {
      try { screen.orientation.unlock(); } catch {}
    }
  }

  btn.addEventListener("click", async () => {
    openOverlay();
    try { await enterFullscreen(); } catch {}
    try { await lockLandscape(); } catch {}
  });

  exitBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeOverlay(); });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "Escape") closeOverlay();
  });
}

/* ==================== EVENT LISTENERS ==================== */
function setupEventListeners() {
  // Mode buttons
  document.querySelectorAll(".mode-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      if (isRunning) return;

      document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      currentMode = btn.dataset.mode;
      const minutes = parseInt(btn.dataset.time, 10);
      setTimer(minutes);

      if (currentMode === "focus") {
        const breakDiv = document.getElementById("breakSuggestions");
        if (breakDiv) breakDiv.style.display = "none";
      }
    });
  });

  // Controls
  document.getElementById("startBtn").addEventListener("click", () => {
    if (isRunning) pauseTimer();
    else startTimer();
  });

  document.getElementById("resetBtn").addEventListener("click", () => {
    resetTimerToActiveMode();
  });

  // Todos
  document.getElementById("todoAddBtn").addEventListener("click", addTodo);
  document.getElementById("todoInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTodo();
  });

  // Music buttons
  document.querySelectorAll(".music-btn").forEach(btn => {
    btn.addEventListener("click", () => playSound(btn.dataset.sound));
  });

  // Music toggle nav
  document.getElementById("musicToggleNav").addEventListener("click", () => {
    if (currentSound) stopMusic();
    else alert("🎵 Select a sound from the Music section below!");
  });

  // Volume (only affects <audio>, not YouTube window)
  const volumeSlider = document.getElementById("volumeSlider");
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value;
    document.getElementById("volumeValue").textContent = volume + "%";
    if (audioPlayer) audioPlayer.volume = volume / 100;
    localStorage.setItem("musicVolume", volume);
  });

  const savedVolume = localStorage.getItem("musicVolume") || "50";
  volumeSlider.value = savedVolume;
  document.getElementById("volumeValue").textContent = savedVolume + "%";
  if (audioPlayer) audioPlayer.volume = parseInt(savedVolume, 10) / 100;

  // Dark mode toggle
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    document.getElementById("themeToggle").textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("studyTheme", isDark ? "dark" : "light");
  });

  // Theme picker open
  document.getElementById("themePickerBtn").addEventListener("click", () => {
    document.getElementById("themePickerModal").classList.add("active");
  });
  document.querySelectorAll(".theme-option").forEach(opt => {
    opt.addEventListener("click", () => setTheme(opt.dataset.theme));
  });

  // Floating buttons
  document.getElementById("methodsBtn").addEventListener("click", () => {
    document.getElementById("methodsModal").classList.add("active");
  });
  document.getElementById("motivationBtn").addEventListener("click", () => {
    document.getElementById("motivationModal").classList.add("active");
  });

  // Close modals on outside click
  document.querySelectorAll(".modal").forEach(modal => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  });

  // Shortcuts
  document.addEventListener("keydown", (e) => {
    if (e.code === "Space" && !e.target.matches("input, textarea")) {
      e.preventDefault();
      document.getElementById("startBtn").click();
    }
    if (e.code === "KeyR" && e.ctrlKey) {
      e.preventDefault();
      document.getElementById("resetBtn").click();
    }
  });

  setupFocusDisplay();
}

/* ==================== GLOBALS for inline handlers ==================== */
window.getNewActivity = getNewActivity;
window.getNewQuote = getNewQuote;
window.closeModal = closeModal;
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
