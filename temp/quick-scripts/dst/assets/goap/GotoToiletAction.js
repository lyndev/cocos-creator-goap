
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoToiletAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15b08XdD/lNKZEZIyLqqjK4', 'GotoToiletAction');
// goap/GotoToiletAction.ts

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
exports.GotoToiletAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoToiletAction = /** @class */ (function (_super) {
    __extends(GotoToiletAction, _super);
    function GotoToiletAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, true);
        return _this;
    }
    GotoToiletAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoToiletAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoToiletAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoToiletAction.prototype.checkProceduralPrecondition = function (go) {
        this.target = Environment_1.Environment.toiletTarget;
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
    GotoToiletAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isTolietOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoToiletAction;
}(GoapAction_1.GoapAction));
exports.GotoToiletAction = GotoToiletAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9Ub2lsZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUVyRDtJQUFzQyxvQ0FBVTtJQUk1QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQU5PLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHdkMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3JELENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00sc0RBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQTtRQUN0QyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRTVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsc0RBQXNEO1lBQ3RELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQTdEQSxBQTZEQyxDQTdEcUMsdUJBQVUsR0E2RC9DO0FBN0RZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uL3NyYy91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiXG5cbmV4cG9ydCBjbGFzcyBHb3RvVG9pbGV0QWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC50b2lsZXRUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCB0cnVlKVxuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==