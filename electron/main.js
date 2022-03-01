const {app, BrowserWindow} = require('electron')
let fortyEight

function createWindow () {
  // create window
  fortyEight = new BrowserWindow({width: 800, height: 600})
  //load index
  fortyEight.loadFile('index.html')
  fortyEight.on('closed', function () {
    fortyEight = null
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
  if (fortyEight === null) {
    createWindow()
  }
})
