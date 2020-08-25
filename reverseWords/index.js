function reverse(arrayOfChars,from  , to) {

  let temp = '';

  while (from  < to) {
    temp =  arrayOfChars[from]
    arrayOfChars[from] = arrayOfChars[to]
     arrayOfChars[to]  = temp

     from++;
     to--;
  }

  return arrayOfChars;
}

function reverseWords(message) {

  reverse(message,0,message.length - 1);
  let from = 0;
  let to = 0;

  for (let index = 0; index < message.length; index++) {
    if(message[index] === ' '){
      reverse(message,from,to - 1);
      from = index+1;
    }
    to++;
  }

  reverse(message,from,to-1);

  return message;
}


















// Tests

let desc = 'one word';
let input = 'vault'.split('');
reverseWords(input);
let actual = input.join('');
let expected = 'vault';
assertEqual(actual, expected, desc);

desc = 'two words';
input = 'thief cake'.split('');
reverseWords(input);
actual = input.join('');
expected = 'cake thief';
assertEqual(actual, expected, desc);

desc = 'three words';
input = 'one another get'.split('');
reverseWords(input);
actual = input.join('');
expected = 'get another one';
assertEqual(actual, expected, desc);

desc = 'multiple words same length';
input = 'rat the ate cat the'.split('');
reverseWords(input);
actual = input.join('');
expected = 'the cat ate the rat';
assertEqual(actual, expected, desc);

desc = 'multiple words different lengths';
input = 'yummy is cake bundt chocolate'.split('');
reverseWords(input);
actual = input.join('');
expected = 'chocolate bundt cake is yummy';
assertEqual(actual, expected, desc);

desc = 'empty string';
input = ''.split('');
reverseWords(input);
actual = input.join('');
expected = '';
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
