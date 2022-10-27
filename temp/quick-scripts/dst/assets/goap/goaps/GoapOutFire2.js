
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcZ29hcHNcXEdvYXBPdXRGaXJlMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLHdEQUF1RDtBQUN2RCw0Q0FBdUM7QUFFdkM7SUFLSTtRQUhBLGFBQVEsR0FBWSxLQUFLLENBQUE7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQTtRQU14QixnQkFBZ0I7UUFDUixxQkFBZ0IsR0FBaUIsRUFBRSxDQUFDO1FBSnhDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUE7SUFDbEMsQ0FBQztJQUlNLDJDQUFvQixHQUEzQixVQUE0QixTQUFnQjtRQUN4QyxJQUFJLE1BQU0sQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsTUFBTSxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFRCwwQ0FBbUIsR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQTtJQUNoQyxDQUFDO0lBRUQsU0FBUztJQUNULHNDQUFlLEdBQWY7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsRUFBa0IsQ0FBQztRQUNyQyxJQUFJLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFJRCxvQ0FBYSxHQUFiO1FBQ0ksSUFBSSxTQUFTLEdBQXdCLElBQUksR0FBRyxFQUFrQixDQUFDO1FBQy9ELFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDekYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUM3RixTQUFTLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLG1DQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsbUNBQWdCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN2RixPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUNBQVUsR0FBVixVQUFXLFVBQStCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxJQUF5QixFQUFFLE9BQXFCO1FBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGtDQUFXLEdBQVgsVUFBWSxPQUFtQjtRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFRCxnQ0FBUyxHQUFULFVBQVUsVUFBc0IsRUFBRSxLQUFhO1FBQS9DLGlCQW9CQztRQW5CRyxJQUFJLE1BQU0sR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDO1FBQy9CLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFBO1lBQ3JCLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNmLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQTtZQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNyRSxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO2dCQUNwQixLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtnQkFDcEIsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtZQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUE7U0FDOUM7UUFFRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7SUFDeEIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0EvRUEsQUErRUMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRGF0YU1lbW9yeSBmcm9tIFwiLi4vRGF0YU1lbW9yeVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29hcE91dEZpcmUyIGltcGxlbWVudHMgSUdvYXAge1xyXG4gICAgbWVtb3J5OiBEYXRhTWVtb3J5XHJcbiAgICBiTW92ZUVuZDogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBiTW92aW5nOiBib29sZWFuID0gZmFsc2VcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lbW9yeSA9IG5ldyBEYXRhTWVtb3J5KClcclxuICAgIH1cclxuXHJcbiAgICAvKirmi6XmnInnmoRhY3Rpb25zICovXHJcbiAgICBwcml2YXRlIGF2YWxpYWJsZUFjdGlvbnM6IEdvYXBBY3Rpb25bXSA9IFtdO1xyXG4gICAgcHVibGljIGluaXRBdmFsaWFibGVBY3Rpb25zKGFjdGlvbkNsczogYW55W10pIHtcclxuICAgICAgICBsZXQgYWN0aW9uO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBhY3Rpb25DbHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICAgICAgYWN0aW9uID0gbmV3IGFjdGlvbkNsc1tpXSgpO1xyXG4gICAgICAgICAgICB0aGlzLmF2YWxpYWJsZUFjdGlvbnMucHVzaChhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXZhbGlhYmxlQWN0aW9uc1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOivpeiuoeWIkueahOebruagh1xyXG4gICAgY3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG4gICAgICAgIGxldCBnb2FsID0gbmV3IE1hcDxzdHJpbmcsIE9iamVjdD4oKTtcclxuICAgICAgICBnb2FsLnNldChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBnb2FsXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD4ge1xyXG4gICAgICAgIGxldCB3b3JsZERhdGE6IE1hcDxzdHJpbmcsIE9iamVjdD4gPSBuZXcgTWFwPHN0cmluZywgT2JqZWN0PigpO1xyXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgdGhpcy5tZW1vcnkuZ2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rKSk7XHJcbiAgICAgICAgd29ybGREYXRhLnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCB0aGlzLm1lbW9yeS5nZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaykpO1xyXG4gICAgICAgIHdvcmxkRGF0YS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1NsZWVwT2ssIHRoaXMubWVtb3J5LmdldChBY3Rpb25EYXRhU3RhdHVzLmlzU2xlZXBPaykpO1xyXG4gICAgICAgIHJldHVybiB3b3JsZERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkZhaWxlZChmYWlsZWRHb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+KTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJwbGFuRmFpbGVkXCIpXHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkZvdW5kXCIpXHJcbiAgICB9XHJcblxyXG4gICAgYWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQWN0aW9ucyBjb21wbGV0ZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbik6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxhbkFib3J0ZWRcIilcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBuZXh0QWN0aW9uLnRhcmdldDtcclxuICAgICAgICBpZiAodGhpcy5iTW92ZUVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLmJNb3ZlRW5kID0gZmFsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmJNb3ZpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5iTW92aW5nID0gdHJ1ZVxyXG4gICAgICAgICAgICBsZXQgYWN0aW9ucyA9IFtdXHJcbiAgICAgICAgICAgIGFjdGlvbnMucHVzaChjYy5tb3ZlVG8oMiwgbmV3IGNjLlZlYzIodGFyZ2V0Lm5vZGUueCwgdGFyZ2V0Lm5vZGUueSkpKVxyXG4gICAgICAgICAgICBhY3Rpb25zLnB1c2goY2MuY2FsbEZ1bmMoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iTW92ZUVuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgIHRoaXMuYk1vdmluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICBuZXh0QWN0aW9uLnNldEluUmFuZ2UodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICB0YXJnZXQubm9kZS5zdG9wQWxsQWN0aW9ucygpXHJcbiAgICAgICAgICAgIHRhcmdldC5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb25zKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJNb3ZlRW5kXHJcbiAgICB9XHJcbn0iXX0=