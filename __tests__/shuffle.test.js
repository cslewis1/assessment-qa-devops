const shuffle = require("../src/shuffle");

let testArr = ["robot1, robot2, robot3, robot4"]

describe("shuffle tests", () => {
  // CODE HERE
  test("shuffle should return an array that is the same length as the argument", () => {
    let shuffleArray = shuffle(testArr);
    expect(shuffleArray.length).toEqual(testArr.length)
  })

  test("shuffle should return the same items as the argument array ", () => {
    let matchingArray = shuffle(testArr);
    expect(matchingArray).toEqual(expect.arrayContaining(testArr));
  })
});
