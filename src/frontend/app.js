const { getToApi, postToApi } = require('./helpers/llamadas');

const productoForm = document.querySelector('#product-form');
const areaProductos = document.querySelector('#area-products ul');

// Valores del producto
const nameProduct = document.querySelector('#nombre');
const priceProduct = document.querySelector('#precio');
const descriptionProduct = document.querySelector('#descripcion');

(() => {

    // Obtenemos todos los productos
    getToApi('/products')
        .then(resp => {
            resp.result.forEach(producto => {
                areaProductos.innerHTML = `
                    <li>${ producto.nombre }</li>
                `;
            })
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