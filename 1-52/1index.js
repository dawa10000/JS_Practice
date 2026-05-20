let a1 = "Hello World!"
let b1 = a1.split('').reverse().join('')
console.log(b1)

let a = "ram";
let b = 5;
console.log(a + b);

console.log(typeof (a));

const c = {
  "name": "Shyam",
};
c["age"] = 25;
c["name"] = "Shyam Kumar";
console.log(c);

// NNSSBBU Null Number String Symbol Boolean BigInt Undefined 7 data types in JS

//  Type of Operators in JS
// 1. Arithmetic Operators
// 2. Assignment Operators
// 3. Comparison Operators
// 4. Logical Operators
// 5. Bitwise Operators
// 6. Ternary Operators

// Types of variables in JS
// 1. var globally scoped can be re-declared and updated
// 2. let block scoped can be updated but not re-declared
// 3. const block scoped cannot be updated and re-declared


// output
// !dlroW olleH
// ram5
// string
// { name: 'Shyam Kumar', age: 25 }

// 1. Right-Angled Triangle
let n = 5; // Number of rows
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// 2. Inverted Right Triangle
let n1 = 5;
for (let i1 = n1; i1 >= 1; i1--) {
  let row1 = "";
  for (let j1 = 1; j1 <= i1; j1++) {
    row1 += "*";
  }
  console.log(row1);
}

// Full Pyramid
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   // Add spaces
//   let row = " ".repeat(n - i);
//   // Add stars (2*i - 1 ensures an odd number of stars for symmetry)
//   row += "*".repeat(2 * i - 1);
//   console.log(row);
// }

// Square Pattern
// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log("*".repeat(n));
// }


// 1️⃣ No dependency array → runs after EVERY render
useEffect(() => {
  console.log("I run every time the component renders");
});

// 2️⃣ Empty array [] → runs ONCE after the first render (mount)
useEffect(() => {
  console.log("I run only once, when the component mounts");
}, []);

// 3️⃣ With values → runs when those values change
useEffect(() => {
  console.log("I run when userId changes");
}, [userId]);