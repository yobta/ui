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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.createTextArea = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var helpers_1 = require("../helpers");
var createTextArea = function (_a) {
    var configClassName = _a.className, configCaptionClassName = _a.captionClassName, configStyle = _a.style, configWrapperClassName = _a.wrapperClassName, config = __rest(_a, ["className", "captionClassName", "style", "wrapperClassName"]);
    return (0, react_1.forwardRef)(function (props, externalRef) {
        var _a = __assign(__assign({}, config), props), autoHeight = _a.autoHeight, caption = _a.caption, className = _a.className, defaultValue = _a.defaultValue, _b = _a.error, error = _b === void 0 ? '•' : _b, fancy = _a.fancy, captionClassName = _a.captionClassName, placeholder = _a.placeholder, style = _a.style, value = _a.value, wrapperClassName = _a.wrapperClassName, rest = __rest(_a, ["autoHeight", "caption", "className", "defaultValue", "error", "fancy", "captionClassName", "placeholder", "style", "value", "wrapperClassName"]);
        var defaultRef = (0, react_1.useRef)(null);
        var ref = externalRef || defaultRef;
        var _c = __read((0, react_1.useState)(), 2), state = _c[0], setState = _c[1];
        (0, react_1.useEffect)(function () {
            var node = (0, helpers_1.getRefCurrent)(ref);
            function handleBlur() {
                setState(node === null || node === void 0 ? void 0 : node.value);
            }
            function handleInput() {
                if (autoHeight && node) {
                    node.style.height = 'auto';
                    node.style.height = "".concat(node.scrollHeight, "px");
                }
            }
            if (node) {
                if (state !== node.value)
                    setState(node.value);
                node.addEventListener('blur', handleBlur);
                node.addEventListener('input', handleInput);
            }
            return function () {
                if (node) {
                    node.removeEventListener('blur', handleBlur);
                    node.removeEventListener('input', handleInput);
                }
            };
        }, [autoHeight, ref, state]);
        var isFilled = typeof (value || defaultValue || placeholder) !== 'undefined' || !!state;
        return ((0, jsx_runtime_1.jsxs)("label", __assign({ className: (0, clsx_1["default"])('ui-textarea', isFilled && 'ui-textarea--filled', fancy && 'ui-textarea--fancy', configWrapperClassName, wrapperClassName) }, { children: [(0, jsx_runtime_1.jsx)("textarea", __assign({}, rest, { className: (0, clsx_1["default"])('ui-textarea__input', configClassName, className), defaultValue: defaultValue, placeholder: placeholder, ref: ref, style: __assign(__assign({}, configStyle), style), value: value })), caption && ((0, jsx_runtime_1.jsxs)("span", __assign({ className: (0, clsx_1["default"])('ui-textarea__caption', configCaptionClassName, captionClassName) }, { children: [caption, (0, jsx_runtime_1.jsx)("span", __assign({ className: "ui-textarea__caption--error-bullet" }, { children: error }))] })))] })));
    });
};
exports.createTextArea = createTextArea;
//# sourceMappingURL=createTextArea.js.map