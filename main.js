const { app, BrowserWindow } = require('electron');
const { resolve } = require('path');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        frame: false
    });

    mainWindow.loadURL(resolve('file://', __dirname, 'src', 'view', 'index.html'));
});

