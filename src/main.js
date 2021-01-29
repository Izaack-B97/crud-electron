const { BrowserWindow } = require('electron');

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

    // window.setMenu( null );
    window.loadFile('src/frontend/index.html');
};

module.exports = {
    createWindow
};