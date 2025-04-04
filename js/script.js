// Example player data
const players = [
  { username: "Technoblade", tier: "HT4" },
  { username: "Dream", tier: "LT4" },
  { username: "ClownPierce", tier: "HT3" },
  { username: "MineManner", tier: "LT3" },
];

// Function to display player list
function displayPlayers(playerList) {
  const playerListElement = document.getElementById("player-list");
  playerListElement.innerHTML = ""; // Clear current list

  playerList.forEach((player) => {
    const playerItem = document.createElement("li");
    playerItem.innerHTML = `
      <img src="https://minotar.net/avatar/${player.username}/50" alt="${player.username}" />
      <span>${player.username} - ${player.tier}</span>
    `;
    playerListElement.appendChild(playerItem);
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

// Initial display
displayPlayers(players);
