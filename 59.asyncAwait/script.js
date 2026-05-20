async function harry() {
  let delhiWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("27 Degree")
    }, 2000);
  })

  let bangloreWeather = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("21 Degree")
    }, 4000);
  })

  console.log("Fetching Delhi weather Please wait...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi Weather: " + delhiW)

  console.log("Fetching Banglore weather Please wait...")
  let bangloreW = await bangloreWeather
  console.log("Fetched Banglore Weather: " + bangloreW)
  return [delhiW, bangloreW]
}

const cherry = async () => {
  console.log("Hey I am cherry and I am waiting ")
}

const main1 = async () => {
  console.log("Welcome to weather control room")
  let a = await harry()
  let b = await cherry()
}
main1()

