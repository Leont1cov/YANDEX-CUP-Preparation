interface Point {
    x: number;
    y: number;
}

//мы здесь указываем, что все поля <Point> теперь необязательны благодаря Partial
let pointPart: Partial<Point> = {}; //Partial изменяет все свойства объекта, делая их необязательными.
pointPart.x = 10; //Здесь мы можем не указывать y и оставить только x и это будет работать
console.log(pointPart);


//Required изменяет все свойства объекта на требуемые.
interface IPoint {
    a: number;
    b: string;
}
let pointIPoint: Required<IPoint> = { //Здесь, если будет {}, то будет ошибка т.к. Required требует все поля
    a : 100,
    b : "hello",
};
console.log(pointIPoint);

//Record<string, number> эквивалентно { [key: string]: number }
const obj: Record<string, number> = {
    a: 1,
    b: 2,
}

// Omit удаляет ключи из типа объекта.

interface Person {
    name: string;
    age: number;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
    name: 'Bob'
//     Omit всё поудалял
};


// Pick удаляет все, кроме указанных ключей, из типа объекта.
// Exclude удаляет типы из объединения.
// ReturnType извлекает возвращаемый тип типа функции.
// Parameters извлекает типы параметров типа функции в виде массива.


// Этих утилит ещё много, https://www.w3schools.com/typescript/typescript_utility_types.php

