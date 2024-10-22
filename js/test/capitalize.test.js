const capitalize = require('../capitalize')


describe("Capitalize", () => {
    test("Name ", () => {
      expect(capitalize("blackbeard")).toBe("Blackbeard");
    });
    test("Is Empty", () => {
      expect(capitalize("")).toBe("");
    });
    test("Is Null", () => {
      expect(capitalize(null)).toBe("");
    });
  });