// primitive datastructures , combine them to create more complex data structure

// in js : Array , Object

class Set {

  constructor(){
    this.daseDs = [];
  }


  add(item){
    // add a item in set

    if(this.daseDs.indexOf(item) === -1){
      this.daseDs.push(item);
    }


  }

  numberOfItem(){
    return  this.daseDs.length;
  }

  addArray(items){



    // var self = this;

    console.log('outside..',this);

    items.forEach( (item) => {

      this.add(item);
    });

    // you can add multiple items in set

  }

  print(){

    console.log(this.daseDs);

    // print all values in set

  }

  get(){
    return [...this.daseDs];
    // returns whole set in an array
  }

}


var set1 = new Set();


set1.addArray([1,2,3,3,2]);


set1.print();


