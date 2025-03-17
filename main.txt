const { app, BrowserWindow } = require('electron');

require('@electron/remote/main').initialize();

const path = require('path');
const { spawn } = require('child_process');

let httpServer; // Variable to store the http-server process
let mainWindow; // Variable to store the main window

function createWindow() {
  // Create the browser window with the specified resolution
  mainWindow = new BrowserWindow({
    width: 2880,
    height: 1920,
    title: 'LeeFlix', // ✅ Custom Window Title
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // Allows node integration if needed
      contextIsolation: false, // Disable context isolation if needed
      enableRemoteModule: true,
    },
    autoHideMenuBar: true, // Hides the menu bar for a cleaner look
  });

  // Load the React app (assuming the build directory contains the built React files)
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
}

// Function to start the http-server
const { exec } = require('child_process');

function startHttpServer() {
  httpServer = exec(
    'npx http-server E:/ --port 8080',
    (error, stdout, stderr) => {
      if (error) {
        console.error(`http-server error: ${error}`);
        return;
      }
      console.log(`http-server: ${stdout}`);
      if (stderr) {
        console.error(`http-server stderr: ${stderr}`);
      }
    },
  );
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
