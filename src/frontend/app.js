const { getToApi, postToApi } = require('./helpers/llamadas');

const productoForm = document.querySelector('#product-form');
const areaProductos = document.querySelector('#area-products ul');

// Valores del producto
const nameProduct = document.querySelector('#nombre');
const priceProduct = document.querySelector('#precio');
const descriptionProduct = document.querySelector('#descripcion');

(() => {

    areaProductos.innerHTML = "";

    // Obtenemos todos los productos
    getToApi('/products')
        .then(({ result }) => {

            result.forEach((product, i) => {
                areaProductos.innerHTML += `
                    <li class="list-group-item">                        
                        <h3 class="text-primary">${ i + 1 }. ${ product.nombre }</h3>
                    </li>
                `;
            });

        })
        .catch(err => {
            console.log(err)
        })


    
    
    productoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const newProduct = {
            name: nameProduct.value,
            price: priceProduct.value,
            description:  descriptionProduct.value
        };
    
        postToApi('/products', newProduct)
            .then(resp => {
                console.log(resp);
            })
        
    });




})();