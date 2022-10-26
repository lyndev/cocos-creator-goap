
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
        _this.cost = 2;
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
    GotoEatAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0VhdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBRzNELCtEQUE4RDtBQUM5RCxrREFBNkM7QUFDN0MsdURBQXNEO0FBR3REO0lBQW1DLGlDQUFVO0lBSzVDO1FBQUEsWUFDQyxpQkFBTyxTQU1QO1FBWE8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBR3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQ3JGLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBRXhGLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDOztJQUNwRCxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNNLG1EQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFXLENBQUMsWUFBWSxDQUFDO1FBQ3ZDLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUE7UUFDMUIsaURBQWlEO1FBQ2pELHNEQUFzRDtRQUN0RCxxQ0FBcUM7UUFDckMsK0JBQStCO1FBRS9CLDRCQUE0QjtRQUM1QiwwQkFBMEI7UUFDMUIsdUNBQXVDO1FBQ3ZDLG9CQUFvQjtRQUNwQiw4Q0FBOEM7UUFDOUMsWUFBWTtRQUNaLHlDQUF5QztRQUN6QyxtREFBbUQ7UUFDbkQsOEJBQThCO1FBQzlCLHNDQUFzQztRQUN0QyxxQkFBcUI7UUFDckIseUJBQXlCO1FBQ3pCLE1BQU07UUFDTixLQUFLO1FBQ0wsSUFBSTtRQUNKLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFFakIseUJBQXlCO1FBRXpCLDBCQUEwQjtJQUMzQixDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLEtBQVk7UUFDMUIsSUFBSSxNQUFNLEdBQUcsS0FBZSxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNqQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRWtDLHVCQUFVLEdBb0U1QztBQXBFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR290b0VhdEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvc3Q6IG51bWJlciA9IDJcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0cnVlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIGZhbHNlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcclxuXHRcdHRoaXMuYkRvbmUgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZWF0aW5nVGFyZ2V0O1xyXG5cdFx0cmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcclxuXHRcdC8vIC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3BcclxuXHRcdC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdC8vIGZvciAobGV0IHRyZWUgb2YgdHJlZXMpIHtcclxuXHRcdC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdC8vIFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xyXG5cdFx0Ly8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHQvLyBcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9XHJcblx0XHQvLyBpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0Ly8gXHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcclxuXHRcdGxldCBlbnRpdHkgPSBpR29hcCBhcyBFbnRpdHk7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcclxuXHRcdFx0Ly9lbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSlcclxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==