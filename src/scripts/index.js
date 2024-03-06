import {getUser} from "./services/user.js"
import {getRepositories} from "./services/repositories.js"
import {getEvents} from "./services/events.js"
import {user} from "./objects/user.js"
import {screen} from "./objects/screen.js"
document
  .getElementById("btn-search")
  .addEventListener("click", async function () {
    const userName = document.querySelector("#input-search").value;
    if(validateInput(userName)==false) return
    getUserData(userName)
  })
document.querySelector("#input-search").addEventListener("keyup", (e) => {
  const userName = e.target.value;
  const key = e.which || e.keyCode;
  const isEnterKeyPressed = key === 13;
  if (isEnterKeyPressed) {
    if(validateInput(userName)==false) return
    getUserData(userName)
  }
})
function validateInput(userName){
    if(userName.length===0){
        alert("Preencha o campo com o nome do usuário no GitHub")
        return false
}}
async function getUserData(userName) {
    const userResponse = await getUser(userName)
    const repositoriesResponse = await getRepositories(userName)
    const eventsResponse = await getEvents(userName)
    if(userResponse.message === "Not Found"){
      screen.renderNotFound()
      return
    }
    user.setEvents(eventsResponse)
    user.setInfo(userResponse)
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
}
