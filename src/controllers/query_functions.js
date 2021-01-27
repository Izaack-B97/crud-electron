const { getConnection } = require('../database');
const { generate_notification } = require('../helpers/helpers');

module.exports = {
    create_on_database: async ( product ) => {

        const newProduct = {
            nombre: product.name,
            precio: parseFloat(product.price),
            descripcion: product.description
        };

        const query = `
            INSERT INTO productos (
                nombre, 
                precio, 
                descripcion
            )
            VALUES (
                '${ newProduct.nombre }', 
                ${ newProduct.precio }, 
                '${ newProduct.descripcion }'
            );
        `;

        try {
            const con = await getConnection();
            const result = await con.query(query);
            
            if ( result ) {
                generate_notification('Electron && MySQL', 'Created product sucessfully !');
                newProduct.id = result.insertId;
                return newProduct;
            }

        } catch (error) {
            console.log(error)
        }   
    },

    getProducts: async () => {

        const query = `SELECT * FROM productos`;

        try {
            const con = await getConnection();
            const result = await con.query(query);
            // if ( result ) {
            //     generate_notification('Electron && MySQL', 'Loading information ...');
            //     return result;
            // }

        } catch (error) {
            console.log(error)
        }   

        return {
            data: 'Hola'
        }
    }
};