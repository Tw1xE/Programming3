/*class Xotaker {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 8;
    this.directions = [];
    this.index = 2;
  }

  stanalNorKordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }
  yntrelVandak(ch) {
    this.stanalNorKordinatner()
    var found = [];
    for (var i in this.directions) {
      var x = this.directions[i][0];
      var y = this.directions[i][1];
      if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
        if (matrix[y][x] == ch) {
          found.push(this.directions[i]);
        }
      }
    }
    return found;
  }
  sharjvel() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(0);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 2;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(1);
    var norvandak = random(datarkvandakner);

    if (norvandak) {

      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 2;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in grassArr) {
        if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
          grassArr.splice(c, 1);
          break;
        }
      }
    }
    else {
      this.sharjvel();
    }
  }

  bazmanal() {
    this.energy = 6;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
      xotakerner.push(norXotaker);
      matrix[norVandak[1]][norVandak[0]] = 2;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    xotakerner.splice(i, 1);
    console.log(xotakerner.length)
  }

}
*/

class Xotaker extends KendaniEak {
  constructor(x, y, index, xy) {
      super(x, y, index);
      this.tariq = 0;
      this.index = index
      this.xy = xy
      this.energy = 10
      this.ws=0

  }
  stanalNorKordinatner() {
      this.directions = [
          [this.x - 1, this.y - 1],
          [this.x, this.y - 1],
          [this.x + 1, this.y - 1],
          [this.x - 1, this.y],
          [this.x + 1, this.y],
          [this.x - 1, this.y + 1],
          [this.x, this.y + 1],
          [this.x + 1, this.y + 1]
      ];
  }
  yntrelVandak(ch) {
      this.stanalNorKordinatner();
      return super.yntrelVandak(ch);
  }
  sharjvel() {
      this.ws++
      this.tariq++
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(0);
      var norvandak = random(datarkvandakner);
      if (norvandak) {
          if (this.ws>=5&&season=="winter") {
              this.ws=0
              if (this.xy == 2) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
              else if (this.xy == 2.1) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2.1;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
          }
          else if (season!="winter"&&this.ws>=0&&rain==false) {
              this.ws=0
              if (this.xy == 2) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
              else if (this.xy == 2.1) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2.1;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
          }
          else if (rain==true&&this.ws>=1) {
              this.ws=0
              if (this.xy == 2) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
              else if (this.xy == 2.1) {
                  matrix[this.y][this.x] = 0;
                  matrix[norvandak[1]][norvandak[0]] = 2.1;
                  this.x = norvandak[0];
                  this.y = norvandak[1];
                  this.energy--;
              }
          }
      }
      else {

      }
  }
  eat() {
      this.tariq++
      this.stanalNorKordinatner();
      var datarkvandakner = this.yntrelVandak(1);
      var norvandak = random(datarkvandakner);
      if (norvandak) {
          if (this.xy == 2) {
              matrix[this.y][this.x] = 0;
              matrix[norvandak[1]][norvandak[0]] = 2;
              this.x = norvandak[0];
              this.y = norvandak[1];
              this.energy++
              for (var c in grassArr) {
                  if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                      grassArr.splice(c, 1);
                      break;
                  }
              }
          }
          else if (this.xy == 2.1) {
              matrix[this.y][this.x] = 0;
              matrix[norvandak[1]][norvandak[0]] = 2.1;
              this.x = norvandak[0];
              this.y = norvandak[1];
              this.energy++
              for (var c in grassArr) {
                  if (grassArr[c].x == this.x && grassArr[c].y == this.y) {
                      grassArr.splice(c, 1);
                      break;
                  }
              }
          }


      }
      else {
          this.sharjvel();
      }
  }

  bazmanal() {
      this.multiply++
      this.tariq++

      if (this.xy == 2) {
          var norVandak = random(this.yntrelVandak(0));
          var partner = random(this.yntrelVandak(2.1))
          if (norVandak && this.multiply >= 8 && partner) {
              this.energy = 10;
              this.multiply=0
              var s = Math.floor(Math.random() * 100)
              if (s < 50) {
                  var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2, 2);
                  xotakerner.push(norXotaker);
                  matrix[norVandak[1]][norVandak[0]] = 2;
              }
              else if (s > 50) {
                  var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2, 2.1);
                  xotakerner.push(norXotaker);
                  matrix[norVandak[1]][norVandak[0]] = 2.1;
              }
          }
          else if (this.xy == 2.1) {
              var norVandak = random(this.yntrelVandak(0));
              var partner = random(this.yntrelVandak(2))
              if (norVandak && this.multiply >= 8 && partner) {
                  this.energy = 10;
                  this.multiply=0
                  var s = Math.floor(Math.random() * 100)
                  if (s < 50) {
                      var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2, 2);
                      xotakerner.push(norXotaker);
                      matrix[norVandak[1]][norVandak[0]] = 2;
                  }
                  else if (s > 50) {
                      var norXotaker = new Xotaker(norVandak[0], norVandak[1], 2, 2.1);
                      xotakerner.push(norXotaker);
                      matrix[norVandak[1]][norVandak[0]] = 2.1;
                  }
              }

          }


      }
  }
  mahanal(i) {
      matrix[this.y][this.x] = 0;
      xotakerner.splice(i, 1);

  }
}


