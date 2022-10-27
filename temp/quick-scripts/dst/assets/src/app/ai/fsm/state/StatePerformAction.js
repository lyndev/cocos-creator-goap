
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
    StatePerformAction.prototype.onEnter = function () {
    };
    /**
     * 状态更新
     * @return
     */
    StatePerformAction.prototype.onUpdate = function (timeStamp) {
        var owner = this.owner;
        var goap = owner.getGoap();
        if (!owner.hasActionPlan()) {
            // no actions to perform
            console.log("Done actions");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            goap.actionsFinished();
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
                var success = action.perform(this.owner);
                if (!success) {
                    // action failed, we need to plan again
                    this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
                    goap.planAborted(action);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZVBlcmZvcm1BY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBd0Msc0NBQVM7SUFBakQ7O0lBaURBLENBQUM7SUFoRFUsb0NBQU8sR0FBZDtJQUNBLENBQUM7SUFDRDs7O09BR0c7SUFDSSxxQ0FBUSxHQUFmLFVBQWdCLFNBQWlCO1FBQzdCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFrQixDQUFBO1FBQ25DLElBQUksSUFBSSxHQUFVLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQ3hCLHdCQUF3QjtZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLE9BQU87U0FDVjtRQUNELElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNqQiwrREFBK0Q7WUFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1NBQ3RDO1FBR0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxFQUFFO1lBQzVCLDBCQUEwQjtZQUMxQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ3pDLElBQUksT0FBTyxHQUFZLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFNUUsSUFBSSxPQUFPLEVBQUU7Z0JBQ1QseUNBQXlDO2dCQUN6QyxJQUFJLE9BQU8sR0FBWSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFbEQsSUFBSSxDQUFDLE9BQU8sRUFBRTtvQkFDVix1Q0FBdUM7b0JBQ3ZDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzVDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVCO2FBQ0o7aUJBQU07Z0JBQ0gsOEJBQThCO2dCQUM5Qix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDL0M7U0FDSjthQUFNO1lBQ0gsc0NBQXNDO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLHFCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FqREEsQUFpREMsQ0FqRHVDLHFCQUFTLEdBaURoRDtBQWpEWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBTdGF0ZUJhc2UgfSBmcm9tIFwiLi9TdGF0ZUJhc2VcIjtcclxuaW1wb3J0IHsgU3RhdGVFbnVtIH0gZnJvbSBcIi4vU3RhdGVFbnVtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVQZXJmb3JtQWN0aW9uIGV4dGVuZHMgU3RhdGVCYXNlIHtcclxuICAgIHB1YmxpYyBvbkVudGVyKCkge1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDnirbmgIHmm7TmlrAgXHJcbiAgICAgKiBAcmV0dXJuIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgb3duZXIgPSB0aGlzLm93bmVyIGFzIEdvYXBBZ2VudFxyXG4gICAgICAgIGxldCBnb2FwOiBJR29hcCA9IG93bmVyLmdldEdvYXAoKTtcclxuICAgICAgICBpZiAoIW93bmVyLmhhc0FjdGlvblBsYW4oKSkge1xyXG4gICAgICAgICAgICAvLyBubyBhY3Rpb25zIHRvIHBlcmZvcm1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJEb25lIGFjdGlvbnNcIik7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgICAgIGdvYXAuYWN0aW9uc0ZpbmlzaGVkKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGFjdGlvbjogR29hcEFjdGlvbiA9IHRoaXMub3duZXIucGVla0N1cnJlbnRBY3Rpb25zKCk7XHJcbiAgICAgICAgaWYgKGFjdGlvbi5pc0RvbmUoKSkge1xyXG4gICAgICAgICAgICAvLyB0aGUgYWN0aW9uIGlzIGRvbmUuIFJlbW92ZSBpdCBzbyB3ZSBjYW4gcGVyZm9ybSB0aGUgbmV4dCBvbmVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5kZXF1ZXVlQ3VycmVudEFjdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBpZiAodGhpcy5vd25lci5oYXNBY3Rpb25QbGFuKCkpIHtcclxuICAgICAgICAgICAgLy8gcGVyZm9ybSB0aGUgbmV4dCBhY3Rpb25cclxuICAgICAgICAgICAgYWN0aW9uID0gdGhpcy5vd25lci5wZWVrQ3VycmVudEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgbGV0IGluUmFuZ2U6IGJvb2xlYW4gPSBhY3Rpb24ucmVxdWlyZXNJblJhbmdlKCkgPyBhY3Rpb24uaXNJblJhbmdlKCkgOiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdlIGFyZSBpbiByYW5nZSwgc28gcGVyZm9ybSB0aGUgYWN0aW9uXHJcbiAgICAgICAgICAgICAgICBsZXQgc3VjY2VzczogYm9vbGVhbiA9IGFjdGlvbi5wZXJmb3JtKHRoaXMub3duZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFjdGlvbiBmYWlsZWQsIHdlIG5lZWQgdG8gcGxhbiBhZ2FpblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ29hcC5wbGFuQWJvcnRlZChhY3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBtb3ZlIHRoZXJlIGZpcnN0XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IHB1c2ggbW92ZVRvIHN0YXRlXHJcbiAgICAgICAgICAgICAgICB0aGlzLm93bmVyLmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZU1vdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm8gYWN0aW9ucyBsZWZ0LCBtb3ZlIHRvIFBsYW4gc3RhdGVcclxuICAgICAgICAgICAgdGhpcy5vd25lci5jaGFuZ2VTdGF0ZShTdGF0ZUVudW0uU3RhdGVJZGxlKTtcclxuICAgICAgICAgICAgZ29hcC5hY3Rpb25zRmluaXNoZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=