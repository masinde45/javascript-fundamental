const fitBitData = {
       totalSteps  :308727,
       totalMiles  :211.7,
       avgCalorieBurn  :5755,
       workoutsThisweek  :'5 of 7',
       avgGoodSleep  : '2:13',
       100 : 'one hundred',
       bestPet : 'cat'
};
fitBitData['bestpet'] = 'cat'
console.log(fitBitData.bestPet);
fitBitData.totalSteps += 1000;
fitBitData.heartStillBeating = true;

const learners = {
       firstName: 'David',
       lastname: 'Jones',
       strengths: ['Music','art'],
       exams: {
              midterm: 92,
              final: 88
       }
 
}
console.log(learners.strengths[1]);
console.log(learners);

//The total examination marks is : 180
const totalMarks = `The total examination marks is : = ${learners.exams.midterm+learners.exams.final}`;
console.log(totalMarks);

//UPDATING OBJECTS
const cohort = {
      cohortone: 25,
      cohorttwo: 20
}
//The total number of  the two cohorts is : 45
const totalNumber = `The total number of the two cohorts is : = ${cohort.cohortone+cohort.cohorttwo}`;
console.log(totalNumber);

const firstNum = {
       one: 1,
       two: 2,
       three: 3
}
const secondNum = {
       one: 1,
       two: 2,
       three: 3
}

console.log(typeof secondNum);
console.log(typeof firstNum);
console.log(firstNum === secondNum);

