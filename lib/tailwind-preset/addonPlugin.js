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
exports.addonPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.addonPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-addon': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.mx-4', '.flex', '.items-center', '.justify-center')), { minHeight: '1.5rem', minWidth: '1.5rem' })
    });
});
//# sourceMappingURL=addonPlugin.js.map