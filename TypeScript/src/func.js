function getTime() {
    return new Date().getTime();
}
console.log(getTime());
//void - тип данных, который указывает, что функция ничего не будет нам возвращать
function printHello() {
    console.log("Hello");
}
printHello();
//параметры функции указываются также, как и переменные
function hello(userName) {
    console.log("Hello, ".concat(userName, " "));
}
hello("Notch");
//Можно также добавлять необязательные параметры
function addition(a, b, c) {
    console.log(a + b + (c || 0));
}
addition(2, 5);
//Значение по умолчанию тоже можно ставить
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    console.log(Math.pow(value, exponent));
}
pow(2, 4);
//Именованные параметры
//По сути мы просто добавляем объект а затем вешаем на него типы
function subtraction(_a) {
    var a = _a.a, b = _a.b;
    console.log(a - b);
}
subtraction({ a: 1, b: 2 });
//Если у нас неограниченное число параметров, то можно воспользоваться spread оператором, но у нас должен быть массив
function add(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (a, b) { return a + b; }, 0);
}
console.log(add(1, 2, 3, 4));
var newFunc = function (value) { return value * 2; };
console.log(newFunc(2));
