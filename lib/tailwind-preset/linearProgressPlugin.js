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
exports.linearProgressPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
var applyPrefixed_1 = require("./applyPrefixed");
// @ts-ignore
exports.linearProgressPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase, prefix = _a.prefix;
    addBase({
        '.ui-linear-progress': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.animate-ui-linear-progress', '.block', '.h-1', '.relative', '.rounded')), { backgroundSize: '200% 100%', backgroundImage: "linear-gradient(\n          to right,\n          transparent 50%,\n          currentColor 50%,\n          currentColor 60%,\n          transparent 60%,\n          transparent 71.5%,\n          currentColor 71.5%,\n          currentColor 84%,\n          transparent 84%\n        )" }),
        '.ui-linear-progress::before': __assign(__assign({}, (0, applyPrefixed_1.applyPrefixed)(prefix, '.absolute', '.top-0', '.left-0', '.right-0', '.bottom-0', '.opacity-20')), { backgroundColor: 'currentColor', borderRadius: 'inherit', content: '""' })
    });
});
//# sourceMappingURL=linearProgressPlugin.js.map