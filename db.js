// db.js - Database module
export class PlayerDatabase {
  constructor() {
    // Use localStorage as a simple database for client-side storage
    this.dbName = "mcTiersPlayerDB";
    this.initialize();
  }

  initialize() {
    // Check if database exists, if not create it with default data
    if (!localStorage.getItem(this.dbName)) {
      const defaultData = {
        tiers: [
          {
            tier: "Tier 1",
            color: "var(--tier1-color)",
            players: []
          },
          {
            tier: "Tier 2",
            color: "var(--tier2-color)",
            players: []
          },
          {
            tier: "Tier 3",
            color: "var(--tier3-color)",
            players: [
              { name: "Axillity", isHT: true },
              { name: "Bokshaq", isHT: false },
              { name: "WojPRO1", isHT: false }
            ]
          },
          {
            tier: "Tier 4",
            color: "var(--tier4-color)",
            players: []
          },
          {
            tier: "Tier 5",
            color: "var(--tier5-color)",
            players: []
          }
        ],
        lastUpdated: new Date().toISOString()
      };
      
      this.saveData(defaultData);
    }
  }

  getAllTiers() {
    const data = this.getData();
    return data.tiers;
  }

  getData() {
    const rawData = localStorage.getItem(this.dbName);
    return JSON.parse(rawData);
  }

  saveData(data) {
    localStorage.setItem(this.dbName, JSON.stringify(data));
  }

  addPlayer(tierIndex, playerName, isHT = false) {
    const data = this.getData();
    
    // Check if player already exists in any tier
    const existingPlayer = this.findPlayer(playerName);
    if (existingPlayer) {
      // If exists, remove from current tier
      this.removePlayer(playerName);
    }
    
    // Add to new tier
    data.tiers[tierIndex].players.push({ name: playerName, isHT });
    data.lastUpdated = new Date().toISOString();
    
    this.saveData(data);
    return true;
  }

  removePlayer(playerName) {
    const data = this.getData();
    let found = false;
    
    data.tiers.forEach(tier => {
      const index = tier.players.findIndex(p => p.name.toLowerCase() === playerName.toLowerCase());
      if (index !== -1) {
        tier.players.splice(index, 1);
        found = true;
      }
    });
    
    if (found) {
      data.lastUpdated = new Date().toISOString();
      this.saveData(data);
    }
    
    return found;
  }

  findPlayer(playerName) {
    const data = this.getData();
    let foundTier = null;
    let foundPlayer = null;
    
    data.tiers.forEach((tier, tierIndex) => {
      const player = tier.players.find(p => p.name.toLowerCase() === playerName.toLowerCase());
      if (player) {
        foundTier = tierIndex;
        foundPlayer = player;
      }
    });
    
    if (foundPlayer) {
      return { tierIndex: foundTier, player: foundPlayer };
    }
    
    return null;
  }

  updatePlayerHT(playerName, isHT) {
    const data = this.getData();
    let updated = false;
    
    data.tiers.forEach(tier => {
      const player = tier.players.find(p => p.name.toLowerCase() === playerName.toLowerCase());
      if (player) {
        player.isHT = isHT;
        updated = true;
      }
    });
    
    if (updated) {
      data.lastUpdated = new Date().toISOString();
      this.saveData(data);
    }
    
    return updated;
  }

  movePlayer(playerName, newTierIndex) {
    const playerInfo = this.findPlayer(playerName);
    if (!playerInfo) return false;
    
    this.removePlayer(playerName);
    this.addPlayer(newTierIndex, playerName, playerInfo.player.isHT);
    return true;
  }

  getLastUpdated() {
    const data = this.getData();
    return data.lastUpdated;
  }

  // Admin functions
  clearAllData() {
    localStorage.removeItem(this.dbName);
    this.initialize();
  }
}
