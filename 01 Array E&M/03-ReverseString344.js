let s = ["h", "e", "l", "l", "o"];

const ReverseString = (s) => {
  const len = s.length;
  const halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    let temp = s[i];
    s[i] = s[len - 1 - i];
    s[len - 1 - i] = temp;
  }
  return s; // Output Dekhne ke liye
};
