const { 
    getToServer, 
    postToServer, 
    deleteToServer, 
    putToServer 
} = require('./helpers/llamadas');

const productoForm = document.querySelector('#product-form');
const areaProductos = document.querySelector('#area-products ul');

// Valores del producto
const nameProduct = document.querySelector('#nombre');
const priceProduct = document.querySelector('#precio');
const descriptionProduct = document.querySelector('#descripcion');
const idProduct = document.querySelector('#id');

let editar = false;

const renderProductos = () => {
    areaProductos.innerHTML = "";

    // Obtenemos todos los productos
    getToServer('/products')
        .then(({ result }) => {
            
            result.forEach((product, i) => {
                areaProductos.innerHTML += `
                    <li class="list-group-item">                        
                        <h5>
                            ${ i + 1 }. ${ product.nombre }
                            <form class="pull-right form-eliminar">
                                <input class="id" value="${ product.id }" type="hidden" />
                                <a class="btn btn-outline-primary">EDITAR</a>
                                <a class="btn btn-outline-danger">ELIMINAR</a>
                            </form>
                        </h5>
                        <small> ${ product.descripcion } </small>
                    </li>
                `;
            });

            setTimeout(() => {
                areaProductos.classList.add = "animate__animated animate__bounce";
            }, 2500);

            // Acciones del boton deleted
            const btnsDeleted = document.getElementsByClassName('btn-outline-danger');
            for (let i = 0; i < btnsDeleted.length; i++) {
                btnsDeleted[i].addEventListener('click', () => {
                    const id = btnsDeleted[i].parentNode.firstElementChild.value;
                    deleteToServer(`products/${ id }`)
                        .then(resp => {
                            renderProductos();
                        })
                        .catch(err => {
                            console.log( err );
                        });
                });
            }

            // Acciones para el boton de editar
            const btnsEdit = document.getElementsByClassName('btn-outline-primary');
            for (let i = 0; i < btnsEdit.length; i++) {
                btnsEdit[i].addEventListener('click', () => {
                    const id = btnsEdit[i].parentNode.firstElementChild.value;
                    editar = true;
                    getToServer(`products/${ id }`)
                        .then(resp => {
                            const producto = resp.result[0];
                            
                            idProduct.value = id;
                            nameProduct.value = producto.nombre;
                            priceProduct.value = producto.precio;
                            descriptionProduct.value = producto.descripcion;

                        });
                });
            }

        })
        .catch(err => {
            console.log(err)
        })
};

(() => {
    
    renderProductos();
    
    // Nuevo producto
    productoForm.addEventListener('submit', (e) => {
        e.preventDefault();
    
        const newProduct = {
            name: nameProduct.value,
            price: priceProduct.value,
            description:  descriptionProduct.value
        };
        
        if (editar) {

            const datos = {
                nombre: nameProduct.value,
                precio: parseFloat(priceProduct.value),
                descripcion: descriptionProduct.value
            };

            putToServer(`products/${ idProduct.value }`, datos)
                .then(resp => {
                    console.log(resp)
                    renderProductos();
                    
                    nameProduct.value = "";
                    priceProduct.value = "";
                    descriptionProduct.value = "";

                    editar = false;

                })
                .catch(err => {
                    console.log( err );
                });

        } else {
            postToServer('products', newProduct)
                .then(resp => {
                    // console.log(resp);
                    renderProductos();
                    nameProduct.value = '';
                    priceProduct.value = '';
                    descriptionProduct.value = '';

                });
        }        
    });

})();
