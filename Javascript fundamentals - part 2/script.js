'use strict'
/*
//----------------------------Lecture: function--------------------------------
//-----------------------------------------------------------------------------

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and it's capital city is
  ${capitalCity}.`;
}
const bd = describeCountry(`Bangladesh`, 163, `Dhaka`);
const ind = describeCountry(`India`, 1366, `New Delhi`);
const ru = describeCountry(`Russia`, 144, `Moscow`);

console.log(bd);
console.log(ind);
console.log(ru);
//-----------------------------------------------------------------------------

*/

//----------------LECTURE: Function Declarations vs. Expressions --------------------
//-----------------------------------------------------------------------------

function percentageOfWorld1 (population, country) {
const peoplePercentageOfWorld = population / 7900 * 100;
console.log(`${country} has ${population} million people it's about 
${peoplePercentageOfWorld}% of the world population`);
}


percentageOfWorld1(161, `Bangladesh`);
percentageOfWorld1(1366, `India`);
percentageOfWorld1(21.8, `Sri-Lanka`);

// Function Expression
const percentageOfWorld2 = function(population, country) {
  const peoplePercentageOfWorld2 = population / 7900 * 100;
  console.log(`${country} has ${population} million people it's about 
  ${peoplePercentageOfWorld2}% of the world population`);
}

percentageOfWorld2(161, `Bangladesh`);
percentageOfWorld2(1366, `India`);
percentageOfWorld2(21.8, `Sri-Lanka`);
//-----------------------------------------------------------------------------

