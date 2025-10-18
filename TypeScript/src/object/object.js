var car = {
    type: "Mercedezz",
    model: "Benz",
    num: 4352,
};
console.log(car);
// индексная сигнатура
var nameAge = {};
nameAge.hello = 10;
nameAge.age = 10;
console.log(nameAge);
//enum c++
var Arr;
(function (Arr) {
    Arr[Arr["North"] = 0] = "North";
    Arr[Arr["East"] = 1] = "East";
    Arr[Arr["South"] = 2] = "South";
    Arr[Arr["West"] = 3] = "West";
})(Arr || (Arr = {}));
console.log(Arr.South);
var Arr2;
(function (Arr2) {
    Arr2["N"] = "North";
    Arr2["E"] = "East";
    Arr2["S"] = "South";
    Arr2["W"] = "West";
})(Arr2 || (Arr2 = {}));
console.log(Arr2.S);
