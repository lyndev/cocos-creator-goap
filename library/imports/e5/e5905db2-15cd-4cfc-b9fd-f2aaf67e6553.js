"use strict";
cc._RF.push(module, 'e59052yFc1M/Ln98qr2fmVT', 'GoapOutFire2');
// goap/goaps/GoapOutFire2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionDataStatus_1 = require("../ActionDataStatus");
var DataMemory_1 = require("../DataMemory");
var GoapOutFire2 = /** @class */ (function () {
    function GoapOutFire2() {
        this.bMoveEnd = false;
        this.bMoving = false;
        /**拥有的actions */
        this.avaliableActions = [];
        this.memory = new DataMemory_1.default();
    }
    GoapOutFire2.prototype.initAvaliableActions = function (actionCls) {
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            this.avaliableActions.push(action);
        }
    };
    GoapOutFire2.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    // 该计划的目标
    GoapOutFire2.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    GoapOutFire2.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus_1.ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isSleepOk));
        return worldData;
    };
    GoapOutFire2.prototype.planFailed = function (failedGoal) {
        console.log("planFailed");
    };
    GoapOutFire2.prototype.planFound = function (goal, actions) {
        console.log("planFound");
    };
    GoapOutFire2.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    GoapOutFire2.prototype.planAborted = function (aborter) {
        console.log("planAborted");
    };
    GoapOutFire2.prototype.moveAgent = function (nextAction, delta) {
        var _this = this;
        var target = nextAction.target;
        if (this.bMoveEnd) {
            this.bMoveEnd = false;
            return true;
        }
        if (!this.bMoving) {
            this.bMoving = true;
            var actions = [];
            actions.push(cc.moveTo(2, new cc.Vec2(target.node.x, target.node.y)));
            actions.push(cc.callFunc(function () {
                _this.bMoveEnd = true;
                _this.bMoving = false;
                nextAction.setInRange(true);
            }));
            target.node.stopAllActions();
            target.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    return GoapOutFire2;
}());
exports.default = GoapOutFire2;

cc._RF.pop();