
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
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StatePerformAction = /** @class */ (function (_super) {
    __extends(StatePerformAction, _super);
    function StatePerformAction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        // perform the action
        var iGoap = this.owner.getOwner();
        if (!this.owner.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            iGoap.actionsFinished();
            return;
        }
        var action = this.owner.peekCurrentActions();
        if (action.isDone()) {
            // the action is done. Remove it so we can perform the next one
            this.owner.dequeueCurrentActions();
        }
        if (this.owner.hasActionPlan()) {
            // perform the next action
            action = this.owner.peekCurrentActions();
            var inRange = action.requiresInRange() ? action.isInRange() : true;
            if (inRange) {
                // we are in range, so perform the action
                var success = action.perform(iGoap);
                if (!success) {
                    // action failed, we need to plan again
                    this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
                    iGoap.planAborted(action);
                }
            }
            else {
                // we need to move there first
                //TODO: push moveTo state
                this.owner.changeState(StateEnum_1.StateEnum.StateMove);
            }
        }
        else {
            // no actions left, move to Plan state
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            iGoap.actionsFinished();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBd0Msc0NBQVM7SUFBakQ7O0lBa0RBLENBQUM7SUEvQ0c7OztPQUdHO0lBQ0kscUNBQVEsR0FBZixVQUFnQixTQUFpQjtRQUM3QixxQkFBcUI7UUFDckIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM3Qix3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0QztRQUdELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE9BQU8sR0FBWSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTVFLElBQUksT0FBTyxFQUFFO2dCQUNULHlDQUF5QztnQkFDekMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7aUJBQU07Z0JBQ0gsOEJBQThCO2dCQUM5Qix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRHVDLHFCQUFTLEdBa0RoRDtBQWxEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFnZW50XCI7XG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcbmltcG9ydCB7IFN0YXRlRW51bSB9IGZyb20gXCIuL1N0YXRlRW51bVwiO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBHb2FwQWdlbnRcblxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsCBcbiAgICAgKiBAcmV0dXJuIFxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQge1xuICAgICAgICAvLyBwZXJmb3JtIHRoZSBhY3Rpb25cbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcblxuICAgICAgICBpZiAoIXRoaXMub3duZXIuaGFzQWN0aW9uUGxhbigpKSB7XG4gICAgICAgICAgICAvLyBubyBhY3Rpb25zIHRvIHBlcmZvcm1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRG9uZSBhY3Rpb25zXCIpO1xuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcbiAgICAgICAgICAgIGlHb2FwLmFjdGlvbnNGaW5pc2hlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBhY3Rpb246IEdvYXBBY3Rpb24gPSB0aGlzLm93bmVyLnBlZWtDdXJyZW50QWN0aW9ucygpO1xuICAgICAgICBpZiAoYWN0aW9uLmlzRG9uZSgpKSB7XG4gICAgICAgICAgICAvLyB0aGUgYWN0aW9uIGlzIGRvbmUuIFJlbW92ZSBpdCBzbyB3ZSBjYW4gcGVyZm9ybSB0aGUgbmV4dCBvbmVcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVxdWV1ZUN1cnJlbnRBY3Rpb25zKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLm93bmVyLmhhc0FjdGlvblBsYW4oKSkge1xuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cbiAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMub3duZXIucGVla0N1cnJlbnRBY3Rpb25zKCk7XG4gICAgICAgICAgICBsZXQgaW5SYW5nZTogYm9vbGVhbiA9IGFjdGlvbi5yZXF1aXJlc0luUmFuZ2UoKSA/IGFjdGlvbi5pc0luUmFuZ2UoKSA6IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChpblJhbmdlKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgYXJlIGluIHJhbmdlLCBzbyBwZXJmb3JtIHRoZSBhY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzczogYm9vbGVhbiA9IGFjdGlvbi5wZXJmb3JtKGlHb2FwKTtcblxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvLyBhY3Rpb24gZmFpbGVkLCB3ZSBuZWVkIHRvIHBsYW4gYWdhaW5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgaUdvYXAucGxhbkFib3J0ZWQoYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gbW92ZSB0aGVyZSBmaXJzdFxuICAgICAgICAgICAgICAgIC8vVE9ETzogcHVzaCBtb3ZlVG8gc3RhdGVcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgICAgICBpR29hcC5hY3Rpb25zRmluaXNoZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=