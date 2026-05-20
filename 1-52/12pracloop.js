let marks = {
  harry: 90,
  ram: 9,
  monika: 80,
  shyam: 70,
}

for (let i = 0; i < Object.keys(marks).length; i++) {
  console.log("The marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

for (let key in marks) {
  console.log("The marks of " + key + " are " + marks[key])
}

// let cn = 43
// let i
// while (i != cn){
// console.log("try again")
//   i = prompt("Enter a number")
// }
// console.log("You have entered a correct number")

const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4
}

console.log(mean(1, 2, 3, 4))

// output
// The marks of harry are 90
// The marks of ram are 9
// The marks of monika are 80
// The marks of shyam are 70
// The marks of harry are 90
// The marks of ram are 9
// The marks of monika are 80
// The marks of shyam are 70
// 2.5