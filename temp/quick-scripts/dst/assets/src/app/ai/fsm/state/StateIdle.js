
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
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateIdle = /** @class */ (function (_super) {
    __extends(StateIdle, _super);
    function StateIdle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateIdle.prototype.onEnter = function () {
    };
    /**
     * 状态更新
     * @return
     */
    StateIdle.prototype.onUpdate = function (timeStamp) {
        var iGoap = this.owner.getOwner();
        var planner = this.owner.getPlanner();
        var avaliableActions = this.owner.getAvaliableActions();
        //console.log("avaliableActions: ", avaliableActions);
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = iGoap.getWorldState();
        var goal = iGoap.createGoalState();
        // plan
        var plan = planner.plan(iGoap, avaliableActions, worldState, goal);
        if (plan != null) {
            // we have a plan, hooray!
            this.owner.setCurrentActions(plan);
            iGoap.planFound(goal, plan);
            // move to PerformAction state
            this.owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
        else {
            //console.log("Failed Plan");
            iGoap.planFailed(goal);
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBbUNBLENBQUM7SUFqQ1UsMkJBQU8sR0FBZDtJQUVBLENBQUM7SUFDRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkQsSUFBSSxnQkFBZ0IsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RFLHNEQUFzRDtRQUN0RCxnQkFBZ0I7UUFFaEIsdURBQXVEO1FBQ3ZELElBQUksVUFBVSxHQUF3QixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUQsSUFBSSxJQUFJLEdBQXdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1Qiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQzhCLHFCQUFTLEdBbUN2QztBQW5DWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIjtcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcFBsYW5uZXJcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiO1xuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZUlkbGUgZXh0ZW5kcyBTdGF0ZUJhc2Uge1xuICAgIHByb3RlY3RlZCBfb3duZXI6IEdvYXBBZ2VudFxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xuXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsCBcbiAgICAgKiBAcmV0dXJuIFxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgaUdvYXA6IElHb2FwID0gdGhpcy5vd25lci5nZXRPd25lcigpO1xuICAgICAgICBsZXQgcGxhbm5lcjogR29hcFBsYW5uZXIgPSB0aGlzLm93bmVyLmdldFBsYW5uZXIoKTtcbiAgICAgICAgbGV0IGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IHRoaXMub3duZXIuZ2V0QXZhbGlhYmxlQWN0aW9ucygpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXZhbGlhYmxlQWN0aW9uczogXCIsIGF2YWxpYWJsZUFjdGlvbnMpO1xuICAgICAgICAvLyBHT0FQIHBsYW5uaW5nXG5cbiAgICAgICAgLy8gZ2V0IHRoZSB3b3JsZCBzdGF0ZSBhbmQgdGhlIGdvYWwgd2Ugd2FudCB0byBwbGFuIGZvclxuICAgICAgICBsZXQgd29ybGRTdGF0ZTogTWFwPHN0cmluZywgT2JqZWN0PiA9IGlHb2FwLmdldFdvcmxkU3RhdGUoKTtcbiAgICAgICAgbGV0IGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBpR29hcC5jcmVhdGVHb2FsU3RhdGUoKTtcblxuICAgICAgICAvLyBwbGFuXG4gICAgICAgIGxldCBwbGFuOiBHb2FwQWN0aW9uW10gPSBwbGFubmVyLnBsYW4oaUdvYXAsIGF2YWxpYWJsZUFjdGlvbnMsIHdvcmxkU3RhdGUsIGdvYWwpO1xuICAgICAgICBpZiAocGxhbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcGxhbiwgaG9vcmF5IVxuICAgICAgICAgICAgdGhpcy5vd25lci5zZXRDdXJyZW50QWN0aW9ucyhwbGFuKTtcbiAgICAgICAgICAgIGlHb2FwLnBsYW5Gb3VuZChnb2FsLCBwbGFuKTtcblxuICAgICAgICAgICAgLy8gbW92ZSB0byBQZXJmb3JtQWN0aW9uIHN0YXRlXG4gICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZVBlcmZvcm1BY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkZhaWxlZCBQbGFuXCIpO1xuICAgICAgICAgICAgaUdvYXAucGxhbkZhaWxlZChnb2FsKTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgIH1cbiAgICB9XG59Il19