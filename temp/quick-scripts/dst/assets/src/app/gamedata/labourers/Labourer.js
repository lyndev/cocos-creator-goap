
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/Labourer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var VGameObject_1 = require("../../base/VGameObject");
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
        this.goapAgent = new GoapAgent_1.GoapAgent(this);
    };
    Labourer.prototype.initAvaliableActions = function () { };
    Labourer.prototype.update = function (delta) {
        this.goapAgent.update(delta);
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
}(VGameObject_1.VGameObject));
exports.Labourer = Labourer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUgsMkRBQTBEO0FBRTFELHFEQUFvRDtBQUVwRCxzREFBcUQ7QUFDckQsOERBQTZEO0FBQzdELHdEQUF1RDtBQUl2RCxrREFBaUQ7QUFFakQ7Ozs7O0dBS0c7QUFDRyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUE4Qiw0QkFBVztJQUF6QztRQUFBLHFFQTRJQztRQTFJTyxrQkFBWSxHQUFpQiwyQkFBWSxDQUFDLElBQUksQ0FBQztRQUl0RCxnQkFBZ0I7UUFDUixzQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBa0I1QyxhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQTs7SUFrSGpCLENBQUM7SUFwSU8sc0NBQW1CLEdBQTFCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUNTLHlDQUFzQixHQUFoQyxVQUFpQyxTQUFnQjtRQUNoRCxJQUFJLE1BQU0sQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDckQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQztJQUNGLENBQUM7SUFVTSx5QkFBTSxHQUFiO1FBQ0MsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsaUNBQWUsQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ3ZGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNTLHVDQUFvQixHQUE5QixjQUFtQyxDQUFDO0lBRTdCLHlCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTSxnQ0FBYSxHQUFwQjtRQUNDLElBQUksU0FBUyxHQUF3QixJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUMvRCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMzRCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM1RCxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUNyRSxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sU0FBUyxDQUFDO0lBQ2xCLENBQUM7SUFFTywwQkFBTyxHQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUMxQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBQUEsQ0FBQztJQUVLLDZCQUFVLEdBQWpCLFVBQWtCLFVBQStCO1FBQ2hELGlGQUFpRjtRQUNqRixnRkFBZ0Y7UUFDaEYsa0RBQWtEO0lBQ25ELENBQUM7SUFFTSw0QkFBUyxHQUFoQixVQUFpQixJQUF5QixFQUFFLE9BQXFCO1FBQ2hFLG1DQUFtQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxxQkFBUyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLGtDQUFlLEdBQXRCO1FBQ0Msc0VBQXNFO1FBQ3RFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU0sOEJBQVcsR0FBbEIsVUFBbUIsT0FBbUI7UUFDckMsd0VBQXdFO1FBQ3hFLDBFQUEwRTtRQUMxRSx1QkFBdUI7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxxQkFBUyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLDRCQUFTLEdBQWhCLFVBQWlCLFVBQXNCLEVBQUUsS0FBYTtRQUF0RCxpQkE4QkM7UUE3QkEsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUE7WUFDckIsT0FBTyxJQUFJLENBQUE7U0FDWDtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3hCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUMxQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDekM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDcEIsc0NBQXNDO1FBQ3RDLGtDQUFrQztRQUNsQyxrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLCtCQUErQjtRQUMvQixnQ0FBZ0M7UUFDaEMsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsSUFBSTtJQUNMLENBQUM7SUFDRCxjQUFjO0lBQ1AsOEJBQVcsR0FBbEIsVUFBbUIsUUFBMkI7UUFDN0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsVUFBVTtJQUNILDZCQUFVLEdBQWpCO1FBQ0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLDZCQUFhLEVBQUUsQ0FBQztRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzFDLGFBQWE7UUFDYixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLDBGQUEwRjtRQUMxRix1QkFBdUI7SUFDeEIsQ0FBQztJQUNELFVBQVU7SUFDSCw4QkFBVyxHQUFsQjtRQUNDLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztJQUN2QixDQUFDO0lBRU0saUNBQWMsR0FBckI7SUFFQSxDQUFDO0lBeklEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztrREFDVDtJQUYxQyxRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBNElwQjtJQUFELGVBQUM7Q0E1SUQsQUE0SUMsQ0E1STZCLHlCQUFXLEdBNEl4QztBQTVJWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IHt9IFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNSAyMDo1MjozMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMxOjQ5XG4gKi9cblxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFnZW50XCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIjtcbmltcG9ydCB7IExhYm91cmVyVHlwZSB9IGZyb20gXCIuLi8uLi9kYXRhL0xhYm91cmVyVHlwZVwiO1xuaW1wb3J0IHsgVG9vbFR5cGUgfSBmcm9tIFwiLi4vLi4vZGF0YS9Ub29sVHlwZVwiO1xuaW1wb3J0IHsgVF9MYWJvdXJlckJlYW4gfSBmcm9tIFwiLi4vLi4vZGF0YS9UX0xhYm91cmVyQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gXCIuLi9Ub29sQ29tcG9uZW50XCI7XG5cbi8qKlxuICogQSBnZW5lcmFsIGxhYm91cmVyIGV4cG9ydCBjbGFzcy5cbiAqIFlvdSBzaG91bGQgc3ViZXhwb3J0IGNsYXNzIHRoaXMgZm9yIHNwZWNpZmljIExhYm91cmVyIGV4cG9ydCBjbGFzc2VzIGFuZCBpbXBsZW1lbnRcbiAqIHRoZSBjcmVhdGVHb2FsU3RhdGUoKSBtZXRob2QgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBnb2FsIGZvciB0aGUgR09BUFxuICogcGxhbm5lci5cbiAqL1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTGFib3VyZXIgZXh0ZW5kcyBWR2FtZU9iamVjdCBpbXBsZW1lbnRzIElHb2FwIHtcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMYWJvdXJlclR5cGUpLCBkaXNwbGF5TmFtZTogXCJ0eXBlXCIgfSlcblx0cHVibGljIGxhYm91cmVyVHlwZTogTGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk5vbmU7XG5cblx0LyoqZ29hcCBhZ2VudCAqL1xuXHRwcm90ZWN0ZWQgZ29hcEFnZW50OiBHb2FwQWdlbnQ7XG5cdC8qKuaLpeacieeahGFjdGlvbnMgKi9cblx0cHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcblx0cHVibGljIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcblx0XHRyZXR1cm4gdGhpcy5hdmFsaWFibGVBY3Rpb25zO1xuXHR9XG5cdHByb3RlY3RlZCB0b0luaXRBdmFsaWFibGVBY3Rpb25zKGFjdGlvbkNsczogYW55W10pIHtcblx0XHRsZXQgYWN0aW9uO1xuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGFjdGlvbiA9IG5ldyBhY3Rpb25DbHNbaV0oKTtcblx0XHRcdHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0fVxuXHR9XG5cdC8qKuiDjOWMhSAqL1xuXHRwdWJsaWMgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50O1xuXG5cdHB1YmxpYyBiZWFuOiBUX0xhYm91cmVyQmVhbjtcblxuXHRwdWJsaWMgdG9vbDogVG9vbENvbXBvbmVudDtcblxuXHRiTW92aW5nID0gZmFsc2Vcblx0Yk1vdmVFbmQgPSBmYWxzZVxuXHRwdWJsaWMgb25Mb2FkKCkge1xuXHRcdC8vc3VwZXIuY2hpbGRyZW5DcmVhdGVkKCk7XG5cdFx0dGhpcy5iZWFuID0gR2FtZURhdGFNYW5hZ2VyLkkudF9sYWJvdXJkZXJDb250YWluZXIuZ2V0TGFib3VyZXJCeVR5cGUodGhpcy5sYWJvdXJlclR5cGUpXG5cdFx0aWYgKCF0aGlzLnRvb2wpIHtcblx0XHRcdHRoaXMucGlja1VwVG9vbCgpO1xuXHRcdH1cblx0XHR0aGlzLmluaXRBdmFsaWFibGVBY3Rpb25zKCk7XG5cdFx0dGhpcy5nb2FwQWdlbnQgPSBuZXcgR29hcEFnZW50KHRoaXMpO1xuXHR9XG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHsgfVxuXG5cdHB1YmxpYyB1cGRhdGUoZGVsdGE6IG51bWJlcikge1xuXHRcdHRoaXMuZ29hcEFnZW50LnVwZGF0ZShkZWx0YSk7XG5cdH1cblxuXHRwdWJsaWMgZ2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcblx0XHRsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRoaXMuYmFja3BhY2suaGFzTG9nKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0aGlzLmJhY2twYWNrLmhhc0ZpcmV3b29kKCkpO1xuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKTtcblx0XHRyZXR1cm4gd29ybGREYXRhO1xuXHR9XG5cblx0cHJpdmF0ZSBoYXNUb29sKCkge1xuXHRcdHJldHVybiB0aGlzLnRvb2wgIT0gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbXBsZW1lbnQgaW4gc3ViZXhwb3J0IGNsYXNzZXNcblx0ICovXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG5cdFx0cmV0dXJuIG5ldyBNYXAoKVxuXHR9O1xuXG5cdHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcblx0XHQvLyBOb3QgaGFuZGxpbmcgdGhpcyBoZXJlIHNpbmNlIHdlIGFyZSBtYWtpbmcgc3VyZSBvdXIgZ29hbHMgd2lsbCBhbHdheXMgc3VjY2VlZC5cblx0XHQvLyBCdXQgbm9ybWFsbHkgeW91IHdhbnQgdG8gbWFrZSBzdXJlIHRoZSB3b3JsZCBzdGF0ZSBoYXMgY2hhbmdlZCBiZWZvcmUgcnVubmluZ1xuXHRcdC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXG5cdH1cblxuXHRwdWJsaWMgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuXHRcdC8vIFlheSB3ZSBmb3VuZCBhIHBsYW4gZm9yIG91ciBnb2FsXG5cdFx0Y29uc29sZS5sb2coXCJQbGFuIGZvdW5kOiBcIiwgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnMpKTtcblx0fVxuXG5cdHB1YmxpYyBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XG5cdFx0Ly8gRXZlcnl0aGluZyBpcyBkb25lLCB3ZSBjb21wbGV0ZWQgb3VyIGFjdGlvbnMgZm9yIHRoaXMgZ29vbC4gSG9vcmF5IVxuXHRcdGNvbnNvbGUubG9nKFwiQWN0aW9ucyBjb21wbGV0ZWRcIik7XG5cdH1cblxuXHRwdWJsaWMgcGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbikge1xuXHRcdC8vIEFuIGFjdGlvbiBiYWlsZWQgb3V0IG9mIHRoZSBwbGFuLiBTdGF0ZSBoYXMgYmVlbiByZXNldCB0byBwbGFuIGFnYWluLlxuXHRcdC8vIFRha2Ugbm90ZSBvZiB3aGF0IGhhcHBlbmVkIGFuZCBtYWtlIHN1cmUgaWYgeW91IHJ1biB0aGUgc2FtZSBnb2FsIGFnYWluXG5cdFx0Ly8gdGhhdCBpdCBjYW4gc3VjY2VlZC5cblx0XHRjb25zb2xlLmxvZyhcIlBsYW4gQWJvcnRlZDogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb24oYWJvcnRlcikpO1xuXHR9XG5cblx0cHVibGljIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKSB7XG5cdFx0bGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xuXHRcdGlmICh0aGlzLmJNb3ZlRW5kKSB7XG5cdFx0XHR0aGlzLmJNb3ZlRW5kID0gZmFsc2Vcblx0XHRcdHJldHVybiB0cnVlXG5cdFx0fVxuXHRcdGlmICghdGhpcy5iTW92aW5nKSB7XG5cdFx0XHR0aGlzLmJNb3ZpbmcgPSB0cnVlXG5cdFx0XHRsZXQgYWN0aW9ucyA9IFtdXG5cdFx0XHRhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcblx0XHRcdGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG5cdFx0XHRcdHRoaXMuYk1vdmVFbmQgPSB0cnVlXG5cdFx0XHRcdHRoaXMuYk1vdmluZyA9IGZhbHNlXG5cdFx0XHRcdG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcblx0XHRcdH0pKVxuXHRcdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuYk1vdmVFbmRcblx0XHQvLyBsZXQgc3RlcCA9IHRoaXMuYmVhbi5zcGVlZCAqIGRlbHRhO1xuXHRcdC8vIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcblx0XHQvLyAvLyDorr7nva7mlrDnmoRwb3NpdGlvblxuXHRcdC8vIHRoaXMubW92ZVRvKHRhcmdldCwgc3RlcCk7XG5cdFx0Ly8gaWYgKHRoaXMucG9zRXF1aXAodGFyZ2V0KSkge1xuXHRcdC8vIFx0bmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xuXHRcdC8vIFx0cmV0dXJuIHRydWU7XG5cdFx0Ly8gfSBlbHNlIHtcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcblx0XHQvLyB9XG5cdH1cblx0Lyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXG5cdHB1YmxpYyBzZXRCYWNrUGFjayhiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQpIHtcblx0XHR0aGlzLmJhY2twYWNrID0gYmFja3BhY2s7XG5cdFx0YmFja3BhY2suc2V0T3duZXIodGhpcyk7XG5cdH1cblx0Lyoq5ou+5Y+W5bel5YW3ICovXG5cdHB1YmxpYyBwaWNrVXBUb29sKCkge1xuXHRcdHRoaXMudG9vbCA9IG5ldyBUb29sQ29tcG9uZW50KCk7XG5cdFx0Y29uc29sZS5sb2coJ+aLvuWPluW3peWFtycsIHRoaXMuY29uc3RydWN0b3IubmFtZSlcblx0XHQvL2xldCB0b29sID0gXG5cdFx0Ly8gdG9vbC5ub2RlLnggPSAxODtcblx0XHQvLyB0b29sLm5vZGUueSA9IDM1O1xuXHRcdC8vXHR0b29sLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBUb29sVHlwZS5nZXRTb3VyY2UodGhpcy5iZWFuLnRvb2xUeXBlKTtcblx0XHQvLyB0aGlzLmFkZENoaWxkKHRvb2wpO1xuXHR9XG5cdC8qKumUgOavgeW3peWFtyAqL1xuXHRwdWJsaWMgZGVzdHJveVRvb2woKSB7XG5cdFx0Ly90aGlzLnJlbW92ZUNoaWxkKHRoaXMudG9vbCk7XG5cdFx0dGhpcy50b29sID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0cHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge1xuXG5cdH1cbn0iXX0=