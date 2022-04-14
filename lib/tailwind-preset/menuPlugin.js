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
exports.menuPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.menuPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-menu': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list', '.rounded')),
        '.ui-menu-header': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list-header')),
        '.ui-menu-item': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list-item', '.w-full', '.text-left', '.relative', '.cursor-pointer')), { '&:before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.top-0', '.left-0', '.right-0', '.bottom-0', '.opacity-0', '.transition', '.duration-150')), { content: '""', backgroundColor: 'currentColor', borderRadius: 'inherit' }), '&:hover::before': {
                opacity: 0.04
            }, '&:active::before': {
                opacity: 0.8
            }, '&:disabled': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-disabled')) }),
        '.ui-menu-group': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list-group', '.w-full', '.text-left', '.relative', '.cursor-pointer')), { '&:before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.top-0', '.left-0', '.right-0', '.bottom-0', '.opacity-0', '.transition', '.duration-150')), { content: '""', backgroundColor: 'currentColor', borderRadius: 'inherit' }), '&:hover::before': {
                opacity: 0.08
            }, '&:active::before': {
                opacity: 0.16
            }, '&:disabled': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-disabled')) }),
        '.ui-menu-text': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list-text')),
        '.ui-menu-icon': __assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.ui-list-icon'))
    });
});
//# sourceMappingURL=menuPlugin.js.map