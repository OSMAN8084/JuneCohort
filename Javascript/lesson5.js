//Loops

/* for (conditions to pass){
    doSomething here
} */

/* (condition to pass)  
    (initialisation, condition; whats next  ||  iterator)
    iterator - "i++" this means that for the loop, the new variable of "i" is equal to i+1
    i++
    i = i+1
    i = 2+1
    i+2 instead of i++ means the loop will go up in 2s instead of 1
*/

// i=initialisation - let i=0 means let the starting point be 0


// console.log("hello")

// for (let i=0;  i<=3;  i++){
//     console.log("hello " +i)
// } 



// for (let i=10;  i>=0;   i--){
//     if (i === 0){
//         console.log("blast off!")
//     }else{
//         console.log(i)
//     }
// }

var array = ["milk", "oranges", "apples", "bread", "butter", "cheese"]

for (let i = 0; i<array.length; i++){
    console.log(array[i])
}

// "%" - this modulus symbol finds remainders in math problems 

console.log(15%4)


//Practice question - Create a loop that checks if numbers are odd or even (starting point 0 and end point 100)

for (let i = 0; i<=100; i++){
    if(i%2  === 0){
        console.log(i+" is even")
    }else{
        console.log(i+" is odd")
    }
}

// correct

/* while loops

let i = 0 

while(i<200){
    console.log("doSomething")
    i++
}

*/
