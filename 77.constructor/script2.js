class RailwayForm {
  constructor(givenname, trainno, address) {
    console.log("Constructor called..." + givenname + ' ' + trainno + ' ' + address)
    this.name = givenname
    this.trainno = trainno
    this.address = address
  }
  preview() {
    alert(this.name + ": preview for train no" + this.trainno + "and" + this.address)
  }
  submit() {
    alert(this.name + ": form submitted for train no" + this.trainno)
  }
  cancel() {
    alert(this.name + ": This form is cancelled for train no" + this.trainno)
    this.trainno = 0
  }

}

let anishForm = new RailwayForm("anish", 324234, "tokha")
anishForm.preview()
anishForm.submit()
anishForm.cancel()
anishForm.preview()