//Write function
//pass arguements adjective precedence
//use return function instead of console log
//call 3 functions with different sentence

function madlib(adjective, noun, verb, adverb){
    return `A ${adjective} ${noun} ${verb} ${adverb}`
}
let mad1 = madlib('pretty', 'lady', 'sing', 'well');
console.log(mad1);

let mad2= madlib('raged', 'cross', 'transforms', 'frequently');
console.log(mad2);

let mad3 = madlib('young', 'dove', 'fly', 'intelligently');
console.log(mad3);