import { SourcesOptions, contextBridge, ipcRenderer } from 'electron';
import { SCREEN_SHARE_GET_SOURCES } from './constants';

export default function setupPreload() {
    contextBridge.exposeInMainWorld('jitsiAPI', {
        getDesktopSources: (options: SourcesOptions) => ipcRenderer.invoke(SCREEN_SHARE_GET_SOURCES, options)
    });
}
