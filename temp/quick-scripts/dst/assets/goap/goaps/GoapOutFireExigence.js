
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/goaps/GoapOutFireExigence.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'addb7Hq8RRGb4rejo9rNZXg', 'GoapOutFireExigence');
// goap/goaps/GoapOutFireExigence.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ActionDataStatus_1 = require("../ActionDataStatus");
var DataMemory_1 = require("../DataMemory");
var ExigenceFireAction_1 = require("../ExigenceFireAction");
var GotoEquipmentAction_1 = require("../GotoEquipmentAction");
var GotoFireAction_1 = require("../GotoFireAction");
var GoapOutFireExigence = /** @class */ (function () {
    function GoapOutFireExigence() {
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
    GoapOutFireExigence.prototype.initAvaliableActions = function (goapAgent) {
        var actionCls = [GotoEquipmentAction_1.GotoEquipmentAction, GotoFireAction_1.GotoFireAction, ExigenceFireAction_1.ExigenceFireAction];
        var action;
        for (var i = 0, len = actionCls.length; i < len; i++) {
            action = new actionCls[i]();
            action.goapAgent = goapAgent;
            this.avaliableActions.push(action);
        }
    };
    GoapOutFireExigence.prototype.getAvaliableActions = function () {
        return this.avaliableActions;
    };
    // 该计划的目标
    GoapOutFireExigence.prototype.createGoalState = function () {
        var goal = new Map();
        goal.set(ActionDataStatus_1.ActionDataStatus.outFire, true);
        return goal;
    };
    GoapOutFireExigence.prototype.getWorldState = function () {
        var worldData = new Map();
        worldData.set(ActionDataStatus_1.ActionDataStatus.isTolietOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isTolietOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isCanOutfire, this.memory.get(ActionDataStatus_1.ActionDataStatus.isCanOutfire));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isEquipOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isEquipOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isFireOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isFireOk));
        worldData.set(ActionDataStatus_1.ActionDataStatus.isSleepOk, this.memory.get(ActionDataStatus_1.ActionDataStatus.isSleepOk));
        return worldData;
    };
    GoapOutFireExigence.prototype.planFailed = function (failedGoal) {
        console.log("planFailed");
    };
    GoapOutFireExigence.prototype.planFound = function (goal, actions) {
        console.log("planFound");
    };
    GoapOutFireExigence.prototype.actionsFinished = function () {
        console.log("Actions completed");
    };
    GoapOutFireExigence.prototype.planAborted = function (aborter) {
        console.log("planAborted");
    };
    GoapOutFireExigence.prototype.moveAgent = function (nextAction, delta) {
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
    return GoapOutFireExigence;
}());
exports.default = GoapOutFireExigence;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2dvYXBzL0dvYXBPdXRGaXJlRXhpZ2VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx3REFBdUQ7QUFDdkQsNENBQXVDO0FBQ3ZDLDREQUEyRDtBQUMzRCw4REFBNkQ7QUFDN0Qsb0RBQW1EO0FBRW5EO0lBS0k7UUFIQSxhQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFXeEIsZ0JBQWdCO1FBQ1IscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQVR4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUlNLGtEQUFvQixHQUEzQixVQUE0QixTQUFvQjtRQUM1QyxJQUFJLFNBQVMsR0FBVSxDQUFDLHlDQUFtQixFQUFFLCtCQUFjLEVBQUUsdUNBQWtCLENBQUMsQ0FBQTtRQUNoRixJQUFJLE1BQWtCLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFB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QUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTCwwQkFBQztBQUFELENBckZBLEFBcUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIjtcbmltcG9ydCBEYXRhTWVtb3J5IGZyb20gXCIuLi9EYXRhTWVtb3J5XCI7XG5pbXBvcnQgeyBFeGlnZW5jZUZpcmVBY3Rpb24gfSBmcm9tIFwiLi4vRXhpZ2VuY2VGaXJlQWN0aW9uXCI7XG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcbmltcG9ydCB7IEdvdG9GaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9GaXJlQWN0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlRXhpZ2VuY2UgaW1wbGVtZW50cyBJR29hcCB7XG4gICAgbWVtb3J5OiBEYXRhTWVtb3J5XG4gICAgYk1vdmVFbmQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVtb3J5ID0gbmV3IERhdGFNZW1vcnkoKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIGZhbHNlKVxuICAgIH1cblxuICAgIC8qKuaLpeacieeahGFjdGlvbnMgKi9cbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xuICAgIHB1YmxpYyBpbml0QXZhbGlhYmxlQWN0aW9ucyhnb2FwQWdlbnQ6IEdvYXBBZ2VudCkge1xuICAgICAgICBsZXQgYWN0aW9uQ2xzOiBhbnlbXSA9IFtHb3RvRXF1aXBtZW50QWN0aW9uLCBHb3RvRmlyZUFjdGlvbiwgRXhpZ2VuY2VGaXJlQWN0aW9uXVxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gYWN0aW9uQ2xzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBhY3Rpb24gPSBuZXcgYWN0aW9uQ2xzW2ldKClcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcbiAgICAgICAgICAgIHRoaXMuYXZhbGlhYmxlQWN0aW9ucy5wdXNoKGFjdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcbiAgICB9XG5cbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcbiAgICBjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIGdvYWxcbiAgICB9XG5cbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xuICAgICAgICBsZXQgd29ybGREYXRhOiBNYXA8c3RyaW5nLCBPYmplY3Q+ID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaykpO1xuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xuICAgICAgICByZXR1cm4gd29ybGREYXRhO1xuICAgIH1cblxuICAgIHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcbiAgICB9XG5cbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXG4gICAgfVxuXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFjdGlvbnMgY29tcGxldGVkXCIpO1xuICAgIH1cblxuICAgIHBsYW5BYm9ydGVkKGFib3J0ZXI6IEdvYXBBY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxuICAgIH1cblxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcbiAgICAgICAgbGV0IGdvYXBBZ2VudCA9IG5leHRBY3Rpb24uZ29hcEFnZW50O1xuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xuICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IGZhbHNlXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5iTW92aW5nKSB7XG4gICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSB0cnVlXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MubW92ZVRvKDIsIG5ldyBjYy5WZWMyKHRhcmdldC5ub2RlLngsIHRhcmdldC5ub2RlLnkpKSlcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcbiAgICAgICAgICAgICAgICB0aGlzLmJNb3ZpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIG5leHRBY3Rpb24uc2V0SW5SYW5nZSh0cnVlKTtcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUuc3RvcEFsbEFjdGlvbnMoKVxuICAgICAgICAgICAgZ29hcEFnZW50Lm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbnMpKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYk1vdmVFbmRcbiAgICB9XG59Il19