document.write("Hello")

const sum = (a, b, c) => {
  console.log("Yes I am running " + (a + b + c));
  a + b + c
}

setTimeout(sum, 1000, 1, 2, 7)

// setInterval(function () {
//   alert("setinterval")
// }, 3000)

// let a = setTimeout(function () {
//   alert("I am inside the setTimeout")
// }, 5000)
// let b = prompt("Do you wan to run the settimeout?")
// if ("n" == b) {
//   clearTimeout(a)
// }

// console.log(a)