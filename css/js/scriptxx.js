console.log("Siemka");

let przycisk = document.querySelector(".przycisk")
let pierwszy = document.querySelector(".pierwszy");

przycisk.addEventListener("click", () => {
    pierwszy.remove();
});

console.log(przycisk);