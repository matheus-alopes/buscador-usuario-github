import { getUser } from "./services/user.js";
import { getRepositories } from "./services/repositories.js";
import { getUserActivity} from "./services/userActivity.js";
import { userObject } from "./objects/userObject.js";
import { screen } from "./objects/screen.js";

const searchButton = document.querySelector("body main .container #btn-search");
const userNameInput = document.querySelector("body main .container #input-search");

async function getUserProfile(userNick) {
    const userResponse = await getUser(userNick);

    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }

    userObject.setInfo(userResponse);

    const repositoriesResponse = await getRepositories(userNick);
    userObject.setRepositories(repositoriesResponse);

    const userActivityResponse = await getUserActivity(userNick);
    userObject.setActivity(userActivityResponse);

    console.log(userObject);

    screen.renderUser(userObject);

    // criando objetos para as caixas de informações dos repositórios
    const repositorieForksSign = {
        elementContainer: document.querySelectorAll(".repo-forks"),
        captions: document.querySelectorAll(".forks-caption")
    }

    const repositorieStarsSign = {
        elementContainer: document.querySelectorAll(".repo-stars"),
        captions: document.querySelectorAll(".stars-caption")
    }

    const repositorieWatchersSign = {
        elementContainer: document.querySelectorAll(".repo-watchers"),
        captions: document.querySelectorAll(".watchers-caption")
    }

    const repositorieLanguageSign = {
        elementContainer: document.querySelectorAll(".repo-language"),
        captions: document.querySelectorAll(".language-caption")
    }

    // funcão para mostrar a legenda das informações dos repsitórios, como se fosse um hover
    function showCaption(RepositorieInfosContainer) {
        for(let i = 0; i < RepositorieInfosContainer.elementContainer.length; i++) {
            RepositorieInfosContainer.elementContainer[i].addEventListener("mouseover",
                () => {
                   RepositorieInfosContainer.captions[i].style.opacity = "1"
                }
            )
        }

        for(let i = 0; i < RepositorieInfosContainer.elementContainer.length; i++) {
            RepositorieInfosContainer.elementContainer[i].addEventListener("mouseout",
                () => {
                   RepositorieInfosContainer.captions[i].style.opacity = "0"
                }
            )
        }
    }

    showCaption(repositorieForksSign);
    showCaption(repositorieStarsSign);
    showCaption(repositorieWatchersSign);
    showCaption(repositorieLanguageSign);

    return
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