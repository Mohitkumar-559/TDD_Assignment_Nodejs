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

  it("should handle any amount of numbers", () => {
    expect(calculator.add("1,2,3,4")).to.equal(10);
    expect(calculator.add("10,20,30,40,50")).to.equal(150);
  });

  it("should handle newlines as delimiters", () => {
    expect(calculator.add("1\n2,3")).to.equal(6);
    expect(calculator.add("4\n5\n6")).to.equal(15);
  });

  it("should support custom delimiters", () => {
    expect(calculator.add("//;\n1;2")).to.equal(3);
    expect(calculator.add("//|\n1|2|3")).to.equal(6);
    expect(calculator.add("//***\n1***2***3")).to.equal(6);
  });
  
  it("should handle special characters in custom delimiters", () => {
    expect(calculator.add("//.\n1.2.3")).to.equal(6);   // Dot as a delimiter
    expect(calculator.add("//$\n1$2$3")).to.equal(6);   // Dollar sign as a delimiter
    expect(calculator.add("//***\n1***2***3")).to.equal(6); // Multi-character delimiter
  });
  

  it("should throw an exception for negative numbers", () => {
    expect(() => calculator.add("-1,2,-3")).to.throw("Negative numbers not allowed: -1, -3");
  });

  it("should throw an exception listing all negative numbers", () => {
    expect(() => calculator.add("5,-1,-2,3")).to.throw("Negative numbers not allowed: -1, -2");
  });
});
