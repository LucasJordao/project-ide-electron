function checkPlatform(){
    process.platform == 'win32' ? document.querySelector('.titlebar').setAttribute('id', 'title-bar') : document.querySelector('.titlebar').setAttribute('id', '')
}

