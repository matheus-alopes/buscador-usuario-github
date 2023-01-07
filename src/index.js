const searchButton = document.querySelector("body main .container #btn-search");
let userNameInput = document.querySelector("body main .container #input-search");

async function user(userNick) {
    const response = await fetch(`https://api.github.com/users/${userNick}`);

    const responseJson = await response.json();

    return responseJson;
}

async function repos(userNick) {
    const response = await fetch(`https://api.github.com/users/${userNick}/repos`);

    const responseJson = await response.json();

    return responseJson;
}

function getUserProfile(userNick) {
    user(userNick).then(
        userData => {
            let userInfo = 
            `<div class = "info">
                <img src="${userData.avatar_url}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${userData.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <p>${userData.bio ?? "Não possui bio cadastrada 😢"}</p>
                                
                </div>
            </div>`

            document.querySelector(".profile-data").innerHTML = userInfo;
        }
    )
}

function getUserRepositories(userNick) {
    repos(userNick).then(
        reposData => {
            let repositoriesItens = "";

            reposData.forEach(
                repo => {
                    repositoriesItens += `<li>
                                        <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
                                        </li>`
                }
            )

            document.querySelector(".profile-data").innerHTML += 
            `<div class = "repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }
    )
}

searchButton.addEventListener("click", 
    () => {
        getUserProfile(userNameInput.value);
        getUserRepositories(userNameInput.value);
    }
)

userNameInput.addEventListener("keyup", 
    (e) => {
        let key = e.which || e.keyCode;

        const isEnterKeyPressed = key === 13;

        if (isEnterKeyPressed) {
            getUserProfile(userNameInput.value);
            getUserRepositories(userNameInput.value);
        }
    }
)