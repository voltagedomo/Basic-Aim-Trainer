//Mouse Over Challenge By Alex A.

// Setting up canvas
let cnv = document.getElementById(`myCanvas`);
let ctx = cnv.getContext(`2d`);
cnv.height = innerHeight - 116;
cnv.width = innerWidth - 4;

// Global Variables
circleX = 600;
circleY = 400;
let circleFill = `cyan`;
let difficulty = 20;
let radius = 75;
let arrowUpIsPressed = false;
let mouseX, mouseY;
let distance;
let accuracyPercentage = 100;
let accuracyGood = 0;
let accuracyBad = 0;
let accuracyTotal = 0;


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

// Main function
requestAnimationFrame(drawCircle)
function drawCircle() {

    // accuracy calcuations
    accuracyTotal++;
    accuracyPercentage = accuracyGood / accuracyTotal * 100;
    document.getElementById(`accuracy`).innerHTML = `${accuracyPercentage}%`;

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
    } else if (circleX > innerWidth - 4) {
        circleX -= Math.random() * 26;
    } else if (circleY < 0) {
        circleY += Math.random() * 26;
    } else if (circleY > innerHeight - 108) {
        circleY -= Math.random() * 26;
    }

    // draw a circle
    ctx.fillStyle = circleFill;
    ctx.beginPath();
    ctx.arc(circleX, circleY, radius, Math.PI * 2, 0);
    ctx.fill();

    distance = ((circleX - mouseX) ** 2 + (circleY - mouseY) ** 2) ** 0.5;
    if (distance <= radius) {
        circleFill = `red`;
        accuracyGood++;
    } else {
        circleFill = `cyan`;
        accuracyBad++;
    }
    requestAnimationFrame(drawCircle);
}

function keypressHandler(event) { //difficulty control
    console.log(event.code);
    if (event.code == `KeyQ`) {
        difficulty++;
        console.log(difficulty);
    } else if (event.code == `KeyA`) {
        difficulty--;
        console.log(difficulty);
        if (difficulty <= 0) {
            difficulty = 1;
        }
    }
}
