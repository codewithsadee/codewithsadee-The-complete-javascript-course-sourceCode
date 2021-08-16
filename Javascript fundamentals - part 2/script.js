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


//-------------------------LECTURE: Arrow Functions----------------------------
//-----------------------------------------------------------------------------

const percentageOfWorld3 = (population, country) => {
  const peoplePercentageOfWorld3 = population / 7900 * 100;
  console.log(`${country} has ${population} million people it's about 
  ${peoplePercentageOfWorld3}% of the world population`);
}

percentageOfWorld3(161, `Bangladesh`);
percentageOfWorld3(1366, `India`);
percentageOfWorld3(21.8, `Sri-Lanka`);

//-----------------------------------------------------------------------------

//---------------Lecture: function calling other function---------------------
//-----------------------------------------------------------------------------

function percentageOfWorld1(population) {
  return population / 7900 * 100;
}


const describePopulation = function (country, population) {
  const peoplePercentageOfWorld = percentageOfWorld1(population);
  const countryDetails = `${country} has ${population} million pepole. which is about ${peoplePercentageOfWorld}%`;
  return countryDetails;
}

console.log(describePopulation(`Bangladesh`, 161));
console.log(describePopulation(`India`, 1366));
console.log(describePopulation(`Sri Lanka`, 21.8));
//-----------------------------------------------------------------------------
*/


//-------------------LECTURE: Introduction to Arrays---------------------------
//-----------------------------------------------------------------------------

function percentageOfWorld1(population) {
  return population / 7900 * 100;
}

const population = [161, 1366, 21, 66];
console.log( population.length === 4 );

const persentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population[3])
];
console.log(persentages);

//-----------------------------------------------------------------------------
