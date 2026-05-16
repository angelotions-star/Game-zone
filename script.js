const loadGames = document.getElementById("loadGames");
const gamesContainer = document.getElementById("gamesContainer");

const games = [

    {
        title: "Elden Ring",
        genre: "RPG",
        platform: "PC / PS5",
        image: "https://images.unsplash.com/photo-1542751110-97427bbecf20"
    },

    {
        title: "Cyberpunk 2077",
        genre: "Action",
        platform: "PC / Xbox",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420"
    },

    {
        title: "God of War",
        genre: "Adventure",
        platform: "PlayStation",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8"
    },

    {
        title: "Minecraft",
        genre: "Sandbox",
        platform: "Multi Platform",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f"
    },

    {
        title: "Fortnite",
        genre: "Battle Royale",
        platform: "PC / Console",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f"
    },

    {
        title: "Valorant",
        genre: "Shooter",
        platform: "PC",
        image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6"
    }

];

loadGames.addEventListener("click", () => {

    gamesContainer.innerHTML = "";

    games.forEach(game => {

        const card = document.createElement("div");

        card.classList.add("game-card");

        card.innerHTML = `
            <img src="${game.image}" alt="${game.title}">

            <div class="game-info">

                <h3>${game.title}</h3>

                <p>
                    <strong>Género:</strong>
                    ${game.genre}
                </p>

                <p>
                    <strong>Plataforma:</strong>
                    ${game.platform}
                </p>

            </div>
        `;

        gamesContainer.appendChild(card);

    });

});