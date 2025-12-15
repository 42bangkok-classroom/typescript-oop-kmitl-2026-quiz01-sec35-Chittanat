export{}
const input = Number(process.argv[2]);
 if (!input|| isNaN(Number(input))|| Number(input)<0|| Number(input)>100) {
    console.log("Invalid Input");
    process.exit();
    }
if (input >=80 ) {
    console.log("Grade is A");
} else if (input >= 70) {
    console.log("Grade is B");
} else if (input >= 60) {
    console.log("Grade is C");
} else if (input >= 50) {
    console.log("Grade is D");
} else {
    console.log("Grade is DF");
    
}
