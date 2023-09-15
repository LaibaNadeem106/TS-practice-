let abc = "2234";

//named function
function reet(x:number,y:number): number{
    let abc = "1234";
    abc = "3ed";
    console.log("function console",abc);
    return x+y;
}
console.log(reet(3,4));
console.log(abc);
//function(x,y){

//}
(x:number,y:number):number => {
    return x+y;
};

//arrow function const add=()=>
//Lambda functions
 let myAdd4 = (a: number, b: number) => a + b;
// //output will be: var myAdd4 = function(a : number, b : number) {return a + b};

type GreetFunction = (a: string) => void;
 function greeter(fn: GreetFunction) {
  "Welcome"
 }
  function bye(fn: GreetFunction) {
  "bye"
  }