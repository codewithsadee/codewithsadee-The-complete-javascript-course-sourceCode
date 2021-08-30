'use strict'
//---------------------------------Chellage #1---------------------------------
//-----------------------------------------------------------------------------
/*
const calcAverage = (a, b, c) =>  (a + b + c) / 3;
//test data 1
const dolphinsScore1 = calcAverage(44, 23, 71);
const koalasScore1 = calcAverage(65, 54, 49);

//test data 2
const dolphinsScore2 = calcAverage(85, 54, 41);
const koalasScore2 = calcAverage(23, 34, 27);

const checkWinner = function (avgDolphins, avgKoalas) {
  if ( avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if ( avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log(`No Winner....`);
  }
}

checkWinner(dolphinsScore1, koalasScore1);
checkWinner(dolphinsScore2, koalasScore2);

//-----------------------------------------------------------------------------


//---------------------------------Chellage #2---------------------------------
//-----------------------------------------------------------------------------

const calcTip = function(bill) {
  return bill * (bill >=50 &&  bill <= 300 ? 15: 20) / 100;
}

const bills = [125, 555, 44];
console.log(bills);
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[bills.length -1])];
console.log(tips);

const total = [bills[0]+tips[0], bills[1]+tips[1],bills[2]+tips[2]];
console.log(total);

//-----------------------------------------------------------------------------


//---------------------------------Chellage #3---------------------------------
//-----------------------------------------------------------------------------

const mark = {
  fullName: `Mark Miller`,
  mess: 78,
  height:1.69,
  calcBMI: function(){
    return this.BMI = this.mess / this.height ** 2;
  } 
}

const john = {
  fullName: `John Smith`,
  mess: 92,
  height:1.95,
  calcBMI: function(){
    return this.BMI = this.mess / this.height ** 2;
  } 
}
if (mark.calcBMI() > john.calcBMI()){
  console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is heigher than ${john.fullName}s (${john.calcBMI()})`);
} else {
  console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is heigher than ${mark.fullName}'s (${mark.calcBMI()})`);
}

//-----------------------------------------------------------------------------
*/


//---------------------------------Chellage #4---------------------------------
//-----------------------------------------------------------------------------

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  for (let x = 0; x < bill.length; x++) {
    let tip = bill[x] * (bill[x] >= 50 && bill[x] <= 300 ? 15 : 20) / 100;
    tips.push(tip);

    totals.push(bill[x] + tip);
  }
}
calcTip(bills);
console.log(tips)
console.log(totals);

//----Bonus Chellange----

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
let billAverage = calcAverage(totals);
console.log(billAverage);
//-----------------------------------------------------------------------------