let xPlayer = 330;
let yPlayer = 325;
let wPlayer = 50;
let hPlayer = 50;
let vPlayer = 5;
let vPlayerBTN = 25;

function formAndShowPlayer(){
    image(imgPLAYER, xPlayer, yPlayer, wPlayer, hPlayer);
}

function movePlayer(){
    if (keyIsDown(UP_ARROW)){
        addPoint();
        yPlayer -= vPlayer;
    }
    if (keyIsDown(DOWN_ARROW)){
        verifyPositionPlayer();
        yPlayer += vPlayer;
    }
}

// UTILIZANDO OS BOTÕES
function movePlayerBtnUP(){
    addPoint();
    yPlayer -= vPlayerBTN;
}

function movePlayerBtnDOWN(){
    verifyPositionPlayer();
    yPlayer += vPlayerBTN;
}
// END.

function verifyPositionPlayer(){
    if (yPlayer >= 320){
        yPlayer = 320;
    }
}

function verifyColisionShip(){
    for (let i = 0; i < imgShips.length; i++){
        if (xPlayer >= xShips[i] && 
            xPlayer <= xShips[i] + wShips[i] &&
            yPlayer <= yShips[i] && 
            yPlayer + hPlayer - 10 >= yShips[i]){
            yPlayer = 320;
            removePoint();
        }
    }
}