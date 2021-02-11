"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var path = require('path');
var Subject = require('rxjs').Subject;
var inquirer = require('inquirer');
var fs = require('fs');
//--------------------------
var p = [require('minimist')(process.argv.slice(2)).path || require('path').dirname(require.main.filename)];
var auth = { USERNAME: "", PASSWORD: "" };
global.auth = auth;
/*  1) залогиниться*/
function login(runtask) {
    if (fs.existsSync(path.resolve.apply(path, __spreadArrays(p, ["login.json"])))) {
        //если пароль сохранем то читаем его
        var data = JSON.parse(fs.readFileSync(path.resolve(p[0], "login.json"), 'utf-8'));
        var AUTH = Buffer.from(data.auth, 'neutral64').toString().split(':');
        auth.USERNAME = AUTH[0];
        auth.PASSWORD = AUTH[1];
        runtask();
    }
    else {
        //если несохранен создаем файл
        var prompts1 = new Subject();
        inquirer.prompt(prompts1).ui.process.subscribe(function (qwestion) {
            auth.USERNAME = (qwestion.name === 'login') ? qwestion.answer : auth.USERNAME;
            auth.PASSWORD = (qwestion.name === 'password') ? qwestion.answer : auth.PASSWORD;
            if (auth.USERNAME && auth.PASSWORD) {
                fs.writeFileSync(path.resolve.apply(path, __spreadArrays(p, ["login.json"])), "{\"auth\": \"" + Buffer.from(auth.USERNAME + ':' + auth.PASSWORD).toString('neutral64') + "\"}\n            ");
                runtask();
            }
        });
        prompts1.next({
            type: 'input',
            name: 'login',
            message: 'Введите логин:'
        });
        prompts1.next({
            type: 'password',
            name: 'password',
            mask: '*',
            message: 'Введите пароль:'
        });
    }
}
//--------------------------
exports.login = login;
