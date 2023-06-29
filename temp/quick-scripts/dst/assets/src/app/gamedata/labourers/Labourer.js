
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
var _a = cc._decorator, requireComponent = _a.requireComponent, ccclass = _a.ccclass, property = _a.property;
var Labourer = /** @class */ (function (_super) {
    __extends(Labourer, _super);
    function Labourer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labourerType = LabourerType_1.LabourerType.None;
        _this.bMoving = false;
        _this.bMoveEnd = false;
        return _this;
    }
    Labourer.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        var goapAgent = this.getComponent(GoapAgent_1.GoapAgent);
        goapAgent.setGoap(this);
        this.bean = GameDataManager_1.GameDataManager.I.t_labourderContainer.getLabourerByType(this.labourerType);
        if (!this.tool) {
            this.pickUpTool();
        }
    };
    Labourer.prototype.initAvaliableActions = function (actionCls) {
        var action;
        this.availableActions = [];
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.availableActions.push(action);
        }
    };
    Labourer.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
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
    Labourer.prototype.createGoalState = function () {
        throw new Error("Method not implemented.");
    };
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
    };
    /**设置背包里的物品 */
    Labourer.prototype.setBackPack = function (backpack) {
        this.backpack = backpack;
        backpack.setOwner(this);
    };
    /**拾取工具 */
    Labourer.prototype.pickUpTool = function () {
        this.tool = new ToolComponent_1.ToolComponent();
        console.log("拾取工具", this.constructor.name);
    };
    /**销毁工具 */
    Labourer.prototype.destroyTool = function () {
        this.tool = undefined;
    };
    Labourer.prototype.updateBackPack = function () { };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy9MYWJvdXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBRXpELHFEQUFtRDtBQUVuRCw4REFBNEQ7QUFDNUQsd0RBQXNEO0FBR3RELGtEQUFnRDtBQUUxQyxJQUFBLEtBQTBDLEVBQUUsQ0FBQyxVQUFVLEVBQXJELGdCQUFnQixzQkFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUU3RDtJQUE4Qiw0QkFBUztJQUF2QztRQUFBLHFFQW1IQztRQWpIVSxrQkFBWSxHQUFpQiwyQkFBWSxDQUFDLElBQUksQ0FBQTtRQU9yRCxhQUFPLEdBQUcsS0FBSyxDQUFBO1FBQ2YsY0FBUSxHQUFHLEtBQUssQ0FBQTs7SUF5R3BCLENBQUM7SUF4R1UseUJBQU0sR0FBYjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFBO1FBQ2QsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBUyxDQUFDLENBQUE7UUFDNUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLGlDQUFlLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtRQUN2RixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNaLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNwQjtJQUNMLENBQUM7SUFFUyx1Q0FBb0IsR0FBOUIsVUFBK0IsU0FBZ0I7UUFDM0MsSUFBSSxNQUFNLENBQUE7UUFDVixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFBO1FBQzFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMs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LEdBQUcsS0FBSyxDQUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQy9CLENBQUMsQ0FBQyxDQUNMLENBQUE7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUM1QztRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBRUQsY0FBYztJQUNQLDhCQUFXLEdBQWxCLFVBQW1CLFFBQTJCO1FBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFBO1FBQ3hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDM0IsQ0FBQztJQUNELFVBQVU7SUFDSCw2QkFBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSw2QkFBYSxFQUFFLENBQUE7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QyxDQUFDO0lBRUQsVUFBVTtJQUNILDhCQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUE7SUFDekIsQ0FBQztJQUVNLGlDQUFjLEdBQXJCLGNBQXlCLENBQUM7SUFoSDFCO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsMkJBQVksQ0FBQyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztrREFDVjtJQUY1QyxRQUFRO1FBRHBCLE9BQU87T0FDSyxRQUFRLENBbUhwQjtJQUFELGVBQUM7Q0FuSEQsQUFtSEMsQ0FuSDZCLHFCQUFTLEdBbUh0QztBQW5IWSw0QkFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9JR29hcFwiXG5pbXBvcnQgeyBHYW1lRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZGF0YS9HYW1lRGF0YU1hbmFnZXJcIlxuaW1wb3J0IHsgTGFib3VyZXJUeXBlIH0gZnJvbSBcIi4uLy4uL2RhdGEvTGFib3VyZXJUeXBlXCJcbmltcG9ydCB7IFRfTGFib3VyZXJCZWFuIH0gZnJvbSBcIi4uLy4uL2RhdGEvVF9MYWJvdXJlckNvbnRhaW5lclwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIlxuXG5jb25zdCB7IHJlcXVpcmVDb21wb25lbnQsIGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIExhYm91cmVyIGV4dGVuZHMgR29hcEFnZW50IGltcGxlbWVudHMgSUdvYXAge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkVudW0oTGFib3VyZXJUeXBlKSwgZGlzcGxheU5hbWU6IFwidHlwZVwiIH0pXG4gICAgcHVibGljIGxhYm91cmVyVHlwZTogTGFib3VyZXJUeXBlID0gTGFib3VyZXJUeXBlLk5vbmVcblxuICAgIC8qKuiDjOWMhSAqL1xuICAgIHB1YmxpYyBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnRcbiAgICBwdWJsaWMgYmVhbjogVF9MYWJvdXJlckJlYW5cbiAgICBwdWJsaWMgdG9vbDogVG9vbENvbXBvbmVudFxuXG4gICAgYk1vdmluZyA9IGZhbHNlXG4gICAgYk1vdmVFbmQgPSBmYWxzZVxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpXG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSB0aGlzLmdldENvbXBvbmVudChHb2FwQWdlbnQpXG4gICAgICAgIGdvYXBBZ2VudC5zZXRHb2FwKHRoaXMpXG4gICAgICAgIHRoaXMuYmVhbiA9IEdhbWVEYXRhTWFuYWdlci5JLnRfbGFib3VyZGVyQ29udGFpbmVyLmdldExhYm91cmVyQnlUeXBlKHRoaXMubGFib3VyZXJUeXBlKVxuICAgICAgICBpZiAoIXRoaXMudG9vbCkge1xuICAgICAgICAgICAgdGhpcy5waWNrVXBUb29sKClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBpbml0QXZhbGlhYmxlQWN0aW9ucyhhY3Rpb25DbHM6IGFueVtdKSB7XG4gICAgICAgIGxldCBhY3Rpb25cbiAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW11cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFjdGlvbkNscy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcblx0XHRzdXBlci51cGRhdGUoZHQpXG5cdH1cblxuICAgIHB1YmxpYyBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKVxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRoaXMuYmFja3BhY2suaGFzT3JlKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRoaXMuYmFja3BhY2suaGFzTG9nKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0aGlzLmJhY2twYWNrLmhhc0ZpcmV3b29kKCkpXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRoaXMuaGFzVG9vbCgpKVxuICAgICAgICByZXR1cm4gd29ybGREYXRhXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBoYXNUb29sKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50b29sICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuRmFpbGVkKGZhaWxlZEdvYWQ6IE1hcDxzdHJpbmcsIE9iamVjdD4pIHtcbiAgICAgICAgLy8gTm90IGhhbmRsaW5nIHRoaXMgaGVyZSBzaW5jZSB3ZSBhcmUgbWFraW5nIHN1cmUgb3VyIGdvYWxzIHdpbGwgYWx3YXlzIHN1Y2NlZWQuXG4gICAgICAgIC8vIEJ1dCBub3JtYWxseSB5b3Ugd2FudCB0byBtYWtlIHN1cmUgdGhlIHdvcmxkIHN0YXRlIGhhcyBjaGFuZ2VkIGJlZm9yZSBydW5uaW5nXG4gICAgICAgIC8vIHRoZSBzYW1lIGdvYWwgYWdhaW4sIG9yIGVsc2UgaXQgd2lsbCBqdXN0IGZhaWwuXG4gICAgfVxuXG4gICAgcHVibGljIHBsYW5Gb3VuZChnb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+LCBhY3Rpb25zOiBHb2FwQWN0aW9uW10pIHtcbiAgICAgICAgLy8gWWF5IHdlIGZvdW5kIGEgcGxhbiBmb3Igb3VyIGdvYWxcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGFuIGZvdW5kOiBcIiwgR29hcEFnZW50LnByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnMpKVxuICAgIH1cblxuICAgIHB1YmxpYyBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XG4gICAgICAgIC8vIEV2ZXJ5dGhpbmcgaXMgZG9uZSwgd2UgY29tcGxldGVkIG91ciBhY3Rpb25zIGZvciB0aGlzIGdvb2wuIEhvb3JheSFcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIC8vIEFuIGFjdGlvbiBiYWlsZWQgb3V0IG9mIHRoZSBwbGFuLiBTdGF0ZSBoYXMgYmVlbiByZXNldCB0byBwbGFuIGFnYWluLlxuICAgICAgICAvLyBUYWtlIG5vdGUgb2Ygd2hhdCBoYXBwZW5lZCBhbmQgbWFrZSBzdXJlIGlmIHlvdSBydW4gdGhlIHNhbWUgZ29hbCBhZ2FpblxuICAgICAgICAvLyB0aGF0IGl0IGNhbiBzdWNjZWVkLlxuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYW4gQWJvcnRlZDogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb24oYWJvcnRlcikpXG4gICAgfVxuXG4gICAgcHVibGljIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldFxuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYk1vdmVFbmQgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXG4gICAgfVxuXG4gICAgLyoq6K6+572u6IOM5YyF6YeM55qE54mp5ZOBICovXG4gICAgcHVibGljIHNldEJhY2tQYWNrKGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCkge1xuICAgICAgICB0aGlzLmJhY2twYWNrID0gYmFja3BhY2tcbiAgICAgICAgYmFja3BhY2suc2V0T3duZXIodGhpcylcbiAgICB9XG4gICAgLyoq5ou+5Y+W5bel5YW3ICovXG4gICAgcHVibGljIHBpY2tVcFRvb2woKSB7XG4gICAgICAgIHRoaXMudG9vbCA9IG5ldyBUb29sQ29tcG9uZW50KClcbiAgICAgICAgY29uc29sZS5sb2coXCLmi77lj5blt6XlhbdcIiwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKVxuICAgIH1cblxuICAgIC8qKumUgOavgeW3peWFtyAqL1xuICAgIHB1YmxpYyBkZXN0cm95VG9vbCgpIHtcbiAgICAgICAgdGhpcy50b29sID0gdW5kZWZpbmVkXG4gICAgfVxuXG4gICAgcHVibGljIHVwZGF0ZUJhY2tQYWNrKCkge31cbn1cbiJdfQ==