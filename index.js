function createGrid(length) {
    const container = document.querySelector('.grid');
    for (let i = 0; i < length; i++) {
        const div = document.createElement("div");
        div.classList.add("col");
        for (let j = 0; j < length; j++) {
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("small-box");
            innerDiv.addEventListener("mouseover", () => colorIn(innerDiv));
            div.append(innerDiv);
        }
        container.append(div);
    }
}

function colorIn(box) {
    box.style.backgroundColor = "black";
}

function resetGrid() {
    document.querySelectorAll('.small-box').forEach(box => box.remove());
    document.querySelectorAll('.col').forEach(col => col.remove());
}

function setButton() {
    const btn = document.querySelector('button');
    btn.addEventListener("click", createGridBasedOnUserInput);
}

function createGridBasedOnUserInput() {
    let length;
    do {
        length = prompt("Length of side of grid:");
    } while (!isInteger(length) || length < 1 || length > 100);
    resetGrid();
    createGrid(length);
}

const isInteger = num => /^-?[0-9]+$/.test(num+'');

setButton();
createGrid(16);