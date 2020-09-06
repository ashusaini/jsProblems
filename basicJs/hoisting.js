// callbacks ?
// promises ?
// async await ?
// hoisting ?
// call, apply

// functions
// object
// prototypes
// bind
// closures

// generator functions





// 1. callbacks : functions as refrence called when io task is finished by the process. (Node.js process)


function test() {
  // var a; something like this happen in case of hoisting Note: it's just for demo purpose

  console.log(a);

  var a = 5;

  console.log(a);


}


function test2() {




  x();

  var x = function () {
    console.log("----")
  }


}

function test2() {




  x();

  function x () {
    console.log("----")
  }




}





test2();
