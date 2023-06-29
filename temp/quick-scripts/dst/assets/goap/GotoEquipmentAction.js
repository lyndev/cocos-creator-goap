
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoEquipmentAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b5d14iVLfRFabOSdGozcxsv', 'GotoEquipmentAction');
// goap/GotoEquipmentAction.ts

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
exports.GotoEquipmentAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoEquipmentAction = /** @class */ (function (_super) {
    __extends(GotoEquipmentAction, _super);
    function GotoEquipmentAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, true);
        return _this;
    }
    GotoEquipmentAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoEquipmentAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoEquipmentAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoEquipmentAction.prototype.checkProceduralPrecondition = function (go) {
        this.target = Environment_1.Environment.equipTarget;
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
    GotoEquipmentAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isEquipOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoEquipmentAction;
}(GoapAction_1.GoapAction));
exports.GotoEquipmentAction = GotoEquipmentAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9FcXVpcG1lbnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUkxRCwrREFBNkQ7QUFDN0Qsa0RBQTRDO0FBQzVDLHVEQUFxRDtBQUdyRDtJQUF5Qyx1Q0FBVTtJQUkvQztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQVBPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUNyQixrQkFBWSxHQUFXLENBQUMsQ0FBQSxDQUFDLFVBQVU7UUFHdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUE7O0lBQ3BELENBQUM7SUFFTSxtQ0FBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUE7UUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUE7SUFDdEIsQ0FBQztJQUVNLG9DQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUE7SUFDckIsQ0FBQztJQUVNLDZDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ00seURBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBVyxDQUFDLFdBQVcsQ0FBQTtRQUNyQyxPQUFPLElBQUksQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFBO1FBQzFCLGlEQUFpRDtRQUNqRCxzREFBc0Q7UUFDdEQscUNBQXFDO1FBQ3JDLCtCQUErQjtRQUUvQiw0QkFBNEI7UUFDNUIsMEJBQTBCO1FBQzFCLHVDQUF1QztRQUN2QyxvQkFBb0I7UUFDcEIsOENBQThDO1FBQzlDLFlBQVk7UUFDWix5Q0FBeUM7UUFDekMsbURBQW1EO1FBQ25ELDhCQUE4QjtRQUM5QixzQ0FBc0M7UUFDdEMscUJBQXFCO1FBQ3JCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLElBQUk7UUFDSix1QkFBdUI7UUFDdkIsaUJBQWlCO1FBRWpCLHlCQUF5QjtRQUV6QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVNLHFDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBRTVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQscURBQXFEO1lBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1NBQ3BCO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQTlEQSxBQThEQyxDQTlEd0MsdUJBQVUsR0E4RGxEO0FBOURZLGtEQUFtQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCJcblxuZXhwb3J0IGNsYXNzIEdvdG9FcXVpcG1lbnRBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyIC8vIHNlY29uZHNcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpIC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZXF1aXBUYXJnZXRcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcbiAgICAgICAgLy8gLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICAvLyBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcbiAgICAgICAgLy8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cbiAgICAgICAgLy8gZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAvLyBcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgLy8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgLy8gXHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdERpc3QgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHR9IGVsc2Uge1xuICAgICAgICAvLyBcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgIC8vIFx0XHRsZXQgZGlzdDogbnVtYmVyID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG4gICAgICAgIC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgIC8vIFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuICAgICAgICAvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XG4gICAgICAgIC8vIFx0XHR9XG4gICAgICAgIC8vIFx0fVxuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmIChjbG9zZXN0ID09IG51bGwpXG4gICAgICAgIC8vIFx0cmV0dXJuIGZhbHNlO1xuXG4gICAgICAgIC8vIHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuICAgICAgICAvLyByZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19