{
    const welcome = () => {
        console.log("Witam serdecznie");
    }
    
    
    const onChangeBacgroundClick = () => {
        const body = document.querySelector(".body");
        const themeName = document.querySelector(".themeName");
        body.classList.toggle("dark");
        themeName.innerText = body.classList.contains("dark") ? "jasne" : "ciemne";
    };
    
    const init = () => {
        const button = document.querySelector(".section__button");
        button.addEventListener("click", onChangeBacgroundClick);
        
        welcome();
    };

    init();
    
}