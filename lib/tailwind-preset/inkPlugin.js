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
exports.inkPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.inkPlugin = (0, plugin_1["default"])(function (_a) {
    var addUtilities = _a.addUtilities, prefix = _a.prefix;
    // NOTE: Utility level in order to override border color on base level
    addUtilities({
        '.ui-ink': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink', '.text-ink', '.dark:border-ink-dark', '.dark:text-ink-dark')),
        '.ui-ink-2': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-2', '.text-ink-2', '.dark:border-ink-2-dark', '.dark:text-ink-2-dark')),
        '.ui-ink-primary': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-primary', '.text-ink-primary', '.dark:border-ink-primary-dark', '.dark:text-ink-primary-dark')),
        '.ui-ink-secondary': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-secondary', '.text-ink-secondary', '.dark:border-ink-secondary-dark', '.dark:text-ink-secondary-dark')),
        '.ui-ink-error': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-error', '.text-ink-error', '.dark:border-ink-error-dark', '.dark:text-ink-error-dark')),
        '.ui-ink-success': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-success', '.text-ink-success', '.dark:border-ink-success-dark', '.dark:text-ink-success-dark')),
        '.ui-ink-warning': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-warning', '.text-ink-warning', '.dark:border-ink-warning-dark', '.dark:text-ink-warning-dark')),
        '.ui-ink-info': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-info', '.text-ink-info', '.dark:border-ink-info-dark', '.dark:text-ink-info-dark')),
        '.ui-ink-border': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.border-ink-border', '.text-ink-border', '.dark:border-ink-border-dark', '.dark:text-ink-border-dark'))
    });
});
//# sourceMappingURL=inkPlugin.js.map