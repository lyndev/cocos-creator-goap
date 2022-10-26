
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
    GotoFireAction.prototype.checkProceduralPrecondition = function (agent) {
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
    GotoFireAction.prototype.perform = function (iGoap) {
        var entity = iGoap;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcR290b0ZpcmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEyRDtBQUczRCwrREFBOEQ7QUFDOUQsa0RBQTZDO0FBQzdDLHVEQUFzRDtBQUd0RDtJQUFvQyxrQ0FBVTtJQUk3QztRQUFBLFlBQ0MsaUJBQU8sU0FTUDtRQWJPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLGVBQWUsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDcEYsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0MsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDbEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDakQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDaEQsS0FBSSxDQUFDLFNBQVMsQ0FBQyxtQ0FBZ0IsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUE7O0lBQ3JELENBQUM7SUFFTSw4QkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDbkIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcseUJBQVcsQ0FBQyxVQUFVLENBQUM7UUFDckMsT0FBTyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQTtRQUMxQixpREFBaUQ7UUFDakQsc0RBQXNEO1FBQ3RELHFDQUFxQztRQUNyQywrQkFBK0I7UUFFL0IsNEJBQTRCO1FBQzVCLDBCQUEwQjtRQUMxQix1Q0FBdUM7UUFDdkMsb0JBQW9CO1FBQ3BCLDhDQUE4QztRQUM5QyxZQUFZO1FBQ1oseUNBQXlDO1FBQ3pDLG1EQUFtRDtRQUNuRCw4QkFBOEI7UUFDOUIsc0NBQXNDO1FBQ3RDLHFCQUFxQjtRQUNyQix5QkFBeUI7UUFDekIsTUFBTTtRQUNOLEtBQUs7UUFDTCxJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUVqQix5QkFBeUI7UUFFekIsMEJBQTBCO0lBQzNCLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLE1BQU0sR0FBRyxLQUFlLENBQUM7UUFDN0IsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsd0RBQXdEO1lBQ3hELHFEQUFxRDtZQUNyRCx1REFBdUQ7WUFDdkQsc0RBQXNEO1NBQ3REO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxDQXpFbUMsdUJBQVUsR0F5RTdDO0FBekVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuL0FjdGlvbkRhdGFTdGF0dXNcIjtcclxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHb3RvRmlyZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgYkRvbmU6IGJvb2xlYW4gPSBmYWxzZVxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLm91dEZpcmUsIHRydWUpO1xyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSlcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNFcXVpcE9rLCBmYWxzZSlcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNGaXJlT2ssIGZhbHNlKVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIGZhbHNlKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG5cdFx0dGhpcy5iRG9uZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpIHtcclxuXHRcdHJldHVybiB0aGlzLmJEb25lO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy50YXJnZXQgPSBFbnZpcm9ubWVudC5maXJlVGFyZ2V0O1xyXG5cdFx0cmV0dXJuIHRoaXMudGFyZ2V0ICE9IG51bGxcclxuXHRcdC8vIC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3BcclxuXHRcdC8vIGxldCB0cmVlczogVHJlZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQudHJlZUNvbXBzO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3Q6IFRyZWVDb21wb25lbnQgPSBudWxsO1xyXG5cdFx0Ly8gbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdC8vIGZvciAobGV0IHRyZWUgb2YgdHJlZXMpIHtcclxuXHRcdC8vIFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0Ly8gXHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdC8vIFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdC8vIFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0Ly8gXHR9IGVsc2Uge1xyXG5cdFx0Ly8gXHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xyXG5cdFx0Ly8gXHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdC8vIFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHQvLyBcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0Ly8gXHRcdFx0Y2xvc2VzdCA9IHRyZWU7XHJcblx0XHQvLyBcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9XHJcblx0XHQvLyB9XHJcblx0XHQvLyBpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0Ly8gXHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0Ly8gdGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdC8vIHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcclxuXHRcdGxldCBlbnRpdHkgPSBpR29hcCBhcyBFbnRpdHk7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcclxuXHRcdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdFx0Ly8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc1RvbGlldE9rLCBmYWxzZSlcclxuXHRcdFx0Ly8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VhdE9rLCBmYWxzZSlcclxuXHRcdFx0Ly8gZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0VxdWlwT2ssIGZhbHNlKVxyXG5cdFx0XHQvLyBlbnRpdHkubWVtb3J5LnNldChBY3Rpb25EYXRhU3RhdHVzLmlzRmlyZU9rLCBmYWxzZSlcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==