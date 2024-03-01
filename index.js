// EXAMPLE 1 - Get the index of an Object in an Array in JavaScript

const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

const index = arr.findIndex(object => {
  return object.id === 'b';
});

console.log(index); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 2 - Get the index of an Object in an Array using Array.map()

// const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

// const index = arr.map(object => object.id).indexOf('c');

// console.log(index); // 👉️ 2

// ------------------------------------------------------------------

// // EXAMPLE 3 - Get the Indexes of all Objects in an Array that match a condition

// const arr = [{name: 'Alice'}, {name: 'Bob'}, {name: 'Charlie'}];

// const indexes = arr
//   .map((element, index) => {
//     if (element.name === 'Alice' || element.name === 'Bob') {
//       return index;
//     }
//   })
//   .filter(element => element >= 0);

// console.log(indexes); // 👉️ [0 , 1]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Get the index of an Object in an Array using `Array.some()`

// const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

// let index;

// arr.some((object, idx) => {
//   if (object.id === 'b') {
//     index = idx;
//     return true;
//   }
// });

// console.log(index); // 👉️ 1

// ------------------------------------------------------------------

// // EXAMPLE 5 - Get the index of an Object in an Array using a `for` loop

// const arr = [{id: 'a'}, {id: 'b'}, {id: 'c'}];

// let index;

// for (let idx = 0; idx < arr.length; idx++) {
//   if (arr[idx].id === 'b') {
//     index = idx;
//     break;
//   }
// }

// console.log(index); // 👉️ 1
