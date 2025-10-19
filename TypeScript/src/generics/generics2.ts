//Также Generics используются в псевдонимах
type Wrapped<T> = {value: T}; //Если что с интерфейсами такое тоже работает: interface Wrapped<T>
const wrappedValue: Wrapped<number> = {value: 1000};
console.log(wrappedValue);

//Можно добавлять ограничения по выбору типов - extends
function createPair<S extends number | string, T extends boolean | string>(v1: S, v2: T):[S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);
    return [v1, v2];
}