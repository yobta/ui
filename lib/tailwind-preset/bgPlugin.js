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
exports.paperPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.paperPlugin = (0, plugin_1["default"])(function (_a) {
    var addUtilities = _a.addUtilities, prefix = _a.prefix;
    addUtilities({
        '.ui-bg-paper': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper', '.dark:bg-paper-dark')),
        '.ui-bg-paper-2': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-2', '.dark:bg-paper-2-dark')),
        '.ui-bg-paper-3': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-3', '.dark:bg-paper-3-dark')),
        '.ui-bg-primary': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-primary', '.dark:bg-paper-primary-dark')),
        '.ui-bg-secondary': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-secondary', '.dark:bg-paper-secondary-dark')),
        '.ui-bg-error': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-error', '.dark:bg-paper-error-dark')),
        '.ui-bg-success': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-success', '.dark:bg-paper-success-dark')),
        '.ui-bg-warning': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-warning', '.dark:bg-paper-warning-dark')),
        '.ui-bg-info': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper-info', '.dark:bg-paper-info-dark')),
        '.ui-bg-1': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-1', '.dark:bg-1-dark')),
        '.ui-bg-2': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-2', '.dark:bg-2-dark')),
        '.ui-bg-3': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-3', '.dark:bg-3-dark')),
        '.ui-bg-4': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-4', '.dark:bg-4-dark')),
        '.ui-bg-5': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-5', '.dark:bg-5-dark')),
        '.ui-bg-6': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-6', '.dark:bg-6-dark')),
        '.ui-bg-7': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-7', '.dark:bg-7-dark')),
        '.ui-bg-8': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-8', '.dark:bg-8-dark')),
        '.ui-bg-9': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-9', '.dark:bg-9-dark')),
        '.ui-bg-10': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-10', '.dark:bg-10-dark')),
        '.ui-bg-11': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-11', '.dark:bg-11-dark')),
        '.ui-bg-12': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-12', '.dark:bg-12-dark')),
        '.ui-bg-13': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-13', '.dark:bg-13-dark')),
        '.ui-bg-14': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-14', '.dark:bg-14-dark')),
        '.ui-bg-15': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-15', '.dark:bg-15-dark')),
        '.ui-bg-16': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-16', '.dark:bg-16-dark'))
    }, { variants: ['checked', 'focus-within'] });
});
//# sourceMappingURL=bgPlugin.js.map