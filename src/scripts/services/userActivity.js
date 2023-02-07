import {baseUrl, maxItems} from "../variables.js";

async function getUserActivity(userNick) {
    const activityResponse = await fetch(`${baseUrl}/${userNick}/events?per_page=${maxItems}`);

    const activityResponseJson = await activityResponse.json();

    for(let i = 0; i < activityResponseJson.length; i++) {
        // activityResponseJson[i].description = activityResponseJson[i].payload.commits[0].message;

        let repoUrl = await fetch(activityResponseJson[i].repo.url);
        let repoUrlJson = await repoUrl.json();

        let repoName = repoUrlJson.name
        activityResponseJson[i].repositoryName = repoName;

        if(repoUrlJson.message == "Not Found") {
            activityResponseJson[i].repositoryName = activityResponseJson[i].repo.name;
        }
    }

    return activityResponseJson;
}

export {getUserActivity};