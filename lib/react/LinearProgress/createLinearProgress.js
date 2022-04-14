"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createLinearProgress = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var defaultElement = 'div';
var createLinearProgress = function (_a) {
    var configClassName = _a.className, configElement = _a.element, configStyle = _a.style, config = __rest(_a, ["className", "element", "style"]);
    return (0, react_1.forwardRef)(function (_a, ref) {
        var className = _a.className, _b = _a.role, role = _b === void 0 ? 'progressbar' : _b, element = _a.element, style = _a.style, rest = __rest(_a, ["className", "role", "element", "style"]);
        var Tag = configElement || element || defaultElement;
        return ((0, jsx_runtime_1.jsx)(Tag, __assign({}, config, rest, { className: (0, clsx_1["default"])('ui-linear-progress', configClassName, className), ref: ref, role: role, style: __assign(__assign({}, configStyle), style) })));
    });
};
exports.createLinearProgress = createLinearProgress;
//# sourceMappingURL=createLinearProgress.js.map