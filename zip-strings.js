function zipStrings(strA, strB) {
  let strLength = 0;
  let output = "";

  if (strA.length >= strB.length) {
    strLength = strA.length;
  } else {
    strLength = strB.length;
  }

  for (let i = 0; i < strLength; i++) {
    if (i < strA.length) {
      output += strA[i];
    }
    if (i < strB.length) {
      output += strB[i];
    }
  }
  return output;
}

```js
console.log(zipStrings("abc", "123")); // "a1b2c3"

console.log(zipStrings("abc", "1")); // "a1bc"

console.log(zipStrings("a", "123")); // "a123"

console.log(zipStrings("", "123")); // "123"

console.log(zipStrings("abc", "")); // "abc"
```;
