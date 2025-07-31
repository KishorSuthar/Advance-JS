//before ES6

// let user = ["Kisor", 20, "India"];
// let name = user[0];
// let age = user[1];
// let country = user[2];
// console.log(name);
// console.log(age);
// console.log(country);


//after ES6
//1st
// let user = ["Kisor", 20, "India"];
// let [name, age, country] = user;
// console.log(name);
// console.log(age);
// console.log(country);


//2nd using default values
// let user = ["Kisor", , "India"];
// let [name, age = 18, country] = user;
// console.log(name);
// console.log(age);
// console.log(country);


//3rd using nested arrays
// let user = ["Kishor", 20, "India", ["Male", "Cricket"]];
// let [name, age, country, [gender, hobby]] = user;
// console.log(name);
// console.log(age);
// console.log(country);
// console.log(gender);
// console.log(hobby);


//4th using rest operator
// let user = ["Kishor", 20, "India"];
// let [name, ...args] = user;
// console.log(name);
// console.log(args); // args will be an array containing the rest of the elements


//5th function retrurning an array
// function user() {
//         return ["Kishor", 20, "India"];
// }
// let [name, age, country] = user();
// console.log(name);
// console.log(age);
// console.log(country);