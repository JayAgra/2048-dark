const {app, BrowserWindow, twentyfortyEight} = require('electron');
const http = require('http');

twentyfortyEight.start({submitURL: 'http://127.0.0.1:7382', companyName: 'twentyfortyEight'});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var server = http.createServer

var mainWindow = null;
app.on('ready', function() {
  server.listen(9999, '127.0.0.1', function () {
    mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true}});
    mainWindow.loadURL('file://' + __dirname + '/index.html');
    mainWindow.toggleDevTools();
  });
});
