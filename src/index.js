const searchButton = document.querySelector("body main .container #btn-search");
let userName = document.querySelector("body main .container #input-search").value;

async function user(userNick) {
    const response = await fetch(`https://api.github.com/users/${userNick}`, "Token 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");
    
    const responseJson = await response.json();

    return responseJson;
}

console.log(await user());

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

console.log(userName)

searchButton.addEventListener("click", 
    () => {
        getUserProfile(userName);
    }
)


