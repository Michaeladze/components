"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../../../utils/helpers");
var Tag = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'neutral' : _c, onClick = _a.onClick;
    var handler = function (e) {
        onClick && onClick(e);
    };
    var clickableClass = onClick ? 'rf-tag--clickable' : '';
    return (react_1.default.createElement("div", { className: "rf-tag " + helpers_1.variantClass[variant] + " " + clickableClass + " " + className, onClick: handler }, children));
};
exports.default = Tag;
