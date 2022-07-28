// enum Role  {admin=12, author , user};


// const person2 = {
//     name:"mahdi",
//     age:34,
//     role:Role.author
// }
// console.log(person2.role);
type Combination = number | string;
type CombinationResult = "as-number" | "as-string";

function addHear ( number1 : Combination, number2 : Combination, textCombination :CombinationResult){
    let result;
    if(typeof number1 === "number" && typeof number2 === "number" || textCombination  === "as-number"){
        result = +number1 + +number2;
    }else{
        result = number1.toString() + number2.toString();
    }
    return result;
}

const sum = addHear(23, 34, "as-number");
 console.log(sum);
 



