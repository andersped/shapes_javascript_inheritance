var Shape = require("./shape");
function Rectangle(side1Length, side2Length, color) {
  Shape.call(4, color);
  this.side1Length = side1Length;
  this.side2Length = side2Length;
}
// Add the constructor for rectangle and the methods that
// need to be overwritten.  Keep in mind that a rectangle
// has more than just 1 side length.

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.area = function() {
  return this.side1Length * this.side2Length;
};

Rectangle.prototype.perimeter = function() {
  return (this.side1Length * 2) + (this.side2Length * 2);
};

Rectangle.prototype.draw = function() {
   return "A shape with " + this.sides + " sides";
};

Rectangle.prototype.toString = function() {
  return "[Shape sides:" + this.sides + ", color:" + this.color +" ]"
};


module.exports = Rectangle;
