// ⭐  ⭐  ⭐  ⭐
// ⭐  ⭐  ⭐  ⭐
// ⭐  ⭐  ⭐  ⭐
// ⭐  ⭐  ⭐  ⭐

let n = 4;
for (let i = 0; i < n; i++) {
  //* N = rows
  let row = " ";
  for (let j = 0; j < 4; j++) {
    //* J = Coloumns
    row = row + " ⭐ ";
  }
  // console.log(row);
}

//! -------------------------------------------------------

// ⭐
// ⭐  ⭐
// ⭐  ⭐  ⭐
// ⭐  ⭐  ⭐  ⭐

let n2 = 4;
for (let i = 0; i < n2; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + " ⭐ ";
  }
  // console.log(row);
}
//! -------------------------------------------------------

// 1
// 12
// 123
// 1234
// 12345
for (let i = 0; i < 5; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}

//! -------------------------------------------------------

//  1
//  22
//  333
//  4444
//  55555

for (let i = 0; i < 5; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + (i + 1);
  }
  // console.log(row);
}

//! -------------------------------------------------------

//  12345
//  1234
//  123
//  12
//  1

let n3 = 5;
for (let i = 0; i < n3; i++) {
  let row = " ";
  for (let j = 0; j < n3 - i; j++) {
    row = row + (j + 1);
  }
  // console.log(row);
}
//! -------------------------------------------------------

// _  _  _  _  *
// _  _  _  *  *
// _  _  *  *  *
// _  *  *  *  *
// *  *  *  *  *

for (let i = 0; i < 5; i++) {
  let row = " ";
  for (let j = 0; j < 5 - (i + 1); j++) {
    row = row + " _ ";
  }
  for (let k = 0; k <= i; k++) {
    row = row + " * ";
  }
  // console.log(row);
}

//! -------------------------------------------------------

// 1
// 1  0
// 1  0  1
// 1  0  1  0
// 1  0  1  0  1

for (let i = 0; i < 5; i++) {
  let row = " ";
  let switchNum = 1;
  for (let j = 0; j <= i; j++) {
    row = row + " " + switchNum;
    if (switchNum == 1) switchNum = 0;
    else switchNum = 1;
  }
  console.log(row);
}
