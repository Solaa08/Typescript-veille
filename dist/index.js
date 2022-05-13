"use strict";
//Basics
let company = "BowieCompany";
let isPublished = true;
let x = 50;
let age = 30;
let ids = [1, 2, 3, 4, 5];
let array = [1, true, 'hello'];
//Tuple
let person = [1, "Brad", true];
// Tuple array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'Brad2'],
    [3, 'Brad3'],
];
// Union
let pid = 22;
pid = true;
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["Up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: 'John'
};
// const user: {
//     id: number,
//     name: string
// } = {
//     id: 1,
//     name: 'John'
// }
// Type Assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//Functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(15, 12));
//Void Type
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'John',
    age: 5
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
console.log(sub(1, 2));
//Class
class Person {
    constructor(id, name) {
        console.log(this);
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} est bien inscris`;
    }
}
const brad = new Person(1, 'Brandon');
const mike = new Person(2, 'Mike');
console.log(brad.register());
