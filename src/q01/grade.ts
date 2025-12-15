export{}
const input = Number(process.argv[2]);
 if (!input|| isNaN(Number(input))|| Number(input)<0|| Number(input)>100) {
    console.log("Invalid Input");
    process.exit();
    }
if (input >=80 ) {
    console.log("A");
} else if (input >= 70) {
    console.log("B");
} else if (input >= 60) {
    console.log("C");
} else if (input >= 50) {
    console.log("D");
} else {
    console.log("F");
}
