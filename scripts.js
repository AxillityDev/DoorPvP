document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.querySelector(".search-bar");
    const tiers = document.querySelectorAll(".tier");
  
    searchBar.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase();
  
      tiers.forEach(tier => {
        const players = tier.querySelectorAll("li");
        let hasMatch = false;
  
        players.forEach(player => {
          if (player.textContent.toLowerCase().includes(query)) {
            player.style.display = "list-item";
            hasMatch = true;
          } else {
            player.style.display = "none";
          }
        });
  
        tier.style.display = hasMatch ? "block" : "none";
      });
    });
  });
  