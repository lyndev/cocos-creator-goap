
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
var GoapAgent_1 = require("../../goap/GoapAgent");
var StateBase_1 = require("./StateBase");
var StateEnum_1 = require("./StateEnum");
var StateMove = /** @class */ (function (_super) {
    __extends(StateMove, _super);
    function StateMove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateMove.prototype.onEnter = function () { };
    /**
     * 状态更新
     * @return
     */
    StateMove.prototype.onUpdate = function (delta) {
        var goapAgent = this.owner.getComponent(GoapAgent_1.GoapAgent);
        var goap = goapAgent.getGoap();
        var action = goapAgent.peekCurrentActions();
        if (action.requiresInRange() && action.target == null) {
            console.log("Fatal error: Action requires a target but has none. Planning failed. You did not assign the target in your Action.checkProceduralPrecondition()");
            goapAgent.changeState(StateEnum_1.StateEnum.StateIdle);
            return;
        }
        // get the agent to move itself
        if (goap.moveAgent(action, delta)) {
            goapAgent.changeState(StateEnum_1.StateEnum.StatePerformAction);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZU1vdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGtEQUFnRDtBQUVoRCx5Q0FBdUM7QUFDdkMseUNBQXVDO0FBRXZDO0lBQStCLDZCQUFTO0lBQXhDOztJQXFCQSxDQUFDO0lBcEJVLDJCQUFPLEdBQWQsY0FBa0IsQ0FBQztJQUNuQjs7O09BR0c7SUFDSSw0QkFBUSxHQUFmLFVBQWdCLEtBQWE7UUFDekIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMscUJBQVMsQ0FBQyxDQUFBO1FBQ2xELElBQUksSUFBSSxHQUFVLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNyQyxJQUFJLE1BQU0sR0FBZSxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtRQUN2RCxJQUFJLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksRUFBRTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlKQUFpSixDQUFDLENBQUE7WUFDOUosU0FBUyxDQUFDLFdBQVcsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQzFDLE9BQU07U0FDVDtRQUVELCtCQUErQjtRQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFFO1lBQy9CLFNBQVMsQ0FBQyxXQUFXLENBQUMscUJBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1NBQ3REO0lBQ0wsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0FyQkEsQUFxQkMsQ0FyQjhCLHFCQUFTLEdBcUJ2QztBQXJCWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9nb2FwL0dvYXBBZ2VudFwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL1N0YXRlQmFzZVwiXG5pbXBvcnQgeyBTdGF0ZUVudW0gfSBmcm9tIFwiLi9TdGF0ZUVudW1cIlxuXG5leHBvcnQgY2xhc3MgU3RhdGVNb3ZlIGV4dGVuZHMgU3RhdGVCYXNlIHtcbiAgICBwdWJsaWMgb25FbnRlcigpIHt9XG4gICAgLyoqXG4gICAgICog54q25oCB5pu05pawXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBvblVwZGF0ZShkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSB0aGlzLm93bmVyLmdldENvbXBvbmVudChHb2FwQWdlbnQpXG4gICAgICAgIGxldCBnb2FwOiBJR29hcCA9IGdvYXBBZ2VudC5nZXRHb2FwKClcbiAgICAgICAgbGV0IGFjdGlvbjogR29hcEFjdGlvbiA9IGdvYXBBZ2VudC5wZWVrQ3VycmVudEFjdGlvbnMoKVxuICAgICAgICBpZiAoYWN0aW9uLnJlcXVpcmVzSW5SYW5nZSgpICYmIGFjdGlvbi50YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGYXRhbCBlcnJvcjogQWN0aW9uIHJlcXVpcmVzIGEgdGFyZ2V0IGJ1dCBoYXMgbm9uZS4gUGxhbm5pbmcgZmFpbGVkLiBZb3UgZGlkIG5vdCBhc3NpZ24gdGhlIHRhcmdldCBpbiB5b3VyIEFjdGlvbi5jaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oKVwiKVxuICAgICAgICAgICAgZ29hcEFnZW50LmNoYW5nZVN0YXRlKFN0YXRlRW51bS5TdGF0ZUlkbGUpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGdldCB0aGUgYWdlbnQgdG8gbW92ZSBpdHNlbGZcbiAgICAgICAgaWYgKGdvYXAubW92ZUFnZW50KGFjdGlvbiwgZGVsdGEpKSB7XG4gICAgICAgICAgICBnb2FwQWdlbnQuY2hhbmdlU3RhdGUoU3RhdGVFbnVtLlN0YXRlUGVyZm9ybUFjdGlvbilcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==