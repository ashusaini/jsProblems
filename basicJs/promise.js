// callbacks ?
// promises ?
// async await ?
// functions
// object
// prototypes
// closures
// hoisting
// generator functions




// 1. callbacks : functions as refrence called when io task is finished by the process. (Node.js process)



function getSuger() {
  return new Promise((resolve, reject) => {
    resolve("suger");
  });

}

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


// sequential calls
getMilk()
.then((m) => {
  console.log(m);
  return getSuger();
})
.then((s) => {
 console.log(s);
 return getCoffeePromise()
})






// parallel calls
Promise.all([getSuger() , getMilk() ,getCoffeePromise() ]).then((arr) => {
  console.log(arr);
 })
