const car: {type: string, model: string, num: number} = {
    type: "Mercedezz",
    model: "Benz",
    num: 4352,
};
console.log(car);

// индексная сигнатура
const nameAge: {[key: string]: number} = {};
nameAge.hello = 10;
nameAge.age = 10;
console.log(nameAge);

//enum c++
enum Arr {North, East, South, West}
console.log(Arr.South);

enum Arr2 {N = "North", E = "East", S = "South", W = "West"}
console.log(Arr2.S);

//Псевдонимы

type CarYear = number;
type CarModel = string;

const CarYear = 2001;
const CarModel = "model S";

const Car = {
    year: CarYear,
    model: CarModel,
}
console.log(Car);