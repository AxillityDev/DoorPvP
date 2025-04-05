// main.js - Main application script
import { PlayerDatabase } from './db.js';

document.addEventListener('DOMContentLoaded', function() {
    // Initialize database
    const db = new PlayerDatabase();
    
    // Get tier data from database
    const tiers = db.getAllTiers();
    const tierContainer = document.getElementById('tier-container');
    
    // Create tier columns with animation delay
    tiers.forEach((tierData, index) => {
        const tierColumn = document.createElement('div');
        tierColumn.className = 'tier-column';
        tierColumn.dataset.tier = tierData.tier.toLowerCase().replace(/\s/g, '-');
        tierColumn.style.animationDelay = `${index * 0.1}s`;
        
        const tierHeader = document.createElement('div');
        tierHeader.className = 'tier-header';
        tierHeader.style.backgroundColor = tierData.color;
        tierHeader.innerHTML = `
            <div class="trophy">🏆 ${tierData.tier}</div>
            <div class="toggle-icon">▼</div>
        `;
        tierColumn.appendChild(tierHeader);
        
        const playersContainer = document.createElement('div');
        playersContainer.className = 'tier-players';
        
        tierData.players.forEach(player => {
            const tierPlayer = createPlayerElement(player);
            playersContainer.appendChild(tierPlayer);
        });
        
        tierColumn.appendChild(playersContainer);
        tierContainer.appendChild(tierColumn);
        
        // Add collapsible functionality
        tierHeader.addEventListener('click', () => {
            tierColumn.classList.toggle('collapsed');
        });
    });
    
    // Function to create player element
    function createPlayerElement(player) {
        const tierPlayer = document.createElement('div');
        tierPlayer.className = 'tier-player';
        tierPlayer.dataset.name = player.name.toLowerCase();
        
        const playerAvatar = document.createElement('div');
        playerAvatar.className = 'player-avatar';
        
        // Add Minotar avatar image
        const avatarImg = document.createElement('img');
        avatarImg.src = `https://minotar.net/helm/${player.name}/32.png`;
        avatarImg.alt = player.name;
        avatarImg.onerror = function() {
            this.src = `https://minotar.net/helm/MHF_Steve/32.png`;
        };
        
        playerAvatar.appendChild(avatarImg);
        tierPlayer.appendChild(playerAvatar);
        
        const playerName = document.createElement('div');
        playerName.className = 'player-name';
        playerName.textContent = player.name;
        tierPlayer.appendChild(playerName);
        
        const playerRank = document.createElement('div');
        playerRank.className = player.isHT ? 'player-rank double-arrow' : 'player-rank';
        
        if (player.isHT) {
            playerRank.innerHTML = `<span class="rank-arrow">▲</span><span class="rank-arrow">▲</span>`;
        } else {
            playerRank.innerHTML = `<span class="rank-arrow">▲</span>`;
        }
        
        tierPlayer.appendChild(playerRank);
        return tierPlayer;
    }
    
    // Show kit button functionality
    const showKitButton = document.getElementById('showKit');
    const kitOverlay = document.getElementById('kitOverlay');
    const closeKit = document.getElementById('closeKit');
    
    showKitButton.addEventListener('click', function() {
        kitOverlay.classList.add('active');
    });
    
    closeKit.addEventListener('click', function() {
        kitOverlay.classList.remove('active');
    });
    
    // Close kit when clicking outside
    kitOverlay.addEventListener('click', function(e) {
        if (e.target === kitOverlay) {
            kitOverlay.classList.remove('active');
        }
    });
    
    // Search functionality
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase().trim();
        let visiblePlayers = 0;
        
        // Get all tier columns
        const tierColumns = document.querySelectorAll('.tier-column');
        
        tierColumns.forEach(column => {
            let columnHasVisiblePlayers = false;
            const players = column.querySelectorAll('.tier-player');
            
            players.forEach(player => {
                const playerName = player.dataset.name;
                if (playerName.includes(searchTerm)) {
                    player.style.display = 'flex';
                    columnHasVisiblePlayers = true;
                    visiblePlayers++;
                } else {
                    player.style.display = 'none';
                }
            });
            
            // Show/hide entire tier column based on if it has visible players
            if (columnHasVisiblePlayers) {
                column.classList.remove('empty');
            } else {
                column.classList.add('empty');
            }
        });
        
        // If no search term, make sure all columns are visible
        if (searchTerm === '') {
            tierColumns.forEach(column => {
                column.classList.remove('empty');
                const players = column.querySelectorAll('.tier-player');
                players.forEach(player => {
                    player.style.display = 'flex';
                });
            });
        }
    });
});
