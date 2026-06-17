const sayHello = (name, greeting) => console.log(greeting + "" + name)

const x = {
  name: "Harry",
  role: "Js developer",
  exp: 30,
  show: function () {
    // let that = this
    // console.log(this)
    setTimeout(() => {
      console.log(`The name is ${this.name}\nThe role is ${this.role}`)
    }, 2000);
  }
}

// sayHello("Harry", "Good afternoon")
// console.log(x.name, x.exp)
x.show()