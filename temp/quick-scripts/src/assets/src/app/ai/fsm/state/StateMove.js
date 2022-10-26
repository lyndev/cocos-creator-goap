"use strict";
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