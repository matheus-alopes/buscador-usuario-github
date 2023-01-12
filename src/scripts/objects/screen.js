const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(userInfos) {
        let followersScreen = "";

        if (userInfos.followers == 0) {
            followersScreen = `<p>Não possui seguidores 😢</p>`;
        } else {
            followersScreen = `<p><span>Seguidores:</span> ${userInfos.followers}`;
        }
        
        let followingScreen = "";

        if (userInfos.following == 0) {
            followingScreen = `<p>Não segue ninguém 😢</p>`;
        } else {
            followingScreen = `<p><span>Seguindo:</span> ${userInfos.following}</p>`;
        }

        this.userProfile.innerHTML = 
            `<div class = "info">
                <img src="${userInfos.avatarUrl}" alt="Foto de perfil do usuário" />
                <div class="data">
                    <h1>${userInfos.name ?? "Não possui nome cadastrado 😢"}</h1>
                    <h3>Nick: ${userInfos.nick}</h3>
                    <p class="bio">${userInfos.bio ?? "Não possui bio cadastrada 😢"}</p>
                    <div class="followers-container">
                        ${followersScreen}
                        ${followingScreen}    
                    </div>
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