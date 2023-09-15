import inquirer from "inquirer";

let answers = await inquirer.prompt([{
    name:"age",
    type:"number",
    message:"eneter your age"
}]);
console.log("inshaAllah, in " + (60 - answers.age)+"years you will be 60 years old.");
