//Простая программа с наследованием

interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    public constructor(protected readonly width: number, protected readonly height: number) {}

    public getArea():number {
        return this.width * this.height;
    }
}

//Переопределение - это когда подкласс меняет поведение метода родительского класса
//Метод в родителе должен быть public или protected - иначе его нельзя переопределить
class Animal {
    makeSound(volume: number):void {
        console.log("Some sound", volume);
    }
}

class Dog extends Animal {
    makeSound(volume: number):void {
        console.log("WOOF!", volume); //переопределяем
    }
}
const dog = new Dog();
dog.makeSound(2);


//Абстрактные классы это шаблоны в принципе для всех классов
abstract class Animals {
    abstract getArea():void;
    move():void {
        console.log("Иду");
    }
}
//Ты описываешь общую структуру и поведение, а конкретные детали реализуются в наследниках.
class Cat extends Animals {
    getArea():void { //Этот метод должен быть обязательно реализован т.к. он абстрактный
        console.log("getArea")
    }

    makeSound(){
        console.log("CAAAT!");
    }
}
const cat = new Cat();
cat.getArea();
cat.makeSound();