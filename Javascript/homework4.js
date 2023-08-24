var day = "Tuesday"


if(typeof day === "string"){
    if(day.toLowerCase()==="tuesday"){
        console.log("thats a day of the week")
    }else{
        console.log("day not recognised")
    }
}else{
    console.log("error, variable doesnt contain a string")
}

//Q2

var phone = "iphone".toLowerCase()

if(typeof phone === "string"){
    if(phone === "iphone"){
        console.log("phone is an iphone")
    }else{
        console.log("phone must be an android")
    }
}

//Q3

var num1 = 10
var num2 = 10
var operation = "subtraction"

if(typeof operation === "string"){
    switch (operation){
        case "addition":
            console.log(num1+num2)
            break;
        case "subtraction":
            console.log(num1-num2)
            break;
        case "multiplication":
            console.log(num1*num2)
            break;
        case "division":
            console.log(num1/num2)
            break;
        default:
            console.log("do not recognise that operator")
            break;
    }
}

