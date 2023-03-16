//Variables
const valor = document.querySelector('#valor');
const rango = document.querySelector('.form-range');
const btn = document.querySelector('.btn');
const contenedor = document.querySelector('#cards-container');
const tablaCarrito = document.querySelector('#carritoTabla');
const carrito = document.querySelector('#carrito');
const cNeto = document.querySelector('#neto');
const cIva = document.querySelector('#iva');
const cEnvio = document.querySelector('#envio');
const cTotal = document.querySelector('#Total');

//Globales
let carro = [];
let neto;
let iva;
let envio;
let totalIva = 0;
let totalNeto = 0;
let total = 0;

let productos = [
{
    img:'/img/productos/1.jpg',
    codigo: '123456',
    Nombre:'Pijamas',
    descripcion:'Pijama de bebe color gris',
    precio: '15000',
    cantidad: '0',
},
{
    img:'/img/productos/10.webp',
    codigo: '123457',
    Nombre:'Cuadritos',
    descripcion:'Cuadritos decortativos',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/11x.webp',
    codigo: '123458',
    Nombre:'Figurita de conejo',
    descripcion:'Figura decorativa para habitación de conejo',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/12.webp',
    codigo: '123459',
    Nombre:'Cuna Gris',
    descripcion:'Cuna tamaño compacto color gris',
    precio: '300000',
    cantidad: '0',
},
{
    img:'/img/productos/17.webp',
    codigo: '123460',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "Pequeña Gota de Lluvia"',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/13.webp',
    codigo: '123461',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "La Granja"',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/14.webp',
    codigo: '123462',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "Te Amo Bebé"',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/16.webp',
    codigo: '123463',
    Nombre:'Libro Infantil',
    descripcion:'Libro infantil "La Orugita"',
    precio: '20000',
    cantidad: '0',
},
{
    img:'/img/productos/5.webp',
    codigo: '123464',
    Nombre:'Baberos',
    descripcion:'Baberos de animalitos',
    precio: '4990',
    cantidad: '0',
},
{
    img:'/img/productos/6.webp',
    codigo: '123465',
    Nombre: 'Set Babero-Toalla',
    descripcion:'Set de Babero y Toalla para bebé de algodón',
    precio: '8990',
    cantidad: '0',
},
{
    img:'/img/productos/19.webp',
    codigo: '123466',
    Nombre: 'Trajecito bebe',
    descripcion:'Trajecito de bebe de algodon',
    precio: '10000',
    cantidad: '0',
},
{
    img:'/img/productos/20.webp',
    codigo: '123467',
    Nombre: 'Cámara fotográfica de Jueguete',
    descripcion:'Cámara de juguete fabricada en madera',
    precio: '12000',
    cantidad: '0',
}
];

//correo



/*const direccionInput = document.querySelector('#inputDireccion');
const comunaInput = document.querySelector('#inputComuna');
const regionInput = document.querySelector('#inputRegion');
const nombreInput = document.querySelector('#inputNombre');*/


const btnInput = document.getElementById('btnInput');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btnInput.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_9naw98v';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnInput.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btnInput.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

eventListener();

//Eventos

function eventListener(){

    contenedor.addEventListener('click', leerDatosElemento);

    carrito.addEventListener('click', borrarElemento);

    document.addEventListener('DOMContentLoaded', ()=>{
       
        llenarProductos(productos);
        generarCantidad();
        carro =JSON.parse(localStorage.getItem('carrito')) || [];
        console.log('carrito desde el local')
        console.log(carro);
        mostrarCarrito(true);

    });

    //const btnBorrar = document.querySelector('.borrar-curso');

    rango.addEventListener('change', ()=>{

        valor.value = rango.value;

    });



}

