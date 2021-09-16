
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateMove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9552e8otr1AnqPty2ylLv5S', 'StateMove');
// src/app/ai/fsm/state/StateMove.ts

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
exports.StateMove = void 0;
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateMove = /** @class */ (function (_super) {
    __extends(StateMove, _super);
    function StateMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * 状态更新
     * @return
     */
    StateMove.prototype.onUpdate = function (delta) {
        var iGoap = this.owner.getOwner();
        // move the game object
        var action = this.owner.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            this.owner.changeState(StateEnum_1.StateEnum.StateIdle);
            return;
        }
        // get the agent to move itself
        if (iGoap.moveAgent(action, delta)) {
            this.owner.changeState(StateEnum_1.StateEnum.StatePerformAction);
        }
    };
    return StateMove;
}(StateBase_1.StateBase));
exports.StateMove = StateMove;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHlDQUF3QztBQUN4Qyx5Q0FBd0M7QUFFeEM7SUFBK0IsNkJBQVM7SUFBeEM7O0lBdUJBLENBQUM7SUFyQkc7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixLQUFhO1FBQ3pCLElBQUksS0FBSyxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFekMsdUJBQXVCO1FBRXZCLElBQUksTUFBTSxHQUFlLElBQUksQ0FBQyxLQUFLLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUN6RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlKQUFpSixDQUFDLENBQUM7WUFDL0osSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxPQUFPO1NBQ1Y7UUFFRCwrQkFBK0I7UUFDL0IsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7U0FDeEQ7SUFDTCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQXZCQSxBQXVCQyxDQXZCOEIscUJBQVMsR0F1QnZDO0FBdkJZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vU3RhdGVCYXNlXCI7XG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIjtcblxuZXhwb3J0IGNsYXNzIFN0YXRlTW92ZSBleHRlbmRzIFN0YXRlQmFzZSB7XG4gICAgcHJvdGVjdGVkIF9vd25lcjogR29hcEFnZW50XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawIFxuICAgICAqIEByZXR1cm4gXG4gICAgICovXG4gICAgcHVibGljIG9uVXBkYXRlKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGlHb2FwOiBJR29hcCA9IHRoaXMub3duZXIuZ2V0T3duZXIoKTtcblxuICAgICAgICAvLyBtb3ZlIHRoZSBnYW1lIG9iamVjdFxuXG4gICAgICAgIGxldCBhY3Rpb246IEdvYXBBY3Rpb24gPSB0aGlzLm93bmVyLnBlZWtDdXJyZW50QWN0aW9ucygpO1xuICAgICAgICBpZiAoYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpICYmIGFjdGlvbi50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYXRhbCBlcnJvcjogQWN0aW9uIHJlcXVpcmVzIGEgdGFyZ2V0IGJ1dCBoYXMgbm9uZS4gUGxhbm5pbmcgZmFpbGVkLiBZb3UgZGlkIG5vdCBhc3NpZ24gdGhlIHRhcmdldCBpbiB5b3VyIEFjdGlvbi5jaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oKVwiKTtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlSWRsZSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBnZXQgdGhlIGFnZW50IHRvIG1vdmUgaXRzZWxmXG4gICAgICAgIGlmIChpR29hcC5tb3ZlQWdlbnQoYWN0aW9uLCBkZWx0YSkpIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG59Il19