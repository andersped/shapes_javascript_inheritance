var Shape = require("../src/shape");
console.log(Shape);

var shape;
shape = new Shape(1,"red");
console.log(shape.color);

describe("Shape", function() {
  beforeEach(function() {
    shape = new Shape(1, "red");
  });

  describe("Area", function() {
    it("should should be 0 for this abstract shape", function() {
      expect(shape.area()).toEqual(0);
    });
  });

  describe("Perimeter", function() {
  	it("should be 0 for this abstract shape", function(){
  		expect(shape.area()).toEqual(0);
  	});
  });

    describe("Draw", function() {
  	it("should return a string with that many sides", function(){
  		expect(shape.draw()).toEqual("A shape with " + 1 + " sides");
  	});
  });

   describe("Sides", function() {
  	it("should return a string with the parameters", function(){
  		var otherShape = new Shape(2,"green");
  		expect(otherShape.toString()).toEqual("[Shape sides:" + 2 + ", color:" + "green" +" ]");
  	});
  });

   describe("rgb", function() {
  	it("should return a string with the rgb Value", function(){
  		expect(shape.getRGB()).toEqual("rgb(0,0,0)");
  	});
  });




  // Write more specs!!
});
