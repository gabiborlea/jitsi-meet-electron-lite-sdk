import { type DesktopCapturerSource, type SourcesOptions } from "electron";

type JitsiMeetExternalAPI = {
    on: (request: string, eventHandler: (request: any, callback: Function) => void) => void;
}

type JitsiWindow = typeof window & {
    jitsiAPI: {
        getDesktopSources: (options: SourcesOptions) => Promise<DesktopCapturerSource[]>
    }
}

export default function setupRenderer(iframeAPI: JitsiMeetExternalAPI) {
    iframeAPI.on('_requestDesktopSources', (request, callback) => {
        const { options } = request;

        (window as JitsiWindow).jitsiAPI.getDesktopSources(options)
            .then(sources => callback({ sources }))
            .catch((error) => callback({ error }));
    });
}
