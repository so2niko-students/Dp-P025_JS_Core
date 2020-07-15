const inpName = document.querySelector('.inp_name');
const reDig = /\d/;
const tiles = document.querySelector('.tiles');
let clicks = 0;

// inpName.oninput = function(ev){
    
//     const reDig = /\d/g;
//     console.log(ev, inpName.value);
//     inpName.value = inpName.value.replace(reDig, '');
// }

inpName.onkeydown = function(e){
    console.log(e);
    if(reDig.test(e.key)){
        return false;
    }
}



function generateTiles(){
    tiles.innerHTML = Array(100).fill('<div class="tile"></div>').join('');
}



tiles.addEventListener('click', e => {
    console.log(e);
    console.log(e.currentTarget);
    clicks++;
    e.target.style.backgroundColor = 'black';
    e.currentTarget.style.borderWidth = `${clicks}px`;
});

generateTiles();