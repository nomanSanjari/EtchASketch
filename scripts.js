document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById('container');

    for (let j = 0; j < 16; j++) {
        for (let i = 0; i < 16; i++) {
            const box = document.createElement('div');
            box.setAttribute('id', j + '-' + i);
            box.setAttribute('style',
                'postion: relative; height: 50px; width: 50px; border: 1px black solid; margin: 0px; padding 0px;'
            );
            container.appendChild(box);
        }
    }

    const bubble = document.getElementById('container');
    //functionality
    //mouseover for trailing functionality
    //click for picking and choosing
    bubble.addEventListener('click', (callback) => {

        for (let k = 1; k <= 256; k++) {
            const field = container.childNodes;
            if (field[k]['id'] == callback['target']['id']) {
                field[k].setAttribute('style', 'background-color:black');
            }
        }
    });




});