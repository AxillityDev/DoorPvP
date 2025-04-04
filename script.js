const tiersDiv = document.getElementById("tiers");
const wyszukiwarka = document.getElementById("wyszukiwarka");
const adminPanel = document.getElementById("admin-panel");

// Przykładowe dane (zastąp danymi z Firebase)
const gracze = [
    {
        id: "1",
        nazwa: "Gracz1",
        tiery: {
            sword: "high tier 3",
            axe: "low tier 2",
            nethpot: "high tier 1",
            diamondpot: "low tier 3",
            uhc: "low tier 1",
            smp: "high tier 1",
            crystal: "high tier 1",
        },
    },
    {
        id: "2",
        nazwa: "Gracz2",
        tiery: {
            sword: "low tier 5",
            axe: "high tier 3",
            nethpot: "low tier 2",
            diamondpot: "high tier 4",
            uhc: "high tier 3",
            smp: "low tier 2",
            crystal: "low tier 2",
        },
    },
];

async function pobierzAwatar(nazwaGracza) {
    const response = await fetch(
        `https://api.mojang.com/users/profiles/minecraft/${nazwaGracza}`
    );
    if (!response.ok) {
        return "default_avatar.png"; // Domyślny awatar
    }
    const data = await response.json();
    const uuid = data.id;
    return `https://crafatar.com/avatars/${uuid}`;
}

async function wyswietlGraczy() {
    tiersDiv.innerHTML = "";
    for (const gracz of gracze) {
        const avatarUrl = await pobierzAwatar(gracz.nazwa);
        const graczDiv = document.createElement("div");
        graczDiv.classList.add("gracz");
        graczDiv.innerHTML = `
            <img src="${avatarUrl}" class="avatar">
            <h3>${gracz.nazwa}</h3>
            <p>Sword: ${gracz.tiery.sword}</p>
            <p>Axe: ${gracz.tiery.axe}</p>
            <p>Nethpot: ${gracz.tiery.nethpot}</p>
            <p>Diamondpot: ${gracz.tiery.diamondpot}</p>
            <p>UHC: ${gracz.tiery.uhc}</p>
            <p>SMP: ${gracz.tiery.smp}</p>
            <p>Crystal: ${gracz.tiery.crystal}</p>
        `;
        tiersDiv.appendChild(graczDiv);
    }
}

wyswietlGraczy();

wyszukiwarka.addEventListener("input", () => {
    const szukanaNazwa = wyszukiwarka.value.toLowerCase();
    const filtrowaniGracze = gracze.filter((gracz) =>
        gracz.nazwa.toLowerCase().includes(szukanaNazwa)
    );
    wyswietlFiltrowanychGraczy(filtrowaniGracze);
});

async function wyswietlFiltrowanychGraczy(filtrowaniGracze) {
    tiersDiv.innerHTML = "";
    for (const gracz of filtrowaniGracze) {
        const avatarUrl = await pobierzAwatar(gracz.nazwa);
        const graczDiv = document.createElement("div");
        graczDiv.classList.add("gracz");
        graczDiv.innerHTML = `
            <img src="${avatarUrl}" class="avatar">
            <h3>${gracz.nazwa}</h3>
            <p>Sword: ${gracz.tiery.sword}</p>
            <p>Axe: ${gracz.tiery.axe}</p>
            <p>Nethpot: ${gracz.tiery.nethpot}</p>
            <p>Diamondpot: ${gracz.tiery.diamondpot}</p>
            <p>UHC: ${gracz.tiery.uhc}</p>
            <p>SMP: ${gracz.tiery.smp}</p>
            <p>Crystal: ${gracz.tiery.crystal}</p>
        `;
        tiersDiv.appendChild(graczDiv);
    }
}

// Funkcje do integracji z Firebase i Discordem będą tutaj
