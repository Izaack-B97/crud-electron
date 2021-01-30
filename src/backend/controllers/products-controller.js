const { json } = require('body-parser');
const { getConnection } = require('../database');

module.exports = {

    create: async (req, res) => {
        
        try {
            const query = `
                INSERT INTO 
                productos (nombre, precio, descripcion)
                VALUES 
                ('${ req.body.name }', 
                ${ req.body.price },
                '${ req.body.description }');
            `;

            const conn = await getConnection();
            const result = await conn.query(query);

            res.json({
                status: 'success',
                message: 'Se creo producto en la bd',
                result
            });
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'error al crear',
                error
            });
        }

    },

    getProduct: async (req, res) => {
        
        try {
            const conn = await getConnection();
            const result = await conn.query(`SELECT * FROM productos WHERE id = ${ req.params.id }`);

            res.json({
                status: 'success',
                message: 'producto obtenido',
                result
            });
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'error al obtener producto',
                error
            });
        }

    },

    getProducts: async (req, res) => {
        try {
            
            const conn = await getConnection();
            const result = await conn.query('SELECT * FROM productos ORDER BY id DESC');

            res.json({
                status: 'success',
                message: 'Se obtuvieron todos los productos',
                result
            });

        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al obtener los productos',
                error
            });
        }
    },

    updateProduct: async (req, res) => {
        try {

            console.log( req.body );

            const query = `
                UPDATE productos SET
                nombre = '${ req.body.nombre }',
                precio = ${ req.body.precio },
                descripcion = '${ req.body.descripcion }'
                WHERE id = ${ req.params.id }
            `;

            const conn = await getConnection();
            const result = await conn.query( query );

            res.json({
                status: 'success',
                message: 'actualizando',
                result
            })
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al actualizar',
                error
            })
        }
    },

    deleteProduct: async (req, res) => {
        try {
            const conn = await getConnection();
            const result = await conn.query(`DELETE FROM productos WHERE id = ${ req.params.id }`);

            res.json({
                status: 'success',
                message: 'Un producto ha sido eliminado',
                result
            });
            
        } catch (error) {
            res.json({
                status: 'failed',
                message: 'Error al eliminar producto',
                error
            });
        }

    }

};