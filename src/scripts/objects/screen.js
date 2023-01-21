const screen = {
    userProfile: document.querySelector(".profile-data"),

    renderUser(userInfos) {
        let followersScreen = "";

        if (userInfos.followers == 0) {
            followersScreen = `<p>Não possui seguidores 😢</p>`;
        } else {
            followersScreen = `<p><span>Seguidores:</span> ${userInfos.followers}.</p>`;
        }
        
        let followingScreen = "";

        if (userInfos.following == 0) {
            followingScreen = `<p>Não segue ninguém 😢</p>`;
        } else {
            followingScreen = `<p><span>Seguindo:</span> ${userInfos.following}.</p>`;
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

                        <footer>
                            <div class="repo-forks">
                                <i class="fa-solid fa-code-fork"></i> 
                                ${repo.forks}
                                <div class="repo-footer-caption forks-caption">Forks</div>
                            </div>         
                            <div class="repo-stars">
                                <i class="fa-solid fa-star"></i> 
                                ${repo.stargazers_count}
                                <div class="repo-footer-caption stars-caption">Stars</div>
                            </div>          
                            <div class="repo-watchers">
                                <i class="fa-solid fa-eye"></i> 
                                ${repo.watchers}
                                <div class="repo-footer-caption watchers-caption">Watching</div>
                            </div>
                            <div class="repo-language">
                                <i class="fa-solid fa-code"></i>
                                ${repo.language}
                                <div class="repo-footer-caption language-caption">Language</div>
                            </div>
                        </footer>
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
        
        let activityScreen = "";

        userInfos.activity.forEach(
            activity => {
                if(activity.type === "PushEvent") {
                    activityScreen += 
                    `<li>
                        <div class="activity-repository-name-container">
                            <p class="activity-repository-name-title">Repositorio:</p>
                            
                            <p class="activity-repository-name">${activity.repositoryName}</p>
                        </div>

                        <div class="activity-container">
                            <p class="activity-title">Atividade:</p>

                            <p class="activity">
                                <span>Evento do tipo "push":</span> <br>
                                <p class="activity-message">${activity.payload.commits[0].message}</p>
                            </p>
                        </div>
                    </li>`
                }

                if(activity.type == "CreateEvent") {
                    activityScreen += 
                    `<li>
                        <div class="activity-repository-name-container">
                            <p class="activity-repository-name-title">Repositorio:</p>
                            
                            ${activity.repositoryName}
                        </div>

                        <div class="activity-container">
                            <p class="activity-title">Atividade:</p>

                            <p class="activity">
                                <span>Evento de criação:</span> <br>
                                ${activity.payload.description}
                            </p>
                        </div>
                    </li>`
                }
            }
        );

        if (userInfos.activity.length > 0) {
            this.userProfile.innerHTML +=
                `<div class = "activity section">
                    <h2>Atividades Recentes</h2>
                    <ul>${activityScreen}</ul>
                </div>`
        };
    },
    
    renderNotFound() {
        this.userProfile.innerHTML = 
            `<h3>Usuário não encontrado</h3>`
    }          
}

export {screen};