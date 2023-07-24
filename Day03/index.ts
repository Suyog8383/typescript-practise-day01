//Day 01
// The primitives: string, number and boolean.

let name: String;
name = "suyog";

let obj: String[] = ["suyog", "nagawade"];
let arr: number[] = [1, 2, 3, 4];

// Type Annotations on Variables

const data: String = "hello";

let obj1: any = { x: "suyog" };
obj1.x = 100;
obj1 = "hello";

// Function
function home(val: number) {
  return "";
}
home(25);

function home2(val: String): number {
  return 123;
}
home2("25");

// Object Types
type pt = {
  x: number;
  y: number;
};

function home3(ptn: pt): number[] {
  return [ptn.x, ptn.y];
}

home3({ x: 12, y: 23 });

// Optional Properties

type bio = {
  userName: String;
  password: String;
  mobileNo: number;
  isActive?: boolean;
};

function userBio(data: bio) {}
userBio({ userName: "suyog@gn.in", password: "suyog", mobileNo: 7038170069 });
// Union Type
function FormData(btn: String | number) {}
FormData("suyog");
FormData(12);
// FormData(true);

//Type Aliases
type Point = {
  x: number;
  y: number;
};

let demo = { x: 100, y: 100 };
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord(demo);

interface Point2 {
  x: number;
  y: number;
}

let demo2 = { x: 100, y: 100 };
// Exactly the same as the earlier example
function printCoord1(pt: Point2) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord1(demo2);

// Object

type profile = {
  name: String;
  age: number;
  isActive: boolean;
};

const addUser = (ts: profile): String => {
  return ts.name;
};

console.log(addUser({ name: "suyog", age: 25, isActive: true }));
export {};

// Interface

interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

//   const bear = getBear();
//   bear.name;
//   bear.honey;

//Type
type Animal1 = {
  name: string;
};

type Bear1 = Animal1 & {
  honey: boolean;
};

//   const bear = getBear();
//   bear.name;
//   bear.honey;
