// const user = {
//   firstname: "Samir",
//   lastname: "Dadash-zade",
//   age: 30,
//   salary: 1000,
//   position: "Software Engineer",
// };

// console.log(Object.entries(user)); // [["key", "value"], ["key", "value"]]

// const keyName = "salary";

// console.log(user[keyName]); //user["salary"]

// user["age"];
// user.age;
// console.log(user.keyName);

// Object.entries(user).forEach(function (entry) {
//   const keyName = entry[0];
//   const value = entry[1];
//   console.log(keyName, " ", value);
// });

// Object.keys(user).forEach((item) => {
//   console.log(user[item]);
// });
// console.log(Object.values(user));

// function User(firstname, lastname, age, salary, position) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.age = age;
//   this.salary = salary;
//   this.position = position;
// }

// class User {
//   constructor(firstname, lastname, age, salary, position) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.age = age;
//     this.salary = salary;
//     this.position = position;
//   }

//   getAge() {
//     return this.age;
//   }

//   getPosition() {
//     return this.position;
//   }
// }

// const seyfi = new User("Seyfi", "Najafli", 14, 50, "Student");
// const gulsum = new User("Gulsum", "Bayramova", 18, 3500, "Student");
// const samir = new User("Samir", "Dadash-zade", 30, 1000, "Software Engineer");

// console.log(seyfi.getAge());

// console.log(seyfi);
// console.log(gulsum);
// console.log(samir);

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Jaguar extends Animal {
//   constructor(name, speed, color) {
//     super(name);
//     this.speed = speed;
//     this.color = color;
//   }
// }

// const animal = new Animal("Oliver");
// const jaguar = new Jaguar("Jegi", 300, "black");
// console.log(jaguar.getName());
// console.log(animal);

// Array.prototype.customMap = function (callbackFn) {
//   const newArray = [];

//   for (let i = 0; i < this.length; i++) {
//     newArray.push(callbackFn(this[i], i, this));
//   }

//   return newArray;
// };

// Array.prototype.customFilter = function (callbackFn) {
//   console.log(this);
// };

// // customSome, customEvery, customFilter,

// const arr = new Array(1, 2, 3, 4, 5);

// const result = arr.customMap((element, index, array) => {
//   return element * 2;
// });

// const result1 = arr.customFilter((element, index, array) => {
//   return element > 3;
// });

// console.log(result1); // [4,5]

// console.log(result);
// console.log(arr);
