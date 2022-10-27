"use strict";
cc._RF.push(module, '3aabfuM6SJGhYeTyzeDCMbX', 'Labourer');
// src/app/gamedata/labourers/Labourer.ts

"use strict";
/*
 * @Description: {}
 * @Author: Rannar.Yang
 * @Date: 2018-09-05 20:52:30
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 18:31:49
 */
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
exports.Labourer = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAgent_1 = require("../../ai/goap/GoapAgent");
var GameDataManager_1 = require("../../data/GameDataManager");
var LabourerType_1 = require("../../data/LabourerType");
var ToolComponent_1 = require("../ToolComponent");
/**
 * A general labourer export class.
 * You should subexport class this for specific Labourer export classes and implement
 * the createGoalState() method that will populate the goal for the GOAP
 * planner.
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Labourer = /** @class */ (function (_super) {
    __extends(Labourer, _super);
    function Labourer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labourerType = LabourerType_1.LabourerType.None;
        /**拥有的actions */
        _this.avaliableActions = [];
        _this.bMoving = false;
        _this.bMoveEnd = false;
        return _this;
    }
    Labourer.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    Labourer.prototype.toInitAvaliableActions = function (actionCls) {
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.avaliableActions.push(action);
        }
    };
    Labourer.prototype.onLoad = function () {
        //super.childrenCreated();
        this.bean = GameDataManager_1.GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType);
        if (!this.tool) {
            this.pickUpTool();
        }
        this.initAvaliableActions();
        //this.goapAgent = new GoapAgent(this);
    };
    Labourer.prototype.initAvaliableActions = function () { };
    Labourer.prototype.update = function (delta) {
        this.update(delta);
    };
    Labourer.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionStatus_1.ActionStatus.HasOre, this.backpack.hasOre());
        worldData.set(ActionStatus_1.ActionStatus.HasLogs, this.backpack.hasLog());
        worldData.set(ActionStatus_1.ActionStatus.HasFirewood, this.backpack.hasFirewood());
        worldData.set(ActionStatus_1.ActionStatus.HasTool, this.hasTool());
        return worldData;
    };
    Labourer.prototype.hasTool = function () {
        return this.tool != null;
    };
    /**
     * Implement in subexport classes
     */
    Labourer.prototype.createGoalState = function () {
        return new Map();
    };
    ;
    Labourer.prototype.planFailed = function (failedGoad) {
        // Not handling this here since we are making sure our goals will always succeed.
        // But normally you want to make sure the world state has changed before running
        // the same goal again, or else it will just fail.
    };
    Labourer.prototype.planFound = function (goal, actions) {
        // Yay we found a plan for our goal
        console.log("Plan found: ", GoapAgent_1.GoapAgent.prettyPrintActionsQueue(actions));
    };
    Labourer.prototype.actionsFinished = function () {
        // Everything is done, we completed our actions for this gool. Hooray!
        console.log("Actions completed");
    };
    Labourer.prototype.planAborted = function (aborter) {
        // An action bailed out of the plan. State has been reset to plan again.
        // Take note of what happened and make sure if you run the same goal again
        // that it can succeed.
        console.log("Plan Aborted: " + GoapAgent_1.GoapAgent.prettyPrintAction(aborter));
    };
    Labourer.prototype.moveAgent = function (nextAction, delta) {
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
        // let step = this.bean.speed * delta;
        // let target = nextAction.target;
        // // 设置新的position
        // this.moveTo(target, step);
        // if (this.posEquip(target)) {
        // 	nextAction.setInRange(true);
        // 	return true;
        // } else {
        // 	return false;
        // }
    };
    /**设置背包里的物品 */
    Labourer.prototype.setBackPack = function (backpack) {
        this.backpack = backpack;
        backpack.setOwner(this);
    };
    /**拾取工具 */
    Labourer.prototype.pickUpTool = function () {
        this.tool = new ToolComponent_1.ToolComponent();
        console.log('拾取工具', this.constructor.name);
        //let tool = 
        // tool.node.x = 18;
        // tool.node.y = 35;
        //	tool.node.getComponent(cc.Sprite).spriteFrame = ToolType.getSource(this.bean.toolType);
        // this.addChild(tool);
    };
    /**销毁工具 */
    Labourer.prototype.destroyTool = function () {
        //this.removeChild(this.tool);
        this.tool = undefined;
    };
    Labourer.prototype.updateBackPack = function () {
    };
    __decorate([
        property({ type: cc.Enum(LabourerType_1.LabourerType), displayName: "type" })
    ], Labourer.prototype, "labourerType", void 0);
    Labourer = __decorate([
        ccclass
    ], Labourer);
    return Labourer;
}(GoapAgent_1.GoapAgent));
exports.Labourer = Labourer;

cc._RF.pop();