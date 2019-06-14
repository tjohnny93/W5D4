
function range(start, end) {
  if (start === end) {
    return [start];
  } 
  let last = range(start, end-1);
  last.push(end);
  return last;
  // return range(start, end-1).push(end); this does not workd .push returns lenght
  // concat works.
}

// console.log(range(1, 5));

function sumRec(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  
  let last = sumRec(arr.slice(1));
  last = last + arr[0];
  return last;
}

// let arr = [1,2,3,4,6];
// console.log(sumRec(arr));

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  } 
  if (exp === 1) {
    return base;
  }
  let result = exponent(base, exp - 1);
  return result * base;
}

// console.log(exponent(2, 4));

function fibonacci(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1, 1];
  }
  let next_num = fibonacci(n-1)[fibonacci(n-1).length - 1] + fibonacci(n-1)[fibonacci(n-1).length - 2];

  return fibonacci(n-1).concat([next_num]);
  
}
