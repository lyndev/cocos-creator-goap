
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAgent = void 0;
var StateEnum_1 = require("../fsm/state/StateEnum");
var StateIdle_1 = require("../fsm/state/StateIdle");
var StateMove_1 = require("../fsm/state/StateMove");
var StatePerformAction_1 = require("../fsm/state/StatePerformAction");
var StateManager_1 = require("../fsm/StateManager");
var GoapPlanner_1 = require("./GoapPlanner");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GoapAgent = /** @class */ (function (_super) {
    __extends(GoapAgent, _super);
    function GoapAgent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoapAgent_1 = GoapAgent;
    GoapAgent.prototype.onLoad = function () {
        this.initState();
        this.planner = new GoapPlanner_1.GoapPlanner();
        this.currentActions = [];
        this.stateMgr.changeState(StateEnum_1.StateEnum.StateIdle);
    };
    GoapAgent.prototype.initState = function () {
        var stateMgr = (this.stateMgr = new StateManager_1.StateManager(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StateIdle, new StateIdle_1.StateIdle(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StateMove, new StateMove_1.StateMove(this.node));
        stateMgr.registerState(StateEnum_1.StateEnum.StatePerformAction, new StatePerformAction_1.StatePerformAction(this.node));
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
        console.log("Found actions: " + GoapAgent_1.prettyPrintActions(actions));
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
    var GoapAgent_1;
    GoapAgent = GoapAgent_1 = __decorate([
        ccclass
    ], GoapAgent);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBa0Q7QUFDbEQsb0RBQWtEO0FBQ2xELG9EQUFrRDtBQUNsRCxzRUFBb0U7QUFDcEUsb0RBQWtEO0FBR2xELDZDQUEyQztBQUdyQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQTtBQUUzQztJQUErQiw2QkFBWTtJQUEzQzs7SUFxSUEsQ0FBQztrQkFySVksU0FBUztJQU9SLDBCQUFNLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUE7UUFDaEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUE7UUFDeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRU8sNkJBQVMsR0FBakI7UUFDSSxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSwyQkFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzVELFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxxQkFBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQ3JFLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLHVDQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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R0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtJQUN2QyxDQUFDOztJQXBJUSxTQUFTO1FBRHJCLE9BQU87T0FDSyxTQUFTLENBcUlyQjtJQUFELGdCQUFDO0NBcklELEFBcUlDLENBckk4QixFQUFFLENBQUMsU0FBUyxHQXFJMUM7QUFySVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlRW51bVwiXG5pbXBvcnQgeyBTdGF0ZUlkbGUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlSWRsZVwiXG5pbXBvcnQgeyBTdGF0ZU1vdmUgfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlTW92ZVwiXG5pbXBvcnQgeyBTdGF0ZVBlcmZvcm1BY3Rpb24gfSBmcm9tIFwiLi4vZnNtL3N0YXRlL1N0YXRlUGVyZm9ybUFjdGlvblwiXG5pbXBvcnQgeyBTdGF0ZU1hbmFnZXIgfSBmcm9tIFwiLi4vZnNtL1N0YXRlTWFuYWdlclwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi9Hb2FwUGxhbm5lclwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuL0lHb2FwXCJcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvclxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBHb2FwQWdlbnQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHByb3RlY3RlZCBhdmFpbGFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW11cbiAgICBwcm90ZWN0ZWQgY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXVxuICAgIHByb3RlY3RlZCBzdGF0ZU1ncjogU3RhdGVNYW5hZ2VyXG4gICAgcHJvdGVjdGVkIGdvYXA6IElHb2FwXG4gICAgcHJvdGVjdGVkIHBsYW5uZXI6IEdvYXBQbGFubmVyXG5cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmluaXRTdGF0ZSgpXG4gICAgICAgIHRoaXMucGxhbm5lciA9IG5ldyBHb2FwUGxhbm5lcigpXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGlvbnMgPSBbXVxuICAgICAgICB0aGlzLnN0YXRlTWdyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0U3RhdGUoKSB7XG4gICAgICAgIGxldCBzdGF0ZU1nciA9ICh0aGlzLnN0YXRlTWdyID0gbmV3IFN0YXRlTWFuYWdlcih0aGlzLm5vZGUpKVxuICAgICAgICBzdGF0ZU1nci5yZWdpc3RlclN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUsIG5ldyBTdGF0ZUlkbGUodGhpcy5ub2RlKSlcbiAgICAgICAgc3RhdGVNZ3IucmVnaXN0ZXJTdGF0ZShTdGF0ZUVudW0uU3RhdGVNb3ZlLCBuZXcgU3RhdGVNb3ZlKHRoaXMubm9kZSkpXG4gICAgICAgIHN0YXRlTWdyLnJlZ2lzdGVyU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbiwgbmV3IFN0YXRlUGVyZm9ybUFjdGlvbih0aGlzLm5vZGUpKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRHb2FwKCk6IElHb2FwIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ29hcFxuICAgIH1cblxuICAgIHB1YmxpYyBzZXRHb2FwKHYpIHtcbiAgICAgICAgdGhpcy5nb2FwID0gdlxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRQbGFubmVyKCk6IEdvYXBQbGFubmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGxhbm5lclxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWlsYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0Q3VycmVudEFjdGlvbnMoY3VycmVudEFjdGlvbnM6IEdvYXBBY3Rpb25bXSkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb25zID0gY3VycmVudEFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVla0N1cnJlbnRBY3Rpb25zKCk6IEdvYXBBY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50QWN0aW9uc1swXVxuICAgIH1cblxuICAgIHB1YmxpYyBkZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLnNoaWZ0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0Q3VycmVudEFjdGlvbnMoKTogR29hcEFjdGlvbltdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudEFjdGlvbnNcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iaj86IGFueSwgaXNGb3JjZT86IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1nci5jaGFuZ2VTdGF0ZShrZXksIG9iaiwgaXNGb3JjZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgdXBkYXRlKGRlbHRhOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5zdGF0ZU1nci51cGRhdGUoZGVsdGEpXG4gICAgfVxuICAgIHB1YmxpYyBhZGRBY3Rpb24oYTogR29hcEFjdGlvbikge1xuICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhKVxuICAgIH1cblxuICAgIHB1YmxpYyBnZXRBY3Rpb248VCBleHRlbmRzIEdvYXBBY3Rpb24+KGNsczogeyBuZXcgKCk6IFQgfSkge1xuICAgICAgICBmb3IgKGxldCBhY3Rpb24gb2YgdGhpcy5hdmFpbGFibGVBY3Rpb25zKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgY2xzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFjdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICAgIHB1YmxpYyByZW1vdmVBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmF2YWlsYWJsZUFjdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF2YWlsYWJsZUFjdGlvbnNbaV0gPT0gYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hdmFpbGFibGVBY3Rpb25zLnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhhc0FjdGlvblBsYW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA+IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYW5DdXJBY3Rpb25zKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY3Rpb25zLmxlbmd0aCA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgY2xlYW5BdmFsYWJsZUFjdGlvbnMoKSB7XG4gICAgICAgIHRoaXMuYXZhaWxhYmxlQWN0aW9ucy5sZW5ndGggPSAwXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBsb2FkQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgIGZvciAobGV0IGFjdGlvbiBvZiBhY3Rpb25zKSB7XG4gICAgICAgICAgICB0aGlzLmF2YWlsYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJGb3VuZCBhY3Rpb25zOiBcIiArIEdvYXBBZ2VudC5wcmV0dHlQcmludEFjdGlvbnMoYWN0aW9ucykpXG4gICAgfVxuICAgIC8vIOi+k+WHuiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRTdGF0ZShzdGF0ZTogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0Pikge1xuICAgICAgICBsZXQgczogc3RyaW5nID0gXCJcIlxuICAgICAgICBzdGF0ZS5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgICAgICBzICs9IGtleSArIFwiOlwiICsgdmFsdWVcbiAgICAgICAgICAgIHMgKz0gXCIsIFwiXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnNRdWV1ZShhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiBzdHJpbmcge1xuICAgICAgICBjb25zb2xlLmxvZyhcInByZXR0eVByaW50QWN0aW9uc1F1ZXVlOiBcIiwgYWN0aW9ucylcbiAgICAgICAgbGV0IHM6IHN0cmluZyA9IFwiXCJcbiAgICAgICAgYWN0aW9ucy5mb3JFYWNoKChhY3Rpb246IEdvYXBBY3Rpb24pID0+IHtcbiAgICAgICAgICAgIHMgKz0gYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWVcbiAgICAgICAgICAgIHMgKz0gXCItPiBcIlxuICAgICAgICB9KVxuICAgICAgICBzICs9IFwiR09BTFwiXG4gICAgICAgIHJldHVybiBzXG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBwcmV0dHlQcmludEFjdGlvbnMoYWN0aW9uczogR29hcEFjdGlvbltdKSB7XG4gICAgICAgIGxldCBzOiBzdHJpbmcgPSBcIlwiXG4gICAgICAgIGFjdGlvbnMuZm9yRWFjaCgoYWN0aW9uOiBHb2FwQWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBzICs9IGFjdGlvbi5jb25zdHJ1Y3Rvci5uYW1lXG4gICAgICAgICAgICBzICs9IFwiLCBcIlxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gc1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgcHJldHR5UHJpbnRBY3Rpb24oYWN0aW9uOiBHb2FwQWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBcIlwiICsgYWN0aW9uLmNvbnN0cnVjdG9yLm5hbWVcbiAgICB9XG59XG4iXX0=