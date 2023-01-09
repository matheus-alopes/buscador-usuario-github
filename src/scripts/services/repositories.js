import { baseUrl, repositoriesQuantity} from "../variables.js";

async function getRepositories(userNick) {
    const response = await fetch(`${baseUrl}/${userNick}/repos?per_page=${repositoriesQuantity}`);

    const responseJson = await response.json();

    return responseJson;
}

export {getRepositories};