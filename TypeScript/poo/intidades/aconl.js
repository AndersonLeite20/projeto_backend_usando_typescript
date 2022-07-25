"use strict";
exports.__esModule = true;
exports.acount = void 0;
//atributos
var acount = /** @class */ (function () {
    //construtor
    function acount(nunberOFAcount, nomeOfholder, amount) {
        this._nunberOFAcount = this.generatenuberOfacount();
        this.nomeOfholder = nomeOfholder;
        this._amount = amount;
    }
    acount.prototype.getAmount = function () {
        return this._amount;
    };
    acount.prototype.getNunberOfacount = function () {
        return this._nunberOFAcount;
    };
    //métodos
    acount.prototype.generatenuberOfacount = function () {
        return Math.floor(Math.random() * 1000) + 1;
    };
    acount.prototype.opemAcount = function () {
        if (this._nunberOFAcount != null) {
            return true;
        }
        else {
            return false;
        }
    };
    acount.prototype.consultaomnt = function () {
        var response = "Seu saldo atual \u00E9 ".concat(this._amount);
        console.log(response);
        return response;
    };
    acount.prototype.adicionarVaoramount = function (value) {
        this._amount = this._amount + value;
        console.log(this._amount);
    };
    acount.prototype.removeValueOfamount = function (value) {
        if (this._amount < 0) {
            console.log('ERRO: Voçê não possui saldo.');
            return false;
        }
        else if (value > this._amount) {
            console.log('ERRO: Saldo insuficiente.');
            return false;
        }
        else {
            this._amount -= value;
            console.log('Operação realizada!');
            return true;
        }
    };
    return acount;
}());
exports.acount = acount;
