export default class Opinion{
    chatID = -186554842;
    apiKey = '946549389:AAHYYu-BlnKriHEpiNlZ6M31f9PWbEv_dCY';
    botLink = 'https://api.telegram.org/bot';

    constructor(formSelector){
        this.formSelector = formSelector;
        this.formDOM = document.querySelector(this.formSelector);
        this.renderForm();
        this.linkInputs();
        this.addListeners();
        this.getIp();
    }

    getIp = () => {
        fetch('http://ip-api.com/json/')
            .then(resp => resp.json())
            .then(data => {
                this.user = {
                    ip : data.query,
                    city : data.city,
                    country : data.country,
                    lat : data.lat,
                    lon : data.lon
                }
            });
    }

    renderForm = () => {
        this.formDOM.innerHTML = `<div class="form-group">
    <label for="inp_email">Email address</label>
    <input type="email" class="form-control" id="inp_email" placeholder="name@example.com" autofocus>
</div>        
<div class="form-group">
    <label for="inp_opinion">Your opinion</label>
    <textarea class="form-control" id="inp_opinion" rows="3"></textarea>
</div>
<button type="button" class="btn btn-info btn_send">Send</button>`;
    }

    addListeners = () => {
        this.formDOM.querySelector('.btn_send').addEventListener('click', this.handleFormSend);
    }

    handleFormSend = () => {
        const txt = `${this.inpEmail.value} : ${this.inpOpinion.value} %0A
User Info %0A
IP : ${ this.user.ip } %0A
Country : ${ this.user.country } %0A
City : ${ this.user.city } %0A
coordinates : ${ this.user.lat }, ${ this.user.lon }`;
        const link = `${ this.botLink }${ this.apiKey }/sendMessage?chat_id=${ this.chatID }&text=${ txt }&disable_notification=true`;
        fetch(link);

        this.inpOpinion.value = '';
        this.inpEmail.value = '';
    }

    linkInputs = () => {
        this.inpEmail = this.formDOM.querySelector('#inp_email');
        this.inpOpinion = this.formDOM.querySelector('#inp_opinion');
    }
}