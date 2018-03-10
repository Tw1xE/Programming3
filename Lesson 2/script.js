
var grassArr = [];
var c = 0;
var side = 10;
var matrix = [
    // [1, 0, 1, 0, 1],
    // [1, 0, 0, 0, 0],
    // [0, 1, 0, 1, 0],
    // [0, 0, 1, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 2]
];
var gishatichner=[]

var xotakerner = []

var dinoner = []

var deaths = []

function setup() {
    
    frameRate(2);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            
            else if (matrix[y][x] == 2) {
                xotakerner.push(new Xotaker(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                gishatichner.push(new Gishatich(x,y, 3))

            }
            else if (matrix[y][x] == 4) {
                dinoner.push(new Dino(x,y,4))

            }
           else if (matrix[y][x] == 5) {
               deaths.push(new Death(x,y,5))
    
            }

        }
           
        }
    }




function draw() {
    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("lightblue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2)  {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x]==3) 
            {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x]==4) 
            {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x]==5) 
            {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    // for(var i in xotakerner){
    //   xotakerner[i].sharjvel();
    // }
    
    for (var i in xotakerner) {
        xotakerner[i].eat();
        
    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 10) {
            xotakerner[i].bazmanal();
        }
        else if(xotakerner[i].energy <= 0){
            
            xotakerner[i].mahanal(i);
        }
    }
    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy>=18) 
        {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy<=0) 
        {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in dinoner) {
        dinoner[i].eat();
    }
    for (var i in dinoner) {
        if (dinoner[i].energy>=18) 
        {
            dinoner[i].bazmanal()
        }
        else if (dinoner[i].energy<=0) 
        {
            dinoner[i].mahanal(i)
        }
    }
    for (var i in deaths) {
        deaths[i].eat();
    }
    for (var i in deaths) {
        if (deaths[i].energy>=18) 
        {
            deaths[i].bazmanal()
        }
        else if (deaths[i].energy<=0) 
        {
            deaths[i].mahanal(i)
        }
    }
}
var g=50

for (var y = 0; y < g; y++) {
        matrix.push([])
        for (var x = 0; x <g; x++) {
            matrix[y].push(0)
        }
    }


for (var i = 0; i <250; i++) {
    var a =Math.floor(Math.random()*g)
    var b=Math.floor(Math.random()*g)
    matrix[a][b]=1
}

for (var i = 0; i < 50; i++) {
    var a =Math.floor(Math.random()*g)
    var b=Math.floor(Math.random()*g)
    matrix[a][b]=2
}
for (var i = 0; i < 50; i++) {
     var a =Math.floor(Math.random()*g)
    var b=Math.floor(Math.random()*g)
    matrix[a][b]=3
}
for (var i = 0; i < 100; i++) {
     var a =Math.floor(Math.random()*g)
    var b=Math.floor(Math.random()*g)
    matrix[a][b]=4
}

for (var i = 0; i < 100; i++) {
    var a =Math.floor(Math.random()*g)
   var b=Math.floor(Math.random()*g)
   matrix[a][b]=5
}
















