//FUNCTION GLOBAL SCOPE
let bird = 'mandarin duck';
function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird);
}
console.log(bird);
birdWatch();

//block scope
let radius = 8;
if(radius > 0){
    const PI = 3.14;
    let circ = 2 * PI * radius;
}
console.log(radius);

//lexical scope
function outer(){
    let movie = 'Accident Man';
    console.log(movie);
function inner(){
    //let movie = 'Shoot em up';
    console.log(movie);
function extras(){
    console.log(movie.toUpperCase());
}
extras();
}
inner();
}
outer();

//function expression
const square = function (num) {
    return num * num;   
}
console.log(square(7));
square(7);

//REASONS WHY FUNCTIONS ARE STORED IN A VARIABLE
// 1. in javascript, functions are objects
// - This means we can put them into varriables

function callTwice(func){
    func();
    func();
}
function laugh(){
    console.log('KICHEKOOOOO');
}
callTwice(laugh);

function makerBetweenFunc(min, max){
    return function (val) {
        return val >= min && val <= max;
    }
}
const inAgeRange = makerBetweenFunc(20, 100);
inAgeRange(19);
console.log(inAgeRange(19));
inAgeRange(76);
console.log(inAgeRange(76));

const x = 1;
{
console.log(x);   
}

function rage(){
    console.log("I love everything");
}

function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
    }
}
repeatNTimes(rage, 13)
