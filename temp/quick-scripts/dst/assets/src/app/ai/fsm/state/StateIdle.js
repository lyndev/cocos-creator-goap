
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateIdle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2490dGEfv5LaIbOqd+6fOPP', 'StateIdle');
// src/app/ai/fsm/state/StateIdle.ts

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
exports.StateIdle = void 0;
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateIdle = /** @class */ (function (_super) {
    __extends(StateIdle, _super);
    function StateIdle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateIdle.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StateIdle.prototype.onUpdate = function (timeStamp) {
        var owner = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = owner.getGoap();
        var planner = owner.getPlanner();
        var avaliableActions = owner.getAvaliableActions();
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = goap.getWorldState();
        var goal = goap.createGoalState();
        // plan
        var plan = planner.plan(owner.node, avaliableActions, worldState, goal);
        if (plan != null) {
            // we have a plan, hooray!
            owner.setCurrentActions(plan);
            goap.planFound(goal, plan);
            // move to PerformAction state
            owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
        else {
            //console.log("Failed Plan");
            goap.planFailed(goal);
            owner.changeState(StateEnum_1.StateEnum.StateIdle);
        }
    };
    return StateIdle;
}(StateBase_1.StateBase));
exports.StateIdle = StateIdle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUdoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQStCLDZCQUFTO0lBQXhDOztJQWlDQSxDQUFDO0lBaENVLDJCQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUVuQjs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtRQUM5QyxJQUFJLElBQUksR0FBVSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDakMsSUFBSSxPQUFPLEdBQWdCLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQTtRQUM3QyxJQUFJLGdCQUFnQixHQUFpQixLQUFLLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtRQUNoRSxnQkFBZ0I7UUFFaEIsdURBQXVEO1FBQ3ZELElBQUksVUFBVSxHQUF3QixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7UUFDMUQsSUFBSSxJQUFJLEdBQXdCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQTtRQUV0RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDckYsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFO1lBQ2QsMEJBQTBCO1lBQzFCLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQTtZQUUxQiw4QkFBOEI7WUFDOUIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUE7U0FDbEQ7YUFBTTtZQUNILDZCQUE2QjtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3JCLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtTQUN6QztJQUNMLENBQUM7SUFDTCxnQkFBQztBQUFELENBakNBLEFBaUNDLENBakM4QixxQkFBUyxHQWlDdkM7QUFqQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgR29hcFBsYW5uZXIgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwUGxhbm5lclwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVJZGxlIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG5cbiAgICAvKipcbiAgICAgKiDnirbmgIHmm7TmlrBcbiAgICAgKiBAcmV0dXJuXG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBvd25lciA9IHRoaXMub3duZXIuZ2V0Q29tcG9uZW50KEdvYXBBZ2VudClcbiAgICAgICAgbGV0IGdvYXA6IElHb2FwID0gb3duZXIuZ2V0R29hcCgpXG4gICAgICAgIGxldCBwbGFubmVyOiBHb2FwUGxhbm5lciA9IG93bmVyLmdldFBsYW5uZXIoKVxuICAgICAgICBsZXQgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gb3duZXIuZ2V0QXZhbGlhYmxlQWN0aW9ucygpXG4gICAgICAgIC8vIEdPQVAgcGxhbm5pbmdcblxuICAgICAgICAvLyBnZXQgdGhlIHdvcmxkIHN0YXRlIGFuZCB0aGUgZ29hbCB3ZSB3YW50IHRvIHBsYW4gZm9yXG4gICAgICAgIGxldCB3b3JsZFN0YXRlOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gZ29hcC5nZXRXb3JsZFN0YXRlKClcbiAgICAgICAgbGV0IGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBnb2FwLmNyZWF0ZUdvYWxTdGF0ZSgpXG5cbiAgICAgICAgLy8gcGxhblxuICAgICAgICBsZXQgcGxhbjogR29hcEFjdGlvbltdID0gcGxhbm5lci5wbGFuKG93bmVyLm5vZGUsIGF2YWxpYWJsZUFjdGlvbnMsIHdvcmxkU3RhdGUsIGdvYWwpXG4gICAgICAgIGlmIChwbGFuICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwbGFuLCBob29yYXkhXG4gICAgICAgICAgICBvd25lci5zZXRDdXJyZW50QWN0aW9ucyhwbGFuKVxuICAgICAgICAgICAgZ29hcC5wbGFuRm91bmQoZ29hbCwgcGxhbilcblxuICAgICAgICAgICAgLy8gbW92ZSB0byBQZXJmb3JtQWN0aW9uIHN0YXRlXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZhaWxlZCBQbGFuXCIpO1xuICAgICAgICAgICAgZ29hcC5wbGFuRmFpbGVkKGdvYWwpXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19