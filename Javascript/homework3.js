//Q1 Write a conditional statement to state if a hero is a dc character or marbel character

var hero = "catwoman"

if(hero === "superman"  ||  hero === "batman"   ||  hero === "ww"){
    console.log(`${hero} is a dc character`)
}else if(hero === "spiderman"   ||  hero === "ironman"  ||  hero === "thor"){
    console.log(`${hero} is a marvel character`)
}else{
    console.log(`sorry i do not recognise ${hero}`)
}

//Q2 write a conditional statemtn taking age as a variable and what year group they will be in school 

const age = 15   

if (typeof age === "string"){
    console.log("error 1")
}else if(age >= 11    &&  age < 16){
    console.log("you are in secondary school")
}else if(age >= 16  &&  age <= 18){
    console.log("you are in college")
}else if (age > 18  &&  age < 90){
    console.log("optional education")
}else if (age < 11  &&  age > 5){
    console.log("you are in primary school")
}else{
    console.log("error 2")
}


/*Q3 Create a shopping list of 5 items. Now make a conditional statement that checks if the list contains 5 items only. 
If above 5 print out error and if less than 5 prit error. */

var array = [1,2,3,4,5,6]

// nested conditional 

    // if (array.length > 5  || array.length < 5){
    //     console.log("error")
    // }else{
    //     console.log("list has 5 items")
    // }

if(typeof array != "object"){
    console.log("error")
}else{
    if(array.length>=5 && array.length<10){
        console.log("list has correct number of items")
    }else{
        console.log("error, incorrect number of items")
    }
}

