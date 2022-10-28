
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcZ29hcHNcXEdvYXBPdXRGaXJlRXhpZ2VuY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSx3REFBdUQ7QUFDdkQsNENBQXVDO0FBQ3ZDLDREQUEyRDtBQUMzRCw4REFBNkQ7QUFDN0Qsb0RBQW1EO0FBRW5EO0lBS0k7UUFIQSxhQUFRLEdBQVksS0FBSyxDQUFBO1FBQ3pCLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFXeEIsZ0JBQWdCO1FBQ1IscUJBQWdCLEdBQWlCLEVBQUUsQ0FBQztRQVR4QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFBO1FBQzlCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUlNLGtEQUFvQixHQUEzQixVQUE0QixTQUFvQjtRQUM1QyxJQUFJLFNBQVMsR0FBVSxDQUFDLHlDQUFtQixFQUFFLCtCQUFjLEVBQUUsdUNBQWtCLENBQUMsQ0FBQTtRQUNoRixJQUFJLE1BQWtCLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcs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LElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQUNyQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQTtnQkFDcEIsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ3BCLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7WUFDL0IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1NBQ2pEO1FBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFBO0lBQ3hCLENBQUM7SUFDTCwwQkFBQztBQUFELENBckZBLEFBcUZDLElBQUEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIjtcclxuaW1wb3J0IERhdGFNZW1vcnkgZnJvbSBcIi4uL0RhdGFNZW1vcnlcIjtcclxuaW1wb3J0IHsgRXhpZ2VuY2VGaXJlQWN0aW9uIH0gZnJvbSBcIi4uL0V4aWdlbmNlRmlyZUFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb3RvRXF1aXBtZW50QWN0aW9uIH0gZnJvbSBcIi4uL0dvdG9FcXVpcG1lbnRBY3Rpb25cIjtcclxuaW1wb3J0IHsgR290b0ZpcmVBY3Rpb24gfSBmcm9tIFwiLi4vR290b0ZpcmVBY3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvYXBPdXRGaXJlRXhpZ2VuY2UgaW1wbGVtZW50cyBJR29hcCB7XHJcbiAgICBtZW1vcnk6IERhdGFNZW1vcnlcclxuICAgIGJNb3ZlRW5kOiBib29sZWFuID0gZmFsc2VcclxuICAgIGJNb3Zpbmc6IGJvb2xlYW4gPSBmYWxzZVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVtb3J5ID0gbmV3IERhdGFNZW1vcnkoKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxyXG4gICAgICAgIHRoaXMubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcclxuICAgICAgICB0aGlzLm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXHJcbiAgICAgICAgdGhpcy5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rLCBmYWxzZSlcclxuICAgIH1cclxuXHJcbiAgICAvKirmi6XmnInnmoRhY3Rpb25zICovXHJcbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGdvYXBBZ2VudDogR29hcEFnZW50KSB7XHJcbiAgICAgICAgbGV0IGFjdGlvbkNsczogYW55W10gPSBbR290b0VxdWlwbWVudEFjdGlvbiwgR290b0ZpcmVBY3Rpb24sIEV4aWdlbmNlRmlyZUFjdGlvbl1cclxuICAgICAgICBsZXQgYWN0aW9uOiBHb2FwQWN0aW9uO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpXHJcbiAgICAgICAgICAgIGFjdGlvbi5nb2FwQWdlbnQgPSBnb2FwQWdlbnRcclxuICAgICAgICAgICAgdGhpcy5hdmFsaWFibGVBY3Rpb25zLnB1c2goYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF2YWxpYWJsZUFjdGlvbnNcclxuICAgIH1cclxuXHJcbiAgICAvLyDor6XorqHliJLnmoTnm67moIdcclxuICAgIGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+IHtcclxuICAgICAgICBsZXQgZ29hbCA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcbiAgICAgICAgZ29hbC5zZXQoQWN0aW9uRGF0YVN0YXR1cy5vdXRGaXJlLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gZ29hbFxyXG4gICAgfVxyXG5cclxuICAgIGdldFdvcmxkU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PiB7XHJcbiAgICAgICAgbGV0IHdvcmxkRGF0YTogTWFwPHN0cmluZywgT2JqZWN0PiA9IG5ldyBNYXA8c3RyaW5nLCBPYmplY3Q+KCk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUpKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2spKTtcclxuICAgICAgICB3b3JsZERhdGEuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNTbGVlcE9rKSk7XHJcbiAgICAgICAgcmV0dXJuIHdvcmxkRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFuRmFpbGVkKGZhaWxlZEdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4pOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInBsYW5GYWlsZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuRm91bmRcIilcclxuICAgIH1cclxuXHJcbiAgICBhY3Rpb25zRmluaXNoZWQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJBY3Rpb25zIGNvbXBsZXRlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuQWJvcnRlZFwiKVxyXG4gICAgfVxyXG5cclxuICAgIG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IG5leHRBY3Rpb24udGFyZ2V0O1xyXG4gICAgICAgIGxldCBnb2FwQWdlbnQgPSBuZXh0QWN0aW9uLmdvYXBBZ2VudDtcclxuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJNb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5tb3ZlVG8oMiwgbmV3IGNjLlZlYzIodGFyZ2V0Lm5vZGUueCwgdGFyZ2V0Lm5vZGUueSkpKVxyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICBnb2FwQWdlbnQubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgIGdvYXBBZ2VudC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXHJcbiAgICB9XHJcbn0iXX0=