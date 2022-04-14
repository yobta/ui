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
exports.createInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var clsx_1 = __importDefault(require("clsx"));
var helpers_1 = require("../helpers");
var createInput = function (_a) {
    var configClassName = _a.className, configStyle = _a.style, config = __rest(_a, ["className", "style"]);
    return (0, react_1.forwardRef)(function (props, externalRef) {
        var _a = __assign(__assign({}, config), props), after = _a.after, before = _a.before, children = _a.children, caption = _a.caption, className = _a.className, defaultValue = _a.defaultValue, disabled = _a.disabled, _b = _a.error, error = _b === void 0 ? '•' : _b, fancy = _a.fancy, placeholder = _a.placeholder, style = _a.style, _c = _a.type, type = _c === void 0 ? 'text' : _c, value = _a.value, rest = __rest(_a, ["after", "before", "children", "caption", "className", "defaultValue", "disabled", "error", "fancy", "placeholder", "style", "type", "value"]);
        var defaultRef = (0, react_1.useRef)(null);
        var ref = externalRef || defaultRef;
        var _d = __read((0, react_1.useState)(), 2), state = _d[0], setState = _d[1];
        var node = (0, helpers_1.getRefCurrent)(ref);
        (0, react_1.useEffect)(function () {
            var currentNode = (0, helpers_1.getRefCurrent)(ref);
            function handleBlur() {
                setState(currentNode === null || currentNode === void 0 ? void 0 : currentNode.value);
            }
            function handleKeydown(event) {
                if (children && currentNode && event.code === 'Escape')
                    currentNode.blur();
            }
            if (currentNode) {
                if (state !== currentNode.value)
                    setState(currentNode.value);
                currentNode.addEventListener('blur', handleBlur);
                currentNode.addEventListener('keydown', handleKeydown);
            }
            return function () {
                if (currentNode) {
                    currentNode.removeEventListener('blur', handleBlur);
                    currentNode.removeEventListener('keydown', handleKeydown);
                }
            };
        }, [children, ref, state]);
        var isFilled = typeof (value || defaultValue || placeholder) !== 'undefined' ||
            !!(node === null || node === void 0 ? void 0 : node.value);
        return ((0, jsx_runtime_1.jsxs)("label", __assign({ className: (0, clsx_1["default"])('ui-input', after && 'ui-input--after', before && 'ui-input--before', children && 'ui-input--menu', disabled && 'ui-input--disabled', fancy && 'ui-input--fancy', isFilled && 'ui-input--filled', configClassName, className), style: __assign(__assign({}, configStyle), style) }, { children: [before, (0, jsx_runtime_1.jsxs)("span", __assign({ className: "ui-input__wrapper" }, { children: [(0, jsx_runtime_1.jsx)("input", __assign({}, rest, { defaultValue: defaultValue, disabled: disabled, placeholder: placeholder, ref: ref, type: type, value: value })), caption && ((0, jsx_runtime_1.jsxs)("span", __assign({ className: "ui-input__label" }, { children: [caption, (0, jsx_runtime_1.jsx)("span", __assign({ className: "ui-input__label--error-bullet" }, { children: error }))] })))] })), after, children && (0, jsx_runtime_1.jsx)("nav", __assign({ className: "ui-input__menu" }, { children: children }))] })));
    });
};
exports.createInput = createInput;
//# sourceMappingURL=createInput.js.map