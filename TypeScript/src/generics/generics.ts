// Generics позволяют писать универсальный код,
// который работает с разными типами данных, без потери типобезопасности.
function createPair <S, T>(v1: S, v2: T): [S, T] { //<S, T> - по сути, это переменные для типов, они передаются в параметры
    return [v1, v2];
}
console.log(createPair<string, number>("hello", 12));
// Не забываем про то, что эту функцию можно переиспользовать
console.log(createPair<number, boolean>(184, true));

//Классы с Generics
class NamedValue<T = string> { //ещё их можно ставить по умолчанию
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T):void {
        this._value = value;
    }

    public getValue(): T | undefined {
        return this._value;
    }

    public toString():string {
        return `this name: ${this.name}, this value: ${ this._value }`;
    }
}

let value = new NamedValue<number>("New Task");
value.setValue(100);
console.log(value.toString());



