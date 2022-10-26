
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBd0Msc0NBQVM7SUFBakQ7O0lBa0RBLENBQUM7SUEvQ0c7OztPQUdHO0lBQ0kscUNBQVEsR0FBZixVQUFnQixTQUFpQjtRQUM3QixxQkFBcUI7UUFDckIsSUFBSSxLQUFLLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM3Qix3QkFBd0I7WUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVDLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLE1BQU0sR0FBZSxJQUFJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDekQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDakIsK0RBQStEO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0QztRQUdELElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsRUFBRTtZQUM1QiwwQkFBMEI7WUFDMUIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUN6QyxJQUFJLE9BQU8sR0FBWSxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBRTVFLElBQUksT0FBTyxFQUFFO2dCQUNULHlDQUF5QztnQkFDekMsSUFBSSxPQUFPLEdBQVksTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzdCO2FBQ0o7aUJBQU07Z0JBQ0gsOEJBQThCO2dCQUM5Qix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzNCO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRHVDLHFCQUFTLEdBa0RoRDtBQWxEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcclxuICAgIHByb3RlY3RlZCBfb3duZXI6IEdvYXBBZ2VudFxyXG5cclxuICAgIC8qKlxyXG4gICAgICog54q25oCB5pu05pawIFxyXG4gICAgICogQHJldHVybiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIG9uVXBkYXRlKHRpbWVTdGFtcDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gcGVyZm9ybSB0aGUgYWN0aW9uXHJcbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLm93bmVyLmhhc0FjdGlvblBsYW4oKSkge1xyXG4gICAgICAgICAgICAvLyBubyBhY3Rpb25zIHRvIHBlcmZvcm1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25lIGFjdGlvbnNcIik7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgICAgIGlHb2FwLmFjdGlvbnNGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBhY3Rpb246IEdvYXBBY3Rpb24gPSB0aGlzLm93bmVyLnBlZWtDdXJyZW50QWN0aW9ucygpO1xyXG4gICAgICAgIGlmIChhY3Rpb24uaXNEb25lKCkpIHtcclxuICAgICAgICAgICAgLy8gdGhlIGFjdGlvbiBpcyBkb25lLiBSZW1vdmUgaXQgc28gd2UgY2FuIHBlcmZvcm0gdGhlIG5leHQgb25lXHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuZGVxdWV1ZUN1cnJlbnRBY3Rpb25zKCk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3duZXIuaGFzQWN0aW9uUGxhbigpKSB7XHJcbiAgICAgICAgICAgIC8vIHBlcmZvcm0gdGhlIG5leHQgYWN0aW9uXHJcbiAgICAgICAgICAgIGFjdGlvbiA9IHRoaXMub3duZXIucGVla0N1cnJlbnRBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIGxldCBpblJhbmdlOiBib29sZWFuID0gYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpID8gYWN0aW9uLmlzSW5SYW5nZSgpIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpblJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3ZSBhcmUgaW4gcmFuZ2UsIHNvIHBlcmZvcm0gdGhlIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgbGV0IHN1Y2Nlc3M6IGJvb2xlYW4gPSBhY3Rpb24ucGVyZm9ybShpR29hcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWN0aW9uIGZhaWxlZCwgd2UgbmVlZCB0byBwbGFuIGFnYWluXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuICAgICAgICAgICAgICAgICAgICBpR29hcC5wbGFuQWJvcnRlZChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIHRoZXJlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IHB1c2ggbW92ZVRvIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuICAgICAgICAgICAgaUdvYXAuYWN0aW9uc0ZpbmlzaGVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19