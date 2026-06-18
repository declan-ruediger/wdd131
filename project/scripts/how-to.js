const guides = [
    {
        "image_filename": "immich-screenshot",
        "image_alt": "Desktop and mobile screenshots of Immich photo library software",
        "name": "Immich",
        "description": "Self-hosted Photo/Video Library",
        "url": "https://docs.immich.app/overview/quick-start/",
        "tags": [
            "App",
            "Photos / Videos",
            "Big Tech Alternative"
        ]
    },
    {
        "image_filename": "openclaw",
        "image_alt": "Screenshot of the OpenClaw home page, with a lobster mascot over it",
        "name": "OpenClaw",
        "description": "Always-working AI Assistant",
        "url": "https://docs.openclaw.ai/start/getting-started",
        "tags": [
            "App",
            "AI",
            "Task Management"
        ]
    },
    {
        "image_filename": "syncthing",
        "image_alt": "Desktop screenshot of Syncthing web GUI",
        "name": "Syncthing",
        "description": "Self-hosted File Syncing",
        "url": "https://docs.syncthing.net/intro/getting-started.html",
        "tags": [
            "App",
            "File Sync",
            "Federated",
            "Big Tech Alternative"
        ]
    }
];

let favourites = [];

if (localStorage.getItem("favourite_guides") != null) {
    favourites = JSON.parse(localStorage.getItem("favourite_guides"));
}

const cards = document.querySelector("#how-to-cards-container");

function createCard(guide) {
    let card = document.createElement("div");
    card.innerHTML = `
        <div><img src="images/${guide.image_filename}.webp" alt="${guide.image_alt}" loading="lazy"/></div>
        <div>
            <span><h3>${guide.name}</h3><span><span></span></span></span>
            <p>${guide.description}</p>
            <div>
                <span>${guide.tags.join("</span><span>")}</span>
            </div>
        </div>
    `

    let heartButton = card.children[1].children[0].children[1];
    heartButton.addEventListener("click", function(event) {
        event.stopPropagation();

        if (favourites.includes(guide.name)) {
            favourites = favourites.filter((n) => n != guide.name);
        } else {
            favourites.push(guide.name);
        }

        localStorage.setItem("favourite_guides", JSON.stringify(favourites));

        heartButton.classList.toggle("active");

        if (tagSelector.value == "Favourites") {
            filterbyTag("Favourites");
        }
    });

    if (favourites.includes(guide.name)) {
        heartButton.classList.toggle("active");
    }

    card.addEventListener("click", function () {
        window.location.href = guide.url;
    });

    return card;
}

function updateCards(guides) {
    cards.innerHTML = "";
    guides.forEach(guide => {
        cards.appendChild(
            createCard(guide)
        );
    });
}

updateCards(guides);

let tagSet = new Set();
guides.forEach(guide => {
    guide.tags.forEach(tag => {
        tagSet.add(tag)
    });
});

let tags = Array.from(tagSet);

tags.sort();

const tagSelector = document.querySelector("#tag-select");

tags.forEach(tag => {
    let selectOption = document.createElement("option");
    selectOption.value = tag;
    selectOption.textContent = tag;

    tagSelector.appendChild(selectOption);
});

function filterbyTag(tag) {
    let filteredGuides = []

    if (tag == "") {
        filteredGuides = guides;
    } else if  (tag == "Favourites") {
        filteredGuides = guides.filter((guide) => favourites.includes(guide.name));
    } else {
        filteredGuides = guides.filter((guide) => guide.tags.includes(tag));
    }

    updateCards(filteredGuides);
}

tagSelector.addEventListener("change", function () {
    filterbyTag(this.value);
});