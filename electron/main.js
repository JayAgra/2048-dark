const {app, BrowserWindow} = require('electron')
let mainWindow

function createWindow () {
  // create window
  mainWindow = new BrowserWindow({width: 800, height: 600})
  //load index
  mainWindow.loadFile('index.html')
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}
app.on('ready', createWindow)
//stop when windows killed
app.on('window-all-closed', function () {
//macos quit
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', function () {
//reopen
  if (mainWindow === null) {
    createWindow()
  }
})
