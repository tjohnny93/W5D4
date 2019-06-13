
Array.prototype.myEach = function(callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let result = [];
  this.myEach(function(el) {
    result.push(callback(el));
  });
  return result;
};

Array.prototype.myReduce = function(callback[, initialValue]) {
  
};