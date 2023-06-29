
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
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
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
    GotoEatAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FYXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUcxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUVyRDtJQUFtQyxpQ0FBVTtJQUt6QztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVJPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFDcEMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUduQixLQUFJLENBQUMsZUFBZSxDQUFDLG1DQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLDRCQUE0QjtRQUNwRixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDdkQsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQTtJQUNyQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBYTtRQUM1QyxPQUFPLEtBQUssQ0FBQTtRQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxZQUFZLENBQUE7UUFDdEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzlCLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FoRUEsQUFnRUMsQ0FoRWtDLHVCQUFVLEdBZ0U1QztBQWhFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcblxuZXhwb3J0IGNsYXNzIEdvdG9FYXRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6Y2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgdGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5lYXRpbmdUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==