const container = document.querySelector("#container");

const divsNumber = 16;
for(let i = 0; i < divsNumber * 16; i++) {
    const divy = document.createElement("div");
    divy.classList.add("div1");
    container.appendChild(divy);
}
