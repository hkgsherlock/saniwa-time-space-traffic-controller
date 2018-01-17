const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');

app.commandLine.appendSwitch('ppapi-flash-path', 'C:\\Windows\\SysWOW64\\Macromed\\Flash\\pepflashplayer32_18_0_0_209.dll');
app.commandLine.appendSwitch('ppapi-flash-version', '18.0.0.209');

let win = null;

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 480,
        useContentSize: true,
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'GameContainer.html'),
        protocol: 'file:',
        slashes: true
    }));
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});