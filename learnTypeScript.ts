// -----------------------------------
// leason 1:
// make variable with var , let , const
// name variable havent - (dash)!
var age: number = 45;
//  frist make variable declerition add type like age variable type of number
//  variable : type = value
let employeename = "jhon";
const num: number = 100;
//  data type number , boolean , string
let frist: number = 123; // number
let second: number = 0x67cf; //hexadecimal
let third: number = 0o455; // octal
let fourth: number = 0b110101; //binery
// -----------------------------------
// leason 2:
// Number method
// 1.toexponential 2.tofixed 3.tolocalstring 4.toprecision 5.tostring 6.valueof
let employeenameSecond: string = "erfanlabbafi";
// typeof boolean:
let ispresent: boolean = true;
// type script support generical type:
// make array
// all method in array : [
// pop() / push() / sort() / concat() / indexof() /copywithin() / fill() / shift() / splice() / unshift() /...
// includes() / join() / lastIndexOf() / slice() / tostring() / toLocalString()/]
let friuts: string[] = ["bannana", "apple"];

let friutscopy: Array<string> = ["bannana", "apple"];

// Boolean - condition:

let x: number = 10,
  y = 9;

if (x > y) {
  console.log("x");
} else if (x < y) {
  console.log("y");
} else {
  console.log("equal");
}

//  Loop : (for)

for (let i = 0; i < 3; i++) {
  //  body loop
}

// Function : decleariotn
function sum(x: number, y: number) {
  return x + y;
}

// class:

class employe {
  empid: number;

  constructor(empid: number, name: string) {
    this.empid = empid;
  }
}
// ---------------------------------
//  Leason 3:
//  make project with React:
//  npm react
//  strat project sample
// ---------------------------------
// lesson 4:
// script with node.js
// node.js is an open sourse server-side execution platform for javascript cod
//  node is commonly used for 'real-time' application like chat , news , and web push notification
// frist 'install npm' in windows and  'npm install -g typescript'
//  you can check version node pakage managers with 'npm -v'

function sum1(numb1: number, numb2: number) {
  return numb1 + numb2;
}
console.log(sum1(4, 5));

//  so you shold change ts to js with 'tsc.cmd learnTypeScript.ts' after enter code in terminal change ts file to js
// so run code ts but after output js from ts by 'tsc.cmd'
// how to run js code ? you can use 'node learnTypeScript.js'
// after enter code show extend js file
// for example : function sum1 in output terminal showing console log
// terminal: 9

//  example 2 :

function messageUser(text1: string) {
  return text1 + "tslearn ";
}
console.log(messageUser("erfan"));
//  again 'tsc.cmd yourfile.ts' and 'node yourfile.js'
//  out put : 9 erfanlearn
// --------------------------------------
// lesson 5:
//  Express.js
// Express.js is a Node.js web application framwork that is free and open soucre
// please searching for about Express.js
// open new projects
// enter code typescript initials 'npx tsc --init'
// enter code typescript initials 'yarn'
//  'tsc init' and 'yarn add ts-node-dev typescript -D' + 'yarn add express' + 'yarn add @types/node @types/express -D'
// 'npm install -g ts-node' + 'ts-node src/app.ts'
// --------------------------------------
// lesson5:
// type assertions:
// a tpye is similar to a type cast in other languages , but it does not do any additional data verification
//  One is the as-syntax:
//  let someValue : unknown = "this is a string";
//  let strlength : number = (someValue as string).length;
//  BUT:
//  other is the 'angle-braket' syntax :
let someValue: unknown = "this is a string";
let strlength: number = (<string>someValue).length;
// finish
// TYPE Aliases:
//  type aliases give a type a new name and similar to inter face that they can use to name premitive
//  Type aliases  like interface can be general : all we have to do is add type parameters and utilise them on the right side of the the alias decleration
//  Type container<T> = { value T};
// TYPE Generic : typescrip generic is a tool for creating components in type script .
//  it builds a component that can interact with various data kinds.
//  function with a specific type :
// function identity(arg: string):{
//   string return arg;
// }
//  function with any type :
function identity(arg: any): any {
  return arg;
}

//  IN:
//  the in operator serves as a type narrowing expersion:
// function move(pet: Fish | Brid){
//   if('swim' in pet){
//     return pet.swim();

//   }
//   return pet.fly();
// }

// nullable Types:
//  null and undefind are two special in typescript that have the values null and undefind
//  null and undefind are subclasses of all other types by defult. thats means you can give things like number null and undefind values;
//  let u:undefined = undefined;
//  let n : null = null;

// index signatuers
//  index signatuars interface with keyof and T[K] . the type of an index signature argument must be either string or number.
// if your type has a string index signature keyof T will be string | number because in javascript we can acceses an object property using either strings (object["42"]) or number (object[42])
// T string simpely the index signature type :
// interface Dictionary <T> {
//  [key: string]: Text;
// }
// or
interface Dictionary<T> {
  [key: number]: T;
}
// maps Types:
// typescript has a feature called mapped types that allows you to define new types based on extsting ones. the new type trun each property in the old type
type keys = "option1" | "option2";
type Flags = { [K in keys]: boolean };
// so type of Option1 and option2 is a boolean
//  condition Type :
// conditional type chooses one of two alternative types:
// T extends U ? X : y;
//  when T assigned to U the type is X and when Can't the type is Y;
// support type in node madule
// {
// "dependencies":{
// "@typescript/lib-dom" : "npm:@types/web"
// }}
// awaited type and promise improvment:
// a = string;
// type A = Awaited <Promise<string>>;
// B = number;
// type B = Awaited <Promise<number>>;
// C = boolean;
// type C = Awaited <Promise<boolean>>;

// type TrimeLeft<T extends string> =
// T extends `${infer Rest}` ? TrimeLeft<Rest> : T;
// // Test = 'hello' | 'world';
// type  Test = TrimeLeft<'hello' | 'world'>;
// Assert Signatres :
// frist:
//
// function assert string(input){
//   if (typeof input === 'string') return;
//   else throw new Error('input must be a string !');
// }
// second
// in one line :
// function assert string(input : any) asserts input is string;
// TypeScript Project in directory TSPro;
// Please Follow ...