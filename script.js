// Script for menu navigation toggle

let navigationMenuItems = document.querySelector(".header-items");
let contactMenu = document.querySelector("#contact-me");
let contactMenuClose = document.querySelector(".mobile-form-top");

document.querySelector(".mobile-menu-button").addEventListener("click", function() {
    navigationMenuItems.classList.toggle("mobile-hidden");
});

document.querySelector(".show-contact-menu").addEventListener("click", function() {
    contactMenu.classList.toggle("mobile-hidden");
});

contactMenuClose.addEventListener("click", function(){
    contactMenu.classList.toggle("mobile-hidden");
});