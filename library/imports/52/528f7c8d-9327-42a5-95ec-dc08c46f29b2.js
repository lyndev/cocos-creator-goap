"use strict";
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