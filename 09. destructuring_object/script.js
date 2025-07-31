//before ES6

// let user = {
//         name: "Kishor",
//         age: 20,
// }
// let name = user.name;
// let age = user.age;
// console.log(name);
// console.log(age);


//after ES6
//1st
// let user = {
//         name: "Kishor",
//         age: 20,
// }
// let { name, age } = user;
// console.log(name);
// console.log(age);


//2nd this will not work as it is missing a variable name for age in the case of object destructuring
// let user = {
//         name: "Kishor",
//         age: 20,
//         country: "India"
// }
// let { name, , country } = user;
// console.log(name);
// console.log(age);
// console.log(country);


//3rd we can give alias to the variable names
let user = {
        name: "Kishor",
        country: "India"
}
let { name: n, country: c } = user;
console.log(n);
console.log(c);
