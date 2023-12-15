"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const electron_1 = require("electron");
const constants_1 = require("./constants");
function setupMain(window, osxBundleId) {
    if (process.platform === 'darwin' && osxBundleId) {
        const hasPermission = electron_1.systemPreferences.getMediaAccessStatus('screen') === 'granted';
        !hasPermission && (0, child_process_1.exec)('tccutil reset ScreenCapture ' + osxBundleId);
    }
    electron_1.ipcMain.handle(constants_1.SCREEN_SHARE_GET_SOURCES, (_event, options) => electron_1.desktopCapturer.getSources(options).then((sources) => {
        return sources.map(item => {
            return {
                ...item,
                thumbnail: {
                    dataUrl: item.thumbnail.toDataURL()
                }
            };
        });
    }));
    window.on('closed', () => {
        electron_1.ipcMain.removeHandler(constants_1.SCREEN_SHARE_GET_SOURCES);
    });
}
exports.default = setupMain;
