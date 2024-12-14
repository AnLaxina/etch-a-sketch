// Add the 16 x 16 grid and see where it goes
const sketchPad = document.querySelector(".sketch-pad");


// As a test, let's see if adding 16 paragraphs actually works with a for loop
function createGrid(gridSize = 16) {
    const sketchPad = document.querySelector(".sketch-pad");

    for (let col = 0; col < gridSize; col++) {
        const col = document.createElement("div");
        col.classList.add("col");

        const square = document.createElement("div");
        square.classList.add("square");

        sketchPad.appendChild(col);
        for (let row = 0; row < gridSize; row++) {
            const row = document.createElement("div");
            row.classList.add("row");

            const square = document.createElement("div");
            square.classList.add("square");
            row.appendChild(square);

            col.appendChild(row);
        }
    }
}

// When the page loads, create a 16 x 16 grid
createGrid();

// Once the grid has been created, it's time to handle the drawing aspect of each square
function draw(event) {
    let target = event.target;

    target.classList.remove("square");
    target.classList.add("highlighted");
}

sketchPad.addEventListener("mouseover", draw);

// Handle the "Change grid size" button
const changeSizeButton = document.querySelector("button");
changeSizeButton.addEventListener("click", () => {
    let gridSize = prompt("Enter a number between 1 - 100");
    let isValid = true;
    if (gridSize < 1 || gridSize > 100) {
        isValid = false;
    }

    while (!isValid) {
        gridSize = prompt("Please input a number between 1 - 100");
        if (gridSize >= 1 && gridSize <= 100) {
            isValid = true;
        }
    }

    sketchPad.remove();

    const main = document.querySelector("main");
    const newSketchPad = document.createElement("div");
    newSketchPad.classList.add("sketch-pad");
    main.appendChild(newSketchPad);

    createGrid(gridSize);
    newSketchPad.addEventListener("mouseover", draw);

})

