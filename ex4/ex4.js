var canvas, ctx,button, height, width;
var square = {
    x:0,
    y:0,
    color:"black",
};
var listOfSquares = [];
var mouseX, mouseY;
var showAlert = true;

const boxWidth = 100;
const boxHeight = 100;

function start(){
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    height = window.innerHeight;
    width = window.innerWidth;
    document.addEventListener("mousemove", onMouseUpdate, false);
    button = document.getElementById("more");
    document.addEventListener("click", more,false);

};

function fill(){
    for(var i = 0; i < 100; i ++){
        var randomColor ="#" + Math.floor(Math.random()*16777215).toString(16);
        var randX = Math.floor(Math.random() * (width - boxWidth));
        var randY = Math.floor(Math.random() * (height - boxHeight));
        listOfSquares.push(square = {x:randX, y:randY, color:randomColor});
    } 
};

function onMouseUpdate(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    overBox(mouseX,mouseY);
    if(showAlert == true){
        alertMsg();
    }
};

function getMouseX(){
    return mouseX;
};

function getMouseY(){
    return mouseY;
};

function overBox(mouseX, mouseY){
   for(var i = 0; i < listOfSquares.length; i++){
    if (compareIndex(listOfSquares[i].x,mouseX,listOfSquares[i].y,mouseY) && compareEnd(listOfSquares[i].x + boxWidth, mouseX, listOfSquares[i].y + boxHeight, mouseY)) {
        listOfSquares.splice(i,1);
        display();
    }
   }
};

function compareIndex(startX, mouseX, startY, mouseY){
    if(mouseX >= startX && mouseY >= startY){
        return true;
    }
};

function compareEnd(endX, mouseX, endY, mouseY){
    if(mouseX <= endX && mouseY <= endY){
        return true;
    }
};

function draw(square, index, arr){
    ctx.beginPath();
    ctx.fillStyle = square.color;
    ctx.fillRect(square.x, square.y, boxWidth, boxHeight);
};

function display(){
    ctx.clearRect(0,0, width, height);
    listOfSquares.forEach(draw);
};

function alertMsg(){
    if(listOfSquares.length == 1){
        alert("Last box remaining!");
        showAlert = false;
    }
};

function more(){
    fill();
    display();
    showAlert = true;
}
function resize(){
    start();
    fill();
    display();
}; 

window.onload = resize();

window.onresize = resize();