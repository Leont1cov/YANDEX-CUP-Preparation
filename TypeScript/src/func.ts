function getTime():number { //указываем, что функция будет возвращать нам число
    return new Date().getTime();
}
console.log(getTime());


//void - тип данных, который указывает, что функция ничего не будет нам возвращать
function printHello():void {
    console.log("Hello");
}
printHello();


//параметры функции указываются также, как и переменные
function hello(userName: string):void {
    console.log(`Hello, ${userName} `);
}
hello("Notch");


//Можно также добавлять необязательные параметры
function addition(a: number, b: number, c?: number):void {
    console.log(a + b + (c || 0));
}
addition(2, 5);


//Значение по умолчанию тоже можно ставить
function pow(value: number, exponent: number = 10):void {
    console.log(value ** exponent);
}
pow(2, 4);


//Именованные параметры
//По сути мы просто добавляем объект а затем вешаем на него типы
function subtraction({a, b}: {a: number, b: number}):void {
    console.log(a - b);
}
subtraction({a: 1, b: 2});


//Если у нас неограниченное число параметров, то можно воспользоваться spread оператором, но у нас должен быть массив
function add(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((a, b) => a + b, 0);
}
console.log(add(1, 2, 3, 4));


//Типы псевдонимов (Сейчас мы создадим легкую функцию)
type Negate = (value: number) => number;
const newFunc: Negate = (value: number) => value * 2;
console.log(newFunc(2));