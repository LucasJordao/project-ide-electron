const { shell, remote } = require('electron');
const { resolve } = require('path');

function aboutProject(){
    shell.openExternal('https://github.com/LucasJordao/project-ide-electron');
}

function aboutDeveloper(){
    shell.openExternal('https://github.com/LucasJordao');
}


module.exports = {aboutDeveloper, aboutProject}
