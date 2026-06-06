function firstNonRepeatedChar(str) {
  const count = {};

  for (const ch of str) {
    count[ch] = (count[ch] || 0) + 1;
  }

  for (const ch of str) {
    if (count[ch] === 1) {
      return ch;
    }
  }

  return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));