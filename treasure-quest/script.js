document.addEventListener('DOMContentLoaded', () => {
    //* Recuperer l'entrée clavier du joueur pour le mouvement
    // TODO : Ajout d'un event keydown
    // TODO : 
    //* Gerer la victoire
    // TODO : Creation d'une div victoire 'victoire'

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    function generateRock() {
        let allObjets = [];

        for (let i = 0; allObjets.length < 50; i++) {
            console.log(allObjets.length);
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
            console.log(allObjets.length);
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
            console.log(allObjets.length);
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
        
        defineindex(allObjets);
        return allObjets; 
    }
    generateRock();
    function placeElement(array) {
        const items = array;
        for (let i = 0; i < 400; i++) {
            const item = document.createElement('div');
            item.classList.add('cell');
            document.getElementById('gameGrid').append(item);
        }
        
        const cells = document.querySelectorAll('.cell');
        cells.forEach((element, index) => {
            if()
        })
    }
        
    
    placeElement(generateRock());
    function findplayer(nodelist) {
        for (let i = 0; i < nodelist.length; i++) {
            if (nodelist[i].classList.contains('nain')) {
                console.log(nodelist[i]);
                return i;
            }
        }
    }
    function defineindex(array){
        array.forEach(element => {
            element.index = parseInt(element.positionX + (element.positionY * 20));
        })
        return array;
    }
   


    
    // const cells = document.querySelectorAll('.cell');

    // console.log(findplayer(cells));

    // document.addEventListener('keydown', (e) => {

    });  









