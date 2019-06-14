
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

let arr = [1,2,3,4,6];
console.log(sumRec(arr));