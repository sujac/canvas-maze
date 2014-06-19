/*** CANVAS MAZE ***/

var canvas;
var ctx;

var dot = {
    coordX: 0,
    coordY: 0,
    size: 14,
    draw: function () {
        ctx.fillRect(this.coordX, this.coordY, this.size, this.size);
    }
};

var init = function () {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.fillStyle = "#9b9b9b";
    dot.draw();
    document.onkeypress = checkKey;
};

function checkKey(e) {
    if (e.keyCode === 119) {
        // up arrow
        dot.coordY = dot.coordY - 10;
    } else if (e.keyCode === 100) {
        // right arrow
        dot.coordX = dot.coordX + 10;
    } else if (e.keyCode === 115) {
        // down arrow
        dot.coordY = dot.coordY + 10;
    } else if (e.keyCode === 97) {
        // lefr arrow
        dot.coordX = dot.coordX - 10;
    }
    dot.draw();
}


window.onload = init;