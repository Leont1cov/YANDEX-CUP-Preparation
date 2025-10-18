var arr = [];
arr.push('hello');
// arr.push(100); error
console.log(arr);
//readonly
var arr2 = [1, 2, 3];
// arr2.push(4) -> error
console.log(arr2);
//Кортеж
var ourTuple;
ourTuple = [10, "hello", true];
console.log(ourTuple);
// с readonly
var ourTuple2 = [20, "hello", false];
console.log(ourTuple2);
