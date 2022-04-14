"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Cache = void 0;
var react_1 = require("react");
var Cache = /** @class */ (function (_super) {
    __extends(Cache, _super);
    function Cache() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cache.prototype.shouldComponentUpdate = function (_a) {
        var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
        return disabled;
    };
    Cache.prototype.render = function () {
        return this.props.children;
    };
    return Cache;
}(react_1.Component));
exports.Cache = Cache;
//# sourceMappingURL=Cache.js.map