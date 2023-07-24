"use strict";
//Day 01
// The primitives: string, number and boolean.
Object.defineProperty(exports, "__esModule", { value: true });
var name;
name = "suyog";
var obj = ["suyog", "nagawade"];
var arr = [1, 2, 3, 4];
// Type Annotations on Variables
var data = "hello";
var obj1 = { x: "suyog" };
obj1.x = 100;
obj1 = "hello";
// Function
function home(val) {
    return "";
}
home(25);
function home2(val) {
    return 123;
}
home2("25");
function home3(ptn) {
    return [ptn.x, ptn.y];
}
home3({ x: 12, y: 23 });
function userBio(data) { }
userBio({ userName: "suyog@gn.in", password: "suyog", mobileNo: 7038170069 });
// Union Type
function FormData(btn) { }
FormData("suyog");
FormData(12);
var demo = { x: 100, y: 100 };
// Exactly the same as the earlier example
function printCoord(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord(demo);
var demo2 = { x: 100, y: 100 };
// Exactly the same as the earlier example
function printCoord1(pt) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord1(demo2);
var addUser = function (ts) {
    return ts.name;
};
console.log(addUser({ name: "suyog", age: 25, isActive: true }));
//   const bear = getBear();
//   bear.name;
//   bear.honey;
