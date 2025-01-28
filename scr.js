const divsContainer = document.querySelector("#container");

for(let i = 0; i < 16 * 16; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("div1");
    createDiv.addEventListener("mouseover", () => {
        createDiv.style.backgroundColor = "red";
    })
    divsContainer.appendChild(createDiv);
}
