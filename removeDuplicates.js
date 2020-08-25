var a = [1, 2, 3, 4];
var b = {
  1: true,
  2: true,
  3: true,
  4: true,
};



// a.indexOf(3) > -1
//  if(b[3]);

// O(n);
// O(n)
// use cache
// dynamic programming

var arr = ["apple", "banana", "orange", "lemon", "apple", "mango", "lemon"];

function getDuplicates(data) {
  return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(getDuplicates(arr));