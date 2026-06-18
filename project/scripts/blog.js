const posts = [
    {
        "title": "Getting Started with Self-Hosting",
        "date": "18th June 2026",
        "description": "Not sure where to start? Start here!",
        "url": "blog-getting-started.html"
    },
    {
        "title": "Welcome to FOSS Ninja!",
        "date": "12th June 2026",
        "description": "The beginning of my website.",
        "url": "welcome.html"
    },
];

const container = document.querySelector("#posts-container");

function createPost(post) {
    let div = document.createElement("div");
    div.innerHTML = `
        <p>${post.date}</p>
        <span>${post.title}</span>
        <p>${post.description}</p>
    `;

    div.addEventListener("click", () => {
        window.location.href = post.url;
    })

    return div;
}

function renderPosts(posts) {
    container.innerHTML = "";
    posts.forEach(post => {
        container.appendChild(
            createPost(post)
        );
    });
}

renderPosts(posts);
