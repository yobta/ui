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
exports.textAreaPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.textAreaPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-textarea': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.relative', '.flex', '.flex-col-reverse', '.text-ink', '.dark:text-ink-dark')), { '&.ui-textarea--fancy': {
                '&::before, &::after': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.pointer-events-none', '.block bottom-0', '.left-0', '.right-0')), { content: '""', height: '1px', opacity: 0.32, zIndex: 2, backgroundColor: 'currentColor' }),
                '&::after': {
                    opacity: 1,
                    height: '2px',
                    transform: 'scaleX(0)',
                    transition: 'transform 0.48s ease'
                },
                '&:focus-within::after': {
                    transform: 'scaleX(1)'
                },
                '& textarea': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.rounded-b-none', '.px-0', '.resize-none')), { backgroundColor: 'transparent' }),
                '& .ui-textarea__caption': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.px-0'))
            }, '& .ui-textarea__caption--error-bullet': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.hidden', '.ml-1', '.ui-ink-error')), '&.ui-textarea--filled, &:focus-within': {
                '& .ui-textarea__caption': {
                    'font-size': '0.64rem',
                    transform: 'translateY(0%)'
                }
            } }),
        '.ui-textarea__input': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.block', '.box-border', '.appearance-none', '.outline-none', '.rounded', '.bg-paper-2', '.dark:bg-paper-2-dark', '.w-full', '.px-4', '.py-2')), { '-webkit-tap-highlight-color': 'transparent', '&:invalid ~ .ui-textarea__caption .ui-textarea__caption--error-bullet': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.inline')), '&::placeholder': {
                color: 'inherit',
                opacity: 0.4
            } }),
        '.ui-textarea__caption': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.block', '.truncate', '.py-0', '.select-none', '.leading-6', '.px-4')), { transition: 'font 0.32s ease, transform 0.32s ease', transform: 'translateY(2rem)' })
    });
});
//# sourceMappingURL=textAreaPlugin.js.map