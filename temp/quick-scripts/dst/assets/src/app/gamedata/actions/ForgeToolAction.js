
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ForgeToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8aadKkvVBMOKX0cJTF86Tm', 'ForgeToolAction');
// src/app/gamedata/actions/ForgeToolAction.ts

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
exports.ForgeToolAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:12:33
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:06
 */
var ForgeToolAction = /** @class */ (function (_super) {
    __extends(ForgeToolAction, _super);
    function ForgeToolAction() {
        var _this = _super.call(this) || this;
        _this.forged = false;
        _this.startTime = 0;
        _this.forgeDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, true);
        _this.addEffect(ActionStatus_1.ActionStatus.HasNewTools, true);
        return _this;
    }
    ForgeToolAction.prototype.reset = function () {
        this.forged = false;
        this.startTime = 0;
    };
    ForgeToolAction.prototype.isDone = function () {
        return this.forged;
    };
    ForgeToolAction.prototype.requiresInRange = function () {
        return true;
    };
    ForgeToolAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest forge
        var forges = Environment_1.Environment.forgeComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, forges_1 = forges; _i < forges_1.length; _i++) {
            var forge = forges_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = forge;
                closestDist = forge.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = forge.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = forge;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ForgeToolAction.prototype.perform = function (labourer) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.forgeDuration) {
            // finished forging a tool
            var backpack = labourer.backpack;
            backpack.numOre = 0;
            this.forged = true;
        }
        return true;
    };
    return ForgeToolAction;
}(GoapAction_1.GoapAction));
exports.ForgeToolAction = ForgeToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxGb3JnZVRvb2xBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFxQyxtQ0FBVTtJQU05QztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQVRPLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFHeEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixtQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHNUMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRCxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUNoRCxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFDTSx5Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCw4QkFBOEI7UUFDOUIsSUFBSSxNQUFNLEdBQXFCLHlCQUFXLENBQUMsVUFBVSxDQUFDO1FBQ3RELElBQUksT0FBTyxHQUFtQixJQUFJLENBQUM7UUFDbkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQWtCLFVBQU0sRUFBTixpQkFBTSxFQUFOLG9CQUFNLEVBQU4sSUFBTSxFQUFFO1lBQXJCLElBQUksS0FBSyxlQUFBO1lBQ2IsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM3RCwwQkFBMEI7WUFDMUIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEQsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDbkI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixzQkFBQztBQUFELENBakVBLEFBaUVDLENBakVvQyx1QkFBVSxHQWlFOUM7QUFqRVksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IEZvcmdlQ29tcG9uZW50IH0gZnJvbSBcIi4uL0ZvcmdlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTI6MzMgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6MDZcclxuICovXHJcbmV4cG9ydCBjbGFzcyBGb3JnZVRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGZvcmdlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cdHB1YmxpYyB0YXJnZXQ6IEZvcmdlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBmb3JnZSB0b29sc1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIGZvcmdlRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTmV3VG9vbHMsIHRydWUpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5mb3JnZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5mb3JnZWQ7XHJcblx0fVxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3QgZm9yZ2VcclxuXHRcdGxldCBmb3JnZXM6IEZvcmdlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5mb3JnZUNvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IEZvcmdlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBmb3JnZSBvZiBmb3JnZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gZm9yZ2U7XHJcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSBmb3JnZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IGZvcmdlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IGZvcmdlO1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy5mb3JnZUR1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIGZvcmdpbmcgYSB0b29sXHJcblx0XHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdFx0YmFja3BhY2subnVtT3JlID0gMDtcclxuXHRcdFx0dGhpcy5mb3JnZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19