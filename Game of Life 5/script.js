var grassArr = [];
var s = prompt("Write Any Season Of The Year")
var seasonText = document.getElementById("season")
var m
if (s == "winter" || s == "Winter") {
    m = 150
}
else if (s == "summer" || s == "Summer") {
    m = 50
}
else if (s == "autumn" || s == "Autumn" || s == "Fall" || s == "fall") {
    m = 100
}
else if (s == "" || s == "spring" || s == "Spring") {
    m = 0
}
var season
var rain
var side = 30;
var matrix = [

];
var gishatichner = []
var deaths = []
var xotakerner = []

var dinoner = []
var napastakner = []

function setup() {

    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('brown');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));
            }
            else if (matrix[y][x] == 2 || matrix[y][x] == 2.1) {
                xotakerner.push(new Xotaker(x, y, 2, matrix[y][x]));

            }
            else if (matrix[y][x] == 3 || matrix[y][x] == 3.1) {
                gishatichner.push(new Gishatich(x, y, 3, matrix[y][x]))

            }
            else if (matrix[y][x] == 4 || matrix[y][x] == 4.1) {
                dinoner.push(new Dino(x, y, 4, matrix[y][x]))
            }
            else if (matrix[y][x] == 5 || matrix[y][x] == 5.1) {
                napastakner.push(new Napastak(x, y, 5, matrix[y][x]))
            }
            else if (matrix[y][x] == 10) {
                deaths.push(new Death(x, y, 10))
            }
        }
    }


}



function draw() {

    m++
    if (m >= 0 && m < 50) {
        season = "spring"
        seasonText.innerHTML = "Spring"
        if (ss > 0 && ss < 20) {
            rain = true
        }
        else {
            rain = false
        }
        if (season == "spring" && grassArr.length == 0) {
            var a = Math.floor(Math.random() * g)
            var b = Math.floor(Math.random() * h)
            for (let i = 0; i < 2; i++) {
                if (matrix[a][b] == 0) {
                    matrix[a][b] = 1
                    grassArr.push(new Grass(a, b, 1));
                }
            }
        }
    }
    else if (m >= 50 && m < 100) {
        season = "summer"
        seasonText.innerHTML = "Summer"
        var ss = Math.floor(Math.random() * 100)
        if (ss > 0 && ss < 10) {
            rain = true
        }
        else {
            rain = false
        }
    }
    else if (m >= 100 && m < 150) {
        season = "autumn"
        seasonText.innerHTML = "Autumn"
        var ss = Math.floor(Math.random() * 100)
        if (ss > 0 && ss < 30) {
            rain = true
        }
        else {
            rain = false
        }
    }
    else if (m >= 150 && m <= 200) {
        season = "winter"
        seasonText.innerHTML = "Winter"
        if (m == 200) {
            m = 0
        }
    }

    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                if (season == "spring") {
                    fill("green");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "summer") {
                    fill("yellow");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "autumn") {
                    fill("orange");
                    rect(x * side, y * side, side, side);
                }
                else if (season == "winter") {
                    fill("white");
                    rect(x * side, y * side, side, side);

                }

            }
            else if (matrix[y][x] == 0) {
                fill(175, 129, 82);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill(139, 69, 19);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2.1) {
                fill(165, 42, 42);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4.1) {
                fill("#FF4500");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("grey");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5.1) {
                fill("#708090");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3.1) {
                fill("#DC143C");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }

    for (var i in gishatichner) {
        gishatichner[i].eat();
    }
    for (var i in gishatichner) {
        if (gishatichner[i].energy >= 25) {
            gishatichner[i].bazmanal()
        }
        else if (gishatichner[i].energy <= 0 || gishatichner[i].tariq == 25) {
            gishatichner[i].mahanal(i)
        }
    }
    for (var i in dinoner) {
        dinoner[i].eat();
    }
    for (var i in dinoner) {
        if (dinoner[i].energy >= 28) {
            dinoner[i].bazmanal()
        }
        else if (dinoner[i].energy <= 0 || dinoner[i].tariq == 40) {
            dinoner[i].mahanal(i)
        }
    }
    for (var i in xotakerner) {
        xotakerner[i].eat();

    }
    for (var i in xotakerner) {
        if (xotakerner[i].energy >= 16) {
            xotakerner[i].bazmanal();
        }
        else if (xotakerner[i].energy <= 0) {

            xotakerner[i].mahanal(i);
        }
    }
    for (var i in napastakner) {
        napastakner[i].eat();

    }
    for (var i in napastakner) {
        if (napastakner[i].energy >= 13) {
            napastakner[i].bazmanal();
        }
        else if (napastakner[i].energy <= 0 || napastakner[i].tariq == 10) {

            napastakner[i].mahanal(i);
        }
    }
    for (var i in deaths) {
        deaths[i].eat()
    }
    for (var i in deaths) {
        if (deaths[i].energy >= 5) {
            var f = 0
            deaths[i].boom()
            for (var i = 0; i < 2; i++) {
                f++
                if (f == 2) {
                    break;
                }

            }
        }
    }

}
var g = 10

var h = 10
for (var y = 0; y < g; y++) {
    matrix.push([])
    for (var x = 0; x < h; x++) {
        matrix[y].push(0)
    }
}


for (var i = 0; i < 10; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * h)
    matrix[a][b] = 1
}
/*
    for (var i = 0; i < 8; i++) {
        var a = Math.floor(Math.random() * g)
        var b = Math.floor(Math.random() * h)
        matrix[a][b] = 2
        var ss = Math.floor(Math.random() * 100)
        if (ss < 50) {
            matrix[a][b] = 2
        }
        else if (ss > 50) {
            matrix[a][b] = 2.1
        }
    }
    
    
    for (var i = 0; i < 5; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss <50) {
          matrix[a][b] = 3
      }
      else if (ss >50) {
          matrix[a][b] = 3.1
      }}
    for (var i = 0; i < 4; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss <50) {
          matrix[a][b] = 4
      }
      else if (ss >50) {
          matrix[a][b] = 4.1
    }
    }
    
    for (var i = 0; i < 40; i++) {
      var a = Math.floor(Math.random() * g)
      var b = Math.floor(Math.random() * h)
      var ss = Math.floor(Math.random() * 100)
      if (ss < 50) {
          matrix[a][b] = 5
      }
      else if (ss > 50) {
          matrix[a][b] = 5.1
      }
    }*/
for (var i = 0; i < 1; i++) {
    var a = Math.floor(Math.random() * g)
    var b = Math.floor(Math.random() * h)
    matrix[a][b] = 10
}

















