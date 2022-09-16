function createGrid(x, x) {
    let grid = document.createElement('div');
    game.appendChild(grid);
    grid.id = 'grid';

    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;

        for (j = 0; j < x; j++) {
            let box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }

        grid.appendChild(row);
    }

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseover", () => {
    box.classList.add('coloured')
}));

};

function getNumber() {
    x = prompt("How many squares side of the grid would you like? \n (Maximum 100)");

    if (x > 100) {
        x = 100;
    }
    else if (!parseInt(x) || x <= 0) {     // reassign x again
        getNumber();
    }

};

const reset = document.querySelector('#reset');
const game = document.querySelector('.game');

let x = 0;


getNumber();

window.onload = createGrid(x, x);

reset.addEventListener('click', () => {
    const removedContainer = document.getElementById('grid');
    removedContainer.remove();
    getNumber();
    createGrid(x,x);
});




