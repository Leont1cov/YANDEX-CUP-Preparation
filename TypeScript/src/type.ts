// Any. Если any не используется, то будет ошибка
let someoneVar: any;
console.log(someoneVar);

someoneVar = true;
console.log(someoneVar);

//unknown - более типобезопасный чем any
function greet(name: unknown):unknown {
    return `Hello, ${ name }!`;
}
console.log(greet(1234));

//never
function throwError(err: string) :never {
    throw new Error(err);
}
//console.log(throwError("this is a test")); Error: this is a test

//undefined, null
function helloType(name?: string):string {
    return typeof(name);
}
console.log(helloType());

