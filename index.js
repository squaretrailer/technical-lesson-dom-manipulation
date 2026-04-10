// Write your code here!

// STep 1
const userInfo = {
    username: "flatUser123",
    description: "Hi, welcome to my webpage! Just a new user of this website!",
    theme: "red"
}

function displayUser(userInfo){
    const header = document.querySelector("#main")
    header.textContent = userInfo.username + "'s Personal Webpage"
    header.className = userInfo.theme

    const description = document.createElement("p")
    const body = document.querySelector("body")

   body.append(description)
}

displayUser(userInfo)

