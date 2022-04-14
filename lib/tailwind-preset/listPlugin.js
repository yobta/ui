"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.listPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.listPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-list': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.px-0', '.py-2', '.m-0')),
        '.ui-list-header': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.text-sm', '.opacity-60', '.px-4', '.py-2', '.mb-2', '.block')),
        '.ui-list-item': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.px-4', '.py-2', '.m-0', '.block')),
        '.ui-list-group': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.flex', '.items-center', '.py-2', '.m-0')),
        '.ui-list-text': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.px-4', '.flex-1')),
        '.ui-list-icon': {
            marginLeft: 'calc(1rem + 2px)',
            marginRight: 'calc(1rem + 2px)'
        }
    });
});
//# sourceMappingURL=listPlugin.js.map