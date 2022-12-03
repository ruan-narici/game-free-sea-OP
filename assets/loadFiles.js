let imgBKG;
let imgBKG_GAME;

let imgPLAYER;

let imgShip_1;
let imgShip_2;
let imgShip_3;
let imgShips;

function preload(){
    imgBKG = loadImage("./img/MOLDE_PNG.png");
    imgBKG_GAME = loadImage("./img/mar_redline.png");
    imgPLAYER = loadImage("./img/navio_luffy.png");
    imgShip_1 = loadImage("./img/navio_1.png");
    imgShip_2 = loadImage("./img/navio_2.png");
    imgShip_3 = loadImage("./img/navio_3.png");
    imgShips = [imgShip_1, imgShip_2, imgShip_3, imgShip_2, imgShip_1, imgShip_3];
}