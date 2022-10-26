
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10608rxZehFOLOeFOjwHzym', 'DropOffLogsAction');
// src/app/gamedata/actions/DropOffLogsAction.ts

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
exports.DropOffLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:08:59
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:34:06
 */
var DropOffLogsAction = /** @class */ (function (_super) {
    __extends(DropOffLogsAction, _super);
    function DropOffLogsAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, true); // can't drop off logs if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, false); // we now have no logs
        _this.addEffect(ActionStatus_1.ActionStatus.CollectLogs, true); // we collected logs
        return _this;
    }
    DropOffLogsAction.prototype.reset = function () {
        this.droppedOffLogs = false;
    };
    DropOffLogsAction.prototype.isDone = function () {
        return this.droppedOffLogs;
    };
    DropOffLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    DropOffLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest supply pile
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
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
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffLogsAction.prototype.perform = function (labourer) {
        var backpack = labourer.backpack;
        this.target.numLogs += backpack.numLogs;
        this.droppedOffLogs = true;
        backpack.numLogs = 0;
        return true;
    };
    return DropOffLogsAction;
}(GoapAction_1.GoapAction));
exports.DropOffLogsAction = DropOffLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBdUMscUNBQVU7SUFHaEQ7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFQTyxvQkFBYyxHQUFZLEtBQUssQ0FBQztRQUl2QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsb0RBQW9EO1FBQ3RHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxzQkFBc0I7UUFDbkUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjs7SUFDckUsQ0FBQztJQUVNLGlDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUM1QixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsb0NBQW9DO1FBQ3BDLElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUM7UUFDeEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFFckIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0Ysd0JBQUM7QUFBRCxDQTNEQSxBQTJEQyxDQTNEc0MsdUJBQVUsR0EyRGhEO0FBM0RZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA4OjU5IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM0OjA2XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRHJvcE9mZkxvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGRyb3BwZWRPZmZMb2dzOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDtcclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyB3ZSBub3cgaGF2ZSBubyBsb2dzXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdExvZ3MsIHRydWUpOyAvLyB3ZSBjb2xsZWN0ZWQgbG9nc1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5kcm9wcGVkT2ZmTG9ncyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BwZWRPZmZMb2dzO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZVxyXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XHJcblx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgKz0gYmFja3BhY2subnVtTG9ncztcclxuXHRcdHRoaXMuZHJvcHBlZE9mZkxvZ3MgPSB0cnVlO1xyXG5cdFx0YmFja3BhY2subnVtTG9ncyA9IDA7XHJcblxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19