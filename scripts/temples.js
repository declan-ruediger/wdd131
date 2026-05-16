const toggle_button_id = "nav-toggle-button";

let navBarVisible = true;

function toggleVisibilityOfNavBarLinks() {
    if (navBarVisible) {
        setVisibilityOfNavBarLinks("hidden");
    } else {
        setVisibilityOfNavBarLinks("visible");
    }
}

function setVisibilityOfNavBarLinks(visibility_setting) {
    let display_value = ""
    switch (visibility_setting) {
        case "visible":
            navBarVisible = true;
            break;
        case "hidden":
            navBarVisible = false;
            break;
        default:
            TypeError();

    }
    let nav_bar =   document.getElementById("nav-bar");
    for (i = 0; i < nav_bar.children.length; i++)
    {
        let element = nav_bar.children[i];
        if (element.tagName == "A" & element.id != toggle_button_id) {
            element.classList.toggle("show");
        }
    }
}

    let nav_bar = document.getElementById("nav-bar");
    
    setVisibilityOfNavBarLinks("hidden");

    let toggle_button_template = document.createElement("a");
    toggle_button_template.id = toggle_button_id;
    toggle_button_template.className = "toggle-button";
    toggle_button_template.innerHTML = "X";
    toggle_button_template.onclick = toggleVisibilityOfNavBarLinks;

    // show hamburger icon
    nav_bar.appendChild(
        toggle_button_template
    );