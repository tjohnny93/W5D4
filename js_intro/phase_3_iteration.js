
Array.prototype.bubbleSort = (function(){
  let sorted = false;
  while (!sorted) {
    sorted = true;
      for (i = 0; i < (this.length - 1); i++) {
        if (this[i] > this[i+1]) {
          let grilled = this[i];
          let cheese = this[i+1];
          this[i] = cheese;
          this[i+1] = grilled;
          sorted = false;
        }
      }
  }
  return this
});

arr = [5,3,2,4,1];
console.log(arr.bubbleSort())

