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
exports.checkboxPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.checkboxPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-checkbox': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.appearance-none', '.border-2', '.ui-ink', '.rounded', '.cursor-pointer', '.relative')), { height: '1.5rem', width: '1.5rem', minWidth: '1.5rem', '&::before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.left-0.5', '.top-0.5', '.right-0.5', '.bottom-0.5', '.rounded-sm', '.transform', '.scale-0', '.transition', '.duration-100')), { backgroundColor: 'currentColor', content: '""' }), '&:checked::before': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.scale-100')), '&:invalid': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-ink-error')), { '&::before': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-bg-error')) }) })
    });
});
//# sourceMappingURL=checkboxPlugin.js.map