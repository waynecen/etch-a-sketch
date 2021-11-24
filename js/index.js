//script for etch-a-sketch
const container = document.querySelector('#container');

let num = prompt('Enter grid size (max value-100):');

function gridDiv() {
   
        const content = document.createElement('div');
        content.classList.add('content');
        container.appendChild(content);
        content.setAttribute('id','grid');

        if (num <= 100) {
        for (let e = 0; e < num; e++) {
        const row = document.createElement('div');
        row.classList.add('row');
        content.appendChild(row);
    
            for (let i = 0; i < num; i++) {
                const box = document.createElement('div');
                box.classList.add('box');
                box.style.display = 'flex';
                
                let boxWidth = 960/num;
                box.style.width = boxWidth + "px";
                let boxHeight = 960/num;
                box.style.height = boxHeight + "px";

                box.addEventListener('mouseover', () => {
                    box.style.background = '#1C1C1C';
                    box.style.transition = '0ms';
                })

                row.appendChild(box);

            }
        }
    }
}

function resetDiv() {
    let newGrid = prompt("Enter size of new grid (max value-100):");
    num = newGrid;
    let grid = document.getElementById('grid');
    if (grid == null) {
        return;
    } else {
        grid.remove();
    }
    gridDiv();
}

gridDiv();