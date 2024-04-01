// Задание №1
// Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for
let name = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
for (let i = 0; i < name.length; i++) {
  if (name[i] === "Mirdin" || name[i] === "Aliia") {
    console.log(name[i]);
  }
}
// Задание №2
// Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
let numbers = [];
for (let i = 1; i <= 10; i++) {
  numbers.push(i);
}
console.log(numbers);
// Задание №3
// Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.
for (let i = 50; i <= 90; i++) {
  console.log(i);
}
// Задание №4
// Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.
for (let i = 99; i >= 50; i--) {
  console.log(i);
}
// Задание №5
// Найдите самый длинный элемент массива и выведите в консоль
// ["pen", "pineapple", "apple", "pen"]
let arr = ["pen", "pineapple", "apple", "pen"];
let arr2 = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i].length > arr2.length) {
    arr2 = arr[i];
  }
}
console.log(arr2);

// Задание №6
// Так же найдите самый короткий элемент этого же массива
let arr3 = ["pen", "pineapple", "apple", "pen"];
let arr4 = arr3[0];
for (let i = 1; i < arr3.length; i++) {
  if (arr3[i].length < arr4.length) {
    arr4 = arr3[i];
  }
}
console.log(arr4);
// Задание №7
// Выведите в консоль все элементы с четными индексами.
// [1,2,3,4,5,6,7,8,9]
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i += 2) {
  console.log(num[i]);
}
// Задание №8
// Дан двумерный массив. Выведите в консоль все элементы.
// [[1,2], [3,4], [5,6]]
let num1 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
for (let i = 0; i < num1.length; i++) {
  for (let j = 0; j < num1[i].length; j++) {
    console.log(num1[i][j]);
  }
}
