type JitsiMeetExternalAPI = {
    on: (request: string, eventHandler: (request: any, callback: Function) => void) => void;
};
export default function setupRenderer(iframeAPI: JitsiMeetExternalAPI): void;
export {};
