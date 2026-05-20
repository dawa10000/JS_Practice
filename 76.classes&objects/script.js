class RailwayForm {
  submit() {
    alert(this.name + ": form submitted for train no" + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train no" + this.trainno)
  }
  fill(givenname, trainno) {
    this.name = givenname
    this.trainno = trainno
  }
}

let anishForm = new RailwayForm()
anishForm.fill("Anish", 5645645)
let raviForm = new RailwayForm()
let raviForm2 = new RailwayForm()
raviForm.fill("Ravi", 12211)
raviForm2.fill("Ravi", 12211420)
anishForm.submit()
raviForm.submit()
raviForm2.submit()
raviForm.cancel()