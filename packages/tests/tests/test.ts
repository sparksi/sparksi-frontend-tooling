const testThatReturnsAString = (itemString: String) => {
  if (typeof itemString === 'string') {
    return itemString;
  } else {
    return Error;
  }
};

const testFunc = testThatReturnsAString('strings are us');

console.log(testFunc);
