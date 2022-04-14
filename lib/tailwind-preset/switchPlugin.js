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
exports.switchPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.switchPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-switch': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.appearance-none', '.relative', '.transition', '.duration-300', '.rounded-full', '.cursor-pointer', '.ui-bg-paper-3')), { height: '1.5rem', width: '2.25rem', '&::before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.bg-paper', '.shadow', '.absolute', '.block', '.transition-transform', '.duration-300')), { content: '""', height: 'calc(1.5rem - 2px)', width: 'calc(1.5rem - 2px)', top: 1, left: 1, borderRadius: 'inherit' }), '&:checked': {
                '&::before': {
                    transform: 'translateX(0.75rem)',
                    right: 1
                }
            } }),
        '.ui-switch-small': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-switch')), { height: '1rem', width: '1.75rem', '&::before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-bg-paper', '.shadow', '.absolute', '.block', '.transition-transform', '.duration-300')), { content: '""', height: 'calc(1rem - 2px)', width: 'calc(1rem - 2px)', top: 1, left: 1, borderRadius: 'inherit' }), '&:checked': {
                '&::before': {
                    transform: 'translateX(0.75rem)',
                    right: 1
                }
            } }),
        '.ui-switch-big': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-switch')), { height: '2rem', width: '3rem', '&::before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-bg-paper', '.shadow', '.absolute', '.block', '.transition-transform', '.duration-300')), { content: '""', height: 'calc(2rem - 2px)', width: 'calc(2rem - 2px)', top: 1, left: 1, borderRadius: 'inherit' }), '&:checked': {
                '&::before': {
                    transform: 'translateX(1rem)',
                    right: 1
                }
            } })
    });
});
//# sourceMappingURL=switchPlugin.js.map