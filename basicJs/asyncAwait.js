// callbacks ?
// promises ?
// async await ?

// functions
// object
// prototypes
// closures
// hoisting
// generator functions
// call, bind, apply




// 1. callbacks : functions as refrence called when io task is finished by the process. (Node.js process)



function getSuger() {
  return new Promise((resolve, reject) => {
    resolve("suger");
  });

}

var sug =    new Promise((resolve, reject) => {
  resolve("suger");
});


function getMilk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("milk");
    }, 2000);
  });

}

function getCoffee(cb) {
  setTimeout(() => {
    cb("raw coffee");
  }, 3000);
};

function getCoffeePromise() {
  return  new Promise((resolve, reject) => {
    getCoffee((data) => {
      resolve(data);
    });
  });
}


function prepareCoffee(s, m , rc){

  return new Promise((r) => {

    setTimeout(() => {

      r(s+m+rc);

    }, 2000);
  })
}


async function makeCoffee(){

 // array destructuring
 var [suger, milk, rawCoffee] = await Promise.all([getSuger(),getMilk(),getCoffeePromise()]);

// var arr = await Promise.all([getSuger(),getMilk(),getCoffeePromise()]);

// var suger = arr[0];
// var milk = arr[1];
// var rawCoffee = arr[2];


//  var c = await prepareCoffee.apply(null,arr);

var c = await prepareCoffee.call(null,suger,milk, rawCoffee);

 console.log(c);

}

makeCoffee();
