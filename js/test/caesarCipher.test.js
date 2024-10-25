const caesarCipher = require('../caesarCipher')



describe("Caesar Cipher", () => {
    test("shift of one ", () => {
      expect(caesarCipher("Hello",1)).toBe("Ifmmp");
    });
    test("high shift", () => {
    expect(caesarCipher("Blackbeard",20)).toBe("Vfuwevyulx");
    });
    test("space", () => {
    expect(caesarCipher("Hello World",2)).toBe("Jgnnq Yqtnf");
    });
    test("punctuation", () => {
    expect(caesarCipher("Hello, World !",2)).toBe("Jgnnq, Yqtnf !");
    }); 
  });