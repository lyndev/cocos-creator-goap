
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoEatAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b4e9fbOu3RFlLQFtFT1qeYw', 'GotoEatAction');
// goap/GotoEatAction.ts

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
exports.GotoEatAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoEatAction = /** @class */ (function (_super) {
    __extends(GotoEatAction, _super);
    function GotoEatAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, true); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        return _this;
    }
    GotoEatAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoEatAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoEatAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoEatAction.prototype.checkProceduralPrecondition = function (agent) {
        return false;
        this.target = Environment_1.Environment.eatingTarget;
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
    GotoEatAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoEatAction;
}(GoapAction_1.GoapAction));
exports.GotoEatAction = GotoEatAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0VhdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBSTNELCtEQUE4RDtBQUM5RCxrREFBNkM7QUFDN0MsdURBQXNEO0FBR3REO0lBQW1DLGlDQUFVO0lBSzVDO1FBQUEsWUFDQyxpQkFBTyxTQU1QO1FBWE8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBR3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3JGLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBRXhGLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUNwRCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLG1EQUEyQixHQUFsQyxVQUFtQyxLQUFhO1FBQy9DLE9BQU8sS0FBSyxDQUFBO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDM0IsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDakI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixvQkFBQztBQUFELENBckVBLEFBcUVDLENBckVrQyx1QkFBVSxHQXFFNUM7QUFyRVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdvdG9FYXRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kc1xyXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCBmYWxzZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcclxuXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYkRvbmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEVudGl0eSk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR0aGlzLnRhcmdldCA9IEVudmlyb25tZW50LmVhdGluZ1RhcmdldDtcclxuXHRcdHJldHVybiB0aGlzLnRhcmdldCAhPSBudWxsXHJcblx0XHQvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXHJcblx0XHQvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcclxuXHRcdC8vIGxldCBjbG9zZXN0OiBUcmVlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHQvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XHJcblx0XHQvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdC8vIFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHQvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0fSBlbHNlIHtcclxuXHRcdC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHQvLyBcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0Ly8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fVxyXG5cdFx0Ly8gfVxyXG5cdFx0Ly8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdC8vIFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHQvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcblx0XHRcdHRoaXMuYkRvbmUgPSB0cnVlXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcbn0iXX0=