// ? Write a function  that Search for an element in an array and return the index, if the element is not present then just return -1

let arr1 = [4, 2, 0, 10, 8, 30];

function IndexFinder(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return i;
    }
  }
  return -1;
}

// console.log(IndexFinder(arr1, 30));

// ? Write a function that return the number of negative number in the array

let arr2 = [2, 9, 17, 0, 1, 10, 4, 64, 35];

function countNegatives(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count++;
    }
  }
  return count;
}
// console.log(countNegatives(arr2));

//? Find the larget num in arr

let arr3 = [-2, 50, -3, -34];

function findLargest(arr) {
  let result = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  return result;
}

console.log(findLargest(arr3));
