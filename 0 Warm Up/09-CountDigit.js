// Write a function that return the count of digit in a number
let num = -2343;

function countDigit(num) {
  if (num === 0) return 1;
  let count = 0;
  num = Math.abs(num);                      //* Check Negative
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

const result = countDigit(num);
console.log(result);
