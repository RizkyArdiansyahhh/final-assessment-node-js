import { it, describe } from "node:test";
import assert from "node:assert";
import sum from "./index.js";

describe("sum", () => {
  it("should return 0 when 'a' is not a number", () => {
    // Arrange
    const numA = "1";
    const numB = 1;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.equal(result, 0);
  });
  it("should return 0 when 'b' is not a number", () => {
    // Arrange
    const numA = 1;
    const numB = "1";

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.equal(result, 0);
  });
  it("should return 0 when 'a' is less than 0", () => {
    // Arrange
    const numA = -1;
    const numB = 1;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.equal(result, 0);
  });
  it("should return 0 when 'b' is less than 0", () => {
    // Arrange
    const numA = 1;
    const numB = -1;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.strictEqual(result, 0);
  });

  it("should return the correct sum when both 'a' and 'b' are valid numbers", () => {
    // Arrange
    const numA = 3;
    const numB = 4;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.strictEqual(result, 7);
  });

  it("should return 0 when both 'a' and 'b' are negative", () => {
    // Arrange
    const numA = -1;
    const numB = -2;

    // Action
    const result = sum(numA, numB);

    // Assert
    assert.strictEqual(result, 0);
  });
});
