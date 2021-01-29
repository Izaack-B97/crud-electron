const axios = require('axios');

module.exports = {

    getToApi: async ( enpoint ) => {
        const { data } = await axios.get(`http://localhost:3030/server/${ enpoint }`);
        return data;
    },
    
    postToApi: async ( endpoint, datos ) => {
        const { data } = await axios.post(`http://localhost:3030/server/${ endpoint }`, datos);
        return data;
    },


}