"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../../../utils/helpers");
var Preloader = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 'medium' : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c;
    return (react_1.default.createElement("div", { className: "preloader " + helpers_1.sizeClass[size] + " " + helpers_1.variantClass[variant] },
        react_1.default.createElement("div", { className: 'preloader__circle' })));
};
exports.default = Preloader;
