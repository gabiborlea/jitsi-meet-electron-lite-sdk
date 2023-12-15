"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const constants_1 = require("./constants");
function setupPreload() {
    electron_1.contextBridge.exposeInMainWorld('jitsiAPI', {
        getDesktopSources: (options) => electron_1.ipcRenderer.invoke(constants_1.SCREEN_SHARE_GET_SOURCES, options)
    });
}
exports.default = setupPreload;
