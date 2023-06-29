"use strict";
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