const { BrowserWindow } = require('electron');

// Mis funciones
const query_functions = require('./controllers/query_functions');

const createWindow = () => {

    // Configuraciones de la ventana
    const window = new BrowserWindow({
        width: 800,
        height: 600,
        // resizable: false,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });

    window.loadFile('src/frontend/index.html');
};

module.exports = {
    createWindow,
    query_functions
};