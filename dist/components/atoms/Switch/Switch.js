"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var helpers_1 = require("../../../utils/helpers");
var Switch = function (_a) {
    var _b;
    var label = _a.label, _c = _a.state, state = _c === void 0 ? false : _c, _d = _a.disable, disable = _d === void 0 ? false : _d, _e = _a.animation, animation = _e === void 0 ? false : _e, onChange = _a.onChange, _f = _a.labelPosition, labelPosition = _f === void 0 ? 'right' : _f, _g = _a.variant, variant = _g === void 0 ? 'primary' : _g, _h = _a.size, size = _h === void 0 ? 'default' : _h, props = __rest(_a, ["label", "state", "disable", "animation", "onChange", "labelPosition", "variant", "size"]);
    var _j = react_1.useState(state), s = _j[0], toggle = _j[1];
    react_1.useEffect(function () {
        // в случае программного изменения тоже выдаем событие
        onChange && s !== state && onChange(state);
        toggle(state);
    }, [state]);
    var changeState = function () {
        onChange && onChange(!s);
        toggle(!s);
    };
    var classDisable = disable ? 'rf-switch--disable' : '';
    var classAnim = animation ? 'rf-switch--anim' : '';
    var classOther = (_b = props.className) !== null && _b !== void 0 ? _b : '';
    return (react_1.default.createElement("div", __assign({ tabIndex: 0, className: "rf-switch rf-switch__toggle-" + size + " " + classDisable + " " + classAnim + " " + classOther, onClick: changeState }, props),
        label && labelPosition === 'left' && react_1.default.createElement("p", { className: 'rf-switch__label rf-switch__label--left' }, label),
        react_1.default.createElement("div", { className: "rf-switch__toggle  " + (s ? 'rf-switch__toggle--on' : 'rf-switch__toggle--off') + " " + helpers_1.variantClass[variant] },
            react_1.default.createElement("div", { className: 'rf-switch__circle' })),
        label && labelPosition === 'right' && react_1.default.createElement("p", { className: 'rf-switch__label rf-switch__label--right' }, label)));
};
exports.default = Switch;
