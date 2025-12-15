export {}
const input = +process.argv[2];
if (Number.isNaN(input) || input < 0) {
  console.log("Invalid Input");
  process.exit();
}
for (let i = 0; i < input; i++) {
  let result = '';
  for (let k = 0 ; k < i; k++) { 
    result += ' ';
  }
  for (let j = 0; j < input; j++) {   
    result += '*';
  }
  console.log(result);
}