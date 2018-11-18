/*
class Death {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.energy = 15;
    this.directions = [];
    this.index = 5;
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
      matrix[norvandak[1]][norvandak[0]] = 5;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy--;
    }
  }
  eat() {
    this.stanalNorKordinatner();
    var datarkvandakner = this.yntrelVandak(3);
    var norvandak = random(datarkvandakner);
    if (norvandak) {
      matrix[this.y][this.x] = 0;
      matrix[norvandak[1]][norvandak[0]] = 5;
      this.x = norvandak[0];
      this.y = norvandak[1];
      this.energy++;
      for (var c in dinoner) {

        if (dinoner[c].x == this.x && dinoner[c].y == this.y) {
          dinoner.splice(c, 1);
          break;
        }
      }
    }
    else {
      this.sharjvel();
    }
  }
  bazmanal() {
    this.energy = 10;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var death = new Death(norVandak[0], norVandak[1]);
      deaths.push(death);
      matrix[norVandak[1]][norVandak[0]] = 5;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    deaths.splice(i, 1);

    energy = 10;
    var norVandak = random(this.yntrelVandak(0));
    if (norVandak) {
      var death = new Death(norVandak[0], norVandak[1]);
      deaths.push(deazmaath);
      matrix[norVandak[1]][norVandak[0]] = 5;
    }
  }
  mahanal(i) {
    matrix[this.y][this.x] = 0;
    deaths.splice(i, 1);


  }
}
*/

class Death extends KendaniEak {
  constructor(x, y, index) {
      super(x, y, index)
      this.energy = 0
      this.multiply = 0
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
      this.stanalNorKordinatner();
      var norvandak = random(this.yntrelVandak(0));
      if (norvandak) {
          matrix[this.y][this.x] = 0;
          matrix[norvandak[1]][norvandak[0]] = 10;
          this.x = norvandak[0];
          this.y = norvandak[1];
      }
      else {

      }
  }
  eat() {
      this.multiply++
      if (this.multiply == 1) {
          this.multiply = 0
          this.stanalNorKordinatner();
          var norvandak = random(this.yntrelVandak(1));
          if (norvandak) {
              matrix[this.y][this.x] = 0;
              matrix[norvandak[1]][norvandak[0]] = 10;
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
          else {
              this.sharjvel();
          }
      }
  }
  boom() {
      this.stanalNorKordinatner();
      this.energy = 0
      for (var i = 0; i < 8; i++) {
          if (this.directions[i][0] >= 0 && this.directions[i][0] < matrix[0].length && this.directions[i][1] >= 0 && this.directions[i][1] < matrix.length) {
              if (matrix[this.directions[i][1]][this.directions[i][0]] != 0) {
                  if (matrix[this.directions[i][1]][this.directions[i][0]] == 1) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                      for (var c in grassArr) {
                          if (grassArr[c].x == this.directions[i][1] && grassArr[c].y == this.directions[i][0]) {
                              grassArr.splice(c, 1);
                              break;
                          }
                      }
                  }
                  else if (matrix[this.directions[i][1]][this.directions[i][0]] == 2) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                      for (var c in xotakerner) {
                          if (xotakerner[c].x == this.directions[i][1] && xotakerner[c].y == this.directions[i][0]) {
                              xotakerner.splice(c, 1);
                              break;
                          }
                      }
                  }
                  else if (matrix[this.directions[i][1]][this.directions[i][0]] == 3) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                      for (var c in gishatichner) {
                          if (gishatichner[c].x == this.directions[i][1] && gishatichner[c].y == this.directions[i][0]) {
                              gishatichner.splice(c, 1);
                              break;
                          }
                      }
                  }
                  else if (matrix[this.directions[i][1]][this.directions[i][0]] == 4) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                      for (var c in dinoner) {
                          if (dinoner[c].x == this.directions[i][1] && dinoner[c].y == this.directions[i][0]) {
                              dinoner.splice(c, 1);
                              break;
                          }
                      }
                  }
                  else if (matrix[this.directions[i][1]][this.directions[i][0]] == 5) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                      for (var c in napastakner) {
                          if (napastakner[c].x == this.directions[i][1] && napastakner[c].y == this.directions[i][0]) {
                              napastakner.splice(c, 1);
                              break;
                          }
                      }
                  }
                  else if (matrix[this.directions[i][1]][this.directions[i][0]] == 0) {
                      matrix[this.directions[i][1]][this.directions[i][0]] = 0
                  }
                  else {

                  }
              }
          }

      }
  }
}