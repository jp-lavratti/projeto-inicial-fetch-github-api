const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    username:'',
    followers:0,
    following:0,
    repositories: [],
    events:[],
    setInfo(gitHubUser){
        this.avatarUrl =  gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.username = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
    },
    setRepositories(gitHubRepositories){
        this.repositories = gitHubRepositories
    },
    setEvents(gitHubEvents){
        this.events = gitHubEvents
    }
}

export {user}