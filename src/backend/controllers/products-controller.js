const { getConnection } = require('../database');

module.exports = {

    create: async (req, res) => {
        
        try {

            console.log(req.body)

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

    getProducts: async (req, res) => {
        console.log('Hols')
        try {
            
            const conn = await getConnection();
            const result = await conn.query('SELECT * FROM productos');

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
            })
        }


    }

};