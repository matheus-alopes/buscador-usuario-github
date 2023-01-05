const searchButton = document.querySelector("body main .container #btn-search");
let userNameInput = document.querySelector("body main .container #input-search");

async function user(userNick) {
    const response = await fetch(`https://api.github.com/users/${userNick}`);

    const responseJson = await response.json();

    return responseJson;
}

function getUserProfile(userNick) {
    user(userNick).then(
        userData => {
            let userInfo = `<img src="${userData.avatar_url}" alt="Foto de perfil do usuário" />
                            <div class="data">
                                <h1>${userData.name ?? "Não possui nome cadastrado 😢"}</h1>
                                <p>${userData.bio ?? "Não possui bio cadastrada 😢"}</p>
                                
                            </div>`

            document.querySelector(".profile-data").innerHTML = userInfo;
        }
    )
}

searchButton.addEventListener("click", 
    () => {
        getUserProfile(userNameInput.value);
    }
)