//CONDITIONAL LOGICS
let rating = 3;
if (rating === 3) {
    console.log("YOU ARE A SUPPERSTAR");
};
if (rating === 3) {
    console.log("YOU ARE WONDERFUL");
}
else if (rating === 3) {
    console.log("YOU ARE GOOD");
};
//DAYS OF A WEEK
let days = 6;
switch (days){
    case 1: console.log("sunday");
    break
    case 2: console.log("monday");
    break
    case 3: console.log("tuesday");
    break
    case 4: console.log("wednesday");
    break
    case 5: console.log("thursday");
    break
    case 6: console.log("friday");
    break
    case 7: console.log("saturday");
    break
    default: console.log("INVALID DAY");
    break;
}
 //if (days === 1) {
   // console.log('sunday');
//}
// else if (days === 2) {
  //  console.log('monday');
//}


//declare password varriable and give it a value
//use if statement to :
//check if password has a space
//ensure that your password has a length of more than 6 characters
//console.log something if condition is true

let password = "joelyn princess";
if (password.length >= 6) 
    if (password.indexOf('') === -1) {
    console.log('VALID PASSWORD');
    }
    else {
        console.log("INVALID PASSWORD");
    }
    //LOGICAL OPERATORS
    let age = 76;
    if (age <6 || age >= 65){
        console.log("YOU NEED TO GET FOR FREE");
    }
    else{
        console.log(`YOU NEED TO PAY FOR LUNCH`);
    }
    //ternary operator
    let javascript = 'hard';
   javascript ==='easy'? 'okay' : 'not true';
   console.log(javascript);

   let newPerson = 'femidevs';
    console.log(newPerson ==='femidevs') ?'REAL NAME' : 'WRONG NAME';

  // if (newPerson === 'femidevs') {
 //  console.log('REAL NAME');
 //}  
  // else {
   // console.log('WRONG NAME');
  // }