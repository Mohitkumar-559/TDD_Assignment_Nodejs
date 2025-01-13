const StringCalculator = require("../StringCalculator"); // Update the path to your StringCalculator class

describe("StringCalculator", () => {
  let chai;
  let expect;
  let calculator;

  // Use dynamic import for Chai.js
  before(async () => {
    chai = await import("chai");
    expect = chai.expect;
  });

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).to.equal(0);
  });

  it("should return the number itself for a single number", () => {
    expect(calculator.add("1")).to.equal(1);
    expect(calculator.add("5")).to.equal(5);
  });
  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).to.equal(3);
    expect(calculator.add("3,5")).to.equal(8);
  });

  

  

  
});
