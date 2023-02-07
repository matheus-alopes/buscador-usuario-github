const userObject = {
    avatarUrl: "",
    name:"",
    nick:"",
    bio:"",
    userNick: "",
    followers: 0,
    following: 0,
    repositories: [],
    activity: [],
    setInfo(gitHubUserInfos) {
        this.avatarUrl = gitHubUserInfos.avatar_url;
        this.name = gitHubUserInfos.name;
        this.nick = gitHubUserInfos.login;
        this.bio = gitHubUserInfos.bio;
        this.followers = gitHubUserInfos.followers;
        this.following = gitHubUserInfos.following;
    },
    setRepositories(repositories) {
        this.repositories = repositories;
    },
    setActivity(activities) {
        this.activity = activities;
    }
}

export {userObject};