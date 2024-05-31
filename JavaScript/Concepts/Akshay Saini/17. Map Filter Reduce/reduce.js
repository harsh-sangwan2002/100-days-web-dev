const arr = [1, 2, 3, 4, 5];

// sum of array
console.log(arr.reduce((acc, ele) => acc + ele, 0));

// max of array
console.log(arr.reduce((max, ele) => Math.max(max, ele), arr[0]));