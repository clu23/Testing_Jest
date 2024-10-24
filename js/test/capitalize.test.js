const capitalize = require('../capitalize')


describe("Capitalize", () => {
    test("Name ", () => {
      expect(capitalize("blackbeard")).toBe("Blackbeard");
    });
    test("Special characters", () =>{
      expect(capitalize("a123,@!")).toBe("A123,@!");
    })
    test("Is Empty", () => {
      expect(capitalize("")).toBe("");
    });
    test("Is Null", () => {
      expect(capitalize(null)).toBe("");
    });
  });