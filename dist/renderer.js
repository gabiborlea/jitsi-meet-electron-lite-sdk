"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function setupRenderer(iframeAPI) {
    iframeAPI.on('_requestDesktopSources', (request, callback) => {
        const { options } = request;
        window.jitsiAPI.getDesktopSources(options)
            .then(sources => callback({ sources }))
            .catch((error) => callback({ error }));
    });
}
exports.default = setupRenderer;
