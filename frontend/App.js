// This file controls the buttons.
// Each button calls the backend API and prints the result on screen.

const out = document.getElementById("out");

// If your backend runs locally, keep this.
const API_BASE = "http://localhost:3000";

/**
 * UI-friendly display
 * Shows message instead of full JSON
 */
function showMessage(msg) {
  out.textContent = msg;
}

async function getJSON(url, options = {}) {
  const res = await fetch(url, options);
  return res.json();
}

document.getElementById("btnFortune").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/fortune`);
  show(data);
});

document.getElementById("btnJoke").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/joke`);
  show(data);
});

document.querySelectorAll(".btnMood").forEach(btn => {
  btn.addEventListener("click", async () => {
    const mood = btn.dataset.mood;
    const data = await getJSON(`${API_BASE}/api/vibe?mood=${mood}`);
    show(data);
  });
});

/* 💥 Smash */
document.getElementById("btnSmash").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/smash`, { method: "POST" });
  showMessage(`💥 Smash count: ${data.smashes}`);
});

document.getElementById("btnSecret").addEventListener("click", async () => {
  const data = await getJSON(`${API_BASE}/api/secret?code=411L`);
  show(data);
});