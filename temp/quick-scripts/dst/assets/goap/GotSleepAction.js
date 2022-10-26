
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotSleepAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cd97qZZFBNNowKRYMbHfxX', 'GotSleepAction');
// goap/GotSleepAction.ts

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
exports.GotSleepAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotSleepAction = /** @class */ (function (_super) {
    __extends(GotSleepAction, _super);
    function GotSleepAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, true); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        return _this;
    }
    GotSleepAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotSleepAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotSleepAction.prototype.requiresInRange = function () {
        return true;
    };
    GotSleepAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.sleepTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotSleepAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return GotSleepAction;
}(GoapAction_1.GoapAction));
exports.GotSleepAction = GotSleepAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290U2xlZXBBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUczRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFvQyxrQ0FBVTtJQUs3QztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUd0QixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUNyRixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUN4RixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFZO1FBQzFCLElBQUksTUFBTSxHQUFHLEtBQWUsQ0FBQztRQUM3QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixxQkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVtQyx1QkFBVSxHQWtFN0M7QUFsRVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvdFNsZWVwQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHR0aGlzLnRhcmdldCA9IEVudmlyb25tZW50LnNsZWVwVGFyZ2V0O1xyXG5cdFx0cmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcclxuXHRcdC8vIC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3BcclxuXHRcdC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdC8vIGZvciAobGV0IHRyZWUgb2YgdHJlZXMpIHtcclxuXHRcdC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdC8vIFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xyXG5cdFx0Ly8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHQvLyBcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9XHJcblx0XHQvLyBpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0Ly8gXHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcclxuXHRcdGxldCBlbnRpdHkgPSBpR29hcCBhcyBFbnRpdHk7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcclxuXHRcdFx0Ly9lbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSlcclxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==