// before ES6
let name = "Kishor";
let course = "Advance JS";

let obj = {
        name: name,
        course: course
};

console.log(obj);

// after ES6

//1st
let obj2 = {
        name,
        course
};
console.log(obj2);

//2nd
let n = "name";

let obj3 = {
        [n]: "Kishor",
        course: "MCA"
};

console.log(obj3);


//3rd
let obj4 = {
        name: "Kishor",
        course: "MCA",
        getName() {
                return this.name;
        }
}
console.log(obj4);
console.log(obj4.getName());

//4th

let fullname = "Kishor Kumar";
let courseName = "Advance JS";
 
function student(name, course) {
        return { name, course };
}

console.log(student(fullname, courseName));