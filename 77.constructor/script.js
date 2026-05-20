class RailwayForm {
  constructor(givenname, trainno) {
    console.log("Constructor called..." + givenname + '' + trainno)
    this.name = givenname
    this.trainno = trainno
  }
  submit() {
    alert(this.name + ": form submitted for train no" + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train no" + this.trainno)
  }

}

let anishForm = new RailwayForm("Anish", 5645645)
// anishForm.fill("Anish", 5645645)

let raviForm = new RailwayForm("Ravi", 12211)
let raviForm2 = new RailwayForm("Ravi", 12211420)

// raviForm.fill("Ravi", 12211)
// raviForm2.fill("Ravi", 12211420)

anishForm.submit()
raviForm.submit()
raviForm2.submit()
raviForm.cancel()