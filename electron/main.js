const {twenty, BrowserWindow} = require('electron')
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
twenty.on('ready', createWindow)
//stop when windows killed
twenty.on('window-all-closed', function () {
//macos quit
  if (process.platform !== 'darwin') {
    twenty.quit()
  }
})
twenty.on('activate', function () {
//reopen
  if (fortyEight === null) {
    createWindow()
  }
})
