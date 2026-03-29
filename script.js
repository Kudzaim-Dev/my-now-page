// DOM Elements
const archiveBtn = document.getElementById("toggle-archive");
const archiveList = document.getElementById("archive-content");
const themeBtn = document.getElementById("theme-toggle");
const updateStamp = document.getElementById("update-stamp");

// 1. THE HIDDEN HISTORY TOGGLE
archiveBtn.addEventListener("click", () => {
  archiveList.classList.toggle("hidden");
  // Change button text based on state
  archiveBtn.innerText = archiveList.classList.contains("hidden")
    ? "📜 View History"
    : "❌ Close History";
});

// 2. THEME TOGGLE (Dark/Light)
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// 3. AUTO-UPDATE TIME STAMP
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = now.toLocaleDateString([], {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  updateStamp.innerText = `Updated: ${dateString} | ${timeString}`;
}

// Set initial time
updateTime();
