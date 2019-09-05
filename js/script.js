function initializeGrid(cells) {
    let x = 1;
    let container = document.getElementById("container");

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    while (x <= cells * cells) {
        let node = document.createElement("div");
        node.style.height = "auto";
        node.style.width = "auto";
        node.style.border = "1px solid black";
        node.onmouseover = function(){node.style.backgroundColor = "black";};
        container.appendChild(node);
        x++;
    }
    container.style.gridTemplateColumns = "repeat(" + cells + ", 1fr)";

}

function reset() {
    let x = prompt("How many squares per side would you like your new grid to have?");
    initializeGrid(x);
}

document.getElementById("reset").onclick = reset;
initializeGrid(5);
