let animal = "dog";
console.log(animal.length);

//access individual character in a string
console.log(animal[3]);
let msg = 'i am king';
let yellMsg = msg.toUpperCase();
console.log(yellMsg);
let angry = "LeAVE Me aLoNe";
let lower = angry.toLowerCase();
console.log(lower);
let greetings = ' leave me alone plz ';
console.log(greetings);
  let newGreetings = greetings.trim();
  console.log(newGreetings);
  let tvShow = 'catdog';
  let firstIndex = tvShow.indexOf('cat');
  console.log(firstIndex);

  //slice
  let str = 'lokichogio';
  console.log(str);
  let partOfStr = str.slice(2,8);
  console.log(partOfStr);

  //replaceAll
  let annoyingLaugh = 'teehee so funny! teehee!';
  console.log(annoyingLaugh);
  let replacer = annoyingLaugh.replaceAll('teehee', 'haha');
  console.log(replacer);

  //string escape
  let myName = 'linet\nmasinde';
  console.log(myName);
  console.log('hello\'world');

//template literal
let totals = `We are ${20}`;
console.log(totals);
let cohortone = 15;
let cohorttwo = 20;

let femidevs = `We are ${cohortone + cohorttwo} in total`;
console.log(femidevs);

let drinks = 'sodas';
let quantity = '2';
let price = 970;
//We bought 2crates of soda at kshs.1940;
let soda = `We bought 2crates of soda at kshs.1940`;
console.log(soda);