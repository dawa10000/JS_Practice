
let x = function (e) {
  console.log(event.target)
  console.log(event.type, event.clientX, event.clientY)
  alert("Hello World1!")
}
let y = function (e) {
  alert("Hello World2!")
}

btn.addEventListener('click', x)

btn.addEventListener('click', y)

let a = prompt("What is your favourite number?");
if (a == "2") {
  btn.removeEventListener('click', x)
}