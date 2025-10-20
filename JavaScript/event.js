// console.log(1);
// setTimeout( () => {
//     console.log("Loading ends")
// },
//     3000
// )
//
// console.log(2);
//
// //Callback - функция, вызывающаяся после завершения задачи
// function getData(callback) {
//     setTimeout( () => {
//         callback('Данные пришли');
//     }, 2000)
// }
//
// getData((data) => {
//     console.log(data);
// })

//Promise - объект, который обещает результат в будущем
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Great"); //resolve - всё хорошо, reject - ошибка
//     }, 2000)
// })
//
// promise.then((result) => { //then ждёт, когда промис завершится (через resolve) и затем выполняет то, что передал в (result)
//     console.log(result);
// })
//
// //async
// async function hello() { //async - всегда возвращает promise
//     return "Hello World!";
// }
// hello().then((result) => {console.log(result)});

// await
async function loadData() {
    try {
        console.log('Load Data...'); //синхронная функция, которая выполнится сразу

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1"); //fetch - вернет промис, await - подождёт его
        const data = await response.json(); //преобразуем данные в json. await также подождёт промис response

        console.log(`User name: ${data.name}`);
        console.log("Loading ends");
    } catch (error) { //если ошибка
        console.error("Some error: ", error)
    }

}
loadData();


// Своя функция
async function myFunction() {
    try {
        console.log('Жду загрузки данных...');

        const data = await fetch('https://dummyjson.com/test');
        const json = await data.json();

        console.log("Status: ", json.status);
        console.log('Загрузка завершена');
    } catch (error) {
        console.log("Какая-то ошибка: ", error);
    }
}
myFunction();