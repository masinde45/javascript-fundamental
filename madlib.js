//FUNCTION MADLIB
function madlib(adjective, noun, verb, adverb){
    return`The ${adjective} ${noun} ${verb} very ${adverb}`;
}
let mad = madlib('black', 'donkey', 'run', 'quickly');
console.log(mad);