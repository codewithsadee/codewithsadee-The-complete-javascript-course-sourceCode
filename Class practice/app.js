`use strict`;

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

// personFriends = function (friend1, friend2, friend3) {
//   const arr = [friend1, friend2, friend3];
//   return arr;
// }

// const info = {
//   fullName: 'Mohammad Sadee',
//   job: 'Programmer',
//   location: 'Bangladesh',
//   birthYear: 1996,
//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//   },
//   friends: personFriends('Amit', 'Shakib', 'Rashed'),
// }
// info.friends[info.friends.indexOf('Shakib')] = 'Kashmir';

// info.calcAge();
// console.log(info);

// for (let i = 0; i < info.friends.length; i++) {
//   if (info.friends.includes('Kashmir')) {
//     console.log(`You haven't friend called Kashmir`);
//   } else if (info.friends.includes(info.friends[i])) {
//     console.log(`you've friend called ${info.friends[i]} and he is your good friend`);
//   }
// }




// const userInput = prompt('Enter your friends name : ').toLowerCase();
// const inputFriendsBirthYear = prompt('Enter frinds birsth year : ');

// const agesCalc = birthYear => 2021 - inputFriendsBirthYear;

// const friends = ['jonas', 'anisul islam', 'shakib hossain', 'md rashed'];

// if (friends.includes(userInput)) {
//   console.log(`You've ${agesCalc()} year old friend called ${userInput}`);
// } else {
//   console.log(`No friend called ${userInput}`);
// }


// number string boolean undefined null BigInt symbol

// let num = 1;
// console.log(typeof num)
// num = '1';
// console.log(typeof num)
// num = 1n;
// console.log(typeof num)
// num = true;
// console.log(typeof num)
// num = undefined;
// console.log(typeof num)
// num = null;
// console.log(typeof num)
// num = new Object();
// console.log(typeof num)
// num.name = 'hello';
// console.log(typeof num.name)

// num = [20, ['sadee', 'tokee'], '89'];
// console.log((num[2] * 5 + true))
// num = typeof num[2];
// num = '20' / -0;
// console.log(num)
// num = [20, 44, 55, 1, 2, 30];
// let maxToMin;
// maxToMin = (num.splice(num.indexOf(Math.max(...num)), 1));
// console.log(Math.max(...num));
// maxToMin.push((num.splice(num.indexOf(Math.max(...num)), 1)));
// maxToMin

// console.log(+'', +undefined, +NaN, +null, +0);
// console.log(-'', -undefined, -NaN, -null, -0);
// let String = '-20';
// console.log(-String)

// let str = 'codewithsadee';
// let rStr = '';
// for (let i = str.length; i >= 0; i--) {
//   rStr += str.charAt(i);
// }
// console.log(rStr);

// const birthYear = [1996, 1992, 1995, 2005];

// const friendsAges = [];
// for (let y = 0; y < birthYear.length; y++) {
//   const ages = 2021 - birthYear[y];
//   friendsAges.push(ages);
// }

// console.log(friendsAges);

// const kass = {
//   fullName: 'Kassandra Sanch',
//   followers: 26.2,
//   postLikes: 3.5
// }
// const parcentOfLike = function (followers, likes) {
//   const postLikePercentage = (likes / followers * 100).toFixed(2);
//   return `${kass.fullName} got ${postLikePercentage}% (${kass.postLikes}k) likes out of ${kass.followers}k followers `;
// }

// console.log(parcentOfLike(kass.followers, kass.postLikes));

// for (let x = 0; x <= 8; x++) {
//   console.log(x);
// }

// let num = 350;
// if (num !== 300){
// console.log('unlucky number');
// }

// const computerRam = 8;
// const bitsString = [];

// const calculateBits = function (gigabyte) {
//   let totaBitsN = gigabyte * 1000 * 1000 * 1000 * 1000;
//   totaBitsN = totaBitsN.toString();

//   for (let i = totaBitsN.length; i >= 0; i -= 3) { // 000 000 000 000 8 -> 000 000 000 800
//     bitsString.push(totaBitsN.slice(i - 3, i)); // 8 0
//     console.log(i);
//   }
// }

// calculateBits(computerRam);
// console.log(bitsString);

// const totalBits = calculateBits(computerRam).toString().length;
// console.log(totalBits);

// let result = ''; // ,000,000,000,000,8

// // 8,000,000,000,000

// const separateNumbers = function (numStr) {

//   for (let i = numStr.length - 1; i >= 0; i -= 3) {
//     result += `,${numStr.slice(i - 3, i)}`
//   }

//   return result;
// }

// separateNumbers(totalBits);

// console.log(result);



// const twitterUser = 'Everyone';
// console.log(`Hi ${twitterUser} welcome to my profile 💖`);

// const info = {
//   fullName: 'Sadee 🧔',
//   recentActivity: 'JS advence consept 📖',
//   work: 'Author of Web Explorer',
//   skills: ['JavaScript', 'CSS3', 'MySQL', 'React', 'Sass', 'Nodejs'],
//   dateOfBirth: '5th september 🍼',
//   hobby: 'coding 💻',
//   followMe: twitterUser === 'Programmer' ? true : false,
// }

// const person = bio => {
//   console.log(`I'm ${bio.fullName}
//   Twitting about my jurney, ${bio.hobby} & ${bio.recentActivity}`);
// }
// person(info);

// const fullName0 = 'tokee';
// const fullName1 = 'sadee';
// console.log(fullName0 > fullName1);

// console.log( 10 < 20 < 30 );
// console.log( 30 > 20 > 60 );

// const bills = [20, 50, 100, 10, 301];
// const tips = [];

// const averageFunc = arr => {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const calcTip = arr[i] * (arr[i] >= 50 && arr[i] <= 300 ? 15: 20) / 100;
//     tips.push(calcTip);
//     sum += tips[i];
//   }
//   return sum / arr.length;
// }
// const billAverage = averageFunc(bills).toFixed(2);
// console.log(tips); // [ 4, 7.5, 15, 2, 60.2 ] 
// console.log(billAverage); // 17.74



let people = 0;
for (let x = 0; x < 10; x++) {
  people += x;
  console.log(``);
}
const myBoi = {
  fullName: 'mohammad sadee',
  birthYear: 1996,
  location: 'Chandpur, Bangladesh',
  calcAge: function(){
    return this.age = 2021 - this.birthYear;
  }
}
myBoi.calcAge();
console.log(myBoi.age)

console.log(`hello world! hello world hello wolrd i'm from bd`);
const personWhoCode = 'sadee';
