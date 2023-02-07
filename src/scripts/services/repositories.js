import { baseUrl, maxItems} from "../variables.js";

async function getRepositories(userNick) {
    const response = await fetch(`${baseUrl}/${userNick}/repos?per_page=${maxItems}`);

    const responseJson = await response.json();

    return responseJson;
}

export {getRepositories};