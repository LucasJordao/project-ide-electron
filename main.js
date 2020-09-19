const { app, BrowserWindow } = require('electron');
const { resolve } = require('path');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false,
        show: false
    });
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.loadURL(resolve('file://', __dirname, 'src', 'view', 'index.html'));
    
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

