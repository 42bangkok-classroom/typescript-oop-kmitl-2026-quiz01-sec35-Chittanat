export{}
const op = process.argv[2];
const num1 = +process.argv[3];
const num2 = +process.argv[4];

if (!op || Number.isNaN(num1) || Number.isNaN(num2)){
  console.log("Invalid input");
  process.exit();
}

const lowerOp = op.toLowerCase();
let result: number;

if (lowerOp === "add"){
  result = num1 + num2;
} else if (lowerOp === "sub"){
  result = num1 - num2;
} else if (lowerOp === "mult"){
  result = num1 * num2;
} else if (lowerOp === "div"){
  if (num2 === 0){
    console.log("Invalid input");
    process.exit();
  } else {
    result = num1 / num2;
  }
  
} else {
  console.log("Invalid operator");
  process.exit();
}

console.log(result);
