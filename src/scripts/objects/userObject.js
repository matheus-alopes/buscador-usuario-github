const userObject = {
    avatarUrl: "",
    name:"",
    bio:"",
    userNick: "",
    followers:"",
    following:"",
    repositories: [],
    setInfo(gitHubUserInfos) {
        this.avatarUrl = gitHubUserInfos.avatar_url;
        this.name = gitHubUserInfos.name;
        this.bio = gitHubUserInfos.bio;
        this.userNick = gitHubUserInfos.login;
        this.followers = gitHubUserInfos.followers;
        this.following = gitHubUserInfos.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    }
}

export {userObject};