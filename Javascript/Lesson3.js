// Conditional statements

let name = "Abdi"
let age = "22"
let array = ["oranges", "apples", "pears"]
console.log(array)

//------------
/*if (condition){
    doThis
}else if (condition){
    doThis
}else{
    doThis
}*/

// single "=" is for setting variable
// double "==" is for 
// triple "==="
// logic gates
// AND gate (&&)
// OR gate (||)



if (name === "Abdi" && age === 23){
    console.log("Hello Abdi welcome back")
    array[0] = "grapes"
}else{
    console.log("unrecognised user")
}

console.log(array)
 
// greater than >    ||     greater than and equal to >= 
// less than <    ||    less than and equal to <=

let day = "sunday"

if(day === "monday"   ||  day === "tuesday"   ||    day === "wednesday"   ||   day === "thursday"   ||   day === "friday"){
    console.log(`${day} is a weekday`)
}else if (day === "saturday"   ||   day === "sunday"){
    console.log(`${day} is a weekend`)
}else{
    console.log("not possible")
}

