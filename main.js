// const arr = [1, 2, 3, 4, 5];

// const students = [
//   {
//     firstname: "Seyfi",
//     age: 15,
//   },
//   {
//     firstname: "Zaman",
//     age: 14.5,
//   },
//   {
//     firstname: "Samir",
//     age: 35,
//   },
//   {
//     firstname: "Nariman",
//     age: 32,
//   },
// ];

/*
    Array methods explanation
    1. map
    2. filter
    3. forEach
    4. 
*/

// const result = arr.map(function (element) {
//   return element / 2;
// });

// const filteredArray = arr.filter(function (element) {
//   if (element % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filteredArray);

// arr.forEach(logger);

// function logger(num, ind, arr) {
//   console.log(num, ind, arr);
// }

// const result = arr.findIndex(function (element) {
//   if (element === 3) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const result2 = students.find((student) => {
//   if (student.age < 18) {
//     return true;
//   }
// });

// const olderThanEighteen = students.filter((student) => student.age > 18);

// console.log(arr.includes(3, 4));

// const words = ["Hello", "World", "from", "Code", "Academy"];

// console.log(arr.join(" "));
// const numbers2 = [11, 22, 33, 44];

// const result = arr.concat(numbers2);
// console.log(result);
// console.log(arr, "original array");
// console.log(numbers2, "concatinated array");

// arr.push(11, 22, 33, 44);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// console.log(arr.shift()); // taking one from the beginning
// console.log(arr.unshift(99, 100, 101)); // adding one to the beginning
// console.log(arr);

// const numbers = [10, 20, 30, 40, 50, 65, 34];

// const nicknames = ["seyfi", "dragon_ball", "blind_slayer", "kor_zabit"];

// const newNickName = prompt("please enter nickname");

// const isDuplicate = nicknames.some((nick) => nick === newNickName);

// if (isDuplicate) {
//   alert("please biraz creative olun");
// } else {
//   alert("xosh gelmishsiniz");
// }

// const result = numbers.some((number) => number == 34);
// const result = numbers.every((number) => number % 5 === 0);

// console.log(result);
// startIndex - inclusive ; endIndex - exclusive
// const slicedArray = numbers.slice(2);
// console.log(slicedArray);
// console.log(numbers);
// const result = numbers.splice(2, 3, {}, [], "salam", 5, 6, 7);
// console.log(numbers);
// arr.splice

// const result = numbers.reverse();
// console.log(result);
// console.log(numbers);

// const students = [
//   "Seyfi",
//   "Samir",
//   "Farhad",
//   "Zaman",
//   "Abbas",
//   "Samid",
//   "Hasan",
//   "Ramin",
//   "Ali",
//   "Nariman",
//   "Rashad",
//   "Gulsum",
// ];

// const numbers = [1, 4, 32, 3, 2, 4, 33, 45, 34];
// numbers.sort(function (a, b) {
//   // 0
//   // +
//   // -
//   return a - b;
// });

// const students = [
//   {
//     firstname: "Seyfi",
//     age: 15,
//   },
//   {
//     firstname: "Zaman",
//     age: 14.5,
//   },
//   {
//     firstname: "Samir",
//     age: 35,
//   },
//   {
//     firstname: "Nariman",
//     age: 32,
//   },
// ];

// students.sort(function (user1, user2) {
//   return user1.age - user2.age;
// });

// console.log(students);

// const numbers = [1, 2, 3, 4, 5];

// const result = numbers.reduce(function (prev, curr) {
//   return prev + curr;
// }, 0);

// console.log(result);

// const employees = [
//   {
//     firstname: "Seyfi",
//     salary: 150,
//   },
//   {
//     firstname: "Samir",
//     salary: 500,
//   },
//   {
//     firstname: "Hasan",
//     salary: 300,
//   },
//   {
//     firstname: "Ali",
//     salary: 50,
//   },
// ];

// const salarySum = employees.reduce(
//   (prevValue, currentEmployee) => prevValue + currentEmployee.salary,
//   0
// );

// const string = "I";
// const sentence = "I love you, you are shape of my heart";
// console.log(string[0]);
// string[0] = "L";
// console.log(string);

// console.log(string.concat(" love", " you", " <3"));
// console.log(sentence.split(","));

// console.log(sentence.indexOf("l"));
// console.log([1, 2, 3, 4, 5].indexOf(3));

// console.log(sentence.includes("y"));
// console.log(sentence.slice(2, 6));
// console.log(sentence);
// console.log(sentence.replace("love", "hate"));
// console.log(sentence);
// console.log(
//   "+994 (51) 656-62-84"
//     .replaceAll("-", "")
//     .replaceAll("(", "")
//     .replaceAll(")", "")
//     .replaceAll(" ", "")
//     .replaceAll("+", "")
// );
