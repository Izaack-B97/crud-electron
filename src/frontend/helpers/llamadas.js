const axios = require('axios');

module.exports = {

    getToServer: async ( enpoint ) => {
        const { data } = await axios.get(`http://localhost:3030/server/${ enpoint }`);
        return data;
    },
    
    postToServer: async ( endpoint, datos ) => {
        const { data } = await axios.post(`http://localhost:3030/server/${ endpoint }`, datos);
        return data;
    },

    deleteToServer: async ( endpoint, id ) => {
        const { data } = await axios.delete(`http://localhost:3030/server/${ endpoint }`);
        return data;
    }


}