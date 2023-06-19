// определение сезона 
let seasonOne = '12 01 02'
let seasonTwo = '03 04 05'
let seasonThree = '06 07 08'
let seasonFour = '09 10 11'

let seasons = prompt('What is the current month?')

if(seasons === '0') {
    alert('ERROR(')
} else if(seasonOne.includes(seasons)) {
    alert("It's winter now.")
} else if (seasonTwo.includes(seasons)) {
    alert("It's sprin now.")
} else if (seasonThree.includes(seasons)) {
    alert("It's summer now.")
} else if (seasonFour.includes(seasons)) {
    alert("It's autumn now.")
} else {
    alert('ERROR(')
}





// определение декады
let decadeFirst = '1 2 3 4 5 6 7 8 9 10'
let decadeSecond = '11 12 13 14 15 16 17 18 19 20'
let decadeThird = '21 22 23 24 25 26 27 28 29 30 31'

let decades = prompt("Write today's date")

if(decades === '0') {
    alert('ERROR(')
} else if(decadeFirst.includes(decades)) {
    alert("It is a first decade of month.")
} else if (decadeSecond.includes(decades)) {
    alert("It is a second decade of month.")
} else if (decadeThird.includes(decades)) {
    alert("It is a third decade of month.") 
} else {
    alert('ERROR(')
}