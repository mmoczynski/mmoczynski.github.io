// Code written by Matthew Moczynski

var navigationMenu = document.querySelector("header nav");

document.querySelector(".hamburger-button-container").addEventListener("click", function() {
    if(navigationMenu.classList.contains("hidden-on-mobile")) {
        navigationMenu.classList.remove("hidden-on-mobile");
    }

    else {
        navigationMenu.classList.add("hidden-on-mobile");
    }
});