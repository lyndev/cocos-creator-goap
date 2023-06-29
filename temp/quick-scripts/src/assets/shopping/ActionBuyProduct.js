"use strict";
cc._RF.push(module, 'cca27Hf45VMLIOSVgKg70G0', 'ActionBuyProduct');
// shopping/ActionBuyProduct.ts

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
var ActionBuyProduct = /** @class */ (function (_super) {
    __extends(ActionBuyProduct, _super);
    function ActionBuyProduct() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasProduct", false);
        _this.addEffect("hasProduct", true);
        return _this;
    }
    ActionBuyProduct.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyProduct.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyProduct.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.goodsShelf) {
            this.target = ContextShop_1.default.goodsShelf;
            return true;
        }
        return false;
    };
    ActionBuyProduct.prototype.perform = function (node) {
        if (this.target.has(1)) {
            this.target.cost(1);
            var buyer = node.getComponent(Buyer_1.Buyer);
            buyer.addProduct(1, 1);
            if (buyer.hasProductFull(1)) {
                this.bDone = true;
                console.log("购物完成");
            }
        }
        return true;
    };
    ActionBuyProduct.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyProduct;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyProduct;

cc._RF.pop();