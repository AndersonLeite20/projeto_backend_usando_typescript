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
exports.fisicpeopleacount = void 0;
var aconl_1 = require("../aconl");
var fisicpeopleacount = /** @class */ (function (_super) {
    __extends(fisicpeopleacount, _super);
    function fisicpeopleacount(cpf, name, email, nomeOfholder, amount) {
        var _this = _super.call(this, cpf, nomeOfholder, amount) || this;
        _this.cpf = cpf;
        _this.nome = name;
        _this.email = email;
        return _this;
    }
    return fisicpeopleacount;
}(aconl_1.acount));
exports.fisicpeopleacount = fisicpeopleacount;
