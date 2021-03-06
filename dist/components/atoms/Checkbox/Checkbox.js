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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var check_icon_1 = __importDefault(require("../../_icons/check-icon"));
var helpers_1 = require("../../../utils/helpers");
var Checkbox = function (_a) {
    // -------------------------------------------------------------------------------------------------------------------
    var label = _a.label, value = _a.value, node = _a.node, _b = _a.icon, icon = _b === void 0 ? true : _b, _c = _a.variant, variant = _c === void 0 ? 'primary' : _c, _d = _a.size, size = _d === void 0 ? 'medium' : _d, props = __rest(_a, ["label", "value", "node", "icon", "variant", "size"]);
    /** Отображение иконки */
    var withIcon = icon && (react_1.default.createElement("span", { className: "rf-checkbox__check " + helpers_1.variantClass[variant] + " " + (node ? 'rf-checkbox__check--node' : '') },
        react_1.default.createElement("span", { className: 'rf-checkbox__mark' },
            react_1.default.createElement(check_icon_1.default, null))));
    // -------------------------------------------------------------------------------------------------------------------
    var onMouseDown = function (e) {
        e.currentTarget.classList.add('rf-checkbox--pressed');
    };
    var onMouseUp = function (e) {
        e.currentTarget.classList.remove('rf-checkbox--pressed');
    };
    // -------------------------------------------------------------------------------------------------------------------
    var disabledClass = props.disabled ? 'disabled' : '';
    // -------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("label", { className: "rf-checkbox " + disabledClass + " " + helpers_1.sizeClass[size] + " " + (props.className || '') + " ", onMouseDown: onMouseDown, onMouseUp: onMouseUp },
        react_1.default.createElement("input", __assign({}, props, { type: 'checkbox', className: 'rf-checkbox__input', value: value })),
        withIcon,
        label &&
            react_1.default.createElement("div", { className: "rf-checkbox__label " + (node ? 'rf-checkbox__label--node' : '') }, node || label)));
};
exports.default = Checkbox;
