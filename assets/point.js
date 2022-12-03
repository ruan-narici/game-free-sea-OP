let myPoints = 0;
let xPoints = 615;
let yPoints = 352;

function formAndShowPoints(){
    textAlign(CENTER);
    stroke(color(0,0,0));
    textSize(15);
    text("SCORE: " + myPoints, xPoints, yPoints);
}

function addPoint(){
    if (yPlayer <= 25){
        yPlayer = 320;
        myPoints ++;
    }
}

function removePoint(){
    if (myPoints >0){
        myPoints --;
    }
}