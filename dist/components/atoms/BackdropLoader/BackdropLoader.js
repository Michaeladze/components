"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Preloader_1 = __importDefault(require("../Preloader"));
var BackdropLoader = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var _b = _a.className, className = _b === void 0 ? '' : _b, variant = _a.variant;
    return (react_1.default.createElement("div", { className: "rf__backdrop-loader " + className },
        react_1.default.createElement(Preloader_1.default, { size: 'large', variant: variant })));
};
exports.default = BackdropLoader;
