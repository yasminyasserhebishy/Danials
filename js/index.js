// -----------------------1-----------------------------
// var num = Number(window.prompt('please enter number'))
// console.log(num)

// -----------------------2-----------------------------
// var num = Number(window.prompt("please enter number"));

// if (num % 3 == 0 && num % 4 == 0) {
//     console.log('yes');
    
// }
// else
// {
//     console.log('no');
//     }

// -----------------------3-----------------------------

// var num1 = Number(window.prompt("please enter first number"));
// var num2 = Number(window.prompt("please enter second number"));

// if (num1 > num2) {
//     console.log(num1);
    
// }
// else if (num1 < num2) {
//     console.log(num2);
// }
// else {
//     console.log('Both numbers are equal');
// }

// -----------------------4-----------------------------

// var num = Number(window.prompt("please enter number"));

// if (num < 0) {
//     console.log('negative');
    
// }
// else {
//     console.log('positive');
// }

// -----------------------5-----------------------------

// var num1 = Number(window.prompt("please enter first number"));
// var num2 = Number(window.prompt("please enter second number"));
// var num3 = Number(window.prompt("please enter third number"));

// if (num1 > num2 && num1>num3 ) {
//     console.log('max element =' + num1);
//     if (num2 > num3) {
//         console.log('min element =' + num3);
//     } else {
//         console.log('min element =' + num2);
//     }
//     }
// else if (num2 > num1 && num2 > num3) {
//     console.log("max element =" + num2);
//      if (num1 > num3) {
//        console.log("min element =" + num3);
//      } else {
//        console.log("min element =" + num1);
//      }
// } else {
//     console.log("max element =" + num3);
//      if (num1 > num2) {
//        console.log("min element =" + num2);
//      } else {
//        console.log("min element =" + num1);
//      }
// }

// -----------------------6-----------------------------
// var num = Number(window.prompt("please enter number"));

// if (num % 2 == 0) {
//     console.log('even');
    
// }
// else
// {
//     console.log('odd');
//     }

// -----------------------7-----------------------------
// var c = window.prompt("please enter character");

// if (
//   c == "a" ||
//   c == "e" ||
//   c == "i" ||
//   c == "o" ||
//   c == "u" ||
//   c == "A" ||
//   c == "E" ||
//   c == "I" ||
//   c == "O" ||
//   c == "U"
// ) {
//   console.log("vowel");
// }
// else {
//       console.log('consonant');
//   }

// -----------------------8-----------------------------

// var num = Number(window.prompt('please enter number'))

// for (let i = 1; i <= num; i++) {
//     console.log(i);
// }

// -----------------------9-----------------------------

// var num = Number(window.prompt('please enter number'))
// let sum = 0

// for (let i = 1; i <= 12; i++) {
//     sum += num;
//     console.log(sum);
    
// }

// -----------------------10-----------------------------
// var num = Number(window.prompt('please enter number'))

// for (let i = 1; i <= num; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// -----------------------11-----------------------------
// var num1 = Number(window.prompt('please enter number1'))
// var num2 = Number(window.prompt('please enter number2'))

// console.log(num1 ** num2);

// -----------------------12-----------------------------
// totalMarks = 0

// for (let i = 1; i <= 5; i++) {
//     var mark = Number(window.prompt("please enter mark" + i));
//     totalMarks += mark;
// }
// averageMarks = totalMarks / 5
// percentage = (totalMarks / 500) * 100
//  console.log('totalMarks = ' + totalMarks);
// console.log("averageMarks = " + averageMarks);
// console.log("percentage = " + percentage);

// -----------------------13-----------------------------

// var monthNumber = Number(window.prompt('please enter month number'))

// if (monthNumber == 2) {
//     console.log('Days in Month:28');
    
// }
// else if (
//   monthNumber == 1 ||
//   monthNumber == 3 ||
//   monthNumber == 5 ||
//   monthNumber == 7 ||
//   monthNumber == 8 ||
//   monthNumber == 10 ||
//   monthNumber == 12
// ) {
//   console.log("Days in Month:31");
// } else if (
//   monthNumber == 4 ||
//   monthNumber == 6 ||
//   monthNumber == 9 ||
//   monthNumber == 11
// ) {
//   console.log("Days in Month:30");
// } else {
//     console.log("it is not a month");
    
// }

// -----------------------14-----------------------------
// totalMarks =0
// for (let i = 1; i <= 5; i++) {
//     var mark = Number(window.prompt("please enter mark of subject" + i));
//    totalMarks += mark
// }
// Percentage = (totalMarks / 500) * 100;
// console.log("percentage: " + Percentage);
 
//  if (Percentage >= 90) {
//    console.log("Grade A");
//  } else if (Percentage >= 80) {
//    console.log("Grade B");
//  } else if (Percentage >= 70) {
//    console.log("Grade C");
//  } else if (Percentage >= 60) {
//    console.log("Grade D");
//  } else if (Percentage >= 40) {
//    console.log("Grade E");
//  } else {
//    console.log("Grade F");
//  }

 // -----------------------Using switch case-----------------------------
// -----------------------15-----------------------------







// var num1 = Number(window.prompt('enter num1'))
// var num2 = Number(window.prompt('enter num2'))

// console.log(num1+num2);
// console.log(num1 != num2);

// //first false //last true
// console.log(num1 && num2);
// console.log(undefined && num1 && null);
// //first true //last false
// console.log(num1 || true ||'yasmin');

// var language = 'html';

// if (language == 'html') {
//     console.log('You are learning HTML');
// } else if (language == 'nodejs') {
//     console.log('You are learning Node.js');
// }
// else {
//     console.log('You are learning something else');
// }

// var lang = 'nodejs'


// switch (lang) { 
//     case 'js':
//         console.log('You are learning js');
//         break;
//     case 'php':
//         console.log('You are learning php');
//         break;
//     default:
//         console.log('You are learning something else');
//         break;
// }