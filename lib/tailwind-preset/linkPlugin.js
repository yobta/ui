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
exports.linkPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.linkPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        'a.ui-link, .ui-link-box a': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.underline', '.text-link', '.dark:text-link-dark', '.active:text-link-active', '.dark:active:text-link-active-dark', '.hover:text-link-hover', '.dark:hover:text-link-hover-dark', '.visited:text-link-visited', '.dark:visited:text-link-visited-dark'))
    }, { variants: ['responsive', 'active', 'hover', 'visited', 'dark'] });
});
//# sourceMappingURL=linkPlugin.js.map