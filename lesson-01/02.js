// code

let number1 = Math.floor(Math.random() * 100);
const isEvenNumber = (num) => {
    if (num % 2) {
        console.log(`${num}: Это нечетное число`);
    } else {
        console.log(`${num}: Это четное число`);
    }
}

isEvenNumber(number1);