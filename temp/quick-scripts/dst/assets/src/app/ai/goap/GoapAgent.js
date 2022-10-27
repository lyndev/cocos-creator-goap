
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWdlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUFtRDtBQUNuRCxvREFBbUQ7QUFDbkQsb0RBQW1EO0FBQ25ELHNFQUFxRTtBQUNyRSxvREFBbUQ7QUFHbkQsNkNBQTRDO0FBRzVDOzs7Ozs7R0FNRztBQUNIO0lBQStCLDZCQUFZO0lBQTNDOztJQTRIQSxDQUFDO0lBM0hPLHdCQUFJLEdBQVg7UUFDQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHlCQUFXLEVBQUUsQ0FBQztRQUNqQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUtNLDJCQUFPLEdBQWQ7UUFDQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbEIsQ0FBQztJQUVNLDJCQUFPLEdBQWQsVUFBZSxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBR00sOEJBQVUsR0FBakI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUdNLHVDQUFtQixHQUExQjtRQUNDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzlCLENBQUM7SUFHTSxxQ0FBaUIsR0FBeEIsVUFBeUIsY0FBNEI7UUFDcEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdEMsQ0FBQztJQUNNLHNDQUFrQixHQUF6QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ00seUNBQXFC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R0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDdkIsQ0FBQyxJQUFJLElBQUksQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRWEsaUNBQXVCLEdBQXJDLFVBQXNDLE9BQXFCO1FBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsT0FBTyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLEdBQVcsRUFBRSxDQUFDO1FBQ25CLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQyxNQUFrQjtZQUNsQyxDQUFDLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7WUFDN0IsQ0FBQyxJQUFJLEtBQUssQ0FBQztRQUNaLENBQUMsQ0FBQyxDQUFBO1FBQ0YsQ0FBQyxJQUFJLE1BQU0sQ0FBQztRQUNaLE9BQU8sQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUVhLDRCQUFrQixHQUFoQyxVQUFpQyxPQUFxQjtRQUNyRCxJQUFJLENBQUMsR0FBVyxFQUFFLENBQUM7UUFDbkIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQWtCO1lBQ2xDLENBQUMsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUM3QixDQUFDLElBQUksSUFBSSxDQUFDO1FBQ1gsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFYSwyQkFBaUIsR0FBL0IsVUFBZ0MsTUFBa0I7UUFDakQsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDckMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0E1SEEsQUE0SEMsQ0E1SDhCLEVBQUUsQ0FBQyxTQUFTLEdBNEgxQztBQTVIWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVFbnVtXCI7XHJcbmltcG9ydCB7IFN0YXRlSWRsZSB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVJZGxlXCI7XHJcbmltcG9ydCB7IFN0YXRlTW92ZSB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVNb3ZlXCI7XHJcbmltcG9ydCB7IFN0YXRlUGVyZm9ybUFjdGlvbiB9IGZyb20gXCIuLi9mc20vc3RhdGUvU3RhdGVQZXJmb3JtQWN0aW9uXCI7XHJcbmltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9mc20vU3RhdGVNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4vR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwUGxhbm5lciB9IGZyb20gXCIuL0dvYXBQbGFubmVyXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjMwIFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTExLTA0IDE3OjQxOjMxXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgR29hcEFnZW50IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHRwdWJsaWMgaW5pdCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5pdFN0YXRlKCk7XHJcblx0XHR0aGlzLnBsYW5uZXIgPSBuZXcgR29hcFBsYW5uZXIoKTtcclxuXHRcdHRoaXMuYXZhaWxhYmxlQWN0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IFtdO1xyXG5cdFx0dGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc3RhdGVNZ3I6IFN0YXRlTWFuYWdlcjtcclxuXHRwcm90ZWN0ZWQgZ29hcDogSUdvYXA7XHJcblxyXG5cdHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcclxuXHRcdHJldHVybiB0aGlzLmdvYXA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0R29hcCh2KSB7XHJcblx0XHR0aGlzLmdvYXAgPSB2XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIHBsYW5uZXI6IEdvYXBQbGFubmVyO1xyXG5cdHB1YmxpYyBnZXRQbGFubmVyKCk6IEdvYXBQbGFubmVyIHtcclxuXHRcdHJldHVybiB0aGlzLnBsYW5uZXI7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGF2YWlsYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwdWJsaWMgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG5cdFx0cmV0dXJuIHRoaXMuYXZhaWxhYmxlQWN0aW9ucztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXTtcclxuXHRwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0dGhpcy5jdXJyZW50QWN0aW9ucyA9IGN1cnJlbnRBY3Rpb25zO1xyXG5cdH1cclxuXHRwdWJsaWMgcGVla0N1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb24ge1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNbMF07XHJcblx0fVxyXG5cdHB1YmxpYyBkZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucy5zaGlmdCgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldEN1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9ucztcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgaW5pdFN0YXRlKCkge1xyXG5cdFx0bGV0IHN0YXRlTWdyID0gdGhpcy5zdGF0ZU1nciA9IG5ldyBTdGF0ZU1hbmFnZXIodGhpcyk7XHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUsIG5ldyBTdGF0ZUlkbGUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUsIG5ldyBTdGF0ZU1vdmUodGhpcykpXHJcblx0XHRzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZVBlcmZvcm1BY3Rpb24sIG5ldyBTdGF0ZVBlcmZvcm1BY3Rpb24odGhpcykpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iaj86IGFueSwgaXNGb3JjZT86IGJvb2xlYW4pIHtcclxuXHRcdHRoaXMuc3RhdGVNZ3IuY2hhbmdlU3RhdGUoa2V5LCBvYmosIGlzRm9yY2UpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHVwZGF0ZShkZWx0YTogbnVtYmVyKSB7XHJcblx0XHR0aGlzLnN0YXRlTWdyLnVwZGF0ZShkZWx0YSk7XHJcblx0fVxyXG5cdHB1YmxpYyBhZGRBY3Rpb24oYTogR29hcEFjdGlvbikge1xyXG5cdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYSk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcoKTogVCB9KSB7XHJcblx0XHRmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XHJcblx0XHRcdGlmIChhY3Rpb24gaW5zdGFuY2VvZiBjbHMpIHtcclxuXHRcdFx0XHRyZXR1cm4gYWN0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUFjdGlvbihhY3Rpb246IEdvYXBBY3Rpb24pIHtcclxuXHRcdGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdFx0aWYgKHRoaXMuYXZhaWxhYmxlQWN0aW9uc1tpXSA9PSBhY3Rpb24pIHtcclxuXHRcdFx0XHR0aGlzLmF2YWlsYWJsZUFjdGlvbnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwdWJsaWMgaGFzQWN0aW9uUGxhbigpIHtcclxuXHRcdHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA+IDA7XHJcblx0fVxyXG5cclxuXHRwcml2YXRlIGxvYWRBY3Rpb25zKCkge1xyXG5cdFx0bGV0IGFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMuZ2V0QXZhbGlhYmxlQWN0aW9ucygpO1xyXG5cdFx0Zm9yIChsZXQgYWN0aW9uIG9mIGFjdGlvbnMpIHtcclxuXHRcdFx0dGhpcy5hdmFpbGFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuXHRcdH1cclxuXHRcdGNvbnNvbGUubG9nKFwiRm91bmQgYWN0aW9uczogXCIgKyBHb2FwQWdlbnQucHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnMpKTtcclxuXHJcblx0fVxyXG5cdC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRTdGF0ZShzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pikge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XHJcblx0XHRcdHMgKz0ga2V5ICsgXCI6XCIgKyB2YWx1ZTtcclxuXHRcdFx0cyArPSBcIiwgXCI7XHJcblx0XHR9KVxyXG5cdFx0cmV0dXJuIHM7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc3RhdGljIHByZXR0eVByaW50QWN0aW9uc1F1ZXVlKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHN0cmluZyB7XHJcblx0XHRjb25zb2xlLmxvZyhcInByZXR0eVByaW50QWN0aW9uc1F1ZXVlOiBcIiwgYWN0aW9ucylcclxuXHRcdGxldCBzOiBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0YWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEdvYXBBY3Rpb24pID0+IHtcclxuXHRcdFx0cyArPSBhY3Rpb24uY29uc3RydWN0b3IubmFtZTtcclxuXHRcdFx0cyArPSBcIi0+IFwiO1xyXG5cdFx0fSlcclxuXHRcdHMgKz0gXCJHT0FMXCI7XHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb25zKGFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xyXG5cdFx0bGV0IHM6IHN0cmluZyA9IFwiXCI7XHJcblx0XHRhY3Rpb25zLmZvckVhY2goKGFjdGlvbjogR29hcEFjdGlvbikgPT4ge1xyXG5cdFx0XHRzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdFx0XHRzICs9IFwiLCBcIjtcclxuXHRcdH0pXHJcblx0XHRyZXR1cm4gcztcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XHJcblx0XHRyZXR1cm4gXCJcIiArIGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lO1xyXG5cdH1cclxuXHJcbn0iXX0=