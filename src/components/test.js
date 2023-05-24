const testThatReturnsAString = (itemString) => {
  if (typeof itemString === 'string') {
    return itemString;
  } else {
    return 'Error: this is not a string';
  }
};

testThatReturnsAString('strings are us');
