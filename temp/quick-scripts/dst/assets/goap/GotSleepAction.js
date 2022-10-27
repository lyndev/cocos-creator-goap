
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
        _this.workDuration = 1; // seconds
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
    GotSleepAction.prototype.perform = function (agent) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290U2xlZXBBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUkzRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFvQyxrQ0FBVTtJQUs3QztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUd0QixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUNyRixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUN4RixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLDhCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQztRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixxQkFBQztBQUFELENBakVBLEFBaUVDLENBakVtQyx1QkFBVSxHQWlFN0M7QUFqRVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvdFNsZWVwQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDE7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5zbGVlcFRhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcblx0XHRcdHRoaXMuYkRvbmUgPSB0cnVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=