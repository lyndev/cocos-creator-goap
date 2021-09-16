
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a407ri6IhPLIFFb7c1jdCa', 'DropOffFirewoodAction');
// src/app/gamedata/actions/DropOffFirewoodAction.ts

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
exports.DropOffFirewoodAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:17
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:32:49
 */
var DropOffFirewoodAction = /** @class */ (function (_super) {
    __extends(DropOffFirewoodAction, _super);
    function DropOffFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffFirewood = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, true); // can't drop off firewood if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, false); // we now have no firewood
        _this.addEffect(ActionStatus_1.ActionStatus.CollectFirewood, true); // we collected firewood
        return _this;
    }
    DropOffFirewoodAction.prototype.reset = function () {
        this.droppedOffFirewood = false;
    };
    DropOffFirewoodAction.prototype.isDone = function () {
        return this.droppedOffFirewood;
    };
    DropOffFirewoodAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the firewood
    };
    DropOffFirewoodAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest supply pile that has spare firewood
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
    DropOffFirewoodAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        var backpack = labourer.backpack;
        backpack.numFirewood += backpack.numFirewood;
        this.droppedOffFirewood = true;
        backpack.numFirewood = 0;
        return true;
    };
    return DropOffFirewoodAction;
}(GoapAction_1.GoapAction));
exports.DropOffFirewoodAction = DropOffFirewoodAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUEyQyx5Q0FBVTtJQUVwRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQU5PLHdCQUFrQixHQUFZLEtBQUssQ0FBQztRQUczQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsd0RBQXdEO1FBQzlHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQywwQkFBMEI7UUFDM0UsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLHdCQUF3Qjs7SUFDN0UsQ0FBQztJQUVNLHFDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxzQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDaEMsQ0FBQztJQUVNLCtDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsQ0FBQyx1RUFBdUU7SUFDckYsQ0FBQztJQUNNLDJEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCw0REFBNEQ7UUFDNUQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFDO1FBQ3JFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO2dCQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUMzQztpQkFBTTtnQkFDTixvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDdkIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx1Q0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFpQixDQUFDO1FBQ2pDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDakMsUUFBUSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsUUFBUSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7UUFFekIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YsNEJBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEMEMsdUJBQVUsR0EwRHBEO0FBMURZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxNyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjMyOjQ5XG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmRmlyZXdvb2RBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBkcm9wcGVkT2ZmRmlyZXdvb2Q6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0cnVlKTsgLy8gY2FuJ3QgZHJvcCBvZmYgZmlyZXdvb2QgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzRmlyZXdvb2QsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gZmlyZXdvb2Rcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdEZpcmV3b29kLCB0cnVlKTsgLy8gd2UgY29sbGVjdGVkIGZpcmV3b29kXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSBmYWxzZTtcblx0fVxuXG5cdHB1YmxpYyBpc0RvbmUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgZmlyZXdvb2Rcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBmaXJld29vZFxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0oaUdvYXA6IElHb2FwKTogYm9vbGVhbiB7XG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XG5cdFx0bGV0IGJhY2twYWNrID0gbGFib3VyZXIuYmFja3BhY2s7XG5cdFx0YmFja3BhY2subnVtRmlyZXdvb2QgKz0gYmFja3BhY2subnVtRmlyZXdvb2Q7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSB0cnVlO1xuXHRcdGJhY2twYWNrLm51bUZpcmV3b29kID0gMDtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19