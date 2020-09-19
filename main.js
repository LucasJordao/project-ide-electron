const { app, BrowserWindow, globalShortcut } = require('electron');
const { resolve } = require('path');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: process.platform !== 'darwin' ? false : true,
        show: false
    });
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.loadURL(resolve('file://', __dirname, 'src', 'view', 'index.html'));
    
});

// app.on('browser-window-focus', function () {
//     globalShortcut.register('CommandOrControl+R', () => false);
//     globalShortcut.register('CommandOrControl+Shift+R', () => false);
//     globalShortcut.register('F5', () => false);
// });
    
// app.on('browser-window-blur', function () {
//     globalShortcut.unregister('CommandOrControl+R');
//     globalShortcut.unregister('CommandOrControl+Shift+R');
//     globalShortcut.unregister('F5');
// });

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});

