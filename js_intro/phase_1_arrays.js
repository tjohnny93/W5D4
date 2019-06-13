Array.prototype.uniq = function() {
  let result = [];
  this.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
};

// let arr = [1,1,2,2,3,4,4]
// console.log(arr.uniq())

Array.prototype.twoSum = function() {
  let result = [];
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        if (j > i) {
          if ((this[i] + this[j]) === 0) {
            result.push([i,j]);
          }
        }
      }
    }
  return result;
};



Array.prototype.transpose = function() {
  let result = [];
    for (let i = 0; i < this.length; i++) {
      let row = [];
      for (let j = 0; j < this[0].length; j++) {
        row.push(this[j][i]);
      }
      result.push(row);
    }
    return result;
};

let arr = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr.transpose());