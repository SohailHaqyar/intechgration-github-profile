const axios = require("axios")
const baseUrl = "https://api.github.com/users/"
const prompt = require("prompt-sync")({})
const profilename = prompt("What Github profile should I search? ")
axios
  .get(baseUrl + profilename)
  .then((res) => {
    printPretty(res.data)
  })
  .catch((error) => {
    if (error.message.includes("404")) {
      console.log("No user with such username found! :( ")
    } else {
      console.log("PROBLEM!!!!!")
    }
  })

function printPretty(profileData) {
  console.log("Name: ", profileData.name || profileData.login)
  console.log("Number of repos: ", profileData.public_repos)
  console.log("Followers: ", profileData.followers)
  console.log("Bio:", profileData.bio)
  console.log("Following: ", profileData.following)
}
