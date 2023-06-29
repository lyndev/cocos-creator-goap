
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyerPay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXllclBheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFDMUQsaUNBQStCO0FBRS9CLDZDQUF1QztBQUV2QztJQUE0QyxrQ0FBVTtJQUdsRDtRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVBTLFdBQUssR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDeEMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDcEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ2pDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7SUFDdEIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVELG9EQUEyQixHQUEzQixVQUE0QixFQUFXO1FBQ25DLElBQUkscUJBQVcsQ0FBQyxVQUFVLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFVBQVUsQ0FBQTtZQUNwQyxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELGdDQUFPLEdBQVAsVUFBUSxJQUFhO1FBQXJCLGlCQVNDO1FBUkcsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFLLENBQUMsQ0FBQTtRQUNwQyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxDQUFDO1lBQ2xCLEtBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3pCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUNuQixPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFRCx3Q0FBZSxHQUFmO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXhDQSxBQXdDQyxDQXhDMkMsdUJBQVUsR0F3Q3JEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBCdXllciB9IGZyb20gXCIuL0J1eWVyXCJcbmltcG9ydCBDaGVja3N0YW5kIGZyb20gXCIuL0NoZWNrc3RhbmRcIlxuaW1wb3J0IENvbnRleHRTaG9wIGZyb20gXCIuL0NvbnRleHRTaG9wXCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV5ZXJQYXkgZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcm90ZWN0ZWQgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IENoZWNrc3RhbmRcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc1Byb2R1Y3RcIiwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oXCJwYXllZFwiLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJwYXllZFwiLCB0cnVlKVxuICAgIH1cblxuICAgIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICB9XG5cbiAgICBpc0RvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmJEb25lXG4gICAgfVxuXG4gICAgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChDb250ZXh0U2hvcC5jaGVja3N0YW5kKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IENvbnRleHRTaG9wLmNoZWNrc3RhbmRcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBidXllciA9IG5vZGUuZ2V0Q29tcG9uZW50KEJ1eWVyKVxuICAgICAgICBsZXQgcHJvZHMgPSBidXllci5nZXRQcm9kdWN0cygpXG4gICAgICAgIHByb2RzLmZvckVhY2goKHByb2QsIF8pID0+IHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0LnBheShwcm9kKVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICBjb25zb2xlLmxvZyhcIue7k+eul+WujOaIkFwiKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=