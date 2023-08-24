//------

// .includes()

var array = [1,2,3,4,5,6]

if (array.includes(6)){
    console.log("array has the number 6")
}

var day = "WEDNESDAY"

switch(day.toLowerCase()){
    case "monday":
        console.log(`its ${day}`)
        break;
    case "tuesday":
        console.log(`its ${day}`)
        break;    
    case "wednesday":
        console.log(`its ${day}`)
        break;
    case "thursday":
        console.log(`its ${day}`)
        break;
    case "friday":
        console.log(`its ${day}`)
        break;
    case "saturday":
        console.log(`its ${day}`)
        break;
    case "sunday":
        console.log(`its ${day}`)
        break;
    default:
        console.log("not possible")
        break;            
}