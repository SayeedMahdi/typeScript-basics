//using void in return type of function
function addSome ( num1:number, num2:number ) {
    return num1 + num2;
}

function show ( result:number):void {
    console.log("The result is " + result);
}

show( addSome(12,33));


//using function as variable

let someFunction:(number1: number, number2: number) => number;

someFunction = addSome;
console.log(someFunction(12, 34));

//using unknown function
let userInput: any;
userInput = "sdj";
userInput = 12;

let userName = "sdf"
userName = userInput;
const pi:number = 13;
console.log(pi);


function createError(message: string, code: number):never{
    throw {messages: message, codes: code};
}
createError("sine bew ",302);