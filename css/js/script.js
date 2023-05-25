console.log("Witam serdecznie");


let button = document.querySelector(".section__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
});


