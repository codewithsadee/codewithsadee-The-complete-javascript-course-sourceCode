/*
//------------------------- conding challenge #1-------------------------------
// ----------------------------------------------------------------------------

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;
console.log(markBMI, johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

// ----------------------------------------------------------------------------


//------------------------- conding challenge #2-------------------------------
// ----------------------------------------------------------------------------

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const isMarkHigherBMI = markBMI > johnBMI;

if (isMarkHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}

// ----------------------------------------------------------------------------



//------------------------- conding challenge #3-------------------------------
// ----------------------------------------------------------------------------

const dolphinsAverage = (96 + 108 + 89) / 2;
const koalasAverage = (88 + 91 + 110) / 2;
if (dolphinsAverage > koalasAverage) {
  console.log(`Dolphin is winner🏆. Score: ${dolphinsAverage}`);
} else if (dolphinsAverage < koalasAverage) {
  console.log(`Koalas is winner🏆. Score: ${koalasAverage}`);
} else {
  console.log(`Match is drow.`);
}

//------> Bonus #1

const dolphinsAverage = (97 + 112 + 101) / 2;
const koalasAverage = (109 + 95 + 123) / 2;
const minScore = 100;
if (dolphinsAverage > koalasAverage && dolphinsAverage >= minScore) {
  console.log(`Dolphin is winner🏆. Score: ${dolphinsAverage}`);
} else if (koalasAverage > dolphinsAverage && koalasAverage >= minScore) {
  console.log(`Koalas is winner🏆. Score: ${koalasAverage}`);
} else {
  console.log(`Match is Draw`);
}

//------> Bonus #2

const dolphinsAverage = (97 + 112 + 101) / 2;
const koalasAverage = (109 + 95 + 106) / 2;
const minScore = 100;
if (dolphinsAverage === koalasAverage && dolphinsAverage >= minScore && koalasAverage >= minScore) {
  console.log(`Math is draw.
  Dolphins Score: ${dolphinsAverage}
  Koalas Score: ${koalasAverage}`);
} else {
  console.log(`No winners! 🙁`);
}

// ----------------------------------------------------------------------------

*/

//------------------------- conding challenge #3-------------------------------
// ----------------------------------------------------------------------------

const bill = 275;
const tip = bill * (bill > 50 && bill < 300 ? 15 : 20) / 100;
console.log(`The bill was ${bill} 💰 & tip is ${tip} 💴`);


// ----------------------------------------------------------------------------
