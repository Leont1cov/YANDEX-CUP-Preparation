const nums:number[] = [1, 2, 3, 4];
// reduce
const sum:number = nums.reduce((acc:number, n:number):number => acc + n, 0);
console.log(sum);
// some
const hasEven:boolean = nums.some(n => n % 2 == 0);
console.log(hasEven);
//every
const hasNotEven:boolean = nums.every(n => n % 2 !== 0);
console.log(hasNotEven);