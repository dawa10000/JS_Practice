// Synchronous programming the actions that initiate and finish one by one
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favourite color?");
// console.log(a + " is " + b + "years old and has " + c + "favourite color.");

// Asynchronous actions are the actions that we initiate now and they finish later.
// console.log("Start")
// setTimeout(() => {
//   console.log("hey i am good")
// }, 3000);
// console.log("End")

// A callback function is a function passed as an argument to another function and executed later.
function greet(name, callback) {
  const message = `Hello, ${name}`;
  callback(message)
}

function sayBye(bye) {
  console.log(bye)
}

greet("Shyam", sayBye)



// Callbacks
// function loadScript(src, callback) {
//   var script = document.createElement("script");
//   script.src = src;
//   script.onload = function() {
//     console.log("Loaded script with SRC: " + src)
//     callback(null, src);
//   }
//   script.onerror = function() {
//     console.log("Error loading script with SRC: " + src);
//     callback(new Error("Src got some error"))
//   }
//   document.body.appendChild(script);
// }

// function hello(error, src) {
//   if (error) {
//     console.log(error)
//     return
//   }
//   alert('Hello World!' + src);
// }


// function goodmorning(error, src) {
  
//   if (error) {
//     console.log(error)
//     sendEmergencyMessageToCeo();
//     return
//   }
//   alert('Good morning' + src);
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", goodmorning) 