const {app, BrowserWindow} = require("electron");
const path = require("path");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 300,
    height: 450,
    minWidth: 250,
    minHeight: 400,
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) 
      createWindow();
    }
  );
});

app.on("window-all-closed", () => {
  // process.platform !== "darwin" is not required due to macOS Calculator.app
  // default behaviour to quit itself after closing all windows
  app.quit();
});
