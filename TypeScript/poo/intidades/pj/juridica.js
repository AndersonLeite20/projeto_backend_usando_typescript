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
exports.IJuridiquePeople = void 0;
var aconl_1 = require("../aconl");
var IJuridiquePeople = /** @class */ (function (_super) {
    __extends(IJuridiquePeople, _super);
    function IJuridiquePeople(cnpj, nomeOfholder, amount) {
        var _this = _super.call(this, cnpj, nomeOfholder, amount) || this;
        _this.cnpj = cnpj;
        _this.nome = nomeOfholder;
        _this.email = _this.email;
        return _this;
    }
    IJuridiquePeople.prototype.getcnpj = function () {
        return this.cnpj;
    };
    return IJuridiquePeople;
}(aconl_1.acount));
exports.IJuridiquePeople = IJuridiquePeople;
