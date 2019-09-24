/*jslint node:true*/
"use strict";

/*global alert*/



function loadImage() {
    
}



var companyTitle = "Fortune Teller";
document.getElementById("company").innerHTML = companyTitle;


var companySlogan = "Switch Statements";
document.getElementById("slogan").innerHTML = companySlogan;





// pick a random number for the calendar date

function getRandomIntInclusive(min, max) {
min = Math.ceil(min);
max = Math.floor(max); 
return Math.floor(Math.random() * (max - min + 1)) + min; // the maximum is inclusive and the minimum is inclusive

}

console.log(getRandomIntInclusive(1, 12))

let month = getRandomIntInclusive(1, 12)
let fate = getRandomIntInclusive(1, 12)
let day = getRandomIntInclusive(1, 30)


function getMonthName(month) {
let name 
switch (month){
case 1:
name = "January"
break 
case 2: 
name = "Februrary"
break 
case 3:
name = "March"
break 
case 4: 
name = "April"
break 
case 5:
name = "May"
break 
case 6: 
name = "June"
break 
case 7:
name = "July"
break 
case 8: 
name = "August"
break 
case 9:
name = "September"
break 
case 10: 
name = "October"
break 
case 11:
name = "November"
break 
case 12: 
name = "December"
break 
default: 
name = "Not a month"
break


}
return name 
}




function getFortune(fate) {
let message
switch (fate){
case 1: 
message = 'win the lottery!'
break 
case 2:
message = 'be the next greatest philanthropist!'
break 
case 3:
message = 'find your soul mate!'
break
case 4:
message = 'gain magical powers.'
break 
case 5:
message = 'confess your darkest secrets.' 
break 
case 6:
message = 'seek your greatest desire.' 
break
case 7:
message = 'become the next best comedian.' 
break 
case 8:
message = 'have your life turn into a musical.'  
break 
case 9:
message = 'see yourself on TV.' 
break
case 10: 
message = 'be seventeen again.' 
break 
case 11:
message = 'have all of your hair turn gray permanently.' 
break 
case 12:  
message = 'start this year all over again.'
break
default: 
message = 'Some sort of error occurred.'
break



}

return message


}



const monthName = getMonthName(month)
const Fortune = getFortune(fate)

const fortuneRevealed = 'Tell My Fortune: On ' + monthName + ' ' + day + ', you will ' + Fortune

document.querySelector('#fortune').innerText = fortuneRevealed

console.log(monthName)
    
    































