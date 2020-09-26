const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const { resolve } = require('path');
const menu = require('./src/js/menu-functions');
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: process.platform !== 'darwin' ? false : true,
        show: false,
        minWidth: 700,
        minHeight: 500,
        icon: resolve(__dirname,'src', 'assets','img','ico-color.svg')
    });
    mainWindow.maximize();
    mainWindow.show();
    mainWindow.loadURL(resolve('file://', __dirname, 'src', 'view', 'index.html'));
    // const mainMenu = Menu.buildFromTemplate(menuTemplate);
    // Menu.setApplicationMenu(mainMenu);
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

const menuTemplate = [
    {
        label: 'Arquivo',
        submenu: [
            {
                label: 'Novo Arquivo',
                accelerator: 'CommandOrControl + N',
                click(){
                    
                }

            },
            {
                label: 'Abrir Arquivo'
            },
            {
                label: 'Salvar'
            },
            {
                label: 'Abrir Pasta'
            }
        ]
    },
    {
        label: 'Sobre',
        submenu: [
            {
                label: 'Sobre Desenvolvedor',
                accelerator: 'F9',
                click(){
                    menu.aboutDeveloper();
                }
            },
            {
                label: 'Sobre Projeto',
                accelerator: 'F10',
                click(){
                    menu.aboutProject();
                }
            }
        ]
    }
]