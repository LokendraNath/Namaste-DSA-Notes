function isPalindrom(x) {
  if (x < 0) return false;
  let reverse = 0;
  let num = x;
  while (x > 0) {
    let reminder = x % 10;
    reverse = 10 * reverse + reminder;
    x = Math.floor(x / 10);
  }
  return num === reverse;
}
console.log(isPalindrom(1334331));
