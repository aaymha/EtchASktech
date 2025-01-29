const divsContainer = document.querySelector("#container");
const gener = document.querySelector("#but");

//simple function to generate and return random hex code from string of number going from 0-9 and letters going from A-F, that later gets turned into a background color, returns something like "#0211E4" (its blue btw) :)
function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; //means color = color + letters, so # + six pseudogenerated numbers and letters
    }
    return color;
  }
  

//func to delete previous gird and create new one
function newGrid(userGrid) {
    let removingChilder = document.querySelector("#container");
    let child = removingChilder.lastElementChild;

    while(child) {
        removingChilder.removeChild(child);
        child = removingChilder.lastElementChild;
    }
//defining grid size by taking user input / 960px, tbh i dont understand it much that part was not my creation
    const divSize = 960 / userGrid;
    const gridSize = userGrid;

//loop to create grids, grid size * grid size means if the user input is 30, then 30 * 30 square divs grid = will be created in the space of 960 pixels
    for(let i = 0; i < gridSize * gridSize; i++) {
        const userCreatedGrid = document.createElement("div");
        userCreatedGrid.style.width = `${divSize}px`;
        userCreatedGrid.style.height = `${divSize}px`;

        userCreatedGrid.addEventListener("mouseover", () => {
            userCreatedGrid.style.backgroundColor = randomColor();
        })
        divsContainer.appendChild(userCreatedGrid);
    }
}
//button that when clicked pops out prompt asking for number of squares with the limit of 100;
gener.addEventListener("click", () => {
    let userGrid = prompt("Enter number for a new grid:  (limit: 100");
    if(userGrid < 100 && userGrid > 1) {
        newGrid(userGrid);
    } else (alert("Wrong number!"));
})


newGrid(16); //generating first grid that will display right after opening page, 16x16 square divs

//will be adding more soon 