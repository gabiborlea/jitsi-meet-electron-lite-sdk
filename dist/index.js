"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupRenderer = exports.setupPreload = exports.setupMain = void 0;
const main_1 = __importDefault(require("./main"));
exports.setupMain = main_1.default;
const preload_1 = __importDefault(require("./preload"));
exports.setupPreload = preload_1.default;
const renderer_1 = __importDefault(require("./renderer"));
exports.setupRenderer = renderer_1.default;