function llenarProductos(productos){

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
      let codigoContainer = document.createElement('div');
      let codigoLabel = document.createElement('span')
      codigoContainer.classList.add('d-flex','justify-content-center', 'mb-2');
      codigoLabel.textContent = 'codigo: ';
      codigo.classList.add('card-text', 'codigo');
      codigo.textContent = `${producto.codigo}`;
      codigoContainer.appendChild(codigoLabel);
      codigoContainer.appendChild(codigo);
      contenedorC.appendChild(codigoContainer);

      //parrafo-nombre
      let nombre = document.createElement('h5');
      nombre.classList.add('card-title');
      nombre.textContent = producto.Nombre;
      cardBody.appendChild(nombre);
      contenedorC.appendChild(cardBody);

      //parrafo-descripcion
      let descripcion = document.createElement('p');
      descripcion.classList.add('card-text', 'description');
      descripcion.textContent = producto.descripcion;
      cardBody.appendChild(descripcion);
      contenedorC.appendChild(cardBody);

      //parrafo-precio
      let precio = document.createElement('p');
      let precioLabel = document.createElement('span')
      let precioContainer = document.createElement('div');
      precioContainer.classList.add('d-flex','justify-content-center', 'mb-2');
      precioLabel.textContent = 'Precio: ';
      precio.classList.add('card-text', 'price');
      precio.textContent = `${producto.precio}`;
      precioContainer.appendChild(precioLabel);
      precioContainer.appendChild(precio);
      cardBody.appendChild(precioContainer);
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

function generarCantidad(){

    let textInput = document.querySelectorAll('.card-body .cantidad');
    let container2 = document.querySelectorAll('.card-body .plus');

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

}

function leerDatosElemento(e){

    if(e.target.classList.contains('btn')){
        
        const seleccionado = e.target.parentElement.parentElement;
        //e.target.classList.contains('cantidad').value = 0;
        llenarObjCarro(seleccionado);

    }

}


function llenarObjCarro(seleccionado){

    //console.log(seleccionado.querySelector('.cantidad').value);
   //console.log(seleccionado.querySelector('.card-title').textContent);

    if(seleccionado.querySelector('.cantidad').value == 0){

        alert('Debes seleccionar cantidad');
        return;

    }

    const carrito = {

        img: seleccionado.querySelector('.card-img-top').src,
        codigo: seleccionado.querySelector('.codigo').textContent,
        Nombre: seleccionado.querySelector('.card-title').textContent,
        descripcion:seleccionado.querySelector('.description').textContent,
        precio: seleccionado.querySelector('.price').textContent,
        cantidad: seleccionado.querySelector('.cantidad').value,

    }

    let enCarrito = carro.some(function(elemento){

        return elemento.codigo === carrito.codigo;

    });

    //actualizar cantidad del elemento

    if(enCarrito){

        let newCarrito = carro.map(function (elemento){

            if(elemento.codigo === carrito.codigo ){

                elemento.cantidad = seleccionado.querySelector('.cantidad').value;
                return elemento;
            }else{

                return elemento;
            }

        });

        console.log('CARRITO');
        console.log(newCarrito);
        carro = [...newCarrito];

    }else{

        //console.log('el elemento no existe');
        carro = [...carro, carrito];
        console.log('CARRITO');

    }
    
    //calcular 

    mostrarCarrito(true);
    
}

function sincronizarStorage (){

    localStorage.setItem('carrito', JSON.stringify(carro));

}

function mostrarCarrito(){

    limpiarHTML(); 
    
    console.log('mostrando carro')

    totalIva = 0;
    totalNeto = 0;
    total = 0;
    envio = 0;

    cNeto.textContent = 0;
    cIva.textContent = 0;
    cTotal.textContent = 0;
    cEnvio.textContent = 0;

    carro.forEach((elemento)=>{

        const row = document.createElement('tr');
        const {img, Nombre, precio, cantidad, codigo } = elemento;

        //calcular total


            neto = parseInt(precio * +cantidad)/1.19;
            neto = Math.round(neto, 1);
            iva = (precio *cantidad) - neto;
            totalIva = totalIva + iva;
            totalNeto = totalNeto + neto;
            total = totalNeto + totalIva;

            if(total < 100000){

                envio = total *0.05;
                total = total + envio;

            }


        row.innerHTML = `                            
      
        <td><img class="img_carrito" src="${img}"></td>
        <td scope="col">${Nombre}</td>
        <td scope="col">${precio}</td>
        <td scope="col">${cantidad}</td>
        <td>
                <a href="#" class="borrar-curso" data-id="${codigo}"> X </a>
        </td>`;
        
        cNeto.textContent = totalNeto;
        cIva.textContent = totalIva;
        cTotal.textContent = total;
        cEnvio.textContent = envio;
        tablaCarrito.appendChild(row);
        
    });



    sincronizarStorage();



}

function borrarElemento(e){

    let codigoBorar;

    if(e.target.classList.contains('borrar-curso')){

        const codigoId = e.target.getAttribute('data-id');
        e.preventDefault();

        codigoBorar = codigoId;
        carro = carro.filter((elemento)=>{

            return elemento.codigo !== codigoId;

        });
        
    }

    mostrarCarrito();

}

function limpiarHTML (){
    //forma lenta baja performance
    //contenedorCarrito.innerHTML = '';

    while(tablaCarrito.firstChild){

        tablaCarrito.removeChild(tablaCarrito.firstChild);

    }
}