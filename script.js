function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// Création des items
function generateRock() {
    let allObjets = [];

    for (let i = 0; allObjets.length < 50; i++) {

        let objetRock = {
            id: i,
            positionX: getRandomInt(19),
            positionY: getRandomInt(19),
            type: 'rocher',
            index: 0,
        }
        const exist = allObjets.find((element) => element.positionX === objetRock.positionX && element.positionY === objetRock.positionY);
        if (!exist) {

            allObjets.push(objetRock);
        }

    }
    for (let i = 50; allObjets.length < 51; i++) {

        let objetCoffre = {
            id: i,
            positionX: getRandomInt(19),
            positionY: getRandomInt(19),
            type: 'coffre',
            index: 0,
        }
        const exist = allObjets.find((element) => element.positionX === objetCoffre.positionX && element.positionY === objetCoffre.positionY);
        if (!exist) {
            allObjets.push(objetCoffre);
        }
    }
    for (let i = 51; allObjets.length < 52; i++) {

        let objetNain = {
            id: i,
            positionX: getRandomInt(19),
            positionY: getRandomInt(19),
            type: 'nain',
            index: 0,
        }
        const exist = allObjets.find((element) => element.positionX === objetNain.positionX && element.positionY === objetNain.positionY);
        if (!exist) {
            allObjets.push(objetNain);
        }
    }
    for (let i = 52; allObjets.length < 53; i++) {
        let objetNain2 = {
            id: i,
            positionX: getRandomInt(19),
            positionY: getRandomInt(19),
            type: 'nain2',
            index: 0,
        }
        const exist = allObjets.find((element) => element.positionX === objetNain2.positionX && element.positionY === objetNain2.positionY);
        if (!exist) {
            allObjets.push(objetNain2);
        }

    }


    defineindex(allObjets);
    return allObjets;
}
// Création de l'index dans l'objet
function defineindex(array) {
    array.forEach(element => {
        element.index = parseInt(element.positionX + (element.positionY * 20));
    })
    return array;
}
// Placement des objets sur la grille
function placeElement(array) {
    const items = array;
    for (let i = 0; i < 400; i++) {
        const item = document.createElement('div');
        item.classList.add('cell');

        const placedElement = items.find((element) => element.index === i)
        if (placedElement) {
            item.classList.add(placedElement.type)
        }



        document.getElementById('gameGrid').append(item);
    }
}
// Gestion des victoires des 2 joueurs
function victory2() {
    const grid = document.querySelector('.grid');
    document.querySelector('audio')
    grid.innerHTML = '';
    const sucess = document.createElement('div');
    sucess.classList.add('success');
    sucess.classList.add('player2');
    sucess.innerHTML = `
    <h2> Bravo joueur 2 <3 </h2>
    <p>Ca ne compte quand méme que pour un !</p>
    <audio autoplay loop>
    <source src="assets/FF VII victory theme.wav" type ='audio/wav'>
    </audio>
    <button>Rejouer</button>
    `;
    document.getElementById('gameGrid').append(sucess);
    score2 += 1;
    document.querySelector('button').addEventListener('click', () => {
        localStorage.setItem('score2', score2);
        location.reload();
    })

}
function victory() {
    const grid = document.querySelector('.grid');
    document.querySelector('audio')
    grid.innerHTML = '';
    const sucess = document.createElement('div');
    sucess.classList.add('success');
    sucess.innerHTML = `
    <h2> Bravo joueur 1 <3 </h2>
    <p>Ca ne compte quand méme que pour un !</p>
    <button>Rejouer</button>
    <audio autoplay loop>
    <source src="assets/FF VII victory theme.wav" type ='audio/wav'>
    </audio>`;
    document.getElementById('gameGrid').append(sucess);
    score1 += 1;
    document.querySelector('button').addEventListener('click', () => {
        localStorage.setItem('score1', score1);
        location.reload();
    })

}
// Declarations des variables necessaire aux fonctions et qui doivent étre accessible partout
let tabcells = null;
let items = null;
let score1 = 0;
let score2 = 0;
document.getElementById('score1').innerHTML = localStorage.getItem('score1');
document.getElementById('score2').innerHTML = localStorage.getItem('score2');

document.addEventListener('DOMContentLoaded', () => {
    items = generateRock();
    placeElement(items);
    tabcells = Array.from(document.querySelectorAll('.cell'));

    // Gestion des touches du joueur 1
    document.addEventListener('keydown', (e) => {
        let objetPlayer = items.find((element) => element.type === 'nain');
        let objetCoffre = items.find((element) => element.type === 'coffre');
        switch (e.key) {
            case "ArrowUp":
                if (tabcells[objetPlayer.index - 20].classList.contains('rocher')) {
                    return
                };
                objetPlayer.index -= 20
                break;
            case "ArrowDown":
                if (tabcells[objetPlayer.index + 20].classList.contains('rocher')) {
                    return
                };
                objetPlayer.index += 20;
                break;
            case "ArrowLeft":
                if (tabcells[objetPlayer.index - 1].classList.contains('rocher') || (objetPlayer.index) % 20 == 0) {
                    return
                };
                objetPlayer.index -= 1;
                break;
            case "ArrowRight":
                if (tabcells[objetPlayer.index + 1].classList.contains('rocher') || (objetPlayer.index + 1) % 20 == 0) {
                    return
                };
                objetPlayer.index += 1;
                break;
        }
        document.querySelector('.nain').classList.remove('nain')
        tabcells[objetPlayer.index].classList.add('nain');
        if (objetPlayer.index === objetCoffre.index) {
            victory();
        }
    })
    // Multiplayer 
    // Gestion des touches et des colisions du joueur 2
    document.addEventListener('keydown', (e) => {
        let objetPlayer = items.find((element) => element.type === 'nain2');
        let objetCoffre = items.find((element) => element.type === 'coffre');
        switch (e.key) {
            case "z":
                if (tabcells[objetPlayer.index - 20].classList.contains('rocher')) {
                    return
                };
                objetPlayer.index -= 20
                break;
            case "s":
                if (tabcells[objetPlayer.index + 20].classList.contains('rocher')) {
                    return
                };
                objetPlayer.index += 20;
                break;
            case "q":
                if (tabcells[objetPlayer.index - 1].classList.contains('rocher') || (objetPlayer.index) % 20 == 0) {
                    return
                };
                objetPlayer.index -= 1;
                break;
            case "d":
                if (tabcells[objetPlayer.index + 1].classList.contains('rocher') || (objetPlayer.index + 1) % 20 == 0) {

                    return

                };
                objetPlayer.index += 1;
                break;
        }
        document.querySelector('.nain2').classList.remove('nain2')
        tabcells[objetPlayer.index].classList.add('nain2');
        if (objetPlayer.index === objetCoffre.index) {
            victory2();
        }
    });


})
