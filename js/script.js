// Example player data
const players = [
  { username: "Technoblade", tier: "HT3" },
  { username: "Dream", tier: "LT3" },
  { username: "ClownPierce", tier: "HT4" },
  { username: "MineManner", tier: "LT4" },
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

// Search functionality with live suggestions
const searchBar = document.getElementById("search-bar");
const suggestionsBox = document.getElementById("search-suggestions");

searchBar.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPlayers = players.filter((player) =>
    player.username.toLowerCase().includes(searchTerm)
  );

  suggestionsBox.innerHTML = ""; // Clear suggestions
  if (searchTerm) {
    filteredPlayers.forEach((player) => {
      const suggestion = document.createElement("div");
      suggestion.textContent = player.username;
      suggestion.addEventListener("click", () => {
        searchBar.value = player.username;
        displayPlayers([player]); // Show only the selected player
        suggestionsBox.classList.remove("active");
      });
      suggestionsBox.appendChild(suggestion);
    });
    suggestionsBox.classList.add("active");
  } else {
    suggestionsBox.classList.remove("active");
  }
});

// Initial display
displayPlayers(players);
