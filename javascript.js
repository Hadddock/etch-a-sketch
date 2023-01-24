let sketchContainer = document.getElementById("sketchContainer");


let inputVertical = document.getElementById("inputVertical");
let inputHorizontal = document.getElementById("inputHorizontal");
let inputButton = document.getElementById("inputButton")


a
const initialX = 16;
const initialY = 16;

let currentX = initialX;
let currentY = initialY

inputVertical.addEventListener("input", e => {
    currentY = e.target.value;
})

inputHorizontal.addEventListener("input", e => {
    currentX = e.target.value;
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
            currentCell.setAttribute("brightness", "0")
            currentCell.style.width = `${960 / gridX}px`;
            currentCell.style.height = `${960 / gridY}px`;
            currentCell.setAttribute("brightness", 100);
            currentCell.addEventListener('mouseover', e => {
                let currentCell = e.target;

                let color = Math.floor(Math.random() * 16777215).toString(16);
                if (!currentCell.classList.contains("activated")) {
                    currentCell.classList.add("activated");
                    currentCell.style.backgroundColor = "#" + color;
                }

                else if (currentCell.getAttribute("brightness") != "0") {
                    let brightness = parseInt(currentCell.getAttribute("brightness"));
                    brightness -= 10;
                    currentCell.setAttribute("brightness", brightness);
                    currentCell.style.filter = `brightness(${brightness}%)`;
                }
            });
            currentRow.appendChild(currentCell);
        }
        sketchContainer.appendChild(currentRow);
    }

}

generateGrid(initialX, initialY)
