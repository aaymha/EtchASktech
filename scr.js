const divsContainer = document.querySelector("#container");

for(let i = 0; i < 16 * 16; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("div1");
    createDiv.addEventListener("mouseover", () => {
        createDiv.style.backgroundColor = "red";
    })
    divsContainer.appendChild(createDiv);
}

function newGrid() {
    let userGrid = parseInt(prompt("Enter a number of squares per side for the new grid:  (limit: 100) "))
    if(userGrid < 100) {
        let removingChilder = document.querySelector("#container");
        let child = removingChilder.lastElementChild;
        while(child) {
            removingChilder.removeChild(child);
            child = removingChilder.lastElementChild;
        }

        
    } else {alert("Limit is 100!")}
}