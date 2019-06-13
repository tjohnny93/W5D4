
Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// let arr = [1,2,3];
// arr.myEach(function(el) {
//   console.log(el);
// });

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

// let arr = [1,2,3]
// console.log(arr.myMap(function(el) {
//   return el + 1;
// }));

Array.prototype.myReduce = function(callback, acc) {
  // debugger
  if (acc === undefined) {
    acc = this[0];
    this.shift();
  }
  this.myEach(function(el) {
    // debugger
    acc = callback(acc, el);

  });
  return acc;
};

console.log([1, 2, 3].myReduce(function (acc, el) {
  return acc + el;
}, 25));