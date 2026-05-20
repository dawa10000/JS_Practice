// let num = [1, 2, 3, 4, 5]
// let n = prompt("enter a new number")
// n = Number.parseInt(n)
// num.push(n)
// console.log(num)

// while (n != 0) {
//   n = prompt("enter number until 0")
// }
// console.log("number is 0")


// let num = [100, 25, 30, 45, 50]
// let n
// do {
//   n = prompt("enter a new number")
//   n = Number.parseInt(n)
//   num.push(n)
// } while (n != 0) 
//   console.log(num)



let arr = [100, 25, 30, 45, 50]
let arr1 = arr.filter((a) => {
  return a % 10 == 0;
})
console.log(arr1)

let art = [100, 25, 30, 45, 50]
let art1 = art.map((x) => {
  return x * x;
})
console.log(art1)

let red = [1, 2, 3, 4]
let red1 = red.reduce((x1, x2) => {
  return x1 * x2;
})
console.log(red1)

