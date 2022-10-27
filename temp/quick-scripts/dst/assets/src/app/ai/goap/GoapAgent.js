
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapAgent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1f1fa9m67hDyIz3E7rLr/eL', 'GoapAgent');
// src/app/ai/goap/GoapAgent.ts

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
exports.GoapAgent = void 0;
var StateEnum_1 = require("../fsm/state/StateEnum");
var StateIdle_1 = require("../fsm/state/StateIdle");
var StateMove_1 = require("../fsm/state/StateMove");
var StatePerformAction_1 = require("../fsm/state/StatePerformAction");
var StateManager_1 = require("../fsm/StateManager");
var GoapPlanner_1 = require("./GoapPlanner");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:30
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:41:31
 */
var GoapAgent = /** @class */ (function (_super) {
    __extends(GoapAgent, _super);
    function GoapAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoapAgent.prototype.onLoad = function () {
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.availableActions = [];
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
        this.loadActions();
    };
    GoapAgent.prototype.getGoap = function () {
        return this.goap;
    };
    GoapAgent.prototype.setGoap = function (v) {
        this.goap = v;
    };
    GoapAgent.prototype.getPlanner = function () {
        return this.planner;
    };
    GoapAgent.prototype.getAvaliableActions = function () {
        return this.availableActions;
    };
    GoapAgent.prototype.setCurrentActions = function (currentActions) {
        this.currentActions = currentActions;
    };
    GoapAgent.prototype.peekCurrentActions = function () {
        return this.currentActions[0];
    };
    GoapAgent.prototype.dequeueCurrentActions = function () {
        return this.currentActions.shift();
    };
    GoapAgent.prototype.getCurrentActions = function () {
        return this.currentActions;
    };
    GoapAgent.prototype.initState = function () {
        var stateMgr = this.stateMgr = new StateManager_1.StateManager(this);
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this));
    };
    GoapAgent.prototype.changeState = function (key, obj, isForce) {
        this.stateMgr.changeState(key, obj, isForce);
    };
    GoapAgent.prototype.update = function (delta) {
        this.stateMgr.update(delta);
    };
    GoapAgent.prototype.addAction = function (a) {
        this.availableActions.push(a);
    };
    GoapAgent.prototype.getAction = function (cls) {
        for (var _i = 0, _a = this.availableActions; _i < _a.length; _i++) {
            var action = _a[_i];
            if (action instanceof cls) {
                return action;
            }
        }
        return null;
    };
    GoapAgent.prototype.removeAction = function (action) {
        for (var i = 0, len = this.availableActions.length; i < len; i++) {
            if (this.availableActions[i] == action) {
                this.availableActions.splice(i, 1);
                return;
            }
        }
    };
    GoapAgent.prototype.hasActionPlan = function () {
        return this.currentActions.length > 0;
    };
    GoapAgent.prototype.loadActions = function () {
        var actions = this.getAvaliableActions();
        for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
            var action = actions_1[_i];
            this.availableActions.push(action);
        }
        console.log("Found actions: " + GoapAgent.prettyPrintActions(actions));
    };
    // 输出 ==================================================
    GoapAgent.prettyPrintState = function (state) {
        var s = "";
        state.forEach(function (value, key) {
            s += key + ":" + value;
            s += ", ";
        });
        return s;
    };
    GoapAgent.prettyPrintActionsQueue = function (actions) {
        console.log("prettyPrintActionsQueue: ", actions);
        var s = "";
        actions.forEach(function (action) {
            s += action.constructor.name;
            s += "-> ";
        });
        s += "GOAL";
        return s;
    };
    GoapAgent.prettyPrintActions = function (actions) {
        var s = "";
        actions.forEach(function (action) {
            s += action.constructor.name;
            s += ", ";
        });
        return s;
    };
    GoapAgent.prettyPrintAction = function (action) {
        return "" + action.constructor.name;
    };
    return GoapAgent;
}(cc.Component));
exports.GoapAgent = GoapAgent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBQStCLDZCQUFZO0lBQTNDOztJQTZIQSxDQUFDO0lBNUhPLDBCQUFNLEdBQWI7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFLTSwyQkFBTyxHQUFkO1FBQ0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xCLENBQUM7SUFFTSwyQkFBTyxHQUFkLFVBQWUsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUdNLDhCQUFVLEdBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFHTSx1Q0FBbUIsR0FBMUI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBR00scUNBQWlCLEdBQXhCLFVBQXlCLGNBQTRCO1FBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFDTSxzQ0FBa0IsR0FBekI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxD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S0FBSyxFQUFFLEdBQUc7WUFDeEIsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLGlDQUF1QixHQUFyQyxVQUFzQyxPQUFxQjtRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBa0I7WUFDbEMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUMsSUFBSSxLQUFLLENBQUM7UUFDWixDQUFDLENBQUMsQ0FBQTtRQUNGLENBQUMsSUFBSSxNQUFNLENBQUM7UUFDWixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSw0QkFBa0IsR0FBaEMsVUFBaUMsT0FBcUI7UUFDckQsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFrQjtZQUNsQyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsMkJBQWlCLEdBQS9CLFVBQWdDLE1BQWtCO1FBQ2pELE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRixnQkFBQztBQUFELENBN0hBLEFBNkhDLENBN0g4QixFQUFFLENBQUMsU0FBUyxHQTZIMUM7QUE3SFksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlRW51bVwiO1xyXG5pbXBvcnQgeyBTdGF0ZUlkbGUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlSWRsZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZU1vdmUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlTW92ZVwiO1xyXG5pbXBvcnQgeyBTdGF0ZVBlcmZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlUGVyZm9ybUFjdGlvblwiO1xyXG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vZnNtL1N0YXRlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi9Hb2FwUGxhbm5lclwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuL0lHb2FwXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTozMCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxNzo0MTozMVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEdvYXBBZ2VudCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblx0cHVibGljIG9uTG9hZCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5pdFN0YXRlKCk7XHJcblx0XHR0aGlzLnBsYW5uZXIgPSBuZXcgR29hcFBsYW5uZXIoKTtcclxuXHRcdHRoaXMuYXZhaWxhYmxlQWN0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuXHRcdHRoaXMubG9hZEFjdGlvbnMoKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGVNZ3I6IFN0YXRlTWFuYWdlcjtcclxuXHRwcm90ZWN0ZWQgZ29hcDogSUdvYXA7XHJcblxyXG5cdHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcclxuXHRcdHJldHVybiB0aGlzLmdvYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0R29hcCh2KSB7XHJcblx0XHR0aGlzLmdvYXAgPSB2XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBsYW5uZXI6IEdvYXBQbGFubmVyO1xyXG5cdHB1YmxpYyBnZXRQbGFubmVyKCk6IEdvYXBQbGFubmVyIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYW5uZXI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGF2YWlsYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlQWN0aW9ucztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVla0N1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb24ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNbMF07XHJcblx0fVxyXG5cdHB1YmxpYyBkZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEN1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFN0YXRlKCkge1xyXG5cdFx0bGV0IHN0YXRlTWdyID0gdGhpcy5zdGF0ZU1nciA9IG5ldyBTdGF0ZU1hbmFnZXIodGhpcyk7XHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUsIG5ldyBTdGF0ZUlkbGUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUsIG5ldyBTdGF0ZU1vdmUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZVBlcmZvcm1BY3Rpb24sIG5ldyBTdGF0ZVBlcmZvcm1BY3Rpb24odGhpcykpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iaj86IGFueSwgaXNGb3JjZT86IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoa2V5LCBvYmosIGlzRm9yY2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnN0YXRlTWdyLnVwZGF0ZShkZWx0YSk7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRBY3Rpb24oYTogR29hcEFjdGlvbikge1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYSk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcoKTogVCB9KSB7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhY3Rpb24gaW5zdGFuY2VvZiBjbHMpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgaGFzQWN0aW9uUGxhbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRBY3Rpb25zKCkge1xyXG5cdFx0bGV0IGFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMuZ2V0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcclxuXHRcdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWN0aW9uczogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnMpKTtcclxuXHJcblx0fVxyXG5cdC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRTdGF0ZShzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pikge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdHMgKz0ga2V5ICsgXCI6XCIgKyB2YWx1ZTtcclxuXHRcdFx0cyArPSBcIiwgXCI7XHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHN0cmluZyB7XHJcblx0XHRjb25zb2xlLmxvZyhcInByZXR0eVByaW50QWN0aW9uc1F1ZXVlOiBcIiwgYWN0aW9ucylcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEdvYXBBY3Rpb24pID0+IHtcclxuXHRcdFx0cyArPSBhY3Rpb24uY29uc3RydWN0b3IubmFtZTtcclxuXHRcdFx0cyArPSBcIi0+IFwiO1xyXG5cdFx0fSlcclxuXHRcdHMgKz0gXCJHT0FMXCI7XHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR29hcEFjdGlvbikgPT4ge1xyXG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRzICs9IFwiLCBcIjtcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XHJcblx0XHRyZXR1cm4gXCJcIiArIGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcbn0iXX0=