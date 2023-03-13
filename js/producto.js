//Variables
const valor = document.querySelector('#valor');
const rango = document.querySelector('.form-range');
const btn = document.querySelector('.btn');

//Globales
let cantidads = 0;

let productos = [
{
    img:'/img/productos/1.jpg',
    codigo: '123456',
    Nombre:'Pijamas',
    descripcion:'Pijama de bebe color gris',
    precio: '15.000',
    cantidad: '0',

},
{
    img:'/img/productos/10.webp',
    codigo: '123457',
    Nombre:'Cuadritos',
    descripcion:'Cuadritos Decortativos',
    precio: '10.000',
    cantidad: '0',
},
{
    img:'/img/productos/11x.webp',
    codigo: '123458',
    Nombre:'Figurita de conejo',
    descripcion:'igura decorativa para habitacion de conejo',
    precio: '10.000',
    cantidad: '0',
}
];

llenarProductos(productos);
eventListener();

//Eventos

function eventListener(){

   /* document.addEventListener('DOMContentLoaded', ()=>{

        llenarProductos(productos);

        let container2 = document.querySelectorAll('.card-body');
        console.log(container2);
    });*/

    
    let container2 = document.querySelectorAll('.card-body .plus');
    let textInput = document.querySelectorAll('.card-body .cantidad');
    console.log(container2);

    container2.forEach(function(elemento, indice){

         elemento.addEventListener('click', ()=>{

            textInput[indice].value = parseInt(textInput[indice].value) + 1

         });   

    });

    let container3 = document.querySelectorAll('.card-body .minus');

    container3.forEach(function(elemento, indice){

         elemento.addEventListener('click', ()=>{

            textInput[indice].value = parseInt(textInput[indice].value) - 1

         });   

    });

    rango.addEventListener('change', ()=>{

        valor.value = rango.value;

    });

}

function llenarProductos(productos){

    let contenedor = document.querySelector('#cards-container') 

    productos.forEach(function (producto){

      //div contenedor
      let contenedorC = document.createElement('div');
      contenedorC.classList.add('card', 'col-12', 'col-sm-6','col-lg-3');
      

      let cardBody= document.createElement('div');
      cardBody.classList.add('card-body');

      //imagen
      let img = document.createElement('img');
      img.classList.add('card-img-top');
      img.src = producto.img;
      contenedorC.appendChild(img);

      //parrafo-codigo
      let codigo = document.createElement('p');
      codigo.classList.add('card-text');
      codigo.textContent = `Codigo: ${producto.codigo}`;
      contenedorC.appendChild(codigo);

      //parrafo-nombre
      let nombre = document.createElement('h5');
      nombre.classList.add('card-title');
      nombre.textContent = producto.Nombre;
      cardBody.appendChild(nombre);
      contenedorC.appendChild(cardBody);

      //parrafo-descripcion
      let descripcion = document.createElement('p');
      descripcion.classList.add('card-text');
      descripcion.textContent = producto.descripcion;
      cardBody.appendChild(descripcion);
      contenedorC.appendChild(cardBody);

      //parrafo-precio
      let precio = document.createElement('p');
      precio.classList.add('card-text');
      precio.textContent = `Precio: ${producto.precio}`
      cardBody.appendChild(precio);
      contenedorC.appendChild(cardBody);

      //boton +
      let botonPlus = document.createElement('button');
      botonPlus.classList.add('plus');
      botonPlus.textContent = '+';
      cardBody.appendChild(botonPlus);
      contenedorC.appendChild(cardBody);

      //input text
      let input = document.createElement('input');
      input.type = 'text';
      input.classList.add('cantidad', 'border', 'border-colorLetra');
      input.value = '0';
      cardBody.appendChild(input);
      contenedorC.appendChild(cardBody);

      //boton - 
      let botonM = document.createElement('button');
      botonM.classList.add('minus');
      botonM.textContent = '-';
      cardBody.appendChild(botonM);
      contenedorC.appendChild(cardBody);
      

      //Link tipo boton
      let linkInput = document.createElement('a');
      linkInput.classList.add('btn', 'btn-colorLetra');
      linkInput.textContent = 'agregar';
      cardBody.appendChild(linkInput);
      contenedorC.appendChild(cardBody);


      contenedor.appendChild(contenedorC);

    });
}
