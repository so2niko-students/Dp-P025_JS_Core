//XmlHttpRequest
// Assync Javascript and XML - AJAX
//Javascript Object Notation - JSON

function loadHumans(){
    load('http://api.open-notify.org/astros.json', showAstros);
}
function loadISS(){
    load('http://api.open-notify.org/iss-now.json', showISS);
}

function load(url, cbackFunc){
    const aja = new XMLHttpRequest();
    //Слушатель изменения состояния готовности
    aja.onreadystatechange = () => {
        if(aja.readyState == 4 && aja.status == 200){
            cbackFunc(aja.responseText);
        }
    }

    //Настроить куда и как отправить данные
    aja.open('GET', url, true);

    //Отправить запрос
    aja.send();
}

function showAstros(str){
    const container = document.querySelector('.astronauts');
    const astros = JSON.parse(str);
    const astrosHTML = astros.people.map(hum =>   getAstroCard(hum)).join('');
    container.innerHTML = astrosHTML;
}

function getAstroCard(astro){
    const colors = ['dark', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'];
    const color = colors[~~(Math.random() * colors.length)];
    const { craft, name } = astro;
    return `<div class="card text-white bg-${ color } mb-3" style="max-width: 18rem;">
    <div class="card-header">Astronaut in ${ craft }</div>
    <div class="card-body">
      <h5 class="card-title">${ name }</h5>
      <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit commodi laborum veritatis.</p>
    </div>
  </div>`
}

function showISS(str){
    const coords = document.querySelector('.coords');
    console.log(str);
    const ISS = JSON.parse(str);
    const { latitude, longitude } = ISS.iss_position;
    initMap(+latitude, +longitude);
    coords.innerHTML = `<strong>lat: ${latitude}, long: ${longitude}</strong>`;
}

let map;
function initMap(lat, lng) {
    if(map){
        // map.LatLng(lat, lng);
    }else{
        map = new google.maps.Map(document.querySelector("#map"), {
            center: { lat, lng },
            zoom: 4
          });
    }
    

    const marker = new google.maps.Marker({
        position: { lat, lng },
        map: map
      });
  }

//AIzaSyBLJRC2V4fZcqjgF4UlqifJx-k9hKRoL-k

loadHumans();
loadISS();

setInterval(loadISS, 3000);