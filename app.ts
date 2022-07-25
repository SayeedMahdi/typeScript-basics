// const button = document.querySelector("button")!;
// const input1 = document.getElementById("num1")! as HTMLInputElement;
// const input2 = document.getElementById("num2")! as HTMLInputElement;

// function add(num1: Number, num2: Number) {
//   return +num1 + +num2;
// }

// button.addEventListener("click", function() {
//   console.log(add(+input1.value, +input2.value));
// });
var add = (num1: {x: string}, num2: number) : any => {
  return num1;
}
var num1: number = 12;
var num2 = 125;
var result = add(num2, 121);
console.log(result);
