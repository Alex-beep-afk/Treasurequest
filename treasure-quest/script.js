document.addEventListener('DOMContentLoaded', () => {
//* Recuperer l'entrée clavier du joueur pour le mouvement
// TODO : Ajout d'un event keydown
// TODO : 
//* Gerer la victoire
// TODO : Creation d'une div victoire 'victoire'

function getRandomInt(max) {
    return (Math.floor(Math.random() * max))+1;
}
function generateItems(){
    let allObjets = [];
    for (let i = 1; allObjets.length < 50; i++) {
    
    let objetRock = {
        id : i,
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
    for(let i = 50; allObjets.length < 51; i++){
        let objetCoffre = {
            id : i,
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
    for(let i = 51; allObjets.length < 52; i++){
        let objetNain = {
            id : i,
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
    for(let i = 52; allObjets.length < 400; i++){
        let caseVide = {
            id : i,
            positionX: getRandomInt(19),
            positionY: getRandomInt(19),
            type: 'vide',
            index: 0,
            
        }
        const exist = allObjets.find((element) => element.positionX === caseVide.positionX && element.positionY === caseVide.positionY);
        if (!exist) {
            allObjets.push(caseVide);
        }

    }
    
return allObjets;
}
function placeElement(){
    const items= generateItems();
    items.forEach((element) => {
    const test = document.createElement('div');
    test.classList.add(element.type);
    test.style.gridRow = element.positionY;
    test.style.gridColumn = element.positionX;
    document.getElementById('gameGrid').append(test);
})
}
let elements = generateItems();
console.log(elements);
elements.forEach((element) => {
    element.index = (parseInt(element.positionY)*20) + parseInt(element.positionX);
    
})


// function keyEvent(event) {
//     console.log(`Location of key pressed: ${event.location}`);
//   }

// document.addEventListener('keydown', (e) => {
//     ;
// });  

});







