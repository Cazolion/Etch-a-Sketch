let x = 0;

function getNumber() {
x = prompt("How many squares side of the grid would you like? \n (Maximum 100)");
    if (x > 100) {
        x = 100;
    }
    // else if (x != Number || x <= 0) {     // reassign x again
    //     x = prompt("Please input a number between 1 and 100");
    // }

};

getNumber();

function createGrid(x,x) {
    const container = document.getElementById('grid');
    container.id = 'main';
    container.className = 'container';

    for (i = 0; i < x; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        row.id = 'row' + i;
    
        for (j = 0; j < x; j++) {
            let box = document.createElement('div');
            box.className = 'box';
            row.appendChild(box);
        }

    container.appendChild(row);
    }
};

window.onload = createGrid(x,x);