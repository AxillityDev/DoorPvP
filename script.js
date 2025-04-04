const players = [
  { username: "ItsRealMe", tier: "HT1" },
  { username: "Marlow", tier: "LT1" },
  { username: "Swight", tier: "HT2" },
  { username: "Notch", tier: "LT3" },
  { username: "Steve", tier: "LT4" },
  { username: "Technoblade", tier: "HT3" },
  { username: "ClownPierce", tier: "HT3" },
];

const searchInput = document.getElementById("search");
const tierFilter = document.getElementById("tierFilter");
const tierColumns = document.getElementById("tierColumns");

const allTiers = ["HT1", "LT1", "HT2", "LT2", "HT3", "LT3", "HT4", "LT4", "HT5", "LT5"];

function renderPlayers() {
  const search = searchInput.value.toLowerCase();
  const selectedTier = tierFilter.value;

  tierColumns.innerHTML = "";

  allTiers.forEach(tier => {
    const tierPlayers = players.filter(p => {
      const matchesSearch = p.username.toLowerCase().includes(search);
      const matchesTier = selectedTier ? p.tier === selectedTier : true;
      return p.tier === tier && matchesSearch && matchesTier;
    });

    if (tierPlayers.length > 0) {
      const column = document.createElement("div");
      column.className = "tier-column";
      column.innerHTML = `<div class="tier-title">${tier}</div>`;

      tierPlayers.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.innerHTML = `
          <img src="https://minotar.net/avatar/${player.username}/60" alt="${player.username}" />
          <div class="player-name">${player.username}</div>
        `;
        column.appendChild(card);
      });

      tierColumns.appendChild(column);
    }
  });
}

searchInput.addEventListener("input", renderPlayers);
tierFilter.addEventListener("change", renderPlayers);

// Initial render
renderPlayers();
