
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBbUNBLENBQUM7SUFqQ1UsMkJBQU8sR0FBZDtJQUVBLENBQUM7SUFDRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDekMsSUFBSSxPQUFPLEdBQWdCLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkQsSUFBSSxnQkFBZ0IsR0FBaUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RFLHNEQUFzRDtRQUN0RCxnQkFBZ0I7UUFFaEIsdURBQXVEO1FBQ3ZELElBQUksVUFBVSxHQUF3QixLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDNUQsSUFBSSxJQUFJLEdBQXdCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV4RCxPQUFPO1FBQ1AsSUFBSSxJQUFJLEdBQWlCLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLGdCQUFnQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUU1Qiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ3hEO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FuQ0EsQUFtQ0MsQ0FuQzhCLHFCQUFTLEdBbUN2QztBQW5DWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBHb2FwUGxhbm5lciB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBQbGFubmVyXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vU3RhdGVCYXNlXCI7XHJcbmltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuL1N0YXRlRW51bVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlSWRsZSBleHRlbmRzIFN0YXRlQmFzZSB7XHJcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBHb2FwQWdlbnRcclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG5cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICog54q25oCB5pu05pawIFxyXG4gICAgICogQHJldHVybiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcclxuICAgICAgICBsZXQgcGxhbm5lcjogR29hcFBsYW5uZXIgPSB0aGlzLm93bmVyLmdldFBsYW5uZXIoKTtcclxuICAgICAgICBsZXQgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gdGhpcy5vd25lci5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImF2YWxpYWJsZUFjdGlvbnM6IFwiLCBhdmFsaWFibGVBY3Rpb25zKTtcclxuICAgICAgICAvLyBHT0FQIHBsYW5uaW5nXHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgd29ybGQgc3RhdGUgYW5kIHRoZSBnb2FsIHdlIHdhbnQgdG8gcGxhbiBmb3JcclxuICAgICAgICBsZXQgd29ybGRTdGF0ZTogTWFwPHN0cmluZywgT2JqZWN0PiA9IGlHb2FwLmdldFdvcmxkU3RhdGUoKTtcclxuICAgICAgICBsZXQgZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiA9IGlHb2FwLmNyZWF0ZUdvYWxTdGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBwbGFuXHJcbiAgICAgICAgbGV0IHBsYW46IEdvYXBBY3Rpb25bXSA9IHBsYW5uZXIucGxhbihpR29hcCwgYXZhbGlhYmxlQWN0aW9ucywgd29ybGRTdGF0ZSwgZ29hbCk7XHJcbiAgICAgICAgaWYgKHBsYW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcGxhbiwgaG9vcmF5IVxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLnNldEN1cnJlbnRBY3Rpb25zKHBsYW4pO1xyXG4gICAgICAgICAgICBpR29hcC5wbGFuRm91bmQoZ29hbCwgcGxhbik7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvIFBlcmZvcm1BY3Rpb24gc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRmFpbGVkIFBsYW5cIik7XHJcbiAgICAgICAgICAgIGlHb2FwLnBsYW5GYWlsZWQoZ29hbCk7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19