//const assert = require('assert') DEFAULT NODEJS ASSERTION module
const assert = require("chai").assert;
//const app = require('../app'); Part 1
// const sayHello = require("../app").sayHello;
// const addNumbers = require("../app").addNumbers;
const app = require("../app");

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5, 5);
subtractNumberResult = app.subtractNumber(12, 10);

describe("App", () => {
  describe("sayHello()", () => {
    it("sayHello should return hello", () => {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, "hello");
    });

    it("sayHello should return type string", () => {
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, "string");
    });
  });
  describe("addNumbers()", () => {
    it("addNumbers should be above 5", () => {
      // let result = app.addNumbers(4, 3);
      assert.isAbove(addNumbersResult, 5);
    });

    it("addNumbers should return type number", () => {
      // let result = app.addNumbers(4, 3);
      assert.typeOf(addNumbersResult, "number");
    });
  });
  describe("subtractNumber()", () => {
    it("subtractNumber is below ", () => {
      assert.isBelow(subtractNumberResult, 5);
    });
  });
});
