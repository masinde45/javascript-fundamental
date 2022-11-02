// CREATING ARRAYS
let students = [];
console.log(students);
//An array of string
//let flowers = ['red', 'green', 'yellow'];
//console.log(flowers);
//An array of numbers
let lottoNums = [19,22,56,12,51];
console.log(lottoNums);
//A mixed array
let stuff = [true,68,null];
console.log(stuff);
//PUSH

let fruits = ['orenges', 'bananas', 'pineaples', 'pears'];
fruits[0] = 'pawpaw';
console.log(fruits);

let student = [];
students [0] = 'fem';
student [1] = 'devs';
student.push ('busia');
student.push(4);
student.push(true)
console.log(student);
//POP

student.pop();
student.pop();
console.log(student);

let footballTeam = ['chelsea', 'man united', 'arsenal', 'man city'];
footballTeam.pop ();
console.log(footballTeam);

//let item = [1, 2, 'fruits', 'false', 'undefined'];
//console.log(item.join('?'));

//INCLUDES
let includedValue = fruits.includes('fruits');
console.log(includedValue);

//SLICE
let item = [ 1, 2, 'true', 'false'];
let sliced = item.slice(1,4);
console.log(sliced);
//console.log(item.includes('fruits'));
console.log(item.join('-'));

//SPLICER
let splicer = ['oranges', 'potatoes', 'melon', 'guavas']
//REMOVING AN ITEM USING SPLICE
splicer.splice(3, 2);
console.log(splicer);
//ADD ITEM USING SPLICE
splicer.splice(0, 0, 'grapes', 'guavas', true);
console.log(splicer);
//REPLACING ITEM USING SPLICE
splicer.splice(2, 1, 'pawpaw');
console.log(splicer);
//SORTING ARRAYS
let sorter = ['crocodile', 'salamander', 'lizards', 'chameleon'];
let sorted = sorter.sort();
console.log(sorted);

//NESTING ARRAYS
const colors = [
   ['red', 'crimson'],
   ['orange', 'dark orange'],
   ['yellow', 'golden red'],
   ['green', 'olive'],
   ['blue', 'navy blue'],
   ['purple', 'orchid']
]
let concatenated = colors[2].concat(colors[4]);
console.log(concatenated.join('-'));
console.log(concatenated.toUpperCase);

const details = [
    ['age',20],
    ['city','tulsa'],
    ['zip',91003],
    ['isAdmin',true]

]

const age = details[0].join(':');
console.log(age);
const city = details[1].join(':');
console.log(city);
const zip = details[2].join(':');
console.log(zip);
const isAdmin = details[3].join(':');
console.log(isAdmin);


//colors.slice(6,0,['hyena', 'elephant']);
//console.log(colors);
//console.log(colors[0]);
//console.log(colors[0][1]);
//
//console.log(colors[4][1]);
