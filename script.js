// Sample player data
const players = [
  { username: "Notch", tier: "HT2" },
  { username: "Steve", tier: "LT3" },
  { username: "Technoblade", tier: "LT4" },
  { username: "ClownPierce", tier: "HT3" },
  { username: "ItsRealMe", tier: "HT1" },
];

const searchInput = document.getElementById("search");
const tierFilter = document.getElementById("tierFilter");
const playerList = document.getElementById("players");

function displayPlayers() {
  const search = searchInput.value.toLowerCase();
  const tier = tierFilter.value;

  const filtered = players.filter(player => {
    const matchName = player.username.toLowerCase().includes(search);
    const matchTier = tier ? player.tier === tier : true;
    return matchName && matchTier;
  });

  playerList.innerHTML = filtered.map(player => `
    <div class="card">
      <img src="https://minotar.net/avatar/${player.username}/60" alt="${player.username}">
      <div class="card-info">
        <p class="name">${player.username}</p>
        <p>Tier: ${player.tier}</p>
      </div>
    </div>
  `).join("");
}

// Initial display
displayPlayers();

// Update on input
searchInput.addEventListener("input", displayPlayers);
tierFilter.addEventListener("change", displayPlayers);
