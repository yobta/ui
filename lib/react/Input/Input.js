"use strict";
exports.__esModule = true;
exports.PasswordInput = exports.Input = void 0;
var createInput_1 = require("./createInput");
exports.Input = (0, createInput_1.createInput)({});
exports.PasswordInput = (0, createInput_1.createInput)({
    autoCapitalize: 'off',
    autoComplete: 'current-password',
    autoCorrect: 'off',
    type: 'password'
});
//# sourceMappingURL=Input.js.map