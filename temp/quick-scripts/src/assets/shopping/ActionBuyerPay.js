"use strict";
cc._RF.push(module, '989b0AXXkJICJ1zdqh6X8AY', 'ActionBuyerPay');
// shopping/ActionBuyerPay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Buyer_1 = require("./Buyer");
var ContextShop_1 = require("./ContextShop");
var ActionBuyerPay = /** @class */ (function (_super) {
    __extends(ActionBuyerPay, _super);
    function ActionBuyerPay() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasProduct", true);
        _this.addPrecondition("payed", false);
        _this.addEffect("payed", true);
        return _this;
    }
    ActionBuyerPay.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyerPay.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyerPay.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.checkstand) {
            this.target = ContextShop_1.default.checkstand;
            return true;
        }
        return false;
    };
    ActionBuyerPay.prototype.perform = function (node) {
        var _this = this;
        var buyer = node.getComponent(Buyer_1.Buyer);
        var prods = buyer.getProducts();
        prods.forEach(function (prod, _) {
            _this.target.pay(prod);
        });
        this.bDone = true;
        console.log("结算完成");
        return true;
    };
    ActionBuyerPay.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyerPay;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyerPay;

cc._RF.pop();