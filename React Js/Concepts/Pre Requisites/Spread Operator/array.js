let arr = [1,2,3,4];

// This is shallow copy
let arr2 = arr;

arr2[1] = 100;

console.log(arr);
console.log(arr2);

// This is still a shallow copy
let arr3 = [...arr];
arr3[1] = 500;

console.log(arr);
console.log(arr3);