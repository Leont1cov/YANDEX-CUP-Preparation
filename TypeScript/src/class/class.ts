// В классах всё как у переменных указывается типы
class Person {
    name: string = 'Jane';
}
const person = new Person();
person.name = 'John';
console.log(person.name);

//Модификаторы видимости классов
class BankAccount {
    private balance: number = 1000; //только внутри класса можно использовать
    protected name: string = 'Alex';
}

class DogAccount extends BankAccount {
    hello():void {
        console.log(`Hello Dog Account: ${this.name}`);
    }
}

const dog = new DogAccount();
dog.hello();

// const acc = new BankAccount();
//console.log(acc.balance) //Error

//Небольшая практика. Здесь используется сокращенная форма для constructor
class GoogleMail {
    public constructor(private name: string) {}

    public helloMail(mail: string):string {
        return this.name;
    }
}

const newMail = new GoogleMail("leokukund@gmail.com");
console.log(newMail);

// Readonly
class Person1 {
    private readonly name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName():string {
        return this.name;
    }
}

const jane = new Person1("Jane");
console.log(person.getName());

