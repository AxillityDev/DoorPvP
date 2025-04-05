// Example player data
const players = [
  { username: "Technoblade", tier: "HT1" },
  { username: "Dream", tier: "LT1" },
  { username: "ClownPierce", tier: "HT2" },
  { username: "MineManner", tier: "LT5" },
  { username: "Swight", tier: "LT2" },
  { username: "Marlow", tier: "HT3" },
];

// Function to populate tier columns
function populateTierColumns() {
  players.forEach((player) => {
    const columnId = `${player.tier.toLowerCase()}-list`; // Matches HTML ID
    const column = document.getElementById(columnId);

    if (column) {
      const playerItem = document.createElement("li");
      playerItem.className = "bg-gray-700 text-gray-100 rounded-md px-4 py-2 hover:bg-gray-600 transition";
      playerItem.textContent = player.username;
      column.appendChild(playerItem);
    }
  });
}

// Populate columns when the page loads
populateTierColumns();
