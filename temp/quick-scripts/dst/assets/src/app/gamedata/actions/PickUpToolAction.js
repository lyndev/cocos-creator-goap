
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95cc6Nqz3dKYYtSiyYrsRs5', 'PickUpToolAction');
// src/app/gamedata/actions/PickUpToolAction.ts

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
exports.PickUpToolAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:15:38
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:47:27
 */
var PickUpToolAction = /** @class */ (function (_super) {
    __extends(PickUpToolAction, _super);
    function PickUpToolAction() {
        var _this = _super.call(this) || this;
        _this.hasTool = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, false); // don't get a tool if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasTool, true); // we now have a tool
        return _this;
    }
    PickUpToolAction.prototype.reset = function () {
        this.hasTool = false;
    };
    PickUpToolAction.prototype.isDone = function () {
        return this.hasTool;
    };
    PickUpToolAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpToolAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare tools
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numTools > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(agent);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(agent);
                    if (dist < closestDist) {
                        // we found a closer one, use it
                        closest = supply;
                        closestDist = dist;
                    }
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    PickUpToolAction.prototype.perform = function (labourer) {
        if (this.target.numTools > 0) {
            this.target.numTools -= 1;
            this.hasTool = true;
            // create the tool and add it to the agent
            labourer.pickUpTool();
            return true;
        }
        else {
            // we got there but there was no tool available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpToolAction;
}(GoapAction_1.GoapAction));
exports.PickUpToolAction = PickUpToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxQaWNrVXBUb29sQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBRXRELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFJaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM3RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUNsRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCx5REFBeUQ7UUFDekQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksTUFBTSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7Z0JBQ3hCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sb0NBQW9DO29CQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7d0JBQ3ZCLGdDQUFnQzt3QkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQiwwQ0FBMEM7WUFDMUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLCtGQUErRjtZQUMvRixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0FoRUEsQUFnRUMsQ0FoRXFDLHVCQUFVLEdBZ0UvQztBQWhFWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxNTozOCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxNzo0NzoyN1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBpY2tVcFRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGhhc1Rvb2w6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBnZXQgdGhlIHRvb2wgZnJvbVxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSB0b29sIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2Ugbm93IGhhdmUgYSB0b29sXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmhhc1Rvb2wgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5oYXNUb29sO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSB0b29sc1xyXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChzdXBwbHkubnVtVG9vbHMgPiAwKSB7XHJcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcclxuXHJcblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XHJcblx0XHRpZiAodGhpcy50YXJnZXQubnVtVG9vbHMgPiAwKSB7XHJcblx0XHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDE7XHJcblx0XHRcdHRoaXMuaGFzVG9vbCA9IHRydWU7XHJcblx0XHRcdC8vIGNyZWF0ZSB0aGUgdG9vbCBhbmQgYWRkIGl0IHRvIHRoZSBhZ2VudFxyXG5cdFx0XHRsYWJvdXJlci5waWNrVXBUb29sKCk7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gdG9vbCBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdH1cclxufSJdfQ==