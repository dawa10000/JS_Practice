// document.getElementById('google').addEventListener('click', function () {
//   window.location = "https://www.google.com";
// })

// document.getElementById('facebook').addEventListener('click', function () {
//   window.location = "https://www.facebook.com";
// })


// document.getElementById('twitter').addEventListener('click', function () {
//   window.location = "https://www.twitter.com";
// })

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.json()
//   return a;
// }

// setInterval(async function () {
//   let url = "https://jsonplaceholder.typicode.com/todos/1"
//   console.log(await fetchContent(url))
// }, 3000)

setInterval(function () {
  document.querySelector("#bulb").classList.toggle("bulb")
}, 300)


