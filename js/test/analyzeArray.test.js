const analyzeArray = require('../analyzeArray')


describe("Analyze Array", () => {
    test("Array with single element", () => {
      expect(analyzeArray([4])).toStrictEqual({ average: 4,  min: 4,  max: 4,  length: 1});
    });
    test("Array with several elements", () => {
    expect(analyzeArray([7, 56, 4, 895, 523, 62, 2, 9])).toStrictEqual({ average: 194.75,  min: 2,  max: 895,  length: 8});
    });
  });