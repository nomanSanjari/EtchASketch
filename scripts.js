document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('container');
    const sizeChange = document.getElementById('size-changer');

    let x = 16;

    function generate(x, y) {
        container.setAttribute('style', `grid-template-rows: repeat(${x}, minmax(1px , 50px)); grid-template-columns: repeat(${y}, minmax(1px , 50px));`);
    }

    function populate(x, y) {
        for (let j = 1; j <= x; j++) {
            for (let i = 1; i <= y; i++) {
                const box = document.createElement('div');
                box.setAttribute('id', j + '-' + i);
                box.setAttribute('style',
                    'postion: relative; height: auto; width: auto; border: 1px black solid; margin: 0px; padding 0px;'
                );
                container.appendChild(box);
            }
        }
    }

    function clear() {
        container.innerHTML = "";
    }

    function getSize() {
        const newSize = prompt("Enter a new grid size");
        return newSize;
    }

    clear();
    generate(x, x);
    populate(x, x);

    sizeChange.addEventListener('click', () => {
        const newSize = getSize();
        x = newSize;
        clear();
        generate(x, x);
        populate(x, x);
    });

    //functionality
    //mouseover for trailing functionality
    //click for picking and choosing
    container.addEventListener('mouseover', (callback) => {

        for (let k = 1; k <= x * x; k++) {
            const field = container.childNodes;
            if (field[k]['id'] == callback['target']['id']) {
                field[k].setAttribute('style', 'background-color:black');
            }
        }
    });
});