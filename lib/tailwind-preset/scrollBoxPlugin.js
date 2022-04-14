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
exports.scrollBoxPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// NOTE: In case we want visible and fancy scrollbars https://www.filamentgroup.com/lab/scrollbars/
// @ts-ignore
exports.scrollBoxPlugin = (0, plugin_1["default"])(function (_a) {
    var addUtilities = _a.addUtilities, prefix = _a.prefix;
    addUtilities({
        '.ui-scroll-box': {
            overflow: 'hidden',
            'scroll-behavior': 'smooth',
            'scrollbar-width': 'none',
            '-ms-overflow-style': 'none',
            '-webkit-overflow-scrolling': 'touch',
            '&::-webkit-scrollbar': {
                display: 'none'
            }
        },
        '.ui-scroll-box-x': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-scroll-box')), { display: 'flex', justifyContent: 'flex-start', 'overflow-x': 'scroll', '&::-webkit-scrollbar': {
                display: 'none'
            } }),
        '.ui-scroll-box-y': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-scroll-box')), { 'overflow-y': 'scroll', '&::-webkit-scrollbar': {
                display: 'none'
            } })
    });
});
//# sourceMappingURL=scrollBoxPlugin.js.map