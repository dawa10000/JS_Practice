for (let i = 1; i <= 5; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*'
  }
  console.log(row)
}

let a = "Hello World!"
console.log(a.split('').reverse().join(''))

const b = {
  name: "ram"
}
b["age"] = 22
console.log(b)

for (let i = 0; i <= 10; i++) {
  console.log(i)
}

let obj = {
  ram: 34,
  shyam: 23,
  hari: 21,
  anil: 20
}

for (let i in obj) {
  console.log(`Marks of ${i} are ${obj[i]}`)
}

for (let b of 'sammy') {
  console.log(b)
}

const fruit = "Banana"
switch (fruit) {
  case "Banana":
    console.log("Bananas are 90");
    break;
  case "Orange":
    console.log("Oranges are 100");
    break;
  default:
    console.log('Sorry, we are out of' + fruit)
}

let i = 0
while (i < 5) {
  console.log(i)
  i++
}

// let n = prompt("Enter value of n")
// n = Number.parseInt(n)
// let p = 0
// while (p < n) {
//   console.log(p)
//   p++
// }

function Avg(x, y) {
  console.log("done")
  return Math.round((x + y) / 2)
}
let a1 = 1
let b1 = 2
let c1 = 3
console.log("Average of a1 and b1 is ", Avg(a1, b1))
console.log("Average of a1 and c1 is ", Avg(a1, c1))
console.log("Average of b1 and c1 is ", Avg(b1, c1))

const sum = (a, b) => {
  return a + b
}
console.log(sum(2, 3))

const hello = () => {
  console.log("Hey how are you?")
  return 'hi'
}
hello()
let v = hello()
console.log(v)

let marks = {
  hari: 12,
  ram: 21,
  mon: 22,
  shyam: 14
}
for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log(`The marks of ${Object.keys(marks)[i]} are ${marks[Object.keys(marks)[i]]}`)
}

for (let key in marks) {
  console.log(`The marks of ${key} are ${marks[key]}`)
}

// let n1=43
// let o
// while(0!=n1){
//   console.log("try again")
//   o=prompt("Enter a number")
// }
// console.log("You have entered a correct number")

let fruit1 = 'Bana\'na'
console.log(fruit1)
let fruit2 = 'Bana\nna'
console.log(fruit2)
let fruit3 = "Gra\rpes"
console.log(fruit3)
let fruit4 = 'Gra\tpes'
console.log(fruit4)

const sentence = "The quick brown fox jumps over the lazy dog."
const word = "fox"
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);
console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("dog."))