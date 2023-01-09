const userObject = {
    avatartUrl: "",
    name:"",
    bio:"",
    userNick: "",
    repositories: [],
    setInfo(gitHubUserInfos) {
        this.avatartUrl = gitHubUserInfos.avatart_url;
        this.name = gitHubUserInfos.name;
        this.bio = gitHubUserInfos.bio;
        this.userNick = gitHubUserInfos.login;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    }
}

export {userObject};