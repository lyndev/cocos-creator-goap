
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUV0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBc0Msb0NBQVU7SUFHL0M7UUFBQSxZQUNDLGlCQUFPLFNBR1A7UUFOTyxhQUFPLEdBQVksS0FBSyxDQUFDO1FBSWhDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywwQ0FBMEM7UUFDN0YsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjs7SUFDbEUsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sMENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsMENBQTBDO1lBQzFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQztZQUN0QixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEVxQyx1QkFBVSxHQWdFL0M7QUFoRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjE1OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDQgMTc6NDc6MjdcbiAqL1xuZXhwb3J0IGNsYXNzIFBpY2tVcFRvb2xBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNUb29sOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGdldCB0aGUgdG9vbCBmcm9tXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCBmYWxzZSk7IC8vIGRvbid0IGdldCBhIHRvb2wgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2Ugbm93IGhhdmUgYSB0b29sXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5oYXNUb29sID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhhc1Rvb2w7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG5cdFx0XHRpZiAoc3VwcGx5Lm51bVRvb2xzID4gMCkge1xuXHRcdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xuXHRcdGlmICh0aGlzLnRhcmdldC5udW1Ub29scyA+IDApIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDE7XG5cdFx0XHR0aGlzLmhhc1Rvb2wgPSB0cnVlO1xuXHRcdFx0Ly8gY3JlYXRlIHRoZSB0b29sIGFuZCBhZGQgaXQgdG8gdGhlIGFnZW50XG5cdFx0XHRsYWJvdXJlci5waWNrVXBUb29sKCk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gdG9vbCBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=