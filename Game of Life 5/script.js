
var grassArr = [];
var season = prompt("Write Any Season Of The Year")
var c = 0;
var z
if (season == "Winter" || season == "winter") {
    z = 200
}
else if (season == "Summer" || season == "summer") {
    z = 150
}
else if (season == "Spring" || season == "spring") {
    z = 50
}
else if (season == "Autumn" || season == "autumn") {
    z = 100
}
else {
    z = 0
}

/*
function getSeason(month) {

    if (3 <= month <= 5) {
        return 'spring';
    }

    if (6 <= month <= 8) {
        return 'summer';
    }

    if (9 <= month <= 11) {
        return 'fall';
    }

    // Months 12, 01, 02
    return 'winter';
}
*/
var side = 30;
var matrix = [];
var g = 25

var h = 40

for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < g; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 250; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 1
}

for (var i = 0; i < 50; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 2
}
for (var i = 0; i < 50; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 3
}
for (var i = 0; i < 100; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 4
}

for (var i = 0; i < 100; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * g)
    matrix[a][b] = 5
}
var gishatichner = []

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
                gishatichner.push(new Gishatich(x, y, 3))

            }
            else if (matrix[y][x] == 4) {
                dinoner.push(new Dino(x, y, 4))

            }
            else if (matrix[y][x] == 5) {
                deaths.push(new Death(x, y, 5))

            }

        }

    }
}




function draw() {
    z++
    if (z >= 0 && z < 50) {
        season = "spring"
        if (season == "spring" && grassArr.length == 0) {
            var a = Math.floor(Math.random() * g)
            var b = Math.floor(Math.random() * h)
            var gr = new Grass(a, b, 1);
            grassArr.push(gr);
        }
    }
    else if (z >= 50 && z < 100) {
        season = "autumn"
    }
    else if (z >= 100 && z < 150) {
        season = "summer"
    }
    else if (z >= 150 && z <= 200) {
        season = "winter"
        if (z == 200) {
            z = 0
        }
    }
console.log(z);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if (season == "spring") {
                    fill("green")
                    rect(x * side, y * side, side, side);
                }
                if (season == "summer") {
                    fill("green")
                    rect(x * side, y * side, side, side);
                }
                if (season == "autumn") {
                    fill("orange")
                    rect(x * side, y * side, side, side);
                }
                if (season == "winter") {
                    fill("white")
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 2) {
                if (season == "spring") {
                    fill("yellow")
                    rect(x * side, y * side, side, side);
                }
                if (season == "summer") {
                    fill("yellow")
                    rect(x * side, y * side, side, side);
                }
                if (season == "autumn") {
                    fill("yellow")
                    rect(x * side, y * side, side, side);
                }
                if (season == "winter") {
                    fill("yellow")
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 3) {
                if (season == "spring") {
                    fill("purple")
                    rect(x * side, y * side, side, side);
                }
                if (season == "summer") {
                    fill("purple")
                    rect(x * side, y * side, side, side);
                }
                if (season == "autumn") {
                    fill("purple")
                    rect(x * side, y * side, side, side);
                }
                if (season == "winter") {
                    fill("purple")
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 4) {
                if (season == "spring") {
                    fill("red")
                    rect(x * side, y * side, side, side);
                }
                if (season == "summer") {
                    fill("red")
                    rect(x * side, y * side, side, side);
                }
                if (season == "autumn") {
                    fill("red")
                    rect(x * side, y * side, side, side);
                }
                if (season == "winter") {
                    fill("red")
                    rect(x * side, y * side, side, side);
                }
            }
            else if (matrix[y][x] == 5) {
                if (season == "spring") {
                    fill("black")
                    rect(x * side, y * side, side, side);
                }
                if (season == "summer") {
                    fill("black")
                    rect(x * side, y * side, side, side);
                }
                if (season == "autumn") {
                    fill("black")
                    rect(x * side, y * side, side, side);
                }
                if (season == "winter") {
                    fill("black")
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
            else if (xotakerner[i].energy <= 0) {

                xotakerner[i].mahanal(i);
            }
        }
        for (var i in gishatichner) {
            gishatichner[i].eat();
        }
        for (var i in gishatichner) {
            if (gishatichner[i].energy >= 18) {
                gishatichner[i].bazmanal()
            }
            else if (gishatichner[i].energy <= 0) {
                gishatichner[i].mahanal(i)
            }
        }
        for (var i in dinoner) {
            dinoner[i].eat();
        }
        for (var i in dinoner) {
            if (dinoner[i].energy >= 18) {
                dinoner[i].bazmanal()
            }
            else if (dinoner[i].energy <= 0) {
                dinoner[i].mahanal(i)
            }
        }
        for (var i in deaths) {
            deaths[i].eat();
        }
        for (var i in deaths) {
            if (deaths[i].energy >= 18) {
                deaths[i].bazmanal()
            }
            else if (deaths[i].energy <= 0) {
                deaths[i].mahanal(i)
            }
        }
    }


}















