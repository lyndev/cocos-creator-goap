
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/goaps/GoapOutFire2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e59052yFc1M/Ln98qr2fmVT', 'GoapOutFire2');
// goap/goaps/GoapOutFire2.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionDataStatus_1 = require("../ActionDataStatus");
var DataMemory_1 = require("../DataMemory");
var GotoEatAction_1 = require("../GotoEatAction");
var GotoEquipmentAction_1 = require("../GotoEquipmentAction");
var GotoFireAction_1 = require("../GotoFireAction");
var GotoToiletAction_1 = require("../GotoToiletAction");
var GotSleepAction_1 = require("../GotSleepAction");
var GoapOutFire2 = /** @class */ (function () {
    function GoapOutFire2() {
        this.bMoveEnd = false;
        this.bMoving = false;
        /**拥有的actions */
        this.avaliableActions = [];
        this.memory = new DataMemory_1.default();
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        this.memory.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, false);
    }
    GoapOutFire2.prototype.initAvaliableActions = function (goapAgent) {
        var actionCls = [
            GotoToiletAction_1.GotoToiletAction,
            GotSleepAction_1.GotSleepAction,
            GotoEatAction_1.GotoEatAction,
            GotoEquipmentAction_1.GotoEquipmentAction,
            GotoFireAction_1.GotoFireAction
        ];
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            action.goapAgent = goapAgent;
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
        var goapAgent = nextAction.goapAgent;
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
            goapAgent.node.stopAllActions();
            goapAgent.node.runAction(cc.sequence(actions));
        }
        return this.bMoveEnd;
    };
    return GoapOutFire2;
}());
exports.default = GoapOutFire2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2dvYXBzL0dvYXBPdXRGaXJlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLHdEQUF1RDtBQUN2RCw0Q0FBdUM7QUFDdkMsa0RBQWlEO0FBQ2pELDhEQUE2RDtBQUM3RCxvREFBbUQ7QUFDbkQsd0RBQXVEO0FBQ3ZELG9EQUFtRDtBQUVuRDtJQUtJO1FBSEEsYUFBUSxHQUFZLEtBQUssQ0FBQTtRQUN6QixZQUFPLEdBQVksS0FBSyxDQUFBO1FBV3hCLGdCQUFnQjtRQUNSLHFCQUFnQixHQUFpQixFQUFFLENBQUM7UUFUeEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLG9CQUFVLEVBQUUsQ0FBQTtRQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNsRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ3RELENBQUM7SUFJTSwyQ0FBb0IsR0FBM0IsVUFBNEIsU0FBb0I7UUFDNUMsSUFBSSxTQUFTLEdBQVU7WUFDbkIsbUNBQWdCO1lBQ2QsK0JBQWM7WUFDZCw2QkFBYTtZQUNiLHlDQUFtQjtZQUNuQiwrQkFBYztTQUNuQixDQUFBO1FBQ0QsSUFBSSxNQUFrQixDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcs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LE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3JFLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUE7Z0JBQ3BCLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO2dCQUNwQixVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1lBQy9CLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtTQUNqRDtRQUVELE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQTtJQUN4QixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQTNGQSxBQTJGQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuLi9BY3Rpb25EYXRhU3RhdHVzXCI7XG5pbXBvcnQgRGF0YU1lbW9yeSBmcm9tIFwiLi4vRGF0YU1lbW9yeVwiO1xuaW1wb3J0IHsgR290b0VhdEFjdGlvbiB9IGZyb20gXCIuLi9Hb3RvRWF0QWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9GaXJlQWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvVG9pbGV0QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9Ub2lsZXRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdFNsZWVwQWN0aW9uIH0gZnJvbSBcIi4uL0dvdFNsZWVwQWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlMiBpbXBsZW1lbnRzIElHb2FwIHtcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcbiAgICBiTW92ZUVuZDogYm9vbGVhbiA9IGZhbHNlXG4gICAgYk1vdmluZzogYm9vbGVhbiA9IGZhbHNlXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW1vcnkgPSBuZXcgRGF0YU1lbW9yeSgpXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaywgZmFsc2UpXG4gICAgfVxuXG4gICAgLyoq5oul5pyJ55qEYWN0aW9ucyAqL1xuICAgIHByaXZhdGUgYXZhbGlhYmxlQWN0aW9uczogR29hcEFjdGlvbltdID0gW107XG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGdvYXBBZ2VudDogR29hcEFnZW50KSB7XG4gICAgICAgIGxldCBhY3Rpb25DbHM6IGFueVtdID0gW1xuICAgICAgICAgICAgR290b1RvaWxldEFjdGlvblxuICAgICAgICAgICAgLCBHb3RTbGVlcEFjdGlvblxuICAgICAgICAgICAgLCBHb3RvRWF0QWN0aW9uXG4gICAgICAgICAgICAsIEdvdG9FcXVpcG1lbnRBY3Rpb25cbiAgICAgICAgICAgICwgR290b0ZpcmVBY3Rpb25cbiAgICAgICAgXVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWN0aW9uQ2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBuZXcgYWN0aW9uQ2xzW2ldKClcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcbiAgICBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGdvYWxcbiAgICB9XG5cbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xuICAgICAgICByZXR1cm4gd29ybGREYXRhO1xuICAgIH1cblxuICAgIHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcbiAgICB9XG5cbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXG4gICAgfVxuXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxuICAgIH1cblxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IG5leHRBY3Rpb24uZ29hcEFnZW50O1xuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbnMpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYk1vdmVFbmRcbiAgICB9XG59Il19