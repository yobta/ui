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
exports.buttonPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.buttonPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-button-text': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.text-sm', '.font-medium', '.leading-6')),
        '.ui-button': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.px-4', '.rounded', '.ui-button-text', '.flex', '.gap-2', '.items-center', '.justify-center', '.relative', '.h-10')), { transition: 'filter', '&:before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.top-0', '.left-0', '.right-0', '.bottom-0', '.opacity-0', '.transition', '.duration-150')), { content: '""', backgroundColor: 'currentColor', borderRadius: 'inherit' }), '&:hover::before': {
                opacity: 0.08
            }, '&:active::before': {
                opacity: 0.16
            }, '&:disabled': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-disabled')) }),
        '.ui-button--busy': {
            'pointer-events': 'none',
            '& > :first-child': {
                visibility: 'hidden',
                display: 'inherit',
                gap: 'inherit',
                flexDirection: 'inherit'
            },
            '& > :last-child': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.visible', '.absolute', '.left-1/2', '.top-1/2', '.transform', '.-translate-x-1/2', '.-translate-y-1/2'))
        }
    });
});
//# sourceMappingURL=buttonPlugin.js.map