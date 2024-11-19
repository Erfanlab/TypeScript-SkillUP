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
function sum(x:number,y:number){
    return x+y

}

// class:

class employe { 
    empid: number;
    empname: string;

    constructor(empid : number , name: string){
        this.empid = empid;
    }
}
// ------------------------------------------
//  Leason 3:
//  make project with React:
