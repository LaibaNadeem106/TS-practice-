let p: string="hello";//strong typing
p="its okay to be not okay";
let r:number =44;
r=88;
let u:boolean=true;
u:false;

//explicitly type annotations are annoted as a data type with the help of colon between them as
//let p : string its is explicit typing we can also say variables hold specific data types

let o="usa";//inference typing
let s=39;
let q=true;

function greet (name:string):void {
    console.log(`hello ${name}`);

}
function add({ w, e }: { w: number; e: number; }): number {
    return w + e;
}

