// Example player data
const players = [
  { username: "Technoblade", tier: "HT1" },
  { username: "Dream", tier: "LT2" },
  { username: "ClownPierce", tier: "HT3" },
  { username: "MineManner", tier: "LT5" },
];

// State variables
let currentSort = { column: "username", ascending: true };
let filteredPlayers = [...players];

// Function to display players in table
function displayPlayers(playerList) {
  const playerListElement = document.getElementById("player-list");
  playerListElement.innerHTML = ""; // Clear current list

  playerList.forEach((player) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${player.username}</td>
      <td>${player.tier}</td>
    `;
    playerListElement.appendChild(row);
  });
}

// Function to sort players
function sortPlayers(column) {
  const ascending = currentSort.column === column ? !currentSort.ascending : true;
  currentSort = { column, ascending };

  filteredPlayers.sort((a, b) => {
    if (a[column] > b[column]) return ascending ? 1 : -1;
    if (a[column] < b[column]) return ascending ? -1 : 1;
    return 0;
  });

  displayPlayers(filteredPlayers);
}

// Event listener for sorting
document.getElementById("sort-username").addEventListener("click", () => {
  sortPlayers("username");
});
document.getElementById("sort-tier").addEventListener("click", () => {
  sortPlayers("tier");
});

// Function to filter players by tier
function filterPlayersByTier(tier) {
  if (tier === "all") {
    filteredPlayers = [...players];
  } else {
    filteredPlayers = players.filter((player) => player.tier === tier);
  }
  displayPlayers(filteredPlayers);
}

// Event listener for tier filter dropdown
document.getElementById("tier-filter").addEventListener("change", (event) => {
  filterPlayersByTier(event.target.value);
});

// Initial display
displayPlayers(filteredPlayers);
