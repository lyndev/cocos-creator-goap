
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXExhYm91cmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFSCwyREFBMEQ7QUFFMUQscURBQW9EO0FBR3BELDhEQUE2RDtBQUM3RCx3REFBdUQ7QUFJdkQsa0RBQWlEO0FBRWpEOzs7OztHQUtHO0FBQ0csSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVM7SUFBdkM7UUFBQSxxRUE0SUM7UUExSU8sa0JBQVksR0FBaUIsMkJBQVksQ0FBQyxJQUFJLENBQUM7UUFJdEQsZ0JBQWdCO1FBQ1Isc0JBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQWtCNUMsYUFBTyxHQUFHLEtBQUssQ0FBQTtRQUNmLGNBQVEsR0FBRyxLQUFLLENBQUE7O0lBa0hqQixDQUFDO0lBcElPLHNDQUFtQixHQUExQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFDUyx5Q0FBc0IsR0FBaEMsVUFBaUMsU0FBZ0I7UUFDaEQsSUFBSSxNQUFNLENBQUM7UUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3JELE1BQU0sR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkM7SUFDRixDQUFDO0lBVU0seUJBQU0sR0FBYjtRQUNDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFD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LFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUFZLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUM7a0RBQ1Q7SUFGMUMsUUFBUTtRQURwQixPQUFPO09BQ0ssUUFBUSxDQTRJcEI7SUFBRCxlQUFDO0NBNUlELEFBNElDLENBNUk2QixxQkFBUyxHQTRJdEM7QUE1SVksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IHt9IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDUgMjA6NTI6MzAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTg6MzE6NDlcclxuICovXHJcblxyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgTGFib3VyZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvTGFib3VyZXJUeXBlXCI7XHJcbmltcG9ydCB7IFRvb2xUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvVG9vbFR5cGVcIjtcclxuaW1wb3J0IHsgVF9MYWJvdXJlckJlYW4gfSBmcm9tIFwiLi4vLi4vZGF0YS9UX0xhYm91cmVyQ29udGFpbmVyXCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgZ2VuZXJhbCBsYWJvdXJlciBleHBvcnQgY2xhc3MuXHJcbiAqIFlvdSBzaG91bGQgc3ViZXhwb3J0IGNsYXNzIHRoaXMgZm9yIHNwZWNpZmljIExhYm91cmVyIGV4cG9ydCBjbGFzc2VzIGFuZCBpbXBsZW1lbnRcclxuICogdGhlIGNyZWF0ZUdvYWxTdGF0ZSgpIG1ldGhvZCB0aGF0IHdpbGwgcG9wdWxhdGUgdGhlIGdvYWwgZm9yIHRoZSBHT0FQXHJcbiAqIHBsYW5uZXIuXHJcbiAqL1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgTGFib3VyZXIgZXh0ZW5kcyBHb2FwQWdlbnQgaW1wbGVtZW50cyBJR29hcCB7XHJcblx0QHByb3BlcnR5KHsgdHlwZTogY2MuRW51bShMYWJvdXJlclR5cGUpLCBkaXNwbGF5TmFtZTogXCJ0eXBlXCIgfSlcclxuXHRwdWJsaWMgbGFib3VyZXJUeXBlOiBMYWJvdXJlclR5cGUgPSBMYWJvdXJlclR5cGUuTm9uZTtcclxuXHJcblx0LyoqZ29hcCBhZ2VudCAqL1xyXG5cdHByb3RlY3RlZCBnb2FwQWdlbnQ6IEdvYXBBZ2VudDtcclxuXHQvKirmi6XmnInnmoRhY3Rpb25zICovXHJcblx0cHJpdmF0ZSBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBbXTtcclxuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXZhbGlhYmxlQWN0aW9ucztcclxuXHR9XHJcblx0cHJvdGVjdGVkIHRvSW5pdEF2YWxpYWJsZUFjdGlvbnMoYWN0aW9uQ2xzOiBhbnlbXSkge1xyXG5cdFx0bGV0IGFjdGlvbjtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0YWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpO1xyXG5cdFx0XHR0aGlzLmF2YWxpYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHQvKirog4zljIUgKi9cclxuXHRwdWJsaWMgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50O1xyXG5cclxuXHRwdWJsaWMgYmVhbjogVF9MYWJvdXJlckJlYW47XHJcblxyXG5cdHB1YmxpYyB0b29sOiBUb29sQ29tcG9uZW50O1xyXG5cclxuXHRiTW92aW5nID0gZmFsc2VcclxuXHRiTW92ZUVuZCA9IGZhbHNlXHJcblx0cHVibGljIG9uTG9hZCgpIHtcclxuXHRcdC8vc3VwZXIuY2hpbGRyZW5DcmVhdGVkKCk7XHJcblx0XHR0aGlzLmJlYW4gPSBHYW1lRGF0YU1hbmFnZXIuSS50X2xhYm91cmRlckNvbnRhaW5lci5nZXRMYWJvdXJlckJ5VHlwZSh0aGlzLmxhYm91cmVyVHlwZSlcclxuXHRcdGlmICghdGhpcy50b29sKSB7XHJcblx0XHRcdHRoaXMucGlja1VwVG9vbCgpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5pbml0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0Ly90aGlzLmdvYXBBZ2VudCA9IG5ldyBHb2FwQWdlbnQodGhpcyk7XHJcblx0fVxyXG5cdHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucygpIHsgfVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuXHRcdHRoaXMudXBkYXRlKGRlbHRhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0bGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpO1xyXG5cdFx0d29ybGREYXRhLnNldChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdGhpcy5iYWNrcGFjay5oYXNMb2coKSk7XHJcblx0XHR3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgdGhpcy5iYWNrcGFjay5oYXNGaXJld29vZCgpKTtcclxuXHRcdHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKTtcclxuXHRcdHJldHVybiB3b3JsZERhdGE7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGhhc1Rvb2woKSB7XHJcblx0XHRyZXR1cm4gdGhpcy50b29sICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbXBsZW1lbnQgaW4gc3ViZXhwb3J0IGNsYXNzZXNcclxuXHQgKi9cclxuXHRwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG5cdFx0cmV0dXJuIG5ldyBNYXAoKVxyXG5cdH07XHJcblxyXG5cdHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcclxuXHRcdC8vIE5vdCBoYW5kbGluZyB0aGlzIGhlcmUgc2luY2Ugd2UgYXJlIG1ha2luZyBzdXJlIG91ciBnb2FscyB3aWxsIGFsd2F5cyBzdWNjZWVkLlxyXG5cdFx0Ly8gQnV0IG5vcm1hbGx5IHlvdSB3YW50IHRvIG1ha2Ugc3VyZSB0aGUgd29ybGQgc3RhdGUgaGFzIGNoYW5nZWQgYmVmb3JlIHJ1bm5pbmdcclxuXHRcdC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0Ly8gWWF5IHdlIGZvdW5kIGEgcGxhbiBmb3Igb3VyIGdvYWxcclxuXHRcdGNvbnNvbGUubG9nKFwiUGxhbiBmb3VuZDogXCIsIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xyXG5cdFx0Ly8gRXZlcnl0aGluZyBpcyBkb25lLCB3ZSBjb21wbGV0ZWQgb3VyIGFjdGlvbnMgZm9yIHRoaXMgZ29vbC4gSG9vcmF5IVxyXG5cdFx0Y29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKSB7XHJcblx0XHQvLyBBbiBhY3Rpb24gYmFpbGVkIG91dCBvZiB0aGUgcGxhbi4gU3RhdGUgaGFzIGJlZW4gcmVzZXQgdG8gcGxhbiBhZ2Fpbi5cclxuXHRcdC8vIFRha2Ugbm90ZSBvZiB3aGF0IGhhcHBlbmVkIGFuZCBtYWtlIHN1cmUgaWYgeW91IHJ1biB0aGUgc2FtZSBnb2FsIGFnYWluXHJcblx0XHQvLyB0aGF0IGl0IGNhbiBzdWNjZWVkLlxyXG5cdFx0Y29uc29sZS5sb2coXCJQbGFuIEFib3J0ZWQ6IFwiICsgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uKGFib3J0ZXIpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcikge1xyXG5cdFx0bGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xyXG5cdFx0aWYgKHRoaXMuYk1vdmVFbmQpIHtcclxuXHRcdFx0dGhpcy5iTW92ZUVuZCA9IGZhbHNlXHJcblx0XHRcdHJldHVybiB0cnVlXHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMuYk1vdmluZykge1xyXG5cdFx0XHR0aGlzLmJNb3ZpbmcgPSB0cnVlXHJcblx0XHRcdGxldCBhY3Rpb25zID0gW11cclxuXHRcdFx0YWN0aW9ucy5wdXNoKGNjLm1vdmVUbygyLCBuZXcgY2MuVmVjMih0YXJnZXQubm9kZS54LCB0YXJnZXQubm9kZS55KSkpXHJcblx0XHRcdGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5iTW92ZUVuZCA9IHRydWVcclxuXHRcdFx0XHR0aGlzLmJNb3ZpbmcgPSBmYWxzZVxyXG5cdFx0XHRcdG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcclxuXHRcdFx0fSkpXHJcblx0XHRcdHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcblx0XHRcdHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9ucykpXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYk1vdmVFbmRcclxuXHRcdC8vIGxldCBzdGVwID0gdGhpcy5iZWFuLnNwZWVkICogZGVsdGE7XHJcblx0XHQvLyBsZXQgdGFyZ2V0ID0gbmV4dEFjdGlvbi50YXJnZXQ7XHJcblx0XHQvLyAvLyDorr7nva7mlrDnmoRwb3NpdGlvblxyXG5cdFx0Ly8gdGhpcy5tb3ZlVG8odGFyZ2V0LCBzdGVwKTtcclxuXHRcdC8vIGlmICh0aGlzLnBvc0VxdWlwKHRhcmdldCkpIHtcclxuXHRcdC8vIFx0bmV4dEFjdGlvbi5zZXRJblJhbmdlKHRydWUpO1xyXG5cdFx0Ly8gXHRyZXR1cm4gdHJ1ZTtcclxuXHRcdC8vIH0gZWxzZSB7XHJcblx0XHQvLyBcdHJldHVybiBmYWxzZTtcclxuXHRcdC8vIH1cclxuXHR9XHJcblx0Lyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXHJcblx0cHVibGljIHNldEJhY2tQYWNrKGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCkge1xyXG5cdFx0dGhpcy5iYWNrcGFjayA9IGJhY2twYWNrO1xyXG5cdFx0YmFja3BhY2suc2V0T3duZXIodGhpcyk7XHJcblx0fVxyXG5cdC8qKuaLvuWPluW3peWFtyAqL1xyXG5cdHB1YmxpYyBwaWNrVXBUb29sKCkge1xyXG5cdFx0dGhpcy50b29sID0gbmV3IFRvb2xDb21wb25lbnQoKTtcclxuXHRcdGNvbnNvbGUubG9nKCfmi77lj5blt6XlhbcnLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpXHJcblx0XHQvL2xldCB0b29sID0gXHJcblx0XHQvLyB0b29sLm5vZGUueCA9IDE4O1xyXG5cdFx0Ly8gdG9vbC5ub2RlLnkgPSAzNTtcclxuXHRcdC8vXHR0b29sLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBUb29sVHlwZS5nZXRTb3VyY2UodGhpcy5iZWFuLnRvb2xUeXBlKTtcclxuXHRcdC8vIHRoaXMuYWRkQ2hpbGQodG9vbCk7XHJcblx0fVxyXG5cdC8qKumUgOavgeW3peWFtyAqL1xyXG5cdHB1YmxpYyBkZXN0cm95VG9vbCgpIHtcclxuXHRcdC8vdGhpcy5yZW1vdmVDaGlsZCh0aGlzLnRvb2wpO1xyXG5cdFx0dGhpcy50b29sID0gdW5kZWZpbmVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge1xyXG5cclxuXHR9XHJcbn0iXX0=