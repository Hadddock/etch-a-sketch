let sketchContainer = document.getElementById("sketchContainer");


let inputVertical = document.getElementById("inputVertical");
let inputHorizontal = document.getElementById("inputHorizontal");
let inputButton = document.getElementById("inputButton")



const initialX = 16;
const initialY = 16;

let currentX = initialX;
let currentY = initialY

inputVertical.addEventListener("input", e => {
    currentY = e.target.value;
})

inputHorizontal.addEventListener("input", e => {
    currentY = e.target.value;
})

inputButton.addEventListener("click", e => {
    generateGrid(currentX, currentY);
})

function generateGrid(gridX, gridY) {

    gridX = parseInt(gridX);
    gridY = parseInt(gridY);

    if (gridX < 1 || gridY < 1 || gridX === NaN || gridY === NaN) {
        return;
    }

    if (gridX > 100 || gridY > 100) {
        return;
    }
    console.log(gridX);
    console.log(gridY);
    sketchContainer.innerHTML = '';

    for (let i = 0; i < gridY; i++) {
        let currentRow = document.createElement("div");
        currentRow.classList.add("row");

        for (let j = 0; j < gridX; j++) {
            let currentCell = document.createElement("div");
            currentCell.classList.add("cell");
            currentCell.style = `width: ${960 / gridX}px; height: ${960/gridY}px;`;
         
            currentCell.addEventListener('mouseover', e => {
             
                e.target.classList.add("activated");
            })
            currentRow.appendChild(currentCell);
        }
        sketchContainer.appendChild(currentRow);
    }

}



generateGrid(initialX,initialY)
