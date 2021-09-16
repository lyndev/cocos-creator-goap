
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkxvZ3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSTdDOzs7Ozs7R0FNRztBQUNIO0lBQXVDLHFDQUFVO0lBR2hEO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBUE8sb0JBQWMsR0FBWSxLQUFLLENBQUM7UUFJdkMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG9EQUFvRDtRQUN0RyxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsc0JBQXNCO1FBQ25FLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxvQkFBb0I7O0lBQ3JFLENBQUM7SUFFTSxpQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVNLGtDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDNUIsQ0FBQztJQUVNLDJDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sdURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELG9DQUFvQztRQUNwQyxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXJCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLHVCQUFVLEdBMkRoRDtBQTNEWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA4OjU5IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzQ6MDZcbiAqL1xuZXhwb3J0IGNsYXNzIERyb3BPZmZMb2dzQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgZHJvcHBlZE9mZkxvZ3M6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDtcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gbG9nc1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0TG9ncywgdHJ1ZSk7IC8vIHdlIGNvbGxlY3RlZCBsb2dzXG5cdH1cblxuXHRwdWJsaWMgcmVzZXQoKSB7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmTG9ncztcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZVxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgKz0gYmFja3BhY2subnVtTG9ncztcblx0XHR0aGlzLmRyb3BwZWRPZmZMb2dzID0gdHJ1ZTtcblx0XHRiYWNrcGFjay5udW1Mb2dzID0gMDtcblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19