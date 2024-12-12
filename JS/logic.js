// Add the 16 x 16 grid and see where it goes
const sketchPad = document.querySelector(".sketch-pad");


// As a test, let's see if adding 16 paragraphs actually works with a for loop
for (let row = 0; row < 16; row++) {
    const row = document.createElement("div");
    row.classList.add("row");

    const square = document.createElement("div");
    square.classList.add("square");

    sketchPad.appendChild(row);
    for (let col = 0; col < 16; col++) {
        const col = document.createElement("div");
        col.classList.add("col");

        const square = document.createElement("div");
        square.classList.add("square");
        col.appendChild(square);

        row.appendChild(col);
    }


}