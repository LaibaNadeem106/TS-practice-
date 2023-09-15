"use strict";
let abc = "2234";
//named function
function add(x, y) {
    let abc = "1234";
    abc = "3ed";
    console.log("function console", abc);
    return x + y;
}
console.log(add(3, 4));
console.log(abc);
//function(x,y){
//}
(x, y) => {
    return x + y;
};
//arrow function const add=()=>
//Lambda functions
let myAdd4 = (a, b) => a + b;
function greeter(fn) {
    "Welcome";
}
function bye(fn) {
    "bye";
}
