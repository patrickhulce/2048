function Tile(position, value) {
  this.x                = position.x;
  this.y                = position.y;
  this.value            = value || 2;

  this.previousPosition = null;
  this.mergedFrom       = null; // Tracks tiles that merged together
}

Tile.prototype.savePosition = function () {
  this.previousPosition = { x: this.x, y: this.y };
};

Tile.prototype.updatePosition = function (position) {
  this.x = position.x;
  this.y = position.y;
};

Tile.prototype.serialize = function () {
  return {
    position: {
      x: this.x,
      y: this.y
    },
    value: this.value
  };
};

Tile.prototype.copy = function() {
  var t = new Tile({}, null);
  t.x = this.x;
  t.y = this.y;
  t.value = this.value;
  t.previousPosition = {x: t.x, y: t.y};
  t.mergedFrom = null;
  return t;
}
