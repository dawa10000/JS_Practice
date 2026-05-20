let name = "Anish"
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2, 4))
console.log(name.slice(2))
console.log(name.replace("A", "Ma"))

let a1 = "Ram"
let a2 = "Shyam"
console.log(a1.concat(" is a friend of "), a2, "Ok");

let a3 = "   Lama   "
console.log(a3.trim())

let a4 = "Hello World"
console.log(a4.split(" "))
console.log(a4.split(""))

let fr = "Apple" + "Banana" + "Grapes"
console.log(fr)

//  practice set
let str = "Har\""
console.log(str.length)

const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence `);
console.log(sentence.startsWith("The"))
console.log(sentence.endsWith("dog."))

let str2 = "Please give Rs 1000"
let amount = str2.slice("Please give Rs ".length)
let amount2 = str2.slice(15)
let amount3 = Number.parseInt(str2.slice(15));
console.log(amount)
console.log(amount2)
console.log(typeof (amount3))

let st3 = "Atmesh"
st3[3] = "b"
console.log(st3) // strings are immutable


// Output
// 5
// ANISH
// anish
// is
// ish
// Manish
// Ram is a friend of  Shyam Ok
// Lama
// [ 'Hello', 'World' ]
// [
//   'H', 'e', 'l', 'l',
//   'o', ' ', 'W', 'o',
//   'r', 'l', 'd'
// ]
// AppleBananaGrapes
// 4
// true
// The word "fox" is in the sentence
// true
// true
// 1000
// 1000
// number
// Atmesh