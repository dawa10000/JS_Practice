let a1 = "Hello World!"
console.log(a1.split('').reverse().join(''))

const c = {
  name: "Ram"
}

c["age"] = 25
c["name"] = "Shyam"
console.log(c)

// NNSSBBU Null Number String Symbol Boolean Bigint Undefined

let n = 5
for (let i = 1; i <= n; i++) {
  let row = '';
  for (let j = 1; j <= i; j++) {
    row += '*'
  }
  console.log(row)
}

for (let i = 0; i <= 5; i++) {
  console.log(i)
}

let obj = {
  ram: 90,
  shyam: 23,
  hari: 32,
  anil: 20
}

for (let a in obj) {
  console.log(`Marks of ${a} are ${obj[a]}`)
}

for (let b of "som") {
  console.log(b)
}

const fruit = "Apple"
switch (fruit) {
  case "Banana":
    console.log('Bananas are $0.50');
    break;
  case 'Orange':
    console.log('Oranges are $0.70')
    break;
  default:
    console.log('Sorry, we are out of' + fruit)
}

let i = 0
while (i < 3) {
  console.log(i)
  i++
}

let j = 10
do {
  console.log(j)
  j++
} while (j < 3)

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
let a2 = 1
let b2 = 2
let c2 = 3

console.log("Average of a2 and b2 is ", Avg(a2, b2))
console.log("Average of c2 and b2 is ", Avg(c2, b2))
console.log("Average of a2 and c2 is ", Avg(a2, c2))

const sum = (p, q) => {
  return p + q
}
console.log(sum(5, 6))

const hello = () => {
  console.log('Hey how are you?')
  return "hi"
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

// let cn = 43
// let o
// while(o != cn){
//   console.log("try again")
//   o = prompt("Enter a number")
// }
// console.log("You have entered a correct number")

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}
console.log(mean(1, 2, 3, 4))

let fruit1 = 'Bana\'na'
console.log(fruit1)
let fruit2 = 'Bana\nna'
console.log(fruit2)
let fruit3 = 'Gra\rpes'
console.log(fruit3)
let fruit4 = 'Gra\tpes'
console.log(fruit4)

let name = "Anish"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace("A", "Ma"))

let z1 = "Ram"
let z2 = "Shyam"
console.log(z1.concat(" is a friend of "), z2, "Ok");

let a3 = " Lama "
console.log(a3.trim())

let a4 = "Hello World"
console.log(a4.split(" "))
console.log(a4.split(""))

let str = "Har\""
console.log(str.length)

const sentence = "The quick brown fox jumps over the lazy dog."
const word = "fox"
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);
console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("dog."))

let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
let amount2 = str2.slice(15)
let amount3 = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(amount2)
console.log(typeof (amount3))

let st3 = "Atmesh"
st3[3] = "b"
console.log(st3)

let num = [1, 2, 3, 4, 5]
let d = num.toString()
console.log(d)
console.log(typeof (d))
let e = num.join("_")
console.log(e)
let f = num.pop()
console.log(f)
let g = num.push(10)
console.log(num)

let q = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
q.sort();
q.sort((a, b) => a - b); // ascending order
q.sort((a, b) => b - a); // descending order
console.log(q)

let h = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
let deletedval = h.splice(2, 3, 100, 200, 300);
console.log(h)
console.log(deletedval)

let m = [1, 2, 3, 4, 5]
let m1 = m.slice(1, 3);
console.log(m1)

let num1 = [3, 45, 1, 2, 4]
for (let key in num1) {
  console.log(num1[key])
}

let num3 = [1, 2, 3, 4, 5]
for (i = 0; i < num3.length; i++) {
  console.log(num3[i])
}

num3.forEach((element) => {
  console.log(element * element)
})

let name1 = "sachin"
let arrr = Array.from(name1)
console.log(arrr)

for (let n of num3) {
  console.log(n)
}

for (let n in num3) {
  console.log(n)
  console.log(num3[n])
}

let frr = [45, 23, 21]
let x = frr.map((value, index, array) => {
  return value + 1
})
console.log(x)

let frr1 = [45, 2321, 0, 3, 5]
let x1 = frr1.filter((a) => {
  return a < 10
})
console.log(x1, frr1)

let arr4 = [1, 2, 3, 4, 5, 2, 1]
let newarr4 = arr4.reduce((h1, h2) => {
  return h1 + h2
})
console.log(newarr4)

