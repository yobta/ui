"use strict";
exports.__esModule = true;
exports.applyPrefixed = void 0;
var screen = function (item) {
    return item.replace(/(\d)\.(\d)/, '$1\\.$2').replace(/\//, '\\/');
};
var unscreen = function (item) { return item.replace('\\', ''); };
var applyPrefixed = function (prefix) {
    var _a;
    var classes = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classes[_i - 1] = arguments[_i];
    }
    var next = classes
        .map(function (item) {
        var screened = screen(item);
        var prefixed = prefix(screened).slice(1);
        return unscreen(prefixed);
    })
        .join(' ');
    return _a = {},
        _a["@apply ".concat(next)] = {},
        _a;
};
exports.applyPrefixed = applyPrefixed;
//# sourceMappingURL=applyPrefixed.js.map