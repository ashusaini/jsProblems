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
  return "suger";
}

function getMilk(cb) {
  setTimeout(() => {
    cb("milk");
  }, 2000);
}

function getCoffee(cb) {
  setTimeout(() => {
    cb("raw coffee");
  }, 3000);
}

// parallel calls
getMilk((m) => { console.log(m)});
getCoffee((c) => {console.log(c)});


// sequential calls or waterfall calls
function getHotCoffee(cb){

  var suger = getSuger();
  console.log("----->> suger received");

  getMilk((m) => {

    var milk = m;
    console.log("----->> milk received");

    getCoffee((rc) => {
      var rawCoffee = rc;
      console.log("----->> rawCoffee received");
      setTimeout(() => {
        getCoffee((rc) => {
          var rawCoffee = rc;
          console.log("----->> rawCoffee received");
          setTimeout(() => {
            getCoffee((rc) => {
              var rawCoffee = rc;
              console.log("----->> rawCoffee received");
              setTimeout(() => {

                cb(suger+milk+rawCoffee);

              }, 2000);
            })
          }, 2000);
        })
      }, 2000);
    })
  });
}


getHotCoffee((c) => {

  console.log(c);

})
