const container = document.querySelector('.grid');
for (let i = 0; i < 16; i++) {
    const div = document.createElement("div");
    div.classList.add("col");
    for (let j = 0; j < 16; j++) {
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("small-box");
        innerDiv.addEventListener("mouseover", () => colorIn(innerDiv));
        div.append(innerDiv);
    }
    container.append(div);
}

function colorIn(box) {
    box.style.backgroundColor = "black";
}