let num = [1, 2, 3, 4, 5];
let b = num.toString();
console.log(b)
console.log(typeof (b))
let c = num.join("_");
console.log(c)
let r = num.pop();
console.log(num)
console.log(r)
let s = num.push(10);
console.log(num)
let z = num.shift();
console.log(z, num)
let m = num.unshift(12);
console.log(m, num)

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let a2 = [12, 23, 32, 42, 51, 62, 73, 83, 19, 20];
let a3 = ['ram', 'shyam'];
delete a[0]
console.log(a)
console.log(a.length)
let a4 = a1.concat(a2, a3);
console.log(a4)

// sort
let q = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
q.sort();
q.sort((a, b) => a - b); // ascending order
q.sort((a, b) => b - a); // descending order
console.log(q)

let compare = (a, b) => {
  return a - b; // ascending order
  // reutrn b - a descending order
}
let b1 = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
b1.sort(compare);
console.log(b1)

let g = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
g.reverse();
console.log(g)

// splice and slice
let h = [11, 22, 33, 44, 99, 55, 66, 77, 229, 551];
let deletedval = h.splice(2, 3, 100, 200, 300);
console.log(h)
console.log(deletedval)

let i = [1, 2, 3, 4, 5]
let i1 = i.slice(1, 3);
console.log(i1)



// output
// 1,2,3,4,5
// string
// 1_2_3_4_5
// [ 1, 2, 3, 4 ]
// 5
// [ 1, 2, 3, 4, 10 ]
// 1 [ 2, 3, 4, 10 ]
// 5 [ 12, 2, 3, 4, 10 ]
// [ <1 empty item>, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
// 10
// [
//   1,     2,       3,  4,
//   5,     6,       7,  8,
//   9,     10,      12, 23,
//   32,    42,      51, 62,
//   73,    83,      19, 20,
//   'ram', 'shyam'
// ]
// [
//   551, 229, 99, 77, 66,
//    55,  44, 33, 22, 11
// ]
// [
//   11, 22, 33,  44,  55,
//   66, 77, 99, 229, 551
// ]
// [
//   551, 229, 77, 66, 55,
//    99,  44, 33, 22, 11
// ]
// [
//    11,  22, 100, 200,
//   300,  55,  66,  77,
//   229, 551
// ]
// [ 33, 44, 99 ]
// [ 2, 3 ]