
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
