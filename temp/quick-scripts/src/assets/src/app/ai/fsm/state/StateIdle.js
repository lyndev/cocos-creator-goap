"use strict";
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