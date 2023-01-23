let sketchContainer = document.getElementById("sketchContainer");


const initialX = 16;
const initialY = 16;
const CELL_SIZE = 50;


function generateGrid(gridX,gridY) {
    for (let i = 0; i < gridX; i++) {
        let currentRow = document.createElement("div");
        currentRow.classList.add("row");
        for (let j = 0; j < gridY; j++) {
            let currentCell = document.createElement("div");
            currentCell.classList.add("cell");
         
            currentCell.addEventListener('mouseover', e => {
                console.log(e.target);
                e.target.classList.add("activated");
            })
            currentRow.appendChild(currentCell);
        }
        sketchContainer.appendChild(currentRow);
    }
    sketchContainer.setAttribute("width", "" + CELL_SIZE * gridX);
    sketchContainer.setAttribute("height", "" + CELL_SIZE * gridY);
}

generateGrid(initialX,initialY)
