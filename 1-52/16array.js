let mark_class_12 = [98, 82, 63, 84, null, false, "Not Present"];
console.log(mark_class_12);
console.log(mark_class_12[0]);
console.log(mark_class_12[1]);
console.log(mark_class_12[2]);
console.log(mark_class_12[3]);
console.log(mark_class_12[4]);
console.log(mark_class_12[5]);
console.log(mark_class_12[6]);
console.log(mark_class_12[7]);
console.log(mark_class_12.length);
mark_class_12[0] = 100
console.log(mark_class_12); // arrays are mutable
console.log(typeof (mark_class_12))

for (let i = 0; i < mark_class_12.length; i++) {
  console.log(mark_class_12[i])
}

// output
// [ 98, 82, 63, 84, null, false, 'Not Present' ]
// 98
// 82
// 63
// 84
// null
// false
// Not Present
// undefined
// 7
// [ 100, 82, 63, 84, null, false, 'Not Present' ]
// object
// 100
// 82
// 63
// 84
// null
// false
// Not Present