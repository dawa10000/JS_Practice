let num = [3, 54, 1, 2, 4]
// for (i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

num.forEach((element) => {
  console.log(element * element)
})

// arrary.from
let name = "sachin"
let arr = Array.from(name)
console.log(arr)

//  for...of
for (let i of num) {
  console.log(i)
}

// for..in
for (let i in num) {
  console.log(i)
  console.log(num[i])
}

// output
// 9
// 2916
// 1
// 4
// 16
// [ 's', 'a', 'c', 'h', 'i', 'n' ]
// 3
// 54
// 1
// 2
// 4
// 0
// 3
// 1
// 54
// 2
// 1
// 3
// 2
// 4
// 4
