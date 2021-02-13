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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var useClickOutside_1 = __importDefault(require("../../../hooks/useClickOutside"));
var index_1 = require("../../../index");
var angle_down_1 = __importDefault(require("../../_icons/angle-down"));
var close_1 = __importDefault(require("../../_icons/close"));
var Chips_1 = __importDefault(require("../../molecules/Chips/Chips"));
var helpers_1 = require("../../../utils/helpers");
var Select = function (_a) {
    var options = _a.options, _b = _a.multiSelect, multiSelect = _b === void 0 ? false : _b, value = _a.value, onChange = _a.onChange, getValue = _a.getValue, _c = _a.size, size = _c === void 0 ? 'small' : _c, onChipRemove = _a.onChipRemove, props = __rest(_a, ["options", "multiSelect", "value", "onChange", "getValue", "size", "onChipRemove"]);
    /** Ссылка на текущий компонент */
    var componentNode = react_1.useRef(null);
    // -------------------------------------------------------------------------------------------------------------------
    /** Отображение дропдауна с значениями */
    var _d = react_1.useState(false), showDropdown = _d[0], toggleDropdown = _d[1];
    var dropdownRef = react_1.useRef(null);
    /** При открытии выпадающего списка поднимаем скролл наверх */
    react_1.useEffect(function () {
        if (showDropdown && dropdownRef.current) {
            dropdownRef.current.scrollTop = 0;
        }
    }, [showDropdown]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Отфильтрованные значения */
    var _e = react_1.useState(new Map()), hiddenOptions = _e[0], setHiddenOptions = _e[1];
    /** Функция фильтрации списка */
    var onFilter = function (options, search) {
        return options.reduce(function (acc, o) {
            if (!o.label.toLowerCase().includes(search.toLowerCase())) {
                acc.set(o.value, true);
            }
            return acc;
        }, new Map());
    };
    /** Поиск внутри селекта */
    var onSearch = function (e) {
        if (props.readOnly) {
            return;
        }
        var result = new Map();
        var search = e.target.value;
        if (search) {
            result = onFilter(options, search);
        }
        /** Скрываем выпадающий список, если ничего не найдено */
        if (options.length === result.size) {
            showDropdown && toggleDropdown(false);
        }
        else {
            !showDropdown && toggleDropdown(true);
        }
        setHiddenOptions(result);
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Визуальное значение */
    var initInputValue = function () {
        if (typeof value === 'string') {
            if (multiSelect) {
                return '';
            }
            var tmp = options.find(function (o) { return o.value === value; });
            return (tmp === null || tmp === void 0 ? void 0 : tmp.label) || '';
        }
        return '';
    };
    var _f = react_1.useState(initInputValue()), inputValue = _f[0], setInputValue = _f[1];
    react_1.useEffect(function () {
        setInputValue(initInputValue());
    }, [value]);
    /** Текущее значение */
    var initCurrentValue = function () {
        if (Array.isArray(value)) {
            if (multiSelect && value.length !== 0) {
                return options.filter(function (o) { return value.includes(o.value); });
            }
            return [];
        }
        return options.filter(function (o) { return o.value === value; });
    };
    var _g = react_1.useState(initCurrentValue()), currentValue = _g[0], setCurrentValue = _g[1];
    var onOptionRemove = function (value) {
        return currentValue.filter(function (e) { return e.value !== value; });
    };
    react_1.useEffect(function () {
        setCurrentValue(initCurrentValue());
    }, [value]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Изменение значений из выпадающего списка */
    var onOptionChange = function (e, o) {
        if (multiSelect) {
            var el = e.target;
            setCurrentValue(el.checked ? __spreadArrays(currentValue, [o]) : onOptionRemove(o.value));
        }
        else {
            setInputValue(o.label);
            setCurrentValue([o]);
            toggleDropdown(false);
            setHiddenOptions(new Map());
        }
    };
    /** Закрыть выпадающий список при клике на radio кнопку, так как на ней может не сработать change */
    var onOptClick = function (e) {
        e.stopPropagation();
        toggleDropdown(false);
    };
    /** Выпадающий список с значениями */
    var optionsList = react_1.useMemo(function () {
        return options.map(function (v) {
            var onOptChange = function (e) {
                onOptionChange(e, v);
                onChange && onChange(e, v);
                getValue && getValue(v);
            };
            var hiddenClass = hiddenOptions.has(v.value) ? 'rf-select__list-item--hidden' : '';
            var defaultChecked = !!currentValue.find(function (o) { return o.value === v.value; });
            return (react_1.default.createElement("li", { className: "rf-select__list-item " + hiddenClass, key: v.value }, multiSelect ? (react_1.default.createElement(index_1.Checkbox, __assign({}, v, { name: props.name || 'defaultSelectName', onChange: onOptChange, checked: defaultChecked }))) : (react_1.default.createElement(index_1.Radio, __assign({}, v, { name: props.name || 'defaultSelectName', onChange: onOptChange, onClick: onOptClick, checked: defaultChecked, icon: false })))));
        });
    }, [options, currentValue, hiddenOptions]);
    // -------------------------------------------------------------------------------------------------------------------
    /** Клик по инпуту открывает выпадающий список */
    var onInputClick = function () {
        if (options.length !== hiddenOptions.size) {
            toggleDropdown(true);
        }
    };
    var openSelectDropdown = function () {
        if (showDropdown) {
            toggleDropdown(false);
        }
        else {
            onInputClick();
        }
    };
    /** ChangeEvent для возможности записывать currentValue в input */
    var onInputChange = function (e) {
        setInputValue(e.target.value);
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Чипсы под инпутом для множественного выбора */
    var chips = currentValue.map(function (o) { return ({
        id: o.value,
        name: o.label,
        disabled: o.disabled
    }); });
    /** Функция удаления чипсы */
    var onChipsRemove = function (id) {
        if (componentNode.current) {
            var checkbox = componentNode.current.querySelector("input[value='" + id + "']");
            if (checkbox) {
                var event_1 = new Event('change');
                checkbox.dispatchEvent(event_1);
                checkbox.checked = false;
            }
        }
        onChipRemove && onChipRemove(id, props.name);
        setCurrentValue(onOptionRemove(id));
    };
    var chipsJSX = multiSelect && chips.length > 0 && (react_1.default.createElement("div", { className: 'rf-select__chips' },
        react_1.default.createElement(Chips_1.default, { variant: 'neutral', items: chips, onRemove: onChipsRemove, disabled: props.disabled, size: size })));
    // -------------------------------------------------------------------------------------------------------------------
    /** Очистка оля ввода */
    var clearInput = function () {
        setInputValue('');
        if (componentNode.current) {
            var input = componentNode.current.querySelector('input.rf-input__field');
            if (input) {
                input.focus();
                toggleDropdown(true);
                setHiddenOptions(new Map());
            }
        }
    };
    // -------------------------------------------------------------------------------------------------------------------
    /** Функция отслеживания клика вне элемента */
    var handleClickOutside = react_1.useCallback(function () {
        var _a;
        toggleDropdown(false);
        setHiddenOptions(new Map());
        setInputValue(multiSelect ? '' : ((_a = currentValue[0]) === null || _a === void 0 ? void 0 : _a.label) || '');
    }, [currentValue]);
    useClickOutside_1.default(componentNode, handleClickOutside);
    // -------------------------------------------------------------------------------------------------------------------
    var clearIconClass = !props.readOnly && inputValue.length > 0 ? 'rf-select__input-clear--show' : '';
    return (react_1.default.createElement("div", { className: "rf-select " + (props.className || '') + " " + helpers_1.sizeClass[size], ref: componentNode },
        react_1.default.createElement("div", { className: 'rf-select__input-wrapper' },
            react_1.default.createElement(index_1.Input, { placeholder: props.placeholder, value: inputValue, readOnly: props.readOnly, onChange: onInputChange, onKeyUp: onSearch, onClick: onInputClick, disabled: props.disabled, size: size }),
            react_1.default.createElement("button", { disabled: props.disabled, className: "rf-select__input-icon rf-select__input-clear " + clearIconClass },
                react_1.default.createElement(close_1.default, { onClick: clearInput })),
            react_1.default.createElement("button", { disabled: props.disabled, className: "rf-select__input-icon rf-select__input-angle\n                " + (showDropdown ? 'rf-select__input-angle--rotate' : ''), onClick: openSelectDropdown },
                react_1.default.createElement(angle_down_1.default, null))),
        react_1.default.createElement("ul", { className: "rf-select__list " + (showDropdown ? 'rf-select__list--show' : ''), ref: dropdownRef, onScroll: function (e) { return e.stopPropagation(); } }, optionsList),
        chipsJSX));
};
exports.default = Select;
