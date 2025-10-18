const arr:string[] = [];
arr.push('hello');
// arr.push(100); error
console.log(arr);


//readonly
const arr2: readonly number[] = [1, 2, 3];
// arr2.push(4) -> error
console.log(arr2);


//Кортеж
let ourTuple: [number, string, boolean];
ourTuple = [10, "hello", true];
console.log(ourTuple);
// с readonly
let ourTuple2: readonly [number, string, boolean] = [20, "hello", false];
console.log(ourTuple2);
