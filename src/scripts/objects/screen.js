
const screen={
    userProfile:document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                        <img src=${user.avatarUrl} alt="foto de perfil do usuario"/>
                                     <div class="data">
                                        <h1>${user.name ?? "Não possui nome cadastrado"}</h1>
                                        <p>${user.bio ?? "Não possui bio cadastrada"}</p>
                                        <p>Seguidores:  ${user.followers}</p>
                                        <p>Seguindo:  ${user.following}</p>
                                    </div></div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => {
        if(repo.language){
            repositoriesItens+=`<li><a href=${repo.html_url} target="_blank">${repo.name}/⭐${repo.stargazers_count}/🍴${repo.forks}/👀${repo.watchers}/💻${repo.language}</li>`}
        else{
            repositoriesItens+=`<li><a href=${repo.html_url} target="_blank">${repo.name}/⭐${repo.stargazers_count}/🍴${repo.forks}/👀${repo.watchers}</li>`
        }})
        if (user.repositories.length>0){
            this.userProfile.innerHTML+=`<div class="repositories section"><h2>Repositorios</h2><ul>${repositoriesItens}</ul></div>`
        }
        let eventsList = ''
        user.events.forEach(event=>{
            if(event.type==="CreateEvent"||event.type === "PushEvent"){
                if(event.type==="PushEvent"){
                    eventsList+=`<li><p>${event.repo.name}-----${event.payload.commits[0].message}</p></li>`
                }else{
                    eventsList+=`<li><p>${event.repo.name}</p></li>`
                }
            }
        })
        if (user.events.length>0){
            this.userProfile.innerHTML+=`<div class="section"> <h2>Eventos</h2> <ul>${eventsList}</ul></div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML='<h1>User not found</h1>'
    }
}
export{screen}