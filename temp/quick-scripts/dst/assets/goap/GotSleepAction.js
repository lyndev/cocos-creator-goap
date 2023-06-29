
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
    GotSleepAction.prototype.checkProceduralPrecondition = function (go) {
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
    GotSleepAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdFNsZWVwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFHMUQsK0RBQTZEO0FBQzdELGtEQUE0QztBQUM1Qyx1REFBcUQ7QUFHckQ7SUFBb0Msa0NBQVU7SUFLMUM7UUFBQSxZQUNJLGlCQUFPLFNBR1Y7UUFSTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUEsQ0FBQyxVQUFVO1FBQ3BDLFVBQUksR0FBVyxDQUFDLENBQUE7UUFHbkIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3ZELENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQTtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQTlEQSxBQThEQyxDQTlEbUMsdUJBQVUsR0E4RDdDO0FBOURZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIlxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIlxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIlxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIlxuXG5leHBvcnQgY2xhc3MgR290U2xlZXBBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAxIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuc2xlZXBUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==