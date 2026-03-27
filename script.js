// --- 1. CONFIGURATION ---
const START_DATE = "2026-03-27";
const TOTAL_DAYS = 90;

const today = {
  learning:
    "Git version control, CLI navigation (pwd, cd, ls), and repository management.",
  built: [
    "Personal 'Now' Page v1.0",
    "Dark Mode Logic",
    "90-Day Progress Engine",
  ],
  stuck: "Accidentally initializing the wrong folder in Git.",
  figuredOut: "How to use 'rm -rf .git' to recover fast from setup errors.",
};

// Past updates - your first entry!
const history = [
  {
    day: 1,
    date: "Mar 27",
    win: "Successfully initialized my first Git repository and set up the Now page.",
  },
];

// --- 2. RENDER LOGIC (No changes to appearance) ---

function updateUI() {
  // Content Injection
  document.getElementById("learning-content").innerText = today.learning;
  document.getElementById("stuck-content").innerText = today.stuck;
  document.getElementById("win-content").innerText = today.figuredOut;
  document.getElementById("build-list").innerHTML = today.built
    .map((item) => `<li>${item}</li>`)
    .join("");

  // Day & Progress Math
  const start = new Date(START_DATE);
  const now = new Date();
  const diff = Math.ceil((now - start) / (1000 * 60 * 60 * 24)) || 1;
  document.getElementById("current-day").innerText = `Day ${diff}`;
  document.getElementById("progress-fill").style.width =
    `${Math.min((diff / TOTAL_DAYS) * 100, 100)}%`;

  // Timestamp
  document.getElementById("last-updated").innerText =
    `Updated: ${now.toLocaleDateString()} @ ${now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;

  // Archive Rendering
  document.getElementById("archive-content").innerHTML = history
    .map(
      (item) => `
        <div class="archive-card"><strong>Day ${item.day}:</strong> ${item.win}</div>
    `,
    )
    .join("");
}

// Theme Toggle Persistence
document.getElementById("theme-toggle").onclick = () => {
  const theme =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

// History Drawer Toggle
document.getElementById("toggle-archive").onclick = function () {
  const content = document.getElementById("archive-content");
  content.classList.toggle("hidden");
  this.innerText = content.classList.contains("hidden")
    ? "📜 View History"
    : "📂 Close History";
};

// Start the Engine
if (localStorage.getItem("theme") === "dark")
  document.documentElement.setAttribute("data-theme", "dark");
updateUI();
