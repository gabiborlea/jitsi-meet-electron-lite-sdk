import { exec } from 'child_process';
import { BrowserWindow, desktopCapturer, ipcMain, systemPreferences } from 'electron';
import { SCREEN_SHARE_GET_SOURCES } from './constants';

export default function setupMain(window: BrowserWindow, osxBundleId?: string) {
    if (process.platform === 'darwin' && osxBundleId) {
        const hasPermission = systemPreferences.getMediaAccessStatus('screen') === 'granted';

        !hasPermission && exec('tccutil reset ScreenCapture ' + osxBundleId);
    }

    ipcMain.handle(SCREEN_SHARE_GET_SOURCES, (_event, options) =>
        desktopCapturer.getSources(options).then((sources) => {
            return sources.map(item => {
                return {
                ...item,
                    thumbnail: {
                        dataUrl: item.thumbnail.toDataURL()
                    }
                }
            });
        })
    );

    window.on('closed', () => {
        ipcMain.removeHandler(SCREEN_SHARE_GET_SOURCES);
    });
}