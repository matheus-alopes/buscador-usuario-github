import { getUser } from "./scripts/services/user.js";
import { getRepositories } from "./scripts/services/repositories.js";
import { userObject } from "./scripts/objects/userObject.js";
import { screen } from "./scripts/objects/screen.js";

const searchButton = document.querySelector("body main .container #btn-search");
const userNameInput = document.querySelector("body main .container #input-search");

async function getUserProfile(userNick) {
    const userResponse = await getUser(userNick);
    console.log(userResponse);
    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }

    const repositoriesResponse = await getRepositories(userNick);

    userObject.setInfo(userResponse);
    userObject.setRepositories(repositoriesResponse);

    screen.renderUser(userObject);
}

function validateEmptyInput(userInput) {
    if (userInput.value.length === 0) {
        alert("Preencha o campo com o nome do usuário");

        return true;
    }
}

searchButton.addEventListener("click", 
    () => {
        if (validateEmptyInput(userNameInput)) {
            return;
        }
            
        getUserProfile(userNameInput.value);
    }
)

userNameInput.addEventListener("keyup", 
    (e) => {
        let key = e.which || e.keyCode;

        const isEnterKeyPressed = key === 13;

        if (isEnterKeyPressed) {
            if (validateEmptyInput(userNameInput)) {
                return;
            }
                
            getUserProfile(userNameInput.value);
        }
    }
)