const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

let httpServer; // Variable to store the http-server process
let mainWindow; // Variable to store the main window

function createWindow() {
  // Create the browser window with the specified resolution
  mainWindow = new BrowserWindow({
    width: 2880,
    height: 1920,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // Allows node integration if needed
      contextIsolation: false, // Disable context isolation if needed
    },
    autoHideMenuBar: true, // Hides the menu bar for a cleaner look
  });

  // Load the React app (assuming the build directory contains the built React files)
  mainWindow.loadFile('./build/index.html');
}

// Function to start the http-server
function startHttpServer() {
  httpServer = spawn('npx', ['http-server', 'E:/', '--port', '8080']);

  httpServer.stdout.on('data', (data) => {
    console.log(`http-server: ${data}`);
  });

  httpServer.stderr.on('data', (data) => {
    console.error(`http-server error: ${data}`);
  });

  httpServer.on('close', (code) => {
    console.log(`http-server exited with code ${code}`);
  });
}

// Electron lifecycle events
app.on('ready', () => {
  startHttpServer(); // Start the http-server
  createWindow(); // Create the main application window
});

app.on('window-all-closed', () => {
  // Quit the app when all windows are closed (except on macOS)
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // Recreate a window if the dock icon is clicked and no other windows are open (on macOS)
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('will-quit', () => {
  // Ensure the http-server process is killed when the app exits
  if (httpServer) {
    httpServer.kill();
  }
});
