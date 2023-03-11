//default Parameter
function add (num1, num2 =0){
    return num1 + num2;
}
const total = add(15);
console.log(total);

//Template String
const firstName = "Jhankar";
const lastName = "Programmer";
const fullName = firstName +" "+ lastName + " is a good person";
const fullName2 = `${firstName} ${20+10+70} is a good person`;
console.log(fullName2);

//Multiline String
const multiLine = "I love you\n"
+"i miss you\n"
+"I need you";
const multiLine2 = `i love my mother
i am a programmer
i became a good person`
console.log(multiLine2);

//Arrow Function
const doubleIt = num => num *2; //single arrow
const sum = (x, y) => x + y;    //double arrow
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = sum(20,10);
console.log(result);
console.log(doMath(7,5));

