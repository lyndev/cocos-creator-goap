
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StatePerformAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '37f02DUc49Epq9j1p2iFU5k', 'StatePerformAction');
// src/app/ai/fsm/state/StatePerformAction.ts

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
exports.StatePerformAction = void 0;
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StatePerformAction = /** @class */ (function (_super) {
    __extends(StatePerformAction, _super);
    function StatePerformAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatePerformAction.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        var goapAgent = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = goapAgent.getGoap();
        if (!goapAgent.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
            return;
        }
        var action = goapAgent.peekCurrentActions();
        if (action.isDone()) {
            // the action is done. Remove it so we can perform the next one
            goapAgent.dequeueCurrentActions();
        }
        if (goapAgent.hasActionPlan()) {
            // perform the next action
            action = goapAgent.peekCurrentActions();
            var inRange = action.requiresInRange() ? action.isInRange() : true;
            if (inRange) {
                // we are in range, so perform the action
                var success = action.perform(this.owner);
                if (!success) {
                    // action failed, we need to plan again
                    goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
                    goap.planAborted(action);
                }
            }
            else {
                // we need to move there first
                //TODO: push moveTo state
                goapAgent.changeState(StateEnum_1.StateEnum.StateMove);
            }
        }
        else {
            // no actions left, move to Plan state
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
        }
    };
    return StatePerformAction;
}(StateBase_1.StateBase));
exports.StatePerformAction = StatePerformAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUVoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQXdDLHNDQUFTO0lBQWpEOztJQTZDQSxDQUFDO0lBNUNVLG9DQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUNuQjs7O09BR0c7SUFDSSxxQ0FBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLHFCQUFTLENBQUMsQ0FBQTtRQUNsRCxJQUFJLElBQUksR0FBVSxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM1Qix3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMzQixTQUFTLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7WUFDMUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQ3RCLE9BQU07U0FDVDtRQUNELElBQUksTUFBTSxHQUFlLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFBO1FBQ3ZELElBQUksTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2pCLCtEQUErRDtZQUMvRCxTQUFTLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtTQUNwQztRQUVELElBQUksU0FBUyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzNCLDBCQUEwQjtZQUMxQixNQUFNLEdBQUcsU0FBUyxDQUFDLGtCQUFrQixFQUFFLENBQUE7WUFDdkMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQTtZQUMzRSxJQUFJLE9BQU8sRUFBRTtnQkFDVCx5Q0FBeUM7Z0JBQ3pDLElBQUksT0FBTyxHQUFZLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNqRCxJQUFJLENBQUMsT0FBTyxFQUFFO29CQUNWLHVDQUF1QztvQkFDdkMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO29CQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2lCQUMzQjthQUNKO2lCQUFNO2dCQUNILDhCQUE4QjtnQkFDOUIseUJBQXlCO2dCQUN6QixTQUFTLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUE7YUFDN0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLFNBQVMsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUMxQyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTdDQSxBQTZDQyxDQTdDdUMscUJBQVMsR0E2Q2hEO0FBN0NZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICBsZXQgZ29hcEFnZW50ID0gdGhpcy5vd25lci5nZXRDb21wb25lbnQoR29hcEFnZW50KVxuICAgICAgICBsZXQgZ29hcDogSUdvYXAgPSBnb2FwQWdlbnQuZ2V0R29hcCgpXG4gICAgICAgIGlmICghZ29hcEFnZW50Lmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyB0byBwZXJmb3JtXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRvbmUgYWN0aW9uc1wiKVxuICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICBnb2FwLmFjdGlvbnNGaW5pc2hlZCgpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uID0gZ29hcEFnZW50LnBlZWtDdXJyZW50QWN0aW9ucygpXG4gICAgICAgIGlmIChhY3Rpb24uaXNEb25lKCkpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhY3Rpb24gaXMgZG9uZS4gUmVtb3ZlIGl0IHNvIHdlIGNhbiBwZXJmb3JtIHRoZSBuZXh0IG9uZVxuICAgICAgICAgICAgZ29hcEFnZW50LmRlcXVldWVDdXJyZW50QWN0aW9ucygpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZ29hcEFnZW50Lmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGFjdGlvbiA9IGdvYXBBZ2VudC5wZWVrQ3VycmVudEFjdGlvbnMoKVxuICAgICAgICAgICAgbGV0IGluUmFuZ2U6IGJvb2xlYW4gPSBhY3Rpb24ucmVxdWlyZXNJblJhbmdlKCkgPyBhY3Rpb24uaXNJblJhbmdlKCkgOiB0cnVlXG4gICAgICAgICAgICBpZiAoaW5SYW5nZSkge1xuICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBpbiByYW5nZSwgc28gcGVyZm9ybSB0aGUgYWN0aW9uXG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3M6IGJvb2xlYW4gPSBhY3Rpb24ucGVyZm9ybSh0aGlzLm93bmVyKVxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb24gZmFpbGVkLCB3ZSBuZWVkIHRvIHBsYW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICAgICAgICAgIGdvYXAucGxhbkFib3J0ZWQoYWN0aW9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIHRoZXJlIGZpcnN0XG4gICAgICAgICAgICAgICAgLy9UT0RPOiBwdXNoIG1vdmVUbyBzdGF0ZVxuICAgICAgICAgICAgICAgIGdvYXBBZ2VudC5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVNb3ZlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcbiAgICAgICAgICAgIGdvYXBBZ2VudC5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKVxuICAgICAgICAgICAgZ29hcC5hY3Rpb25zRmluaXNoZWQoKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19