// Add the 16 x 16 grid and see where it goes
const sketchPad = document.querySelector(".sketch-pad");


// As a test, let's see if adding 16 paragraphs actually works with a for loop
for (let i = 0; i < 16; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    sketchPad.appendChild(square);
}