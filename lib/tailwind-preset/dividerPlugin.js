"use strict";
/* eslint-disable @typescript-eslint/ban-ts-comment */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.dividerPlugin = void 0;
// @ts-ignore
var plugin_1 = __importDefault(require("tailwindcss/plugin"));
// @ts-ignore
exports.dividerPlugin = (0, plugin_1["default"])(function (_a) {
    var addBase = _a.addBase;
    addBase({
        'hr, .ui-divider': {
            borderWidth: '1px 0 0 0',
            borderTopColor: 'currentColor',
            opacity: 0.32
        }
    });
});
//# sourceMappingURL=dividerPlugin.js.map