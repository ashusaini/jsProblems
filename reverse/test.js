function reverse(arrayOfChars) {
  let temp = '';

  // Reverse the input array of characters in place
  for(let i = 0; i < arrayOfChars.length/2 ; i++){
         temp =  arrayOfChars[i]
   arrayOfChars[i] = arrayOfChars[arrayOfChars.length - 1 - i]
    arrayOfChars[arrayOfChars.length - 1 - i]  = temp

  }

  return arrayOfChars;



}


















// Tests

let desc = 'empty string';
let input = ''.split('');
reverse(input);
let actual = input.join('');
let expected = '';
assertEqual(actual, expected, desc);

desc = 'single character string';
input = 'A'.split('');
reverse(input);
actual = input.join('');
expected = 'A';
assertEqual(actual, expected, desc);

desc = 'longer string';
input = 'ABCDE'.split('');
reverse(input);
actual = input.join('');
expected = 'EDCBA';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
