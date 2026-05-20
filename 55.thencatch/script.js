let p1 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
    // console.log("I am promise and I am resolved")
    resolve(true)
  }, 2000);
})

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending")
  setTimeout(() => {
    // console.log("I am promise and I am rejected")
    reject(new Error("I am an error"))
  }, 2000);
})
p1.then((value) => {
  console.log(value)
})

// p2.catch((error) => {
//   console.log("Some error occured in p2")
// })


p2.then((value) => {
  console.log(value)
}, (error) => {
  console.log(error)
})
