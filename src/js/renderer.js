const { remote } = require('electron');
const $ = require('jquery');
const win = remote.getCurrentWindow();

function checkPlatform(){
    process.platform !== 'win32' ? document.querySelector('.titlebar').setAttribute('id', 'notitle') : document.querySelector('.titlebar').setAttribute('id', 'title-bar');
}

document.onreadystatechange = (event) => {
    if(document.readyState == "complete"){
        handleWindowControls();
        checkPlatform();
    }
}

window.onbeforeunload = (event) => {
    win.removeAllListeners();
}

function handleWindowControls() {

    $('#min-button').click(() => {
        win.minimize();
    });
    
    $('#max-button').click(() => {
        win.maximize();
    });
    
    $('#restore-button').click(() => {
        win.unmaximize();
    });
    
    $('#close-button').click(() => {
        win.close();
    });

    toggleMaxRestoreButtons();
    win.on('maximize', toggleMaxRestoreButtons);
    win.on('unmaximize', toggleMaxRestoreButtons);

    function toggleMaxRestoreButtons() {
        if(win.isMaximized()){
            document.body.classList.add('maximized');
        }else{
            document.body.classList.remove('maximized');
        }
    }   
}


// Lógica do split

let mouse_is_down = false;

$('.split-bar').mousedown(e => {
    mouse_is_down = true;
})

$(document).mousemove(e => {
    if(!mouse_is_down) return;

    $('.split-left').width(e.clientX);
})

$(document).mouseup(() => {
    mouse_is_down = false;
})
