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
    console.log(circ);
}
console.log(radius);

//lexical scope
//looks for the nearest variable
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
// - we can store a lot of them in an array
// - we can even pass them around as arguments

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
    console.log('I love everything');
}

function repeatNTimes(action, num){
    for(let i = 0; i < num; i++){
        action();
        
    }
}
repeatNTimes(rage, 13)

function add(x, y){
    return x + y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function subtract(x, y){
    return x - y;
}

const pupil = {
      puppy: add,
      geese: multiply,
      duck: divide,
      camel: subtract
}
console.log(pupil.puppy(2, 4));
console.log(pupil.geese(4, 3));
console.log(pupil.duck(8, 4));
console.log(pupil.camel(10, 5));

//nesting objects in an array
const arr1 = [add, multiply, divide, subtract]
for(let pupil of arr1){
   let arr2 = pupil(2,3)
   console.log(arr2);
}
