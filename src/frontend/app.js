const { create_product, getAllProducts } = require('./helpers/helpers');

const productoForm = document.querySelector('#product-form');
const areaProductos = document.querySelector('#area-products');

// Valores del producto
const nameProduct = document.querySelector('#nombre');
const priceProduct = document.querySelector('#precio');
const descriptionProduct = document.querySelector('#descripcion');

productoForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newProduct = {
        name: nameProduct.value,
        price: priceProduct.value,
        description:  descriptionProduct.value
    };

    const result = create_product( newProduct );
    console.log( result );
    

});