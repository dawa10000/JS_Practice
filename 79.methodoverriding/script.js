class Employee {
  constructor(name) {
    console.log(name + " Employee's constructor is here")
    this.name = name
  }
  login() {
    console.log(`Employee has logged in`);
  }

  logout() {
    console.log(`Employee has logged out`)
  }

  requestLeaves(leaves) {
    console.log(`Employee has requested ${leaves}leaves`)
  }
}

class Programmer extends Employee {
  constructor(name) {
    super(name)
    console.log(name + " Programmer's constructor is here")
    this.name = name
  }
  // constructor(...args){
  //   super(...args)
  // }
  requestCoffee(x) {
    console.log(`Employee has requested ${x} coffees`)
  }
  requestLeaves(leaves) {
    super.requestLeaves(4)
    console.log("One extra is granted")
    // console.log(`Employee has requested ${leaves + 1} leaves (one extra)`)
  }
}

let e = new Programmer("Anil")
e.login()
e.requestLeaves(3)