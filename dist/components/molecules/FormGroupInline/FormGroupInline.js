"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../../../utils/helpers");
var FormGroupInline = function (_a) {
    var children = _a.children, className = _a.className, errorMessage = _a.errorMessage, label = _a.label, _b = _a.variant, variant = _b === void 0 ? 'error' : _b, required = _a.required;
    return (react_1.default.createElement("div", { className: "rf-inline-group " + className },
        react_1.default.createElement("div", { className: 'rf-inline-group__inner' },
            label && (react_1.default.createElement("p", { className: 'rf-inline-group__label' },
                label,
                " ",
                required && react_1.default.createElement("span", { className: 'rf-inline-group__required' }, "*"))),
            children),
        errorMessage && react_1.default.createElement("p", { className: "rf-inline-group__message " + helpers_1.variantClass[variant] }, errorMessage)));
};
exports.default = FormGroupInline;
