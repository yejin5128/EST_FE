function plus(num1, num2) {
  return num1 + num2;
}

function minus(num1, num2) {
  return num1 - num2;
}

function mutiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

let input = window.prompt("계산할 값을 입력하세요: ex) 5 + 6");
let result = input.split(" ");
let num1 = result[0];
let num2 = result[2];
let opt = result[1];

console.log(result);
console.log(result[1]);

if (result[1] === "+") {
  console.log(`${num1} ${opt} ${num2} = ${plus(num1, num2)}`);
}
