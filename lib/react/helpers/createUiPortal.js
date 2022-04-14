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
exports.__esModule = true;
exports.createUiPortal = exports.context = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_dom_1 = require("react-dom");
exports.context = (0, react_1.createContext)({});
var defaultID = 'ui-portal';
var createUiPortal = function (children, nodeId) {
    var _a = __read((0, react_1.useState)(false), 2), isMounted = _a[0], setIsMounted = _a[1];
    (0, react_1.useEffect)(function () {
        setIsMounted(true);
    }, []);
    if (isMounted) {
        var id = nodeId || defaultID;
        var node = document.getElementById(id);
        if (!node) {
            node = document.createElement('div');
            node.setAttribute('id', id);
            document.body.appendChild(node);
        }
        return (0, react_dom_1.createPortal)(children, node);
    }
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: "hidden" }, { children: children }));
};
exports.createUiPortal = createUiPortal;
//# sourceMappingURL=createUiPortal.js.map