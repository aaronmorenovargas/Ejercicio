<script>
window.onload = function () {
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Motorola RAZR',
            precio: 1,
            imagen: 'data:image/jpeg;base64,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'
        },
        {
            id: 2,
            nombre: 'BlackBerry Pearl 8100',
            precio: 1.2,
            imagen: 'https://i.blogs.es/927bb1/650_1000_blackberry-8100/1366_2000.jpg'
        },
        {
            id: 3,
            nombre: 'Sony Ericsson W610',
            precio: 2.1,
            imagen: 'https://cdn1.smart-gsm.com/picture/snw600.gif'
        },
        {
            id: 4,
            nombre: 'LG Chocolate KU800',
            precio: 0.6,
            imagen: 'https://i.blogs.es/b8f449/lg-chocolate-kg800/1366_2000.jpg'
        },
        {
            id: 5,
            nombre: 'Sony Ericsson W580i',
            precio: 1,
            imagen: 'data:image/jpeg;base64,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'
        },
        {
            
            id: 6,
            nombre: 'BlackBerry Curve 9650',
            precio: 1,
            imagen: 'data:image/jpeg;base64,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'
        },
        {
            
            id: 7,
            nombre: 'iPhone 3G',
            precio: 1,
            imagen: 'https://apple-history.com/images/models/iphone.jpg'
        },
        {
            id: 8,
            nombre: 'Nokia 5300',
            precio: 1,
            imagen: 'https://mx.celulares.com/fotos/nokia-5300-xpressmusic-120-g.jpeg'
        },
        {
            
            id: 9,
            nombre: 'Motorola ROKR EM35',
            precio: 1,
            imagen: 'https://i.blogs.es/03f8a2/motorola-rokr-em35/450_1000.jpg'
        },
        {  
            id: 10,
            nombre: 'Nokia e72',
            precio: 1,
            imagen: 'https://mx.celulares.com/fotos/nokia-e72-82-g.jpeg'
        }

    ];
    
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            // Estructura
            let miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            let miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            let miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info['nombre'];
            // Imagen
            let miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info['imagen']);
            // Precio
            let miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = '$' + info['precio'] + 'MXN';
            // Boton 
            let miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info['id']);
            miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            $items.appendChild(miNodo);
        }
    }

    function anyadirCarrito () {
        carrito.push(this.getAttribute('marcador'))
        calcularTotal();
        renderizarCarrito();
    }

    function renderizarCarrito() {
        $carrito.textContent = '';
        let carritoSinDuplicados = [...new Set(carrito)];
        carritoSinDuplicados.forEach(function (item, indice) {
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            let miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;

            let miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);

            miNodo.appendChild(miBoton);
            $carrito.appendChild(miNodo);
        });
    }

    function borrarItemCarrito() {
        let id = this.getAttribute('item');
        carrito = carrito.filter(function (carritoId) {
            return carritoId !== id;
        });
        renderizarCarrito();
        calcularTotal();
    }

    function calcularTotal() {
        total = 0;
        for (let item of carrito) {
            let miItem = baseDeDatos.filter(function(itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        let totalDosDecimales = total.toFixed(2);
        $total.textContent = totalDosDecimales;
    }

    function vaciarCarrito() {
        carrito = [];
        renderizarCarrito();
        calcularTotal();
    }

    $botonVaciar.addEventListener('click', vaciarCarrito);

    renderItems();