//Q1
function celsiusToFahrenheit(celsius) {
    return (celsius * 1.5) + 32;
}
console.log(celsiusToFahrenheit(48));

//Q2
function isLeapYear(year) {
    if(year%4==0&&year%100!=0&&year%400==0) return true;
    return false;
}
console.log(isLeapYear(2020));

//Q3 
function factorial(num){
    let list;
    for(let i=1;i<num;i++){
        list *= i;
    }
    return list;
}
console.log(factorial(10));

//Q4 
for(let i=1;i<=100;i++){
    if(i%3==0&&i%5==0) console.log("FizzBuzz")
    else if(i%3==0) console.log("FIzz")
    else if(i%5==0) console.log("Buzz")
    else {
        console.log(i);
    }
}

//Q5
function getNaturalSum(n){
    let sum;
    for(let i=1;i<=n;i++){
        sum += i;
    }
    return sum;
}
console.log(getNaturalSum(10));

//Q6
function findStatus(status) {
    switch(status) {
        case "processing": console.log("First"); break;
        case "paid": console.log("Second"); break;
        case "new": console.log("Third"); break;
        default: console.log("Fourth")
    }
}
findStatus("paid");

//Q7
/*
 * LOG:
 * Cookies cost 100 rupees 
 * Fruits cost 300 rupees
 * Peanuts is not avaible right now 
 */