$(document).ready(function() {
    const github = "https://api.github.com/users/ThiagoBrrit";

    const nameelement = document.querySelector('#nome');
    const usernameelement = document.querySelector('#username');
    const avatarelement = document.querySelector('#avatar');
    const repositorioelement = document.querySelector('#repositorios');
    const seguidoreselement = document.querySelector('#Seguidores');
    const seguindoelement = document.querySelector('#seguindo');
    const linkelement = document.querySelector('#link');

    fetch(github)
    .then(function(resposta) {
        return resposta.json();
    })
    .then(function(json) {
        nameelement.innerText = json.name;
        usernameelement.innerText = json.login;
        avatarelement.src = json.avatar_url;
        seguindoelement.innerText = json.following;
        seguidoreselement.innerText = json.followers;
        repositorioelement.innerText = json.public_repos;
        linkelement.href = json.html_url;
    })
})