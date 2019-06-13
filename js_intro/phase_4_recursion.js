
const range = function range(start, end) {
  if (start === end) {
    return [start];
  } else {
  let last = range(start, end-1);
  last.push(end);
  return last
  // return range(start, end-1).push(end);
  
}};

console.log(range(1, 5));