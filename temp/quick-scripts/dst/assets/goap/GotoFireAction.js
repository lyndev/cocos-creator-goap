
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/GotoFireAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e22c2loAydIDY/KiKv+hFz1', 'GotoFireAction');
// goap/GotoFireAction.ts

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
exports.GotoFireAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoFireAction = /** @class */ (function (_super) {
    __extends(GotoFireAction, _super);
    function GotoFireAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isFireOk, false); // we need a tool to do this
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isEquipOk, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.outFire, true);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isFireOk, false);
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, false);
        return _this;
    }
    GotoFireAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoFireAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoFireAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoFireAction.prototype.checkProceduralPrecondition = function (go) {
        this.target = Environment_1.Environment.fireTarget;
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
    GotoFireAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            this.bDone = true;
            // entity.memory.set(ActionDataStatus.isTolietOk, false)
            // entity.memory.set(ActionDataStatus.isEatOk, false)
            // entity.memory.set(ActionDataStatus.isEquipOk, false)
            // entity.memory.set(ActionDataStatus.isFireOk, false)
        }
        return true;
    };
    return GotoFireAction;
}(GoapAction_1.GoapAction));
exports.GotoFireAction = GotoFireAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0dvdG9GaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMEQ7QUFHMUQsK0RBQTZEO0FBQzdELGtEQUE0QztBQUM1Qyx1REFBcUQ7QUFFckQ7SUFBb0Msa0NBQVU7SUFJMUM7UUFBQSxZQUNJLGlCQUFPLFNBU1Y7UUFiTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBQ3RCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsa0JBQVksR0FBVyxDQUFDLENBQUEsQ0FBQyxVQUFVO1FBR3ZDLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQ25GLEtBQUksQ0FBQyxlQUFlLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQ25GLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzlDLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2pELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2hELEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFBOztJQUN4RCxDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNNLG9EQUEyQixHQUFsQyxVQUFtQyxFQUFXO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUE7UUFDcEMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzlCLENBQUM7SUFFRCxnQ0FBTyxHQUFQLFVBQVEsSUFBYTtRQUNqQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1lBQ2pCLHdEQUF3RDtZQUN4RCxxREFBcUQ7WUFDckQsdURBQXVEO1lBQ3ZELHNEQUFzRDtTQUN6RDtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0F0RUEsQUFzRUMsQ0F0RW1DLHVCQUFVLEdBc0U3QztBQXRFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCJcblxuZXhwb3J0IGNsYXNzIEdvdG9GaXJlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMub3V0RmlyZSwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzVG9saWV0T2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzRXF1aXBPaywgZmFsc2UpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgZmFsc2UpXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmJEb25lID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGdvOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gRW52aXJvbm1lbnQuZmlyZVRhcmdldFxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQgIT0gbnVsbFxuICAgICAgICAvLyAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3QgdHJlZSB0aGF0IHdlIGNhbiBjaG9wXG4gICAgICAgIC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xuICAgICAgICAvLyBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XG4gICAgICAgIC8vIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuICAgICAgICAvLyBmb3IgKGxldCB0cmVlIG9mIHRyZWVzKSB7XG4gICAgICAgIC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAvLyBcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuICAgICAgICAvLyBcdFx0Y2xvc2VzdCA9IHRyZWU7XG4gICAgICAgIC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuICAgICAgICAvLyBcdH0gZWxzZSB7XG4gICAgICAgIC8vIFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgLy8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcbiAgICAgICAgLy8gXHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgLy8gXHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgLy8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XG4gICAgICAgIC8vIFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcbiAgICAgICAgLy8gXHRcdH1cbiAgICAgICAgLy8gXHR9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKGNsb3Nlc3QgPT0gbnVsbClcbiAgICAgICAgLy8gXHRyZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgLy8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG4gICAgICAgIC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG4gICAgfVxuXG4gICAgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgICAgIC8vIGVudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNUb2xpZXRPaywgZmFsc2UpXG4gICAgICAgICAgICAvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRWF0T2ssIGZhbHNlKVxuICAgICAgICAgICAgLy8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxuICAgICAgICAgICAgLy8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0ZpcmVPaywgZmFsc2UpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=