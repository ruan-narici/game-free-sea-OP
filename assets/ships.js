let xShips = [740, 740, 740, 740, 740, 740];
let yShips = [75, 120, 165, 210, 255, 300];
let wShips = [50, 50, 50, 50, 50, 50];
let hShips = [30, 30, 30, 30, 30, 30];

let vShips = [3, 5, 4, 2.5, 6, 3.5];

function formAndShowCars(){
    for (let i = 0; i < imgShips.length; i++){
        image(imgShips[i], xShips[i], yShips[i], wShips[i], hShips[i]);
    }
}

function moveCars(){
    for (let i = 0; i < imgShips.length; i++){
        xShips[i] -= vShips[i];
        returnCarsForOriginalPosition();
    }
}

function returnCarsForOriginalPosition(){
    for (let i = 0; i < imgShips.length; i++){
        if (xShips[i] < ximgBKG_GAME - 60){
            xShips[i] = 740;
        }
    }
}