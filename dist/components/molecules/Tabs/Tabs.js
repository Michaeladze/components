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
var Button_1 = __importDefault(require("../../atoms/Button"));
var react_router_dom_1 = require("react-router-dom");
var Tabs = function (_a) {
    var list = _a.list, _b = _a.type, type = _b === void 0 ? 'underline' : _b, _c = _a.size, size = _c === void 0 ? 'default' : _c, children = _a.children;
    var history = react_router_dom_1.useHistory();
    var pathname = react_router_dom_1.useLocation().pathname;
    /** Ссылки на вкладки */
    var refs = react_1.useRef([]);
    /** Ссылка на линию */
    var lineRef = react_1.useRef(null);
    /** Определяем, если вкладки являются ссылками для роутинга */
    var isRouting = react_1.useMemo(function () { return list.every(function (t) { return t.url; }); }, [list]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Управление полоской */
    var setLinePosition = function (element) {
        if (lineRef.current) {
            var width = element.offsetWidth;
            var x = element.offsetLeft;
            lineRef.current.style.left = x + "px";
            lineRef.current.style.width = width + "px";
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Определяем активную вкладку */
    var _d = react_1.useState(0), active = _d[0], setActive = _d[1];
    react_1.useEffect(function () {
        var index = list.findIndex(function (t) { return (isRouting ? t.url === pathname : t.active); });
        setActive(index >= 0 && !list[index].disabled ? index : 0);
    }, [list, pathname]);
    /** Устанавливаем активную вкладку */
    var onClick = function (_, i, element) {
        element && setLinePosition(element);
        if (isRouting && list[i].url) {
            history.push(list[i].url);
        }
        setActive(i);
    };
    // -------------------------------------------------------------------------------------------------------------------
    var buttonSize = size === 'small' ? 'small' : 'medium';
    /** Список вкладок */
    var nav = list.map(function (t, i) {
        if (!refs.current[i]) {
            refs.current[i] = react_1.createRef();
        }
        var className = "" + (i === active ? 'rf-tabs__button--active' : '');
        var handler = function (e) { return onClick(e, i, refs.current[i].current); };
        return (react_1.default.createElement("div", { key: i, className: 'rf-tabs__link', ref: refs.current[i] },
            react_1.default.createElement(Button_1.default, { className: "rf-tabs__button " + className, size: buttonSize, buttonType: 'text', disabled: t.disabled, onClick: handler }, t.label)));
    });
    /** Устанавливаем линию на активную вкладку при инициализации */
    react_1.useLayoutEffect(function () {
        if (nav.length > 0 && refs.current[active].current) {
            var element = refs.current[active].current;
            element && setLinePosition(element);
        }
    }, [nav]);
    // -------------------------------------------------------------------------------------------------------------------
    var typeClass = type === 'buttons' ? 'rf-tabs--buttons' : '';
    return (react_1.default.createElement("div", { className: "rf-tabs " + typeClass },
        react_1.default.createElement("nav", { className: 'rf-tabs__navigation ' },
            react_1.default.createElement("div", { className: 'rf-tabs__navigation-list' }, nav),
            react_1.default.createElement("div", { className: 'rf-tabs__navigation-line', ref: lineRef })),
        react_1.default.createElement("div", { className: 'rf-tabs__content' }, isRouting && children ? children : list[active].tab)));
};
exports.default = Tabs;
