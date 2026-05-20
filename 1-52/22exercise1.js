// Guess the correct number
let a = Math.floor(Math.random() * 100) + 1;
a = Number.parseInt(a)
let inp;
let score = 100

while (inp != a) {
  score = score - 1;
  inp = Number.parseInt(prompt("Enter the Number (1-100): "));
  if (inp == a) {
    console.log("Congratulation! You guess the correct number.", a)
    console.log(`You guess the actual number in ${100 - score} chances.`)
  }
  else if (inp > a && inp < 100) {
    console.log("Your number is greater than actual number.")
  }
  else if (inp < a && inp > 0) {
    console.log("Your number is smaller than the actual number")
  }
  else {
    console.log("Enter number between 1 to 100")
  }
}