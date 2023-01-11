const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(userInfos) {
        this.userProfile.innerHTML = 
            `<div class = "info">
                <img src="${userInfos.avatarUrl}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${userInfos.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <p>${userInfos.bio ?? "Não possui bio cadastrada 😢"}</p>                                   
                </div>
            </div>`
        
        let repositoriesScreen = "";

        userInfos.repositories.forEach(
            repo => {
                repositoriesScreen += 
                    `<li>
                        <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
                    </li>`
            }
        )

        if (userInfos.repositories.length > 0) {
            this.userProfile.innerHTML +=
                `<div class = "repositories section">
                    <h2>Repositórios</h2>
                    <ul>${repositoriesScreen}</ul>
                </div>`
        }  
    },
    
    renderNotFound() {
        this.userProfile.innerHTML = 
            `<h3>Usuário não encontrado</h3>`
    }          
}

export {screen};