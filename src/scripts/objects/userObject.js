const userObject = {
    avatarUrl: "",
    name:"",
    bio:"",
    userNick: "",
    repositories: [],
    setInfo(gitHubUserInfos) {
        this.avatarUrl = gitHubUserInfos.avatar_url;
        this.name = gitHubUserInfos.name;
        this.bio = gitHubUserInfos.bio;
        this.userNick = gitHubUserInfos.login;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    }
}

export {userObject};