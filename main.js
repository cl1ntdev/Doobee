const { app, BrowserWindow } = require('electron'); // Correct import
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title:"Doobee"
  });
  win.setMenuBarVisibility(false)
//   win.setIcon()
  win.loadFile('index.html'); // Load your HTML file
}

app.whenReady().then(() => {
  createWindow();

 
});

// Quit the app when all windows are closed (Windows & Linux)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});