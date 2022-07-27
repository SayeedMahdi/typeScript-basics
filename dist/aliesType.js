function addHear(number1, number2, textCombination) {
    let result;
    if (typeof number1 === "number" && typeof number2 === "number" || textCombination === "as-number") {
        result = +number1 + +number2;
    }
    else {
        result = number1.toString() + number2.toString();
    }
    return result;
}
const sum = addHear(23, 34, "as-number");
console.log(sum);
//# sourceMappingURL=aliesType.js.map