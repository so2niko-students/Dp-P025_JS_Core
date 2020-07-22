export class User{
    domUsers = document.querySelector('.users');
    constructor(){
        this.loadUser2();
    }

    loadUser(){
        const aja = new XMLHttpRequest();
        aja.onload = () => {
            console.log(aja.responseText);
        }

        aja.open('GET', 'https://randomuser.me/api/');

        aja.send();
    }

    loadUser2(){
        fetch('https://randomuser.me/api/').then(function(resp){
            return resp.json();
        }).then(data => {
            console.log(data);
            this.renderUser(data.results[0]);
        });
    }

    renderUser(user){
        const { first, last, title } = user.name;

        this.domUsers.innerHTML += `
        <div class="${ user.gender }">
            <img src="${user.picture.large}" alt="user">
            <h3>${ title } ${ first } ${ last }</h3>
        </div>        
        `;
    }
}