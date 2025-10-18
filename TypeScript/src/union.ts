// Типы объединений
// Союз |
function printHello(name: string | number) { //Здесь обязательно нужно знать тип, чтобы избежать ошибок!
    console.log(`Hello, ${name}!`);
}
printHello("hello");

