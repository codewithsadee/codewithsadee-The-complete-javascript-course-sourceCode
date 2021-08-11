'use strict'

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
