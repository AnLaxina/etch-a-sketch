// Add the 16 x 16 grid and see where it goes
const sketchPad = document.querySelector(".sketch-pad");


// As a test, let's see if adding 16 paragraphs actually works with a for loop
for (let col = 0; col < 16; col++) {
    const col = document.createElement("div");
    col.classList.add("col");

    const square = document.createElement("div");
    square.classList.add("square");

    sketchPad.appendChild(col);
    for (let row = 0; row < 16; row++) {
        const row = document.createElement("div");
        row.classList.add("row");

        const square = document.createElement("div");
        square.classList.add("square");
        row.appendChild(square);

        col.appendChild(row);
    }
}

// Once the grid has been created, it's time to handle the drawing aspect of each square
function draw(event) {
    let target = event.target;

    target.classList.remove("square");
    target.classList.add("highlighted");
}

sketchPad.addEventListener("mouseover", draw);