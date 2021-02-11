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
var plus_1 = __importDefault(require("../../../_icons/plus"));
var check_1 = __importDefault(require("../../../_icons/check"));
var close_1 = __importDefault(require("../../../_icons/close"));
var arrow_1 = __importDefault(require("../../../_icons/arrow"));
var react_2 = require("swiper/react");
var swiper_1 = __importStar(require("swiper"));
var index_1 = require("../../../../index");
var Preloader_1 = __importDefault(require("../../../atoms/Preloader"));
/** Подключение модулей*/
swiper_1.default.use([swiper_1.Navigation]);
var FindUsers = function (_a) {
    var onClose = _a.onClose, _b = _a.users, users = _b === void 0 ? [] : _b, _c = _a.searchData, searchData = _c === void 0 ? [] : _c, onSearch = _a.onSearch, getUsers = _a.getUsers, _d = _a.department, department = _d === void 0 ? 'Поиск по всем сотрудникам банка' : _d, _e = _a.loaded, loaded = _e === void 0 ? false : _e;
    /** Список выбранных людей */
    var _f = react_1.useState(users), selectedPeople = _f[0], setSelectedPeople = _f[1];
    var idSelectedPeople = selectedPeople.map(function (u) { return u.id; });
    /** Текущие результаты поиска */
    var _g = react_1.useState(''), searchString = _g[0], setSearchString = _g[1];
    // --------------------------------------------------------------------------------------------------------------------
    react_1.useEffect(function () {
        console.log(selectedPeople);
        onSearch && onSearch('', selectedPeople.length ? selectedPeople[0].structDepartmentId : '');
    }, []);
    var onSubmit = function () {
        // E.preventDefault();
        onClose && onClose();
        getUsers && getUsers(selectedPeople);
    };
    var inputHandle = function (data) {
        var value = data.target.value;
        setSearchString(value);
        onSearch && onSearch(value, selectedPeople.length ? selectedPeople[0].structDepartmentId : '');
    };
    var addHandle = function (item) {
        setSelectedPeople(selectedPeople.concat([item]));
    };
    var removeHandle = function (item) {
        setSelectedPeople(selectedPeople.filter(function (data) { return item.id !== data.id; }));
    };
    // --------------------------------------------------------------------------------------------------------------------
    /** Кнопки добавить / удалить */
    var buttonAdd = function (item) { return (react_1.default.createElement(index_1.Button, { className: 'list-users__button-add', onClick: function () { return addHandle(item); }, buttonType: 'round' },
        react_1.default.createElement(plus_1.default, null))); };
    var buttonCheck = function (item) { return (react_1.default.createElement(index_1.Button, { className: 'list-users__button-check', onClick: function () { return removeHandle(item); }, buttonType: 'round' },
        react_1.default.createElement(check_1.default, null))); };
    // --------------------------------------------------------------------------------------------------------------------
    /** Список найденных сотрудников */
    var listUsers = searchData
        .filter(function (item) {
        if (!selectedPeople.length) {
            return true;
        }
        return item.structDepartmentId === selectedPeople[0].structDepartmentId;
    })
        .map(function (item) { return (react_1.default.createElement("div", { className: 'list-users__wrapper', key: item.id },
        react_1.default.createElement(index_1.UserPhoto, { url: item.photo, radius: '48px', fullName: item.firstName + " " + item.lastName }),
        react_1.default.createElement("div", { className: 'list-users__texts-wrapper' },
            react_1.default.createElement("h3", { className: 'list-users__user-name' }, item.lastName + " " + item.firstName + " " + item.middleName),
            react_1.default.createElement("h5", { className: 'list-users__user-position' }, item.department)),
        idSelectedPeople.includes(item.id) ? buttonCheck(item) : buttonAdd(item))); });
    // --------------------------------------------------------------------------------------------------------------------
    /** Выбранные из списка пользователи */
    var listSelectedUsers = selectedPeople.map(function (item) { return (react_1.default.createElement(react_2.SwiperSlide, { className: 'selected_swiper-slide', key: item.id },
        react_1.default.createElement(index_1.UserPhoto, { url: item.photo, radius: '48px', fullName: item.firstName + " " + item.lastName }),
        react_1.default.createElement("h5", { className: 'selected__text' }, "" + item.lastName),
        react_1.default.createElement("h5", { className: 'selected__text' }, "" + item.firstName),
        react_1.default.createElement(index_1.Button, { className: 'selected__button', onClick: function () { return removeHandle(item); }, buttonType: 'round' },
            react_1.default.createElement(close_1.default, null)))); });
    // --------------------------------------------------------------------------------------------------------------------
    return (react_1.default.createElement("form", { className: 'find-users__wrapper' },
        react_1.default.createElement("h4", { className: 'find-users__title' }, "\u041F\u043E\u0438\u0441\u043A \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432"),
        react_1.default.createElement("p", { className: 'find-users__notice' }, "\u041F\u043E\u0438\u0441\u043A \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043F\u043E \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 \u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0434\u0440\u0430\u0437\u0434\u0435\u043B\u0435\u043D\u0438\u044F."),
        react_1.default.createElement("div", { className: 'find-users__input-wrapper' },
            react_1.default.createElement(index_1.Input, { className: 'find-users__input', placeholder: '\u041F\u043E\u0438\u0441\u043A', search: true, onKeyUp: inputHandle })),
        !!selectedPeople.length && (react_1.default.createElement("div", { className: 'swiper__container' },
            react_1.default.createElement("div", { className: 'swiper__wrapper' },
                react_1.default.createElement(react_2.Swiper, { spaceBetween: 0, slidesPerView: 'auto', navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    } }, listSelectedUsers)),
            react_1.default.createElement(index_1.Button, { buttonType: 'round', className: 'swiper-button-next' },
                react_1.default.createElement(arrow_1.default, null)),
            react_1.default.createElement(index_1.Button, { buttonType: 'round', className: 'swiper-button-prev' },
                react_1.default.createElement(arrow_1.default, null)))),
        react_1.default.createElement("h6", { className: 'find-users__subtitle' }, selectedPeople.length ? selectedPeople[0].structDepartmentName : department),
        react_1.default.createElement("div", { className: 'find-users__list-wrapper' }, loaded ? (searchString === '' || listUsers.length > 0 ? (listUsers) : (react_1.default.createElement("span", { className: 'find-users__message' }, "\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))) : (react_1.default.createElement(Preloader_1.default, null))),
        react_1.default.createElement(index_1.PopupFooter, { textAccept: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C', onSubmit: onSubmit })));
};
exports.default = FindUsers;
