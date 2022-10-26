
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
var GoapAgent = /** @class */ (function () {
    function GoapAgent(owner) {
        this.owner = owner;
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.availableActions = [];
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
        this.loadActions();
    }
    GoapAgent.prototype.getOwner = function () {
        return this.owner;
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
        var actions = this.owner.getAvaliableActions();
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
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsc0VBQXFFO0FBQ3JFLG9EQUFtRDtBQUduRCw2Q0FBNEM7QUFHNUM7Ozs7OztHQU1HO0FBQ0g7SUFpQ0MsbUJBQW1CLEtBQVk7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBcENNLDRCQUFRLEdBQWY7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLDhCQUFVLEdBQWpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFHTSx1Q0FBbUIsR0FBMUI7UUFDQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUM5QixDQUFDO0lBR00scUNBQWlCLEdBQXhCLFVBQXlCLGNBQTRCO1FBQ3BELElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3RDLENBQUM7SUFDTSxzQ0FBa0IsR0FBekI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLHlDQUFxQixHQUE1QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRU0scUNBQWlCLEdBQXhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzVCLENBQUM7SUFXTyw2QkFBUyxHQUFqQjtRQUNDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RELFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDaEUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsa0JBQWtCLEVBQUUsSUFBSSx1Q0FBa0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO0lBQ25GLENBQUM7SUFFTSwrQkFBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBUyxFQUFFLE9BQWlCO1FBQzNELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLDBCQUFNLEdBQWIsVUFBYyxLQUFhO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDTSw2QkFBUyxHQUFoQixVQUFpQixDQUFhO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDL0IsQ0FBQztJQUNNLDZCQUFTLEdBQWhCLFVBQXVDLEdBQWlCO1FBQ3ZELEtBQW1CLFVBQXFCLEVBQXJCLEtBQUEsSUFBSSxDQUFDLGdCQUFnQixFQUFyQixjQUFxQixFQUFyQixJQUFxQixFQUFFO1lBQXJDLElBQUksTUFBTSxTQUFBO1lBQ2QsSUFBSSxNQUFNLFlBQVksR0FBRyxFQUFFO2dCQUMxQixPQUFPLE1BQU0sQ0FBQzthQUNkO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxnQ0FBWSxHQUFuQixVQUFvQixNQUFrQjtRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pFLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDdkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ25DLE9BQU87YUFDUDtTQUNEO0lBQ0YsQ0FBQztJQUNNLGlDQUFhLEdBQXBCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVPLCtCQUFXLEdBQW5CO1FBQ0MsSUFBSSxPQUFPLEdBQWlCLElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUM3RCxLQUFtQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF2QixJQUFJLE1BQU0sZ0JBQUE7WUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV4RSxDQUFDO0lBQ0Qsd0RBQXdEO0lBQzFDLDBCQUFnQixHQUE5QixVQUErQixLQUFnQztRQUM5RCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUssRUFBRSxHQUFHO1lBQ3hCLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSxpQ0FBdUIsR0FBckMsVUFBc0MsT0FBcUI7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQ2xDLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDLElBQUksS0FBSyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUE7UUFDRixDQUFDLElBQUksTUFBTSxDQUFDO1FBQ1osT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsNEJBQWtCLEdBQWhDLFVBQWlDLE9BQXFCO1FBQ3JELElBQUksQ0FBQyxHQUFXLEVBQUUsQ0FBQztRQUNuQixPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBa0I7WUFDbEMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUMsSUFBSSxJQUFJLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLDJCQUFpQixHQUEvQixVQUFnQyxNQUFrQjtRQUNqRCxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUYsZ0JBQUM7QUFBRCxDQXpIQSxBQXlIQyxJQUFBO0FBekhZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUVudW1cIjtcclxuaW1wb3J0IHsgU3RhdGVJZGxlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUlkbGVcIjtcclxuaW1wb3J0IHsgU3RhdGVNb3ZlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZU1vdmVcIjtcclxuaW1wb3J0IHsgU3RhdGVQZXJmb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb25cIjtcclxuaW1wb3J0IHsgU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uL2ZzbS9TdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4vR29hcFBsYW5uZXJcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6NDE6MzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQge1xyXG5cclxuXHRwcml2YXRlIHN0YXRlTWdyOiBTdGF0ZU1hbmFnZXI7XHJcblxyXG5cdHByaXZhdGUgb3duZXI6IElHb2FwO1xyXG5cdHB1YmxpYyBnZXRPd25lcigpOiBJR29hcCB7XHJcblx0XHRyZXR1cm4gdGhpcy5vd25lcjtcclxuXHR9XHJcblx0cHJpdmF0ZSBwbGFubmVyOiBHb2FwUGxhbm5lcjtcclxuXHRwdWJsaWMgZ2V0UGxhbm5lcigpOiBHb2FwUGxhbm5lciB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGFubmVyO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBhdmFpbGFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW107XHJcblx0cHVibGljIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnM7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGN1cnJlbnRBY3Rpb25zOiBHb2FwQWN0aW9uW107XHJcblx0cHVibGljIHNldEN1cnJlbnRBY3Rpb25zKGN1cnJlbnRBY3Rpb25zOiBHb2FwQWN0aW9uW10pIHtcclxuXHRcdHRoaXMuY3VycmVudEFjdGlvbnMgPSBjdXJyZW50QWN0aW9ucztcclxuXHR9XHJcblx0cHVibGljIHBlZWtDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zWzBdO1xyXG5cdH1cclxuXHRwdWJsaWMgZGVxdWV1ZUN1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb24ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnMuc2hpZnQoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3Iob3duZXI6IElHb2FwKSB7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLmluaXRTdGF0ZSgpO1xyXG5cdFx0dGhpcy5wbGFubmVyID0gbmV3IEdvYXBQbGFubmVyKCk7XHJcblx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMgPSBbXTtcclxuXHRcdHRoaXMuY3VycmVudEFjdGlvbnMgPSBbXTtcclxuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcblx0XHR0aGlzLmxvYWRBY3Rpb25zKCk7XHJcblx0fVxyXG5cdHByaXZhdGUgaW5pdFN0YXRlKCkge1xyXG5cdFx0bGV0IHN0YXRlTWdyID0gdGhpcy5zdGF0ZU1nciA9IG5ldyBTdGF0ZU1hbmFnZXIodGhpcyk7XHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUsIG5ldyBTdGF0ZUlkbGUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUsIG5ldyBTdGF0ZU1vdmUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZVBlcmZvcm1BY3Rpb24sIG5ldyBTdGF0ZVBlcmZvcm1BY3Rpb24odGhpcykpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iaj86IGFueSwgaXNGb3JjZT86IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoa2V5LCBvYmosIGlzRm9yY2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnN0YXRlTWdyLnVwZGF0ZShkZWx0YSk7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRBY3Rpb24oYTogR29hcEFjdGlvbikge1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYSk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcoKTogVCB9KSB7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhY3Rpb24gaW5zdGFuY2VvZiBjbHMpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgaGFzQWN0aW9uUGxhbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRBY3Rpb25zKCkge1xyXG5cdFx0bGV0IGFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMub3duZXIuZ2V0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcclxuXHRcdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWN0aW9uczogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnMpKTtcclxuXHJcblx0fVxyXG5cdC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRTdGF0ZShzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pikge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdHMgKz0ga2V5ICsgXCI6XCIgKyB2YWx1ZTtcclxuXHRcdFx0cyArPSBcIiwgXCI7XHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHN0cmluZyB7XHJcblx0XHRjb25zb2xlLmxvZyhcInByZXR0eVByaW50QWN0aW9uc1F1ZXVlOiBcIiwgYWN0aW9ucylcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEdvYXBBY3Rpb24pID0+IHtcclxuXHRcdFx0cyArPSBhY3Rpb24uY29uc3RydWN0b3IubmFtZTtcclxuXHRcdFx0cyArPSBcIi0+IFwiO1xyXG5cdFx0fSlcclxuXHRcdHMgKz0gXCJHT0FMXCI7XHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR29hcEFjdGlvbikgPT4ge1xyXG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRzICs9IFwiLCBcIjtcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XHJcblx0XHRyZXR1cm4gXCJcIiArIGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcbn0iXX0=