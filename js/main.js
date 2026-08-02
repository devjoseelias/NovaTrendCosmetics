const dropdownButton = document.querySelector("#header-button");
const deployableMenu = document.querySelector("#deployableMenu");
const menuIcon = document.querySelector("#header-button i");

dropdownButton.addEventListener("click", () => {
    deployableMenu.classList.toggle("active");
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-x');
});
window.addEventListener("scroll", () => {
    if(deployableMenu.classList.contains("active")){
        deployableMenu.classList.remove("active");
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-x');
    }
});

