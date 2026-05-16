const loadGames = document.getElementById("loadGames");

const gamesContainer = document.getElementById("gamesContainer");

const games = [

    {
        title:"Elden Ring",
        genre:"RPG",
        platform:"PC / PS5",
        image:"https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg"
    },

    {
        title:"Cyberpunk 2077",
        genre:"Action",
        platform:"PC / Xbox",
        image:"https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg"
    },

    {
        title:"God of War",
        genre:"Adventure",
        platform:"PlayStation",
        image:"https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
    },

   {
    title:"Minecraft",
    genre:"Sandbox",
    platform:"Multi Platform",
    image:"Minecraft-creeper-face.jpg"
},

{
    title:"Fortnite",
    genre:"Battle Royale",
    platform:"PC / Console",
    image:"images.jfif"
},
    {
        title:"Valorant",
        genre:"Shooter",
        platform:"PC",
        image:"https://upload.wikimedia.org/wikipedia/en/b/ba/Valorant_cover.jpg"
    }

];

loadGames.addEventListener("click", () => {

    gamesContainer.innerHTML = "";

    games.forEach((game,index) => {

        setTimeout(() => {

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

        }, index * 200);

    });

});
