// -----------------------------------
// leason 1:
// make variable with var , let , const
// name variable havent - (dash)!
var age = 45;
//  frist make variable declerition add type like age variable type of number
//  variable : type = value
var employeename = "jhon";
var num = 100;
//  data type number , boolean , string
var frist = 123; // number
var second = 0x67cf; //hexadecimal
var third = 301; // octal
var fourth = 53; //binery
// -----------------------------------
// leason 2:
// Number method
// 1.toexponential 2.tofixed 3.tolocalstring 4.toprecision 5.tostring 6.valueof
var employeenameSecond = "erfanlabbafi";
// typeof boolean:
var ispresent = true;
// type script support generical type:
// make array
// all method in array : [
// pop() / push() / sort() / concat() / indexof() /copywithin() / fill() / shift() / splice() / unshift() /...
// includes() / join() / lastIndexOf() / slice() / tostring() / toLocalString()/]
var friuts = ["bannana", "apple"];
var friutscopy = ["bannana", "apple"];
// Boolean - condition:
var x = 10, y = 9;
if (x > y) {
    console.log("x");
}
else if (x < y) {
    console.log("y");
}
else {
    console.log("equal");
}
//  Loop : (for)
for (var i = 0; i < 3; i++) {
    //  body loop
}
// Function : decleariotn
function sum(x, y) {
    return x + y;
}
// class:
var employe = /** @class */ (function () {
    function employe(empid, name) {
        this.empid = empid;
    }
    return employe;
}());
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
function sum1(numb1, numb2) {
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
function messageUser(text1) {
    return text1 + 'tslearn ';
}
console.log(messageUser('erfan'));
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
var someValue = 'this is a string';
var strlength = someValue.length;
function identity(arg) {
    return arg;
}
