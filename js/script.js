<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista Tierów DoorPvP</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-900 text-gray-100">
  <header class="py-6 bg-gray-800">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold">Lista Tierów DoorPvP</h1>
      <p class="mt-2 text-lg text-gray-400">Sprawdź rankingi graczy według poziomów</p>
    </div>
  </header>

  <main class="container mx-auto mt-6 px-2 md:px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-10 gap-4">
      <!-- HT1 -->
      <div id="ht1-column" class="bg-emerald-600 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('ht1-list')"
        >
          <span>HT1</span>
          <span id="ht1-icon">+</span>
        </button>
        <ul id="ht1-list" class="space-y-2 mt-2"></ul>
      </div>

      <!-- LT1 -->
      <div id="lt1-column" class="bg-emerald-400 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('lt1-list')"
        >
          <span>LT1</span>
          <span id="lt1-icon">+</span>
        </button>
        <ul id="lt1-list" class="space-y-2 mt-2"></ul>
      </div>

      <!-- Remaining tiers (HT2 to LT5) -->
      <div id="ht2-column" class="bg-cyan-600 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('ht2-list')"
        >
          <span>HT2</span>
          <span id="ht2-icon">+</span>
        </button>
        <ul id="ht2-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="lt2-column" class="bg-cyan-400 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('lt2-list')"
        >
          <span>LT2</span>
          <span id="lt2-icon">+</span>
        </button>
        <ul id="lt2-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="ht3-column" class="bg-yellow-500 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('ht3-list')"
        >
          <span>HT3</span>
          <span id="ht3-icon">+</span>
        </button>
        <ul id="ht3-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="lt3-column" class="bg-yellow-300 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('lt3-list')"
        >
          <span>LT3</span>
          <span id="lt3-icon">+</span>
        </button>
        <ul id="lt3-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="ht4-column" class="bg-orange-500 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('ht4-list')"
        >
          <span>HT4</span>
          <span id="ht4-icon">+</span>
        </button>
        <ul id="ht4-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="lt4-column" class="bg-orange-300 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-900 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('lt4-list')"
        >
          <span>LT4</span>
          <span id="lt4-icon">+</span>
        </button>
        <ul id="lt4-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="ht5-column" class="bg-red-500 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-100 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('ht5-list')"
        >
          <span>HT5</span>
          <span id="ht5-icon">+</span>
        </button>
        <ul id="ht5-list" class="space-y-2 mt-2"></ul>
      </div>
      <div id="lt5-column" class="bg-rose-500 rounded-lg p-2 sm:p-4">
        <button
          class="flex justify-between items-center text-lg md:text-xl font-bold text-gray-100 border-b border-gray-700 pb-2 w-full"
          onclick="toggleTier('lt5-list')"
        >
          <span>LT5</span>
          <span id="lt5-icon">+</span>
        </button>
        <ul id="lt5-list" class="space-y-2 mt-2"></ul>
      </div>
    </div>
  </main>

  <footer class="py-4 bg-gray-800 text-center text-gray-400 mt-6">
    <p>&copy; 2025 DoorPvP | Zaprojektowane dla społeczności PvP</p>
  </footer>

  <script src="js/script.js"></script>
</body>
</html>
