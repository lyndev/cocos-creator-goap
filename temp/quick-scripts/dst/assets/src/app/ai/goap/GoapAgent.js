
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
    GoapAgent.prototype.init = function () {
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.availableActions = [];
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
    };
    GoapAgent.prototype.initState = function () {
        var stateMgr = this.stateMgr = new StateManager_1.StateManager(this);
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this));
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
    GoapAgent.prototype.cleanCurActions = function () {
        this.currentActions.length = 0;
    };
    GoapAgent.prototype.cleanAvalableActions = function () {
        this.availableActions.length = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBQStCLDZCQUFZO0lBQTNDOztJQXlJQSxDQUFDO0lBbElPLHdCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVPLDZCQUFTLEdBQWpCO1FBQ0MsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLDJCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLHFCQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUNoRSxRQUFRLENBQUMsYUFBYSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUkscUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ2hFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7SUFDbkYsQ0FBQztJQUVNLDJCQUFPLEdBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJ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RUFBRSxDQUFDLFNBQVMsR0F5STFDO0FBeklZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUVudW1cIjtcclxuaW1wb3J0IHsgU3RhdGVJZGxlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZUlkbGVcIjtcclxuaW1wb3J0IHsgU3RhdGVNb3ZlIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZU1vdmVcIjtcclxuaW1wb3J0IHsgU3RhdGVQZXJmb3JtQWN0aW9uIH0gZnJvbSBcIi4uL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb25cIjtcclxuaW1wb3J0IHsgU3RhdGVNYW5hZ2VyIH0gZnJvbSBcIi4uL2ZzbS9TdGF0ZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4vR29hcFBsYW5uZXJcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6NDE6MzFcclxuICovXHJcbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cdHByaXZhdGUgYXZhaWxhYmxlQWN0aW9uczogR29hcEFjdGlvbltdO1xyXG5cdHByaXZhdGUgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwcml2YXRlIHN0YXRlTWdyOiBTdGF0ZU1hbmFnZXI7XHJcblx0cHJvdGVjdGVkIGdvYXA6IElHb2FwO1xyXG5cdHByaXZhdGUgcGxhbm5lcjogR29hcFBsYW5uZXI7XHJcblxyXG5cdHB1YmxpYyBpbml0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5pbml0U3RhdGUoKTtcclxuXHRcdHRoaXMucGxhbm5lciA9IG5ldyBHb2FwUGxhbm5lcigpO1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zID0gW107XHJcblx0XHR0aGlzLmN1cnJlbnRBY3Rpb25zID0gW107XHJcblx0XHR0aGlzLnN0YXRlTWdyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBpbml0U3RhdGUoKSB7XHJcblx0XHRsZXQgc3RhdGVNZ3IgPSB0aGlzLnN0YXRlTWdyID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzKTtcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSwgbmV3IFN0YXRlSWRsZSh0aGlzKSlcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlTW92ZSwgbmV3IFN0YXRlTW92ZSh0aGlzKSlcclxuXHRcdHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbiwgbmV3IFN0YXRlUGVyZm9ybUFjdGlvbih0aGlzKSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcclxuXHRcdHJldHVybiB0aGlzLmdvYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0R29hcCh2KSB7XHJcblx0XHR0aGlzLmdvYXAgPSB2XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0UGxhbm5lcigpOiBHb2FwUGxhbm5lciB7XHJcblx0XHRyZXR1cm4gdGhpcy5wbGFubmVyO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuXHRcdHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlZWtDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zWzBdO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGRlcXVldWVDdXJyZW50QWN0aW9ucygpOiBHb2FwQWN0aW9uIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLnNoaWZ0KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0Q3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHJcblxyXG5cdHB1YmxpYyBjaGFuZ2VTdGF0ZShrZXk6IHN0cmluZywgb2JqPzogYW55LCBpc0ZvcmNlPzogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcclxuXHRcdHRoaXMuc3RhdGVNZ3IudXBkYXRlKGRlbHRhKTtcclxuXHR9XHJcblx0cHVibGljIGFkZEFjdGlvbihhOiBHb2FwQWN0aW9uKSB7XHJcblx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcoKTogVCB9KSB7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhY3Rpb24gaW5zdGFuY2VvZiBjbHMpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cHVibGljIGhhc0FjdGlvblBsYW4oKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5sZW5ndGggPiAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNsZWFuQ3VyQWN0aW9ucygpIHtcclxuXHRcdHRoaXMuY3VycmVudEFjdGlvbnMubGVuZ3RoID0gMFxyXG5cdH1cclxuXHJcblx0cHVibGljIGNsZWFuQXZhbGFibGVBY3Rpb25zKCkge1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLmxlbmd0aCA9IDBcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgbG9hZEFjdGlvbnMoKSB7XHJcblx0XHRsZXQgYWN0aW9uczogR29hcEFjdGlvbltdID0gdGhpcy5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgYWN0aW9ucykge1xyXG5cdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG5cdFx0fVxyXG5cdFx0Y29uc29sZS5sb2coXCJGb3VuZCBhY3Rpb25zOiBcIiArIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnMoYWN0aW9ucykpO1xyXG5cclxuXHR9XHJcblx0Ly8g6L6T5Ye6ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludFN0YXRlKHN0YXRlOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KSB7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdHN0YXRlLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuXHRcdFx0cyArPSBrZXkgKyBcIjpcIiArIHZhbHVlO1xyXG5cdFx0XHRzICs9IFwiLCBcIjtcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zUXVldWUoYWN0aW9uczogR29hcEFjdGlvbltdKTogc3RyaW5nIHtcclxuXHRcdGNvbnNvbGUubG9nKFwicHJldHR5UHJpbnRBY3Rpb25zUXVldWU6IFwiLCBhY3Rpb25zKVxyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR29hcEFjdGlvbikgPT4ge1xyXG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRzICs9IFwiLT4gXCI7XHJcblx0XHR9KVxyXG5cdFx0cyArPSBcIkdPQUxcIjtcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnMoYWN0aW9uczogR29hcEFjdGlvbltdKSB7XHJcblx0XHRsZXQgczogc3RyaW5nID0gXCJcIjtcclxuXHRcdGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XHJcblx0XHRcdHMgKz0gYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0XHRcdHMgKz0gXCIsIFwiO1xyXG5cdFx0fSlcclxuXHRcdHJldHVybiBzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdHJldHVybiBcIlwiICsgYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWU7XHJcblx0fVxyXG5cclxufSJdfQ==