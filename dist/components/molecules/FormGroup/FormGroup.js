"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var helpers_1 = require("../../../utils/helpers");
var FormGroup = function (_a) {
    var label = _a.label, children = _a.children, message = _a.message, _b = _a.className, className = _b === void 0 ? '' : _b, _c = _a.variant, variant = _c === void 0 ? 'error' : _c, _d = _a.required, required = _d === void 0 ? false : _d;
    return (react_1.default.createElement("div", { className: "rf-form-group " + className },
        react_1.default.createElement("div", { className: 'rf-form-group__inner' },
            label && (react_1.default.createElement("p", { className: 'rf-form-group__label' },
                label,
                required && react_1.default.createElement("span", { className: 'rf-form-group__required' }, "*"))),
            children),
        message && react_1.default.createElement("p", { className: "rf-form-group__message " + helpers_1.variantClass[variant] }, message)));
};
exports.default = FormGroup;
