
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBaUNDLG1CQUFtQixLQUFZO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQXBDTSw0QkFBUSxHQUFmO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSw4QkFBVSxHQUFqQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBR00sdUNBQW1CLEdBQTFCO1FBQ0MsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7SUFDOUIsQ0FBQztJQUdNLHFDQUFpQixHQUF4QixVQUF5QixjQUE0QjtRQUNwRCxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN0QyxDQUFDO0lBQ00sc0NBQWtCLEdBQXpCO1FBQ0MsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFDTSx5Q0FBcUIsR0FBNUI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLENB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QyxJQUFJLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsaUNBQXVCLEdBQXJDLFVBQXNDLE9BQXFCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFrQjtZQUNsQyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLDRCQUFrQixHQUFoQyxVQUFpQyxPQUFxQjtRQUNyRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQ2xDLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSwyQkFBaUIsR0FBL0IsVUFBZ0MsTUFBa0I7UUFDakQsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0F6SEEsQUF5SEMsSUFBQTtBQXpIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVFbnVtXCI7XG5pbXBvcnQgeyBTdGF0ZUlkbGUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlSWRsZVwiO1xuaW1wb3J0IHsgU3RhdGVNb3ZlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZU1vdmVcIjtcbmltcG9ydCB7IFN0YXRlUGVyZm9ybUFjdGlvbiB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVQZXJmb3JtQWN0aW9uXCI7XG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vZnNtL1N0YXRlTWFuYWdlclwiO1xuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4vR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi9Hb2FwUGxhbm5lclwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTozMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE3OjQxOjMxXG4gKi9cbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQge1xuXG5cdHByaXZhdGUgc3RhdGVNZ3I6IFN0YXRlTWFuYWdlcjtcblxuXHRwcml2YXRlIG93bmVyOiBJR29hcDtcblx0cHVibGljIGdldE93bmVyKCk6IElHb2FwIHtcblx0XHRyZXR1cm4gdGhpcy5vd25lcjtcblx0fVxuXHRwcml2YXRlIHBsYW5uZXI6IEdvYXBQbGFubmVyO1xuXHRwdWJsaWMgZ2V0UGxhbm5lcigpOiBHb2FwUGxhbm5lciB7XG5cdFx0cmV0dXJuIHRoaXMucGxhbm5lcjtcblx0fVxuXG5cdHByaXZhdGUgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdO1xuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnM7XG5cdH1cblxuXHRwcml2YXRlIGN1cnJlbnRBY3Rpb25zOiBHb2FwQWN0aW9uW107XG5cdHB1YmxpYyBzZXRDdXJyZW50QWN0aW9ucyhjdXJyZW50QWN0aW9uczogR29hcEFjdGlvbltdKSB7XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xuXHR9XG5cdHB1YmxpYyBwZWVrQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNbMF07XG5cdH1cblx0cHVibGljIGRlcXVldWVDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5zaGlmdCgpO1xuXHR9XG5cblx0cHVibGljIGdldEN1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnM7XG5cdH1cblxuXHRwdWJsaWMgY29uc3RydWN0b3Iob3duZXI6IElHb2FwKSB7XG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHRcdHRoaXMuaW5pdFN0YXRlKCk7XG5cdFx0dGhpcy5wbGFubmVyID0gbmV3IEdvYXBQbGFubmVyKCk7XG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW107XG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG5cdFx0dGhpcy5sb2FkQWN0aW9ucygpO1xuXHR9XG5cdHByaXZhdGUgaW5pdFN0YXRlKCkge1xuXHRcdGxldCBzdGF0ZU1nciA9IHRoaXMuc3RhdGVNZ3IgPSBuZXcgU3RhdGVNYW5hZ2VyKHRoaXMpO1xuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSwgbmV3IFN0YXRlSWRsZSh0aGlzKSlcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUsIG5ldyBTdGF0ZU1vdmUodGhpcykpXG5cdFx0c3RhdGVNZ3IucmVnaXN0ZXJTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uLCBuZXcgU3RhdGVQZXJmb3JtQWN0aW9uKHRoaXMpKVxuXHR9XG5cblx0cHVibGljIGNoYW5nZVN0YXRlKGtleTogc3RyaW5nLCBvYmo/OiBhbnksIGlzRm9yY2U/OiBib29sZWFuKSB7XG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSk7XG5cdH1cblxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcblx0XHR0aGlzLnN0YXRlTWdyLnVwZGF0ZShkZWx0YSk7XG5cdH1cblx0cHVibGljIGFkZEFjdGlvbihhOiBHb2FwQWN0aW9uKSB7XG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYSk7XG5cdH1cblx0cHVibGljIGdldEFjdGlvbjxUIGV4dGVuZHMgR29hcEFjdGlvbj4oY2xzOiB7IG5ldygpOiBUIH0pIHtcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XG5cdFx0XHRpZiAoYWN0aW9uIGluc3RhbmNlb2YgY2xzKSB7XG5cdFx0XHRcdHJldHVybiBhY3Rpb247XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cdHB1YmxpYyByZW1vdmVBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcblx0XHRcdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRwdWJsaWMgaGFzQWN0aW9uUGxhbigpIHtcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5sZW5ndGggPiAwO1xuXHR9XG5cblx0cHJpdmF0ZSBsb2FkQWN0aW9ucygpIHtcblx0XHRsZXQgYWN0aW9uczogR29hcEFjdGlvbltdID0gdGhpcy5vd25lci5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcblx0XHRcdHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWN0aW9uczogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnMpKTtcblxuXHR9XG5cdC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXHRwdWJsaWMgc3RhdGljIHByZXR0eVByaW50U3RhdGUoc3RhdGU6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4pIHtcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcblx0XHRzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG5cdFx0XHRzICs9IGtleSArIFwiOlwiICsgdmFsdWU7XG5cdFx0XHRzICs9IFwiLCBcIjtcblx0XHR9KVxuXHRcdHJldHVybiBzO1xuXHR9XG5cblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiBzdHJpbmcge1xuXHRcdGNvbnNvbGUubG9nKFwicHJldHR5UHJpbnRBY3Rpb25zUXVldWU6IFwiLCBhY3Rpb25zKVxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0cyArPSBcIi0+IFwiO1xuXHRcdH0pXG5cdFx0cyArPSBcIkdPQUxcIjtcblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xuXHRcdFx0cyArPSBcIiwgXCI7XG5cdFx0fSlcblx0XHRyZXR1cm4gcztcblx0fVxuXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG5cdFx0cmV0dXJuIFwiXCIgKyBhY3Rpb24uY29uc3RydWN0b3IubmFtZTtcblx0fVxuXG59Il19