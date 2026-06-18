const navBar = document.querySelector("#navbar");

for (var i = 0; i < navBar.children.length; i++) {
    let siteLink = navBar.children[i];
    if (siteLink.attributes.href.value == window.location.pathname.replace("/project/", "")) {
        siteLink.classList.add("active");
    }
}

const header = document.querySelector("header");

const hamburgerButton = document.querySelector(".hamburger");

hamburgerButton.addEventListener("click", function() {
    header.classList.toggle("active");
})