import { it, describe } from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

describe("sum", () => {
  it("should return sum of two numbers", () => {
    // Arrange
    const numA = 2;
    const numB = 2;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.equal(result, 4);
  });
});
