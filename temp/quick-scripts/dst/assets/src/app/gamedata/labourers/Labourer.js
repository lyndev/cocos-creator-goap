
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXExhYm91cmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCwyREFBMEQ7QUFFMUQscURBQW9EO0FBRXBELHNEQUFxRDtBQUNyRCw4REFBNkQ7QUFDN0Qsd0RBQXVEO0FBSXZELGtEQUFpRDtBQUVqRDs7Ozs7R0FLRztBQUNHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQThCLDRCQUFXO0lBQXpDO1FBQUEscUVBNElDO1FBMUlPLGtCQUFZLEdBQWlCLDJCQUFZLENBQUMsSUFBSSxDQUFDO1FBSXRELGdCQUFnQjtRQUNSLHNCQUFnQixHQUFpQixFQUFFLENBQUM7UUFrQjVDLGFBQU8sR0FBRyxLQUFLLENBQUE7UUFDZixjQUFRLEdBQUcsS0FBSyxDQUFBOztJQWtIakIsQ0FBQztJQXBJTyxzQ0FBbUIsR0FBMUI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBQ1MseUNBQXNCLEdBQWhDLFVBQWlDLFNBQWdCO1FBQ2hELElBQUksTUFBTSxDQUFDO1FBQ1gsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyRCxNQUFNLEdBQUcsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO0lBQ0YsQ0FBQztJQVVNLHlCQUFNLEdBQWI7UUFDQywwQkFBMEI7UUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxpQ0FBZSxDQUFDLENBQUMsQ0FB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QUFJLEdBQUcsU0FBUyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxpQ0FBYyxHQUFyQjtJQUVBLENBQUM7SUF6SUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQywyQkFBWSxDQUFDLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO2tEQUNUO0lBRjFDLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0E0SXBCO0lBQUQsZUFBQztDQTVJRCxBQTRJQyxDQTVJNkIseUJBQVcsR0E0SXhDO0FBNUlZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0aW9uOiB7fSBcclxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA1IDIwOjUyOjMwIFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE4OjMxOjQ5XHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgR2FtZURhdGFNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2RhdGEvR2FtZURhdGFNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IExhYm91cmVyVHlwZSB9IGZyb20gXCIuLi8uLi9kYXRhL0xhYm91cmVyVHlwZVwiO1xyXG5pbXBvcnQgeyBUb29sVHlwZSB9IGZyb20gXCIuLi8uLi9kYXRhL1Rvb2xUeXBlXCI7XHJcbmltcG9ydCB7IFRfTGFib3VyZXJCZWFuIH0gZnJvbSBcIi4uLy4uL2RhdGEvVF9MYWJvdXJlckNvbnRhaW5lclwiO1xyXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIjtcclxuXHJcbi8qKlxyXG4gKiBBIGdlbmVyYWwgbGFib3VyZXIgZXhwb3J0IGNsYXNzLlxyXG4gKiBZb3Ugc2hvdWxkIHN1YmV4cG9ydCBjbGFzcyB0aGlzIGZvciBzcGVjaWZpYyBMYWJvdXJlciBleHBvcnQgY2xhc3NlcyBhbmQgaW1wbGVtZW50XHJcbiAqIHRoZSBjcmVhdGVHb2FsU3RhdGUoKSBtZXRob2QgdGhhdCB3aWxsIHBvcHVsYXRlIHRoZSBnb2FsIGZvciB0aGUgR09BUFxyXG4gKiBwbGFubmVyLlxyXG4gKi9cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIExhYm91cmVyIGV4dGVuZHMgVkdhbWVPYmplY3QgaW1wbGVtZW50cyBJR29hcCB7XHJcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMYWJvdXJlclR5cGUpLCBkaXNwbGF5TmFtZTogXCJ0eXBlXCIgfSlcclxuXHRwdWJsaWMgbGFib3VyZXJUeXBlOiBMYWJvdXJlclR5cGUgPSBMYWJvdXJlclR5cGUuTm9uZTtcclxuXHJcblx0LyoqZ29hcCBhZ2VudCAqL1xyXG5cdHByb3RlY3RlZCBnb2FwQWdlbnQ6IEdvYXBBZ2VudDtcclxuXHQvKirmi6XmnInnmoRhY3Rpb25zICovXHJcblx0cHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcclxuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXZhbGlhYmxlQWN0aW9ucztcclxuXHR9XHJcblx0cHJvdGVjdGVkIHRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoYWN0aW9uQ2xzOiBhbnlbXSkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0YWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpO1xyXG5cdFx0XHR0aGlzLmF2YWxpYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKirog4zljIUgKi9cclxuXHRwdWJsaWMgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50O1xyXG5cclxuXHRwdWJsaWMgYmVhbjogVF9MYWJvdXJlckJlYW47XHJcblxyXG5cdHB1YmxpYyB0b29sOiBUb29sQ29tcG9uZW50O1xyXG5cclxuXHRiTW92aW5nID0gZmFsc2VcclxuXHRiTW92ZUVuZCA9IGZhbHNlXHJcblx0cHVibGljIG9uTG9hZCgpIHtcclxuXHRcdC8vc3VwZXIuY2hpbGRyZW5DcmVhdGVkKCk7XHJcblx0XHR0aGlzLmJlYW4gPSBHYW1lRGF0YU1hbmFnZXIuSS50X2xhYm91cmRlckNvbnRhaW5lci5nZXRMYWJvdXJlckJ5VHlwZSh0aGlzLmxhYm91cmVyVHlwZSlcclxuXHRcdGlmICghdGhpcy50b29sKSB7XHJcblx0XHRcdHRoaXMucGlja1VwVG9vbCgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0dGhpcy5nb2FwQWdlbnQgPSBuZXcgR29hcEFnZW50KHRoaXMpO1xyXG5cdH1cclxuXHRwcm90ZWN0ZWQgaW5pdEF2YWxpYWJsZUFjdGlvbnMoKSB7IH1cclxuXHJcblx0cHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLmdvYXBBZ2VudC51cGRhdGUoZGVsdGEpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFdvcmxkU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcblx0XHRsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcclxuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc09yZSwgdGhpcy5iYWNrcGFjay5oYXNPcmUoKSk7XHJcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNMb2dzLCB0aGlzLmJhY2twYWNrLmhhc0xvZygpKTtcclxuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0aGlzLmJhY2twYWNrLmhhc0ZpcmV3b29kKCkpO1xyXG5cdFx0d29ybGREYXRhLnNldChBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdGhpcy5oYXNUb29sKCkpO1xyXG5cdFx0cmV0dXJuIHdvcmxkRGF0YTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaGFzVG9vbCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnRvb2wgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEltcGxlbWVudCBpbiBzdWJleHBvcnQgY2xhc3Nlc1xyXG5cdCAqL1xyXG5cdHB1YmxpYyBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcblx0XHRyZXR1cm4gbmV3IE1hcCgpXHJcblx0fTtcclxuXHJcblx0cHVibGljIHBsYW5GYWlsZWQoZmFpbGVkR29hZDogTWFwPHN0cmluZywgT2JqZWN0Pikge1xyXG5cdFx0Ly8gTm90IGhhbmRsaW5nIHRoaXMgaGVyZSBzaW5jZSB3ZSBhcmUgbWFraW5nIHN1cmUgb3VyIGdvYWxzIHdpbGwgYWx3YXlzIHN1Y2NlZWQuXHJcblx0XHQvLyBCdXQgbm9ybWFsbHkgeW91IHdhbnQgdG8gbWFrZSBzdXJlIHRoZSB3b3JsZCBzdGF0ZSBoYXMgY2hhbmdlZCBiZWZvcmUgcnVubmluZ1xyXG5cdFx0Ly8gdGhlIHNhbWUgZ29hbCBhZ2Fpbiwgb3IgZWxzZSBpdCB3aWxsIGp1c3QgZmFpbC5cclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKSB7XHJcblx0XHQvLyBZYXkgd2UgZm91bmQgYSBwbGFuIGZvciBvdXIgZ29hbFxyXG5cdFx0Y29uc29sZS5sb2coXCJQbGFuIGZvdW5kOiBcIiwgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnMpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XHJcblx0XHQvLyBFdmVyeXRoaW5nIGlzIGRvbmUsIHdlIGNvbXBsZXRlZCBvdXIgYWN0aW9ucyBmb3IgdGhpcyBnb29sLiBIb29yYXkhXHJcblx0XHRjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pIHtcclxuXHRcdC8vIEFuIGFjdGlvbiBiYWlsZWQgb3V0IG9mIHRoZSBwbGFuLiBTdGF0ZSBoYXMgYmVlbiByZXNldCB0byBwbGFuIGFnYWluLlxyXG5cdFx0Ly8gVGFrZSBub3RlIG9mIHdoYXQgaGFwcGVuZWQgYW5kIG1ha2Ugc3VyZSBpZiB5b3UgcnVuIHRoZSBzYW1lIGdvYWwgYWdhaW5cclxuXHRcdC8vIHRoYXQgaXQgY2FuIHN1Y2NlZWQuXHJcblx0XHRjb25zb2xlLmxvZyhcIlBsYW4gQWJvcnRlZDogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb24oYWJvcnRlcikpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKSB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXQ7XHJcblx0XHRpZiAodGhpcy5iTW92ZUVuZCkge1xyXG5cdFx0XHR0aGlzLmJNb3ZlRW5kID0gZmFsc2VcclxuXHRcdFx0cmV0dXJuIHRydWVcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5iTW92aW5nKSB7XHJcblx0XHRcdHRoaXMuYk1vdmluZyA9IHRydWVcclxuXHRcdFx0bGV0IGFjdGlvbnMgPSBbXVxyXG5cdFx0XHRhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcclxuXHRcdFx0YWN0aW9ucy5wdXNoKGNjLmNhbGxGdW5jKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmJNb3ZlRW5kID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMuYk1vdmluZyA9IGZhbHNlXHJcblx0XHRcdFx0bmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xyXG5cdFx0XHR9KSlcclxuXHRcdFx0dGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKClcclxuXHRcdFx0dGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5iTW92ZUVuZFxyXG5cdFx0Ly8gbGV0IHN0ZXAgPSB0aGlzLmJlYW4uc3BlZWQgKiBkZWx0YTtcclxuXHRcdC8vIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcclxuXHRcdC8vIC8vIOiuvue9ruaWsOeahHBvc2l0aW9uXHJcblx0XHQvLyB0aGlzLm1vdmVUbyh0YXJnZXQsIHN0ZXApO1xyXG5cdFx0Ly8gaWYgKHRoaXMucG9zRXF1aXAodGFyZ2V0KSkge1xyXG5cdFx0Ly8gXHRuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSk7XHJcblx0XHQvLyBcdHJldHVybiB0cnVlO1xyXG5cdFx0Ly8gfSBlbHNlIHtcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHQvKirorr7nva7og4zljIXph4znmoTnianlk4EgKi9cclxuXHRwdWJsaWMgc2V0QmFja1BhY2soYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50KSB7XHJcblx0XHR0aGlzLmJhY2twYWNrID0gYmFja3BhY2s7XHJcblx0XHRiYWNrcGFjay5zZXRPd25lcih0aGlzKTtcclxuXHR9XHJcblx0Lyoq5ou+5Y+W5bel5YW3ICovXHJcblx0cHVibGljIHBpY2tVcFRvb2woKSB7XHJcblx0XHR0aGlzLnRvb2wgPSBuZXcgVG9vbENvbXBvbmVudCgpO1xyXG5cdFx0Y29uc29sZS5sb2coJ+aLvuWPluW3peWFtycsIHRoaXMuY29uc3RydWN0b3IubmFtZSlcclxuXHRcdC8vbGV0IHRvb2wgPSBcclxuXHRcdC8vIHRvb2wubm9kZS54ID0gMTg7XHJcblx0XHQvLyB0b29sLm5vZGUueSA9IDM1O1xyXG5cdFx0Ly9cdHRvb2wubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IFRvb2xUeXBlLmdldFNvdXJjZSh0aGlzLmJlYW4udG9vbFR5cGUpO1xyXG5cdFx0Ly8gdGhpcy5hZGRDaGlsZCh0b29sKTtcclxuXHR9XHJcblx0Lyoq6ZSA5q+B5bel5YW3ICovXHJcblx0cHVibGljIGRlc3Ryb3lUb29sKCkge1xyXG5cdFx0Ly90aGlzLnJlbW92ZUNoaWxkKHRoaXMudG9vbCk7XHJcblx0XHR0aGlzLnRvb2wgPSB1bmRlZmluZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlQmFja1BhY2soKSB7XHJcblxyXG5cdH1cclxufSJdfQ==