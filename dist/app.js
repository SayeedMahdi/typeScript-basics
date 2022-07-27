function addSome(num1, num2) {
    return num1 + num2;
}
function show(result) {
    console.log("The result is " + result);
}
show(addSome(12, 33));
let someFunction;
someFunction = addSome;
console.log(someFunction(12, 34));
let userInput;
userInput = "sdj";
userInput = 12;
let userName = "sdf";
userName = userInput;
const pi = 13;
console.log(pi);
function createError(message, code) {
    throw { messages: message, codes: code };
}
createError("sine bew ", 302);
//# sourceMappingURL=app.js.map