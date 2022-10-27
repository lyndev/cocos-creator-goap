
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
        var owner = this.owner;
        var goap = owner.getGoap();
        var planner = owner.getPlanner();
        var avaliableActions = owner.getAvaliableActions();
        // GOAP planning
        // get the world state and the goal we want to plan for
        var worldState = goap.getWorldState();
        var goal = goap.createGoalState();
        // plan
        var plan = planner.plan(owner, avaliableActions, worldState, goal);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUlkbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBa0NBLENBQUM7SUFqQ1UsMkJBQU8sR0FBZDtJQUNBLENBQUM7SUFFRDs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFrQixDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFVLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLE9BQU8sR0FBZ0IsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQzlDLElBQUksZ0JBQWdCLEdBQWlCLEtBQUssQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pFLGdCQUFnQjtRQUVoQix1REFBdUQ7UUFDdkQsSUFBSSxVQUFVLEdBQXdCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzRCxJQUFJLElBQUksR0FBd0IsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZELE9BQU87UUFDUCxJQUFJLElBQUksR0FBaUIsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLDBCQUEwQjtZQUMxQixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFFM0IsOEJBQThCO1lBQzlCLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDSCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDMUM7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQWxDQSxBQWtDQyxDQWxDOEIscUJBQVMsR0FrQ3ZDO0FBbENZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IEdvYXBQbGFubmVyIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcFBsYW5uZXJcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVJZGxlIGV4dGVuZHMgU3RhdGVCYXNlIHtcclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54q25oCB5pu05pawIFxyXG4gICAgICogQHJldHVybiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG93bmVyID0gdGhpcy5vd25lciBhcyBHb2FwQWdlbnRcclxuICAgICAgICBsZXQgZ29hcDogSUdvYXAgPSBvd25lci5nZXRHb2FwKCk7XHJcbiAgICAgICAgbGV0IHBsYW5uZXI6IEdvYXBQbGFubmVyID0gb3duZXIuZ2V0UGxhbm5lcigpO1xyXG4gICAgICAgIGxldCBhdmFsaWFibGVBY3Rpb25zOiBHb2FwQWN0aW9uW10gPSBvd25lci5nZXRBdmFsaWFibGVBY3Rpb25zKCk7XHJcbiAgICAgICAgLy8gR09BUCBwbGFubmluZ1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIHdvcmxkIHN0YXRlIGFuZCB0aGUgZ29hbCB3ZSB3YW50IHRvIHBsYW4gZm9yXHJcbiAgICAgICAgbGV0IHdvcmxkU3RhdGU6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBnb2FwLmdldFdvcmxkU3RhdGUoKTtcclxuICAgICAgICBsZXQgZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiA9IGdvYXAuY3JlYXRlR29hbFN0YXRlKCk7XHJcblxyXG4gICAgICAgIC8vIHBsYW5cclxuICAgICAgICBsZXQgcGxhbjogR29hcEFjdGlvbltdID0gcGxhbm5lci5wbGFuKG93bmVyLCBhdmFsaWFibGVBY3Rpb25zLCB3b3JsZFN0YXRlLCBnb2FsKTtcclxuICAgICAgICBpZiAocGxhbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHdlIGhhdmUgYSBwbGFuLCBob29yYXkhXHJcbiAgICAgICAgICAgIG93bmVyLnNldEN1cnJlbnRBY3Rpb25zKHBsYW4pO1xyXG4gICAgICAgICAgICBnb2FwLnBsYW5Gb3VuZChnb2FsLCBwbGFuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG8gUGVyZm9ybUFjdGlvbiBzdGF0ZVxyXG4gICAgICAgICAgICBvd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVQZXJmb3JtQWN0aW9uKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiRmFpbGVkIFBsYW5cIik7XHJcbiAgICAgICAgICAgIGdvYXAucGxhbkZhaWxlZChnb2FsKTtcclxuICAgICAgICAgICAgb3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19