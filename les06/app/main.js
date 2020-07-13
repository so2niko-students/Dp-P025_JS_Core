document.querySelector('.button').addEventListener('click', turnOnTrafficLights); 
const lights = document.querySelectorAll('.trafficLight');
let counter = -1;

function turnOnTrafficLights(){
    const colors = ['green', 'yellow', 'red'];
    const lightsLen = colors.length;
    const DEFAULT_COLOR = 'lightgray';

    
    lights.forEach(light => light.style.backgroundColor = DEFAULT_COLOR);
    
    counter = (counter + 1) % lightsLen;

    lights[counter].style.backgroundColor = colors[counter];
}