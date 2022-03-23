//Mouse Over Challenge By Alex A.

// Setting up canvas
let cnv = document.getElementById(`myCanvas`);
let ctx = cnv.getContext(`2d`);
cnv.height = innerHeight;
cnv.width = innerWidth;

// Global Variables
circleX = 600;
circleY = 400;
let circleFill = `cyan`;
let difficulty = 15;
let arrowUpIsPressed = false;

// Event Listeners
document.addEventListener(`mousemove`, mousemoveHandler);
document.addEventListener(`keypress`, keypressHandler);

// Mouse position detector
function mousemoveHandler(event) {
    // Update mouseX and mouseY
    let cnvRect = cnv.getBoundingClientRect();
    mouseX = event.x - cnvRect.x;
    mouseY = event.y - cnvRect.y;
}

function difficultyControl() {

}

//Main function
requestAnimationFrame(drawCircle)
function drawCircle() {

    // draw Background to erase history
    ctx.fillStyle = `white`;
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    // circle movement
    circleX += Math.random() * difficulty;
    circleX -= Math.random() * difficulty;
    circleY += Math.random() * difficulty;
    circleY -= Math.random() * difficulty;

    //circle boundary control
    if (circleX < 0) {
        circleX += Math.random() * 16;
    } else if (circleX > innerWidth) {
        circleX -= Math.random() * 16;
    } else if (circleY < 0) {
        circleY += Math.random() * 16;
    } else if (circleY > innerHeight) {
        circleY -= Math.random() * 16;
    }

    // draw a circle
    ctx.fillStyle = circleFill;
    ctx.beginPath();
    ctx.arc(circleX, circleY, 75, Math.PI * 2, 0);
    ctx.fill();


    requestAnimationFrame(drawCircle);
}

function keypressHandler(event) {
    console.log(event.code);
    if (event.code == `KeyQ`) {
        difficulty++;
        console.log(difficulty);
    } else if (event.code == `KeyA`) {
        difficulty--;
        console.log(difficulty);
    }
}