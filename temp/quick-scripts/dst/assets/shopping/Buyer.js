
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
var ActionGetBag_1 = require("./ActionGetBag");
var GoodsShelf_1 = require("./GoodsShelf");
var ccclass = cc._decorator.ccclass;
var Buyer = /** @class */ (function (_super) {
    __extends(Buyer, _super);
    function Buyer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bMoving = false;
        _this.bMoveEnd = false;
        _this.bPayed = false;
        return _this;
    }
    Buyer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        this.needPrdoucts = new Map();
        var needProd = new GoodsShelf_1.Product();
        needProd.amount = 0;
        needProd.cfgId = 1;
        needProd.maxAmount = 10;
        var needProd2 = new GoodsShelf_1.Product();
        needProd2.amount = 0;
        needProd2.cfgId = 2;
        needProd2.maxAmount = 10;
        this.needPrdoucts.set(1, needProd);
        this.needPrdoucts.set(2, needProd2);
        var goapAgent = this.getComponent(GoapAgent_1.GoapAgent);
        goapAgent.setGoap(this);
        this.initAvaliableActions([ActionGetBag_1.default, ActionBuyerPay_1.default, ActionBuyerLeave_1.default]);
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
        this.availableActions.push(new ActionBuyProduct_1.default(1));
        this.availableActions.push(new ActionBuyProduct_1.default(2));
    };
    Buyer.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    Buyer.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set("hasProduct1", this.hasProductFull(1));
        worldData.set("hasProduct2", this.hasProductFull(2));
        worldData.set("payed", this.bPayed);
        worldData.set("leaved", false);
        return worldData;
    };
    Buyer.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set("hasProduct1", true);
        goal.set("hasProduct2", true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9CdXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsMERBQXdEO0FBRXhELHVEQUFpRDtBQUNqRCxtREFBNkM7QUFDN0MsdURBQWlEO0FBQ2pELCtDQUF5QztBQUN6QywyQ0FBc0M7QUFFOUIsSUFBQSxPQUFPLEdBQUssRUFBRSxDQUFDLFVBQVUsUUFBbEIsQ0FBa0I7QUFFakM7SUFBMkIseUJBQVM7SUFBcEM7UUFBQSxxRUEySEM7UUExSEcsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGNBQVEsR0FBRyxLQUFLLENBQUE7UUFFaEIsWUFBTSxHQUFZLEtBQUssQ0FBQTs7SUF1SDNCLENBQUM7SUF0SFUsc0JBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLEdBQUcsRUFBbUIsQ0FBQTtRQUM5QyxJQUFJLFFBQVEsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtRQUM1QixRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNuQixRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNsQixRQUFRLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUV2QixJQUFJLFNBQVMsR0FBRyxJQUFJLG9CQUFPLEVBQUUsQ0FBQTtRQUM3QixTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQTtRQUNwQixTQUFTLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUNuQixTQUFTLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQTtRQUV4QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7UUFDbEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFBO1FBRW5DLElBQUksU0FBUyxHQUFHLElBQUks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TSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDMUQsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLFVBQXNCLEtBQUs7UUFDdkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFBO1NBQ2xDO1FBQ0QsT0FBTyxPQUFPLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUE7SUFDOUMsQ0FBQztJQUVNLDhCQUFjLEdBQXJCLGNBQXlCLENBQUM7SUExSGpCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0EySGpCO0lBQUQsWUFBQztDQTNIRCxBQTJIQyxDQTNIMEIscUJBQVMsR0EySG5DO0FBM0hZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIlxuaW1wb3J0IEFjdGlvbkJ1eWVyTGVhdmUgZnJvbSBcIi4vQWN0aW9uQnV5ZXJMZWF2ZVwiXG5pbXBvcnQgQWN0aW9uQnV5ZXJQYXkgZnJvbSBcIi4vQWN0aW9uQnV5ZXJQYXlcIlxuaW1wb3J0IEFjdGlvbkJ1eVByb2R1Y3QgZnJvbSBcIi4vQWN0aW9uQnV5UHJvZHVjdFwiXG5pbXBvcnQgQWN0aW9uR2V0QmFnIGZyb20gXCIuL0FjdGlvbkdldEJhZ1wiXG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSBcIi4vR29vZHNTaGVsZlwiXG5cbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBCdXllciBleHRlbmRzIEdvYXBBZ2VudCBpbXBsZW1lbnRzIElHb2FwIHtcbiAgICBiTW92aW5nID0gZmFsc2VcbiAgICBiTW92ZUVuZCA9IGZhbHNlXG4gICAgbmVlZFByZG91Y3RzOiBNYXA8bnVtYmVyLCBQcm9kdWN0PlxuICAgIGJQYXllZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIG9uTG9hZCgpIHtcbiAgICAgICAgc3VwZXIub25Mb2FkKClcbiAgICAgICAgdGhpcy5uZWVkUHJkb3VjdHMgPSBuZXcgTWFwPG51bWJlciwgUHJvZHVjdD4oKVxuICAgICAgICBsZXQgbmVlZFByb2QgPSBuZXcgUHJvZHVjdCgpXG4gICAgICAgIG5lZWRQcm9kLmFtb3VudCA9IDBcbiAgICAgICAgbmVlZFByb2QuY2ZnSWQgPSAxXG4gICAgICAgIG5lZWRQcm9kLm1heEFtb3VudCA9IDEwXG5cbiAgICAgICAgbGV0IG5lZWRQcm9kMiA9IG5ldyBQcm9kdWN0KClcbiAgICAgICAgbmVlZFByb2QyLmFtb3VudCA9IDBcbiAgICAgICAgbmVlZFByb2QyLmNmZ0lkID0gMlxuICAgICAgICBuZWVkUHJvZDIubWF4QW1vdW50ID0gMTBcblxuICAgICAgICB0aGlzLm5lZWRQcmRvdWN0cy5zZXQoMSwgbmVlZFByb2QpXG4gICAgICAgIHRoaXMubmVlZFByZG91Y3RzLnNldCgyLCBuZWVkUHJvZDIpXG5cbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IHRoaXMuZ2V0Q29tcG9uZW50KEdvYXBBZ2VudClcbiAgICAgICAgZ29hcEFnZW50LnNldEdvYXAodGhpcylcblxuICAgICAgICB0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKFtBY3Rpb25HZXRCYWcsIEFjdGlvbkJ1eWVyUGF5LCBBY3Rpb25CdXllckxlYXZlXSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0UHJvZHVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5lZWRQcmRvdWN0c1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucyhhY3Rpb25DbHM6IGFueVtdKSB7XG4gICAgICAgIGxldCBhY3Rpb25cbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChuZXcgQWN0aW9uQnV5UHJvZHVjdCgxKSlcbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2gobmV3IEFjdGlvbkJ1eVByb2R1Y3QoMikpXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZShkdClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgd29ybGREYXRhLnNldChcImhhc1Byb2R1Y3QxXCIsIHRoaXMuaGFzUHJvZHVjdEZ1bGwoMSkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoXCJoYXNQcm9kdWN0MlwiLCB0aGlzLmhhc1Byb2R1Y3RGdWxsKDIpKVxuICAgICAgICB3b3JsZERhdGEuc2V0KFwicGF5ZWRcIiwgdGhpcy5iUGF5ZWQpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoXCJsZWF2ZWRcIiwgZmFsc2UpXG4gICAgICAgIHJldHVybiB3b3JsZERhdGFcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KClcbiAgICAgICAgZ29hbC5zZXQoXCJoYXNQcm9kdWN0MVwiLCB0cnVlKVxuICAgICAgICBnb2FsLnNldChcImhhc1Byb2R1Y3QyXCIsIHRydWUpXG4gICAgICAgIGdvYWwuc2V0KFwibGVhdmVkXCIsIHRydWUpXG4gICAgICAgIHJldHVybiBnb2FsXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5GYWlsZWQoZmFpbGVkR29hZDogTWFwPHN0cmluZywgT2JqZWN0Pikge31cblxuICAgIHB1YmxpYyBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxhbiBmb3VuZDogXCIsIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zKSlcbiAgICB9XG5cbiAgICBwdWJsaWMgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGFuIEFib3J0ZWQ6IFwiICsgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uKGFib3J0ZXIpKVxuICAgIH1cblxuICAgIHB1YmxpYyBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcikge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXRcbiAgICAgICAgaWYgKHRoaXMuYk1vdmVFbmQpIHtcbiAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuYk1vdmluZykge1xuICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IGFjdGlvbnMgPSBbXVxuICAgICAgICAgICAgYWN0aW9ucy5wdXNoKGNjLm1vdmVUbygyLCBuZXcgY2MuVmVjMih0YXJnZXQubm9kZS54LCB0YXJnZXQubm9kZS55KSkpXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5iTW92ZUVuZFxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRQcm9kdWN0KGNmZ0lkLCB2KSB7XG4gICAgICAgIGxldCBwcm9kdWN0ID0gdGhpcy5uZWVkUHJkb3VjdHMuZ2V0KGNmZ0lkKVxuICAgICAgICBpZiAoIXByb2R1Y3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgcHJvZHVjdC5hbW91bnQgKz0gdlxuICAgICAgICBwcm9kdWN0LmFtb3VudCA9IE1hdGgubWluKHByb2R1Y3QuYW1vdW50LCBwcm9kdWN0Lm1heEFtb3VudClcblxuICAgICAgICBjb25zb2xlLmxvZyhcImJ1eSBwcm9kXCIsIHByb2R1Y3QuY2ZnSWQsIHByb2R1Y3QuYW1vdW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNQcm9kdWN0RnVsbChjZmdJZCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgcHJvZHVjdCA9IHRoaXMubmVlZFByZG91Y3RzLmdldChjZmdJZClcbiAgICAgICAgaWYgKCFwcm9kdWN0KSB7XG4gICAgICAgICAgICB0aHJvdyBcInVudmFsaWQgcHJvZHVjdFwiICsgY2ZnSWRcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZHVjdC5hbW91bnQgPj0gcHJvZHVjdC5tYXhBbW91bnRcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7fVxufVxuIl19