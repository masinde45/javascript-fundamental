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
let days = 7;
if (days === 1) {
    console.log("sunday");
}
else if (days === 2) {
    console.log("monday");
}
else if (days === 3) {
    console.log("tuesday");
}
else if (days === 4) {
    console.log("wednesday");
}
else if (days === 5) {
    console.log("thursday");
}
else if (days === 6) {
    console.log("friday");
}
else if (days === 7) {
    console.log("saturday");
};

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