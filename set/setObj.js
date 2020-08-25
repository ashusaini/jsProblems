// primitive datastructures , combine them to create more complex data structure

// in js : Array , Object

class Set {

  constructor(){
    this.baseDs = {};
  }


  add(item){
    // add a item in set

    if(!this.baseDs[item]){
      this.baseDs[item] = item;
    }

    console.log(this.baseDs);

  }

  addArray(items){

    items.forEach((item) => {
      this.add(item);
    });

    // you can add multiple items in set

}

  print(){


    console.log(Object.keys(this.baseDs).map((item) => {
      return this.baseDs[item];
    }));



    // print all values in set

  }

  get(){

   return Object.keys(this.baseDs).map((item) => {
     return this.baseDs[item]
    });


    // returns whole set in an array
  }

}


var set1 = new Set();
set1.add(1);

var set2 = new Set();
set2.add(2);
