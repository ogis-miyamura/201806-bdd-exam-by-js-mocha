class Bowling {
  constructor() {
    this.pins = [];
    this.current = 0;
  }

  roll(pins) {
    this.pins[this.current++] = pins;
  }

  isSpare(index) {
    return (this.pins[index] + this.pins[index + 1] == 10);
  }

  isStrike(index) {
    return (this.pins[index] == 10);
  }

  score() {
    var sum = 0;
    var index = 0;
    for (var frame = 0; frame < 10; frame++) {
      sum += this.pins[index] + this.pins[index + 1];
      if (this.isStrike(index) || this.isSpare(index)) sum += this.pins[index + 2];
      index += (this.isStrike(index) ? 1 : 2);
    }
    return sum;
  }
}
