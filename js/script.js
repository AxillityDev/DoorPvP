// Example player data
const players = [
  { username: "Technoblade", tier: "HT4" },
  { username: "Dream", tier: "LT4" },
  { username: "ClownPierce", tier: "HT3" },
  { username: "MineManner", tier: "LT3" },
];

// Function to display player cards
function displayPlayers(playerList) {
  const playerListElement = document.getElementById("player-list");
  playerListElement.innerHTML = ""; // Clear current list

  playerList.forEach((player) => {
    const card = document.createElement("div");
    card.classList.add("player-card");
    card.innerHTML = `
      <img src="https://minotar.net/avatar/${player.username}/100" alt="${player.username}" />
      <span>${player.username}</span>
      <span>Tier: ${player.tier}</span>
    `;
    playerListElement.appendChild(card);
  });
}

// Search function
document.getElementById("search-bar").addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPlayers = players.filter((player) =>
    player.username.toLowerCase().includes(searchTerm)
  );
  displayPlayers(filteredPlayers);
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});

// Initial display
displayPlayers(players);
