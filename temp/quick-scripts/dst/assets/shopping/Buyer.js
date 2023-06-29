
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/Buyer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '528f7yNkydCpZXs3AjEbymy', 'Buyer');
// shopping/Buyer.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Buyer = void 0;
var GoapAgent_1 = require("../src/app/ai/goap/GoapAgent");
var ActionBuyerLeave_1 = require("./ActionBuyerLeave");
var ActionBuyerPay_1 = require("./ActionBuyerPay");
var ActionBuyProduct_1 = require("./ActionBuyProduct");
var GoodsShelf_1 = require("./GoodsShelf");
var ccclass = cc._decorator.ccclass;
var Buyer = /** @class */ (function (_super) {
    __extends(Buyer, _super);
    function Buyer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bMoving = false;
        _this.bMoveEnd = false;
        return _this;
    }
    Buyer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.needPrdoucts = new Map();
        var needProd = new GoodsShelf_1.Product();
        needProd.amount = 0;
        needProd.cfgId = 1;
        needProd.maxAmount = 20;
        this.needPrdoucts.set(1, needProd);
        var goapAgent = this.getComponent(GoapAgent_1.GoapAgent);
        goapAgent.setGoap(this);
        this.initAvaliableActions([ActionBuyProduct_1.default, ActionBuyerPay_1.default, ActionBuyerLeave_1.default]);
    };
    Buyer.prototype.getProducts = function () {
        return this.needPrdoucts;
    };
    Buyer.prototype.initAvaliableActions = function (actionCls) {
        var action;
        this.availableActions = [];
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.availableActions.push(action);
        }
    };
    Buyer.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Buyer.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set("hasProduct", false);
        worldData.set("payed", false);
        worldData.set("leaved", false);
        return worldData;
    };
    Buyer.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set("leaved", true);
        return goal;
    };
    Buyer.prototype.planFailed = function (failedGoad) { };
    Buyer.prototype.planFound = function (goal, actions) {
        console.log("Plan found: ", GoapAgent_1.GoapAgent.prettyPrintActionsQueue(actions));
    };
    Buyer.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    Buyer.prototype.planAborted = function (aborter) {
        console.log("Plan Aborted: " + GoapAgent_1.GoapAgent.prettyPrintAction(aborter));
    };
    Buyer.prototype.moveAgent = function (nextAction, delta) {
        var _this = this;
        var target = nextAction.target;
        if (this.bMoveEnd) {
            this.bMoveEnd = false;
            return true;
        }
        if (!this.bMoving) {
            this.bMoving = true;
            var actions = [];
            actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)));
            actions.push(cc.callFunc(function () {
                _this.bMoveEnd = true;
                _this.bMoving = false;
                nextAction.setInRange(true);
            }));
            this.node.stopAllActions();
            this.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    Buyer.prototype.addProduct = function (cfgId, v) {
        var product = this.needPrdoucts.get(cfgId);
        if (!product) {
            return;
        }
        product.amount += v;
        product.amount = Math.min(product.amount, product.maxAmount);
        console.log("buy prod", product.cfgId, product.amount);
    };
    Buyer.prototype.hasProductFull = function (cfgId) {
        var product = this.needPrdoucts.get(cfgId);
        if (!product) {
            throw "unvalid product" + cfgId;
        }
        return product.amount >= product.maxAmount;
    };
    Buyer.prototype.updateBackPack = function () { };
    Buyer = __decorate([
        ccclass
    ], Buyer);
    return Buyer;
}(GoapAgent_1.GoapAgent));
exports.Buyer = Buyer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9CdXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMERBQXdEO0FBRXhELHVEQUFpRDtBQUNqRCxtREFBNkM7QUFDN0MsdURBQWlEO0FBQ2pELDJDQUFzQztBQUU5QixJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFrQjtBQUVqQztJQUEyQix5QkFBUztJQUFwQztRQUFBLHFFQTZHQztRQTVHRyxhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQTs7SUEyR3BCLENBQUM7SUF4R1Usc0JBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQTtRQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtRQUM1QixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNuQixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNsQixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUE7UUFDNUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV2QixJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQywwQkFBZ0IsRUFBRSx3QkFBYyxFQUFFLDBCQUFnQixDQUFDLENBQUMsQ0FBQTtJQUNuRixDQUFDO0lBRU0sMkJBQVcsR0FBbEI7UUFDSSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUE7SUFDNUIsQ0FBQztJQUVTLG9DQUFvQixHQUE5QixVQUErQixTQUFnQjtR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QyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDNUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUVNLDBCQUFVLEdBQWpCLFVBQWtCLEtBQUssRUFBRSxDQUFDO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDVixPQUFNO1NBQ1Q7UUFFRCxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtRQUNuQixPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFBO1NBQ2xDO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDOUMsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLGNBQXlCLENBQUM7SUE1R2pCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0E2R2pCO0lBQUQsWUFBQztDQTdHRCxBQTZHQyxDQTdHMEIscUJBQVMsR0E2R25DO0FBN0dZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIlxuaW1wb3J0IEFjdGlvbkJ1eWVyTGVhdmUgZnJvbSBcIi4vQWN0aW9uQnV5ZXJMZWF2ZVwiXG5pbXBvcnQgQWN0aW9uQnV5ZXJQYXkgZnJvbSBcIi4vQWN0aW9uQnV5ZXJQYXlcIlxuaW1wb3J0IEFjdGlvbkJ1eVByb2R1Y3QgZnJvbSBcIi4vQWN0aW9uQnV5UHJvZHVjdFwiXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBCdXllciBleHRlbmRzIEdvYXBBZ2VudCBpbXBsZW1lbnRzIElHb2FwIHtcbiAgICBiTW92aW5nID0gZmFsc2VcbiAgICBiTW92ZUVuZCA9IGZhbHNlXG4gICAgbmVlZFByZG91Y3RzOiBNYXA8bnVtYmVyLCBQcm9kdWN0PlxuXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICAgICAgdGhpcy5uZWVkUHJkb3VjdHMgPSBuZXcgTWFwPG51bWJlciwgUHJvZHVjdD4oKVxuICAgICAgICBsZXQgbmVlZFByb2QgPSBuZXcgUHJvZHVjdCgpXG4gICAgICAgIG5lZWRQcm9kLmFtb3VudCA9IDBcbiAgICAgICAgbmVlZFByb2QuY2ZnSWQgPSAxXG4gICAgICAgIG5lZWRQcm9kLm1heEFtb3VudCA9IDIwXG4gICAgICAgIHRoaXMubmVlZFByZG91Y3RzLnNldCgxLCBuZWVkUHJvZClcbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IHRoaXMuZ2V0Q29tcG9uZW50KEdvYXBBZ2VudClcbiAgICAgICAgZ29hcEFnZW50LnNldEdvYXAodGhpcylcblxuICAgICAgICB0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKFtBY3Rpb25CdXlQcm9kdWN0LCBBY3Rpb25CdXllclBheSwgQWN0aW9uQnV5ZXJMZWF2ZV0pXG4gICAgfVxuXG4gICAgcHVibGljIGdldFByb2R1Y3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uZWVkUHJkb3VjdHNcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoYWN0aW9uQ2xzOiBhbnlbXSkge1xuICAgICAgICBsZXQgYWN0aW9uXG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQWN0aW9ucyA9IFtdXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGFjdGlvbiA9IG5ldyBhY3Rpb25DbHNbaV0oKVxuICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgd29ybGREYXRhLnNldChcImhhc1Byb2R1Y3RcIiwgZmFsc2UpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoXCJwYXllZFwiLCBmYWxzZSlcbiAgICAgICAgd29ybGREYXRhLnNldChcImxlYXZlZFwiLCBmYWxzZSlcbiAgICAgICAgcmV0dXJuIHdvcmxkRGF0YVxuICAgIH1cblxuICAgIHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKVxuICAgICAgICBnb2FsLnNldChcImxlYXZlZFwiLCB0cnVlKVxuICAgICAgICByZXR1cm4gZ29hbFxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHt9XG5cbiAgICBwdWJsaWMgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYW4gZm91bmQ6IFwiLCBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zUXVldWUoYWN0aW9ucykpXG4gICAgfVxuXG4gICAgcHVibGljIGFjdGlvbnNGaW5pc2hlZCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxhbiBBYm9ydGVkOiBcIiArIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbihhYm9ydGVyKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbW92ZUFnZW50KG5leHRBY3Rpb246IEdvYXBBY3Rpb24sIGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0XG4gICAgICAgIGlmICh0aGlzLmJNb3ZlRW5kKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gZmFsc2VcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLmJNb3ZpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IHRydWVcbiAgICAgICAgICAgIGxldCBhY3Rpb25zID0gW11cbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5tb3ZlVG8oMiwgbmV3IGNjLlZlYzIodGFyZ2V0Lm5vZGUueCwgdGFyZ2V0Lm5vZGUueSkpKVxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKFxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbnMpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYk1vdmVFbmRcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkUHJvZHVjdChjZmdJZCwgdikge1xuICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMubmVlZFByZG91Y3RzLmdldChjZmdJZClcbiAgICAgICAgaWYgKCFwcm9kdWN0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHByb2R1Y3QuYW1vdW50ICs9IHZcbiAgICAgICAgcHJvZHVjdC5hbW91bnQgPSBNYXRoLm1pbihwcm9kdWN0LmFtb3VudCwgcHJvZHVjdC5tYXhBbW91bnQpXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJidXkgcHJvZFwiLCBwcm9kdWN0LmNmZ0lkLCBwcm9kdWN0LmFtb3VudClcbiAgICB9XG5cbiAgICBwdWJsaWMgaGFzUHJvZHVjdEZ1bGwoY2ZnSWQpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHByb2R1Y3QgPSB0aGlzLm5lZWRQcmRvdWN0cy5nZXQoY2ZnSWQpXG4gICAgICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICAgICAgdGhyb3cgXCJ1bnZhbGlkIHByb2R1Y3RcIiArIGNmZ0lkXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuYW1vdW50ID49IHByb2R1Y3QubWF4QW1vdW50XG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge31cbn1cbiJdfQ==