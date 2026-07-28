const dropdownButton = document.querySelector("#button");
const deployableMenu = document.querySelector("#deployableMenu");
const menuIcon = document.querySelector("#button i");

dropdownButton.addEventListener("click", () => {
    deployableMenu.classList.toggle("active");
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
});