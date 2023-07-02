
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
    function ActionBuyProduct(cfgId) {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.cfgId = cfgId;
        _this.addPrecondition("hasProduct" + cfgId, false);
        _this.addEffect("hasProduct" + cfgId, true);
        return _this;
    }
    ActionBuyProduct.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyProduct.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyProduct.prototype.checkProceduralPrecondition = function (go) {
        if (this.cfgId == 1) {
            if (ContextShop_1.default.goodsShelf) {
                this.target = ContextShop_1.default.goodsShelf;
                return true;
            }
        }
        else if (this.cfgId == 2) {
            if (ContextShop_1.default.goodsShelf2) {
                this.target = ContextShop_1.default.goodsShelf2;
                return true;
            }
        }
        return false;
    };
    ActionBuyProduct.prototype.perform = function (node) {
        if (this.target.has(this.cfgId)) {
            this.target.cost(this.cfgId);
            var buyer = node.getComponent(Buyer_1.Buyer);
            buyer.addProduct(this.cfgId, 1);
            if (buyer.hasProductFull(this.cfgId)) {
                this.bDone = true;
                console.log("购物完成", this.target.node.name, this.cfgId);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXlQcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCxpQ0FBK0I7QUFDL0IsNkNBQXVDO0FBR3ZDO0lBQThDLG9DQUFVO0lBSXBELDBCQUFZLEtBQUs7UUFBakIsWUFDSSxpQkFBTyxTQUlWO1FBUlMsV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUs1QixLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixLQUFJLENBQUMsZUFBZSxDQUFDLFlBQVksR0FBRyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUM5QyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxzREFBMkIsR0FBM0IsVUFBNEIsRUFBVztRQUNuQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO1lBQ2pCLElBQUkscUJBQVcsQ0FBQyxVQUFVLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUE7Z0JBQ3BDLE9BQU8sSUFBSSxDQUFBO2FBQ2Q7U0FDSjthQUFNLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxxQkFBVyxDQUFDLFdBQVcsRUFBRTtnQkFDekIsSUFBSSxDQUFDLE1BQU0sR0FBRyxxQkFBVyxDQUFDLFdBQVcsQ0FBQTtnQkFDckMsT0FBTyxJQUFJLENBQUE7YUFDZDtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUE7SUFDaEIsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFhO1FBQ2pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQUssQ0FBQyxDQUFBO1lBQ3BDLEtBQUssQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQTtZQUMvQixJQUFJLEtBQUssQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtnQkFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUN6RDtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBRUQsMENBQWUsR0FBZjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRDZDLHVCQUFVLEdBa0R2RCIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgQnV5ZXIgfSBmcm9tIFwiLi9CdXllclwiXG5pbXBvcnQgQ29udGV4dFNob3AgZnJvbSBcIi4vQ29udGV4dFNob3BcIlxuaW1wb3J0IEdvb2RzU2hlbGYgZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbkJ1eVByb2R1Y3QgZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcm90ZWN0ZWQgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IEdvb2RzU2hlbGZcbiAgICBwcml2YXRlIGNmZ0lkOiBudW1iZXJcbiAgICBjb25zdHJ1Y3RvcihjZmdJZCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuY2ZnSWQgPSBjZmdJZFxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihcImhhc1Byb2R1Y3RcIiArIGNmZ0lkLCBmYWxzZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoXCJoYXNQcm9kdWN0XCIgKyBjZmdJZCwgdHJ1ZSlcbiAgICB9XG5cbiAgICByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy5jZmdJZCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoQ29udGV4dFNob3AuZ29vZHNTaGVsZikge1xuICAgICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AuZ29vZHNTaGVsZlxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jZmdJZCA9PSAyKSB7XG4gICAgICAgICAgICBpZiAoQ29udGV4dFNob3AuZ29vZHNTaGVsZjIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IENvbnRleHRTaG9wLmdvb2RzU2hlbGYyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMudGFyZ2V0Lmhhcyh0aGlzLmNmZ0lkKSkge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQuY29zdCh0aGlzLmNmZ0lkKVxuICAgICAgICAgICAgbGV0IGJ1eWVyID0gbm9kZS5nZXRDb21wb25lbnQoQnV5ZXIpXG4gICAgICAgICAgICBidXllci5hZGRQcm9kdWN0KHRoaXMuY2ZnSWQsIDEpXG4gICAgICAgICAgICBpZiAoYnV5ZXIuaGFzUHJvZHVjdEZ1bGwodGhpcy5jZmdJZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi6LSt54mp5a6M5oiQXCIsIHRoaXMudGFyZ2V0Lm5vZGUubmFtZSwgdGhpcy5jZmdJZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=