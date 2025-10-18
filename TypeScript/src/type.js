// Any. Если any не используется, то будет ошибка
var someoneVar;
console.log(someoneVar);
someoneVar = true;
console.log(someoneVar);
//unknown - более типобезопасный чем any
function greet(name) {
    return "Hello, ".concat(name, "!");
}
console.log(greet(1234));
