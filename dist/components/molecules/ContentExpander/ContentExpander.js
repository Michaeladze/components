"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var angle_down_1 = __importDefault(require("../../_icons/angle-down"));
var ContentExpander = function (_a) {
    var title = _a.title, children = _a.children, onExpand = _a.onExpand, expanded = _a.expanded, _b = _a.defaultValue, defaultValue = _b === void 0 ? false : _b, _c = _a.className, className = _c === void 0 ? '' : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    /** Раскрыть / Скрыть */
    var _e = react_1.useState(defaultValue), innerExpanded = _e[0], setInnerExpanded = _e[1];
    var onClick = function () {
        if (disabled) {
            return;
        }
        onExpand ? onExpand() : setInnerExpanded(!innerExpanded);
    };
    var disabledClass = disabled ? 'expander--disabled' : '';
    return (react_1.default.createElement("div", { className: "expander " + className + " " + disabledClass },
        react_1.default.createElement("h3", { className: 'expander__title', onClick: onClick },
            react_1.default.createElement("span", { className: 'expander__title-text' }, title),
            react_1.default.createElement(angle_down_1.default, { className: "expander__icon " + (expanded || innerExpanded ? 'expander__icon--rotate' : '') })),
        react_1.default.createElement("div", { className: "expander__content " + (onExpand || innerExpanded ? 'expander__content--active' : '') }, children)));
};
exports.default = ContentExpander;
