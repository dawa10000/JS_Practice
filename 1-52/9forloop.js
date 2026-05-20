// Loops in JS
// 1. for loop
// 2. while loop
// 3. do while loop


for (let i = 0; i <= 5; i++) {
  console.log(i)
}

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  shivansh: 78,
}

// for in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}

// for of loop
for (let b of "harry") {
  console.log(b)
}

const fruit = 'Apple';

switch (fruit) {
  case 'Banana':
    console.log('Bananas are $0.50/lb.');
    break;
  case 'Apple':
    console.log('Apples are $0.75/lb.');
    break;
  default:
    console.log('Sorry, we are out of ' + fruit + '.');
}

// output
// 0
// 1
// 2
// 3
// 4
// 5
// Marks of harry are 90
// Marks of shubh are 45
// Marks of shivika are 56
// Marks of shivansh are 78
// h
// a
// r
// r
// y
// Apples are $0.75/lb.

