const divsContainer = document.querySelector("#container");
const gener = document.querySelector("#but");

for(let i = 0; i < 16 * 16; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("div1");
    createDiv.addEventListener("mouseover", () => {
        createDiv.style.backgroundColor = "red";
    })
    divsContainer.appendChild(createDiv);
}

function newGrid(userGrid) {
    let removingChilder = document.querySelector("#container");
    let child = removingChilder.lastElementChild;

    while(child) {
        removingChilder.removeChild(child);
        child = removingChilder.lastElementChild;
    }

    const divSize = 960 / userGrid;
    const gridSize = userGrid;

    for(let i = 0; i < gridSize * gridSize; i++) {
        const userCreatedGrid = document.createElement("div");
        userCreatedGrid.style.width = `${divSize}px`;
        userCreatedGrid.style.height = `${divSize}px`;

        userCreatedGrid.addEventListener("mouseover", () => {
            userCreatedGrid.style.backgroundColor = "red";
        })
        divsContainer.appendChild(userCreatedGrid);
    }
}

gener.addEventListener("click", () => {
    let userGrid = prompt("Enter number for a new grid:  (limit: 100");
    if(userGrid < 100 && userGrid > 1) {
        newGrid(userGrid);
    } else (alert("Wrong number!"));
})

newGrid(16);