//spot the issue

const age = 22
var occupation = "student"

if(age > 21 && occupation === "student"){
    console.log("no stable income so you do not qualify")
}else if(age > 21){
    console.log("stable income and you qualify")
}else{
    console.log("sorry you are too young")
}




/* create a conditional statement for grading papers score 
90 and above is A*
score above 80 is A
above 70 = B
above 60 = C
anything below is a fail*/


var mark = 76

if(typeof mark === "number"){
    if(mark >= 90   &&  mark <= 100){
        console.log("Grade A*")
    }else if(mark >= 80   &&  mark < 90){
        console.log("Grade A")
    }else if(mark >= 70   &&  mark < 80){
        console.log("Grade B")
    }else if(mark >= 60   &&  mark < 70){
        console.log("Grade C")
    }else if(mark <60){
        console.log("Fail")
    }else if(mark > 100){
        console.log("Error, incorrect grade")
    }
}else{
    console.log("Error1")
}
