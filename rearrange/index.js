// Given a sentence with numbers representing a word's location embedded within each word, return the sorted sentence.

// Examples
// rearrange("is2 Thi1s T4est 3a") ➞ "This is a Test"

// rearrange("4of Fo1r pe6ople g3ood th5e the2") ➞ "For the good of the people"

// rearrange(" ") ➞ ""
// Notes
// Only the integers 1-9 will be used.


function rearrange(str) {

  const splittedArray =  str.split(" "); // order n

  var objectArray = [];

 splittedArray.forEach((s) => {

  const obj = removeInteger(s);
  objectArray[obj.index - 1] = obj.text;

  });
 // n time : n is length of string


  return objectArray.join(" "); // order words

}

function removeInteger(str){

  var x = {
    text : "",
    index: 0
  };

  for (let index = 0; index < str.length; index++) {

    if(str[index]>= 1 && str[index] <= 9)
    {
      x.index = parseInt(str[index]);
    }else{
      x.text += str[index];
    }

  }

  console.log(x);

  return x;

}

// console.log(rearrange("is2 Thi1s T4est 3a"));

if(rearrange("is2 Thi1s T4est 3a") === "This is a Test"){
  console.log("Passed");
}else{
  console.log("Failed");
}


let a = removeInteger("is2");

if(a.text === "is" && a.index === 2){
  console.log("Passed removeInteger");
}else{
  console.log("Failed removeInteger");
}
