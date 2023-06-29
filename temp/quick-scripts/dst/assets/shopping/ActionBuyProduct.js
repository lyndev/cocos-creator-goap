
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyProduct.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXlQcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCxpQ0FBK0I7QUFDL0IsNkNBQXVDO0FBR3ZDO0lBQThDLG9DQUFVO0lBR3BEO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBTlMsV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUk1QixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUN6QyxLQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDdEMsQ0FBQztJQUVELGdDQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtJQUN0QixDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRUQsc0RBQTJCLEdBQTNCLFVBQTRCLEVBQVc7UUFDbkMsSUFBSSxxQkFBVyxDQUFDLFVBQVUsRUFBRTtZQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLHFCQUFXLENBQUMsVUFBVSxDQUFBO1lBQ3BDLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxPQUFPLEtBQUssQ0FBQTtJQUNoQixDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLElBQWE7UUFDakIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxDQUFBO1lBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3RCLElBQUksS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7Z0JBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUE7YUFDdEI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBekNBLEFBeUNDLENBekM2Qyx1QkFBVSxHQXlDdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEJ1eWVyIH0gZnJvbSBcIi4vQnV5ZXJcIlxuaW1wb3J0IENvbnRleHRTaG9wIGZyb20gXCIuL0NvbnRleHRTaG9wXCJcbmltcG9ydCBHb29kc1NoZWxmIGZyb20gXCIuL0dvb2RzU2hlbGZcIlxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25CdXlQcm9kdWN0IGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJvdGVjdGVkIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBHb29kc1NoZWxmXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oXCJoYXNQcm9kdWN0XCIsIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChcImhhc1Byb2R1Y3RcIiwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoQ29udGV4dFNob3AuZ29vZHNTaGVsZikge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBDb250ZXh0U2hvcC5nb29kc1NoZWxmXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQuaGFzKDEpKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldC5jb3N0KDEpXG4gICAgICAgICAgICBsZXQgYnV5ZXIgPSBub2RlLmdldENvbXBvbmVudChCdXllcilcbiAgICAgICAgICAgIGJ1eWVyLmFkZFByb2R1Y3QoMSwgMSlcbiAgICAgICAgICAgIGlmIChidXllci5oYXNQcm9kdWN0RnVsbCgxKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYkRvbmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLotK3nianlrozmiJBcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=