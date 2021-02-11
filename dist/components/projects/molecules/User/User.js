"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Button_1 = __importDefault(require("../../../atoms/Button"));
var UserPhoto_1 = __importDefault(require("../../atoms/UserPhoto"));
var index_1 = require("../../../../index");
var User = function (_a) {
    var actionsList = _a.actionsList, user = _a.user;
    return (react_1.default.createElement(react_1.default.Fragment, null, user && (react_1.default.createElement(index_1.Menu, { list: actionsList },
        react_1.default.createElement(Button_1.default, { className: 'app-header__user-button', buttonType: 'text' },
            react_1.default.createElement(UserPhoto_1.default, { url: user.photo, fullName: user.firstName + " " + user.lastName }),
            react_1.default.createElement("h4", { className: 'user__name' }, user.firstName))))));
};
exports.default = User;
