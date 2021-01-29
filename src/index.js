const { createWindow } = require('./main');
const { app } = require('electron');

require('./backend/server');
require('electron-reload')(__dirname); // Reiniciara la app cuando haya un cambio en la carpeta actual

app.whenReady().then( createWindow );
