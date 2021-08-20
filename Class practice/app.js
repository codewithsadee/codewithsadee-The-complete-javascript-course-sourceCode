`use strict`;
const ps = require('prompt-sync');
const prompt = ps();

// const userInput = document.querySelector('#userInput');
// const submitBtn = document.querySelector('#submit');
// const resultBox = document.querySelector('#result');

// let key = '';

// // Random number machine
// const start =  () => {
//   const machine = Math.ceil(Math.random() * 5);
//   // return machine;
//   const inputValue = Number(userInput.value);
//   const chackUserInput =  machine === inputValue ? true : false;
//   return chackUserInput;
// }

// document.addEventListener('keypress', e => {
//   key = e.key;
//   if (key === 'Enter') {
//     const showResult = start();
//     resultBox.innerText = `${String(showResult).toUpperCase()} ${showResult ? '💪' : '👿'}`;
//     resultBox.style.background = showResult ? '#0dc426' : '#c40d0d';
//   }
// });

// const arr = [
//   ['Bangladesh', 'India', 'Pakistan', 'Egypt']
// ];

// for (let x = 0; x < arr.length; x++) {
//   for (let y = 0; y < arr[x].length; y++) {
//     console.log(`${arr[x][y]} is a beautiful country`);
//   }
// }

// const mult = (num1, num2) => num1 * num2;

// for( let y = 1; y < 11; y++) {
//   const result = mult(5, y);
//   console.log(`${5} * ${y} = ${result}`)
// }


// let userPassword = prompt('Enter a Password: ');

// const userInput = 'Mdtokee.892238';

// let totalCount = 0;

// let isNumber = false;
// let isCapital = false;
// let isSpecial = false;

// const allChar = ['1234567890', 'QWERTYUIOPASDFGHJKLZXCVBNM', '_-.'];

// for (let i = 0; i < userInput.length; i++) {
//   if (userInput.length < 8) {
//     break;
//   } else if (userInput.length > 20) {
//     break;
//   }
//   let password = userInput[i]; // 1

//   for (let a = 0; a < allChar.length; a++) { // allChar.length: 3
//     for (let b = 0; b < allChar[a].length; b++) {
//       totalCount++;
//       if (a === 0 && password === allChar[a][b]) {
//         isNumber = true;
//       } else if (a === 1 && password === allChar[a][b]) {
//         isCapital = true;
//       } else if (a === 2 && password === allChar[a][b]) {
//         isSpecial = true;
//       }
//     }

//   }

// }

// console.log(isNumber, isCapital, isSpecial, totalCount);

personFriends = function (friend1, friend2, friend3) {
  const arr = [friend1, friend2, friend3];
  return arr;
}

const info = {
  fullName: 'Mohammad Sadee',
  job: 'Programmer',
  location: 'Bangladesh',
  birthYear: 1996,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
  },
  friends: personFriends('Amit', 'Shakib', 'Rashed'),
}
info.friends[info.friends.indexOf('Shakib')] = 'Kashmir';

info.calcAge();
console.log(info);

for (let i = 0; i < info.friends.length; i++) {
  if (info.friends.includes('Kashmir')) {
    console.log(`You haven't friend called Kashmir`);
  } else if (info.friends.includes(info.friends[i])) {
    console.log(`you've friend called ${info.friends[i]} and he is your good friend`);
  }
}




// const userInput = prompt('Enter your friends name : ').toLowerCase();
// const inputFriendsBirthYear = prompt('Enter frinds birsth year : ');

// const agesCalc = birthYear => 2021 - inputFriendsBirthYear;

// const friends = ['jonas', 'anisul islam', 'shakib hossain', 'md rashed'];

// if (friends.includes(userInput)) {
//   console.log(`You've ${agesCalc()} year old friend called ${userInput}`);
// } else {
//   console.log(`No friend called ${userInput}`);
// }

