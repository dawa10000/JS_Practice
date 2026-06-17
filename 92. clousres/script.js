message = "Good Global"
function hello1() {
  let message = "good morning"

  message = "good afternoon"
  console.log("Hello 1" + message)

  let c = function hello2() {
    console.log("I am c" + message)
  }
  return c
}
c = hello1()
c()


function init() {
  var name = "Mozilla" // name is a local variable created by init
  function displayName() {
    // displayName is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Harry"
  return displayName;
}
let d = init();
d()


function returnFunc() {
  const x = () => {
    let a = 1
    console.log(a)
    const y = () => {
      console.log(a)

      const z = () => {
        console.log(a)
      }
      z()
    }
    a = 999
    y()
  }
  return x
}

let w = returnFunc()
w()