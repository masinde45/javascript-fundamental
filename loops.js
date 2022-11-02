//FOR LOOP
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 0; i <= 20; i++) {
    console.log(i);
}

for (let i = 20; i >= 0; i--) {
    console.log(i);
}


for (let i = 0; i <= 50; i += 10) {
    console.log(i);
}

const animals = ['tiggers', 'bears', 'antelop']
;
for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

//animals at index 0 is tiggers
for (let i = 0; i < animals.length; i++) {
    console.log(`animals at index of ${i} is ${animals[i]}`);
}

//NESTED LOOPS
let str = 'LOL';
for (let i = 0; i <= 4; i++) {
    console.log("Outer:", i);
   // for (let j = 0; j < str.length; j++){
    //   console.log(` Inner : ${str[j]}`);
   // }
}

//WHILE LOOPS
let num = 0;
while (num < 10){
    console.log(num);
    num++;
}

let targetNum = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== targetNum) {
    console.log(`Guessed ${guess}...Incorrect!`);
    guess = Math.floor(Math.random() * 10)
}
console.log(`CORRECT! Guessed: $(guess) & target was: $(targetNum)`);

//USING FOR ...OF
for(let s of 'linet'){
    console.log(s);
}

let subreddits = ['soccer', 'popheads', 'cringe', 'books']
for(let sub of subreddits) {
    console.log(`${sub} - www.reddit.com/r/${sub}`);
}
//NESTED FOF...OF LOOP
const magicSquare = [
    [2,7,6],
    [9,5,1],
    [4,3,8]
];
//console.log(magicSquare[0][1]); // Accessing elements within a nested loop
for(let row of magicSquare){
//    console.log(row);
let sum = 0;
for(let num of row) {
    sum += num;
}
console.log(`Row of ${row} sum to ${sum}`);
}

const movieReviews = {
    Amadeus : 10,
    Arrival : 9.5,
    Alien : 9,
    Amelie : 8
};
for(let movie of Object.keys(movieReviews)){
    // console.log(movie);
    let score = movieReviews[movie]
   console.log(`I rated ${movie} ${score}`);
}


//Arsenal is position 1 in EPL
footBallTeams = {
    manchestaUnited: 10,
    mancity: 4,
    astonivilla: 6,
    liverpool: 2,
    chelsea: 3
}
for(let teams of Object.keys(footBallTeams)){
    let position = footBallTeams[teams];
    console.log(`${teams} is at position ${position}`);
}

//FOR...IN LOOP
const jeorpadyWinnings = {
    regularPlay : 2522700,
    watsonChallenge : 300000,
    tournamentOfChampions : 500000,
    battleOfTheDecades : 100000
};
let total = 0;
for(let key in jeorpadyWinnings){
     total += jeorpadyWinnings[key];
   
}
console.log(total);