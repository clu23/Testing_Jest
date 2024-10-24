const reverseString = require('../reverseString')


describe("ReverseString", () => {
    test("Name ", () => {
      expect(reverseString("blackbeard")).toBe("draebkcalb");
    });
    test("Is Empty", () => {
        expect(reverseString("")).toBe("");
    });
    test("numbers", () => {
        expect(reverseString("4762")).toBe("2674");
    });
    test("Is Null", () => {
        expect(reverseString(null)).toBe("");
    });
  });