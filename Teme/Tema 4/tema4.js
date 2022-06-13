// Tema obligatorie si simpla

//1.
let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];

//2.
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

console.log('------------------------------');

// 3. 
let sum = 0;
for (i = 0; i < myArray.length; i++) {
    sum += myArray[i]
    console.log(sum);
}

//4/
let counter=0
for (i = 0; i <= myArray.length; i++) {
    if (myArray[i] === 4) {
        counter++;
    }
}
console.log(counter);

console.log('------------------------------');