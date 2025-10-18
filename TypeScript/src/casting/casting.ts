//Бывают случаи, когда нужно переопределить тип переменной -> Привидение типа - это процесс переопределения типа
//as - ключевое слово, которое изменяет напрямую тип заданной переменной:
let x: unknown = 'hello';
console.log((x as string).length);

//Приведение с <> работает также, как и с as !ЭТО НЕ БУДЕТ РАБОТАТЬ В REACT TSX
let a: unknown = 'hello world!';
console.log((<string>a).length);

//Пример ошибочного, опасного выполнения:
let b = 'hello';
console.log(((x as unknown) as number).length); //x на самом деле не является числом, поэтому вернется undefined