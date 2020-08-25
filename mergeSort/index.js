function mergeArrays(myArray, alicesArray) {

  // Combine the sorted arrays into one large sorted array

  const sorted = [];

  if(!myArray.length)
  {
    return alicesArray;
  }
  if(!alicesArray.length)
  {
    return myArray;
  }


  let fI = 0;
  let sI = 0;
  while (fI < myArray.length || sI < alicesArray.length  ) {

    if(fI >= myArray.length)
    {
      sorted.push(alicesArray[sI]);
      sI++;
    }else if( sI >= alicesArray.length)
    {
      sorted.push(myArray[fI]);
      fI++;
    }else if( myArray[fI] < alicesArray[sI] ){
      sorted.push(myArray[fI]);
      fI++;
    }else{
      sorted.push(alicesArray[sI]);
      sI++;
    }
  }





  return sorted;
}



// Tests

let desc = 'both arrays are empty';
let actual = mergeArrays([], []);
let expected = [];
assertDeepEqual(actual, expected, desc);

desc = 'first array is empty';
actual = mergeArrays([], [1, 2, 3]);
expected = [1, 2, 3];
assertDeepEqual(actual, expected, desc);

desc = 'second array is empty';
actual = mergeArrays([5, 6, 7], []);
expected = [5, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'both arrays have some numbers';
actual = mergeArrays([2, 4, 6], [1, 3, 7]);
expected = [1, 2, 3, 4, 6, 7];
assertDeepEqual(actual, expected, desc);

desc = 'arrays are different lengths';
actual = mergeArrays([2, 4, 6, 8], [1, 7]);
expected = [1, 2, 4, 6, 7, 8];
assertDeepEqual(actual, expected, desc);

function assertDeepEqual(a, b, desc) {
  const aStr = JSON.stringify(a);
  const bStr = JSON.stringify(b);
  if (aStr !== bStr) {
    console.log(`${desc} ... FAIL: ${aStr} != ${bStr}`);
  } else {
    console.log(`${desc} ... PASS`);
  }
}
