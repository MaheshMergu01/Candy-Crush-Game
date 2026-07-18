var candies = ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];
var board = [];
var rows = 9;
var columns = 9;
var score = 0;


window.onload = function() {
    startGame();
}

function startGame() {
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++){
            //Img tag <id "0-0">
            let tile = document.createElement("img");
            tile.id = r.toString() + '-' + c.toString();
            tile.src = "./Images" + randomCandy() + ".png"
        }
    }
}