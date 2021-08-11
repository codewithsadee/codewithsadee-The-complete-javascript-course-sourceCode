/*
//---------------------LECTURE: values and variebles---------------------------
// ----------------------------------------------------------------------------

let country = 'Bangladesh';
let continent = 'Asia';
let population = 16100000;

console.log(country);
console.log(continent);
console.log(population);
// ----------------------------------------------------------------------------


//---------------------------LECTURE: data types-------------------------------
// ----------------------------------------------------------------------------

let isIsland = false;
let langueage;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof langueage);
// ----------------------------------------------------------------------------


//--------------------------LECTURE: let, const, var---------------------------
// ----------------------------------------------------------------------------

const country = 'Bangladesh';
const continent = 'Asia';
let population = 16100000;
const language = "Bangla";
// ----------------------------------------------------------------------------


//-----------------------LECTURE: bacsic operator------------------------------
// ----------------------------------------------------------------------------

const halfPopulation = population / 2;
console.log(population + 1);

//Finland has a population of 6 million. Does your country have more people than Finland?

const findlandPopulation = 600000;
console.log(population > findlandPopulation);

//The average population of a country is 33 million people. Does your country have less people than the average country?

const avarageCountryPopulation = 3300000;
console.log(population > avarageCountryPopulation);

// create a new variable 'description' which contains a string with this format: 'Portugal is in Europe,
//and its 11 million people speak portuguese'

const description = 'Portugal is in Europe, and its 11 million people speak portuguese';

// ----------------------------------------------------------------------------


// -----------------Lecture: string and template literals----------------------
// ----------------------------------------------------------------------------

const description = `Purtogal is in Europe, and its 11 million people speak
portuguese`;

// ----------------------------------------------------------------------------


//----------LECTURE: Taking Decisions: if / else Statements -------------------
// ----------------------------------------------------------------------------

const population = 161000000;
const isHigherThan33 = population > 33000000;
if (isHigherThan33) {
  console.log(`Purtogal's population is above average`);
} else {
  console.log(`Purtogal's population is 22 million below average`);
}
// ----------------------------------------------------------------------------


//-----------LECTURE:  Type conversion and coercion Statements ----------------
// ----------------------------------------------------------------------------

`9` - `5`  //4
  `19` - `13` + `17`; //617
`19` - `13` + 17; // 23
`123` < 57; // false
5 + 6 + `4` + 9 - 4 - 2; // 1143

// ----------------------------------------------------------------------------


//----------------LECTURE: Equality Operators: == vs. === ---------------------
// ----------------------------------------------------------------------------

const numNeighbours = Number(prompt(`How many neighbour countries does your country have?`));
const neighboursIsOne = numNeighbours === 1;
const neighboursIsMoreThanOne = numNeighbours > 1;
if (neighboursIsOne) {
  console.log(`only ${numNeighbours} border`);
} else if (neighboursIsMoreThanOne) {
  console.log(`${numNeighbours} is grater than 1`);
} else {
  console.log(`No border`);
}

// ----------------------------------------------------------------------------


//------------------------LECTURE: Logical Operators --------------------------
// ----------------------------------------------------------------------------

let country = 'Bangladesh';
let population = 16100000;
let isIsland = false;
let langueage = `bangla`;

if (langueage === `english` && population < 5000000 && !isIsland) {
  console.log(`You should live in ${country} 😁`);
} else {
  console.log(`${country} does not meet your criteria 😔`);
}

//-----------------------------------------------------------------------------

//--------------------LECTURE: The switch Statement---------------------------
//-----------------------------------------------------------------------------

const language = `Chinese`;
switch (language) {
  case `Chinese`:
  case `Mandarin`:
    console.log(`${language} is MOST number of native speakers`);
    break;
  case `Spanish`:
    console.log(`${language} is 2nd place of number of native speakers`);
    break;
  case `English`:
    console.log(`${language} is 3rd place of native speakers`);
    break;
  case `Hindi`:
    console.log(`${language} is 4rth place of native speakers`);
    break;
  case `Arabic`:
    console.log(`${language} is 5th place of native speakers`);
    break;
  default:
    console.log(`${language} is Great laguage too 😁`);
}
//-----------------------------------------------------------------------------
*/

//----------------Lecture: The conditional (ternary) operator------------------
//-----------------------------------------------------------------------------

let country = 'Bangladesh';
let population = 16100000;
const result = `${country}'s population is ${population > 33000000 ? `above` : `below`} average`;
console.log(result);

//-----------------------------------------------------------------------------