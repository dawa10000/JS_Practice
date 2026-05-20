
function Avg(x, y) {
  console.log("done");
  return Math.round((x + y) / 2);
}

let a = 1;
let b = 2;
let c = 3;

console.log("Average of a and b is", Avg(a, b))
console.log("Average of b and c is", Avg(c, b))
console.log("Average of a and c is", Avg(a, c))

const sum = (p, q) => {
  return p + q;
}
console.log(sum(5, 6))

const hello = () => {
  console.log('Hey how ar you?')
  return "hi"
}

hello()
let v = hello()
console.log(v)

// output
// done
// Average of a and b is 2
// done
// Average of b and c is 3
// done
// Average of a and c is 2
// 11
// Hey how ar you?
// Hey how ar you?
// hi
