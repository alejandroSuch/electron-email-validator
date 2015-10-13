var app = require('app')
var BrowserWindow = require('browser-window')

require('crash-reporter').start()

var mainWindow = null

app.on('window-all-closed', function () {
  //if (process.platform != 'darwin'){
  app.quit()
  //}
})


app.on('ready', function () {

  mainWindow = new BrowserWindow({
    'min-width': 800,
    'min-height': 600,
    'max-width': 800,
    'max-height': 600,
    fullscreen: false,
    resizable: false,
    frame:false,
    transparent: false
  });

  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  mainWindow.on('closed', function () {
    mainWindow = null
  });

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.openDevTools()
  }

  app.on('open-file', function (event, pathToOpen) {
    event.preventDefault();
    console.log(pathToOpen);
  });

});
