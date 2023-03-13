//Variables

const valor = document.querySelector('#valor');
const rango = document.querySelector('.form-range');
console.log(valor);

eventListener();

//Eventos

function eventListener(){

    rango.addEventListener('change', ()=>{

        valor.value = rango.value;

    });

}

