// Example leaderboard data
const players = [
  { rank: 1, username: "ItzRealMe", points: 300, region: "NA", tiers: ["HT1", "HT2", "HT3"] },
  { rank: 2, username: "Marlowwww", points: 284, region: "EU", tiers: ["HT1", "HT3"] },
  { rank: 3, username: "Swight", points: 226, region: "EU", tiers: ["HT2", "LT3", "LT1"] },
  { rank: 4, username: "Dream", points: 210, region: "NA", tiers: ["LT2", "HT3"] },
  { rank: 5, username: "ClownPierce", points: 190, region: "NA", tiers: ["HT2", "HT5"] },
];

// Function to populate leaderboard table
function populateLeaderboard() {
  const tableBody = document.getElementById("leaderboard-body");
  players.forEach((player) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td class="px-4 py-2 text-gray-100">${player.rank}</td>
      <td class="px-4 py-2 text-gray-100">${player.username}</td>
      <td class="px-4 py-2 text-gray-100">${player.points}</td>
      <td class="px-4 py-2 text-gray-100">${player.region}</td>
      <td class="px-4 py-2 text-gray-100">${player.tiers.join(", ")}</td>
    `;
    tableBody.appendChild(row);
  });
}

// Populate leaderboard on page load
populateLeaderboard();
