//FUNCTIONS
function grumpus() {
    console.log('ugh...you again...');
    console.log('for the last time...');
    console.log('LEAVE ME ALONE!!!');
}
grumpus(); //calling
function greet(name){
console.log(`Hi, ${name}`);
};
greet('linet');

//MULTIPLY NUMBERS
function multiply(x,y){
    console.log(x*y);
}
multiply(2,3);

//find the average of numbers using function
//function avg(arr){
 //   let total = 0;
//    console.log(``);
//}

//DIVIDING NUMBERS
function divide(x,y){
    console.log(x/y);
}
divide(10,5);

//ADDING TWO NUMBERS
function add(l,a,m){
    console.log(l+a+m);
}
add(8,4,2);

//SQUARE OF NUMBER
function square(x){
    console.log(x * x);
}
square(7);

function sayHello(name){
      console.log(`Hello, ${name}`.toUpperCase());
}
sayHello('world');

//AVERAGE OF NUMBERS
//function avg(w,x,y,z){
  //  console.log(w * x * y * z/avg.length);
//}
//avg(2,4,3,5);

function avg(arr){
    let sum = 0;
    for(let r of arr){
        sum += r;
    }
    const average = sum / arr.length
    console.log(average);
}
avg([1,2,3,4,5]);


 function  findLargest(x,y){
    if(x > y)
    console.log(`${x} is large`);

    else if(x < y)
    console.log(`${y} is larger`);

    else{
        console.log(`${x} and ${y} are equal`);
    }
 }
 findLargest(4,5);


 // RETURN IN FUNCTION
 //return value can be captured or stored for future use

 function add(x, y){
    //return x + y;
  return [x, y];

 }
 const total = add(3, 8);
 console.log(total);


 function isPurple(color){
   if(color === 'purple'){
    return true;
   }
   else{
    return false;
   }
    
   }

const color = isPurple('purple');
console.log(color);


//write a isvalidPassword function
//it accepts 2 parameters: password and username
//password must:
// -be atleast 8 characters
// -cannot contain spaces
// -cannot contain the username
//if all requirements are met, return true.
//Otherwise : false

function isValidPassword(password, username){
    if(password.length >= 8){
        return false;
    }
     if(password.indexOf === -1){
        return false;
    }
    if(password.indexOf(username ) === -1){
        return false;
    }
      else{
        return true;
      }  
    }

const shancy = isValidPassword('joelynprincess', 'masinde');
console.log(shancy);


//MORE REFACTORING
function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf('') !== -1;
    const containUsername = password.indexOf(username) !== -1;
   
    if (tooShort|| hasSpace|| containUsername) return false;
    return true;
}
//write a function called isPangram, which checks to see if a given sentence contain every letter of the alphabet
//make sure you ignore string casing
//Solution 1
function isPangram(sentence){

}
