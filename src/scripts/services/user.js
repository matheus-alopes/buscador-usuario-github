import {baseUrl} from "../variables.js";

async function getUser(userNick) {
    const response = await fetch(`${baseUrl}/${userNick}`);

    const responseJson = await response.json();

    return responseJson;
}

export {getUser};