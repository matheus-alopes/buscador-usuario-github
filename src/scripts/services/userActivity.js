import {baseUrl, activitiesQuantity} from "../variables.js";

async function getUserActivity(userNick) {
    const activityResponse = await fetch(`${baseUrl}/${userNick}/events?per_page=${activitiesQuantity}`);

    const activityResponseJson = await activityResponse.json();

    for(let i = 0; i < activityResponseJson.length; i++) {
        let repoUrl = await fetch(activityResponseJson[i].repo.url);

        let repoUrlJson = await repoUrl.json();
        let repoName = repoUrlJson.name

        activityResponseJson[i].repositoryName = repoName; 
    }

    return activityResponseJson;
}

export {getUserActivity};