let x = document.getElementsByTagName('span')[0]
console.log(x)
let y = document.getElementsByTagName('span')[0]
console.dir(y)
console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

first.innerHTML
first.innerHTML = "<i>Hey I a italic</i>" //valid for element nodes only
first.outerHTML
first.outerHTML = "<div>hey</div>"
document.body.firstChild.data
console.log(document.body.textContent)