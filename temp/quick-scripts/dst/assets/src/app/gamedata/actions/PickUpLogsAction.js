
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb45aiSJ6xB45/z/NGUU+uT', 'PickUpLogsAction');
// src/app/gamedata/actions/PickUpLogsAction.ts

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
exports.PickUpLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:14:10
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:49
 */
var PickUpLogsAction = /** @class */ (function (_super) {
    __extends(PickUpLogsAction, _super);
    function PickUpLogsAction() {
        var _this = _super.call(this) || this;
        _this.hasLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // don't get a logs if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true); // we now have a logs
        return _this;
    }
    PickUpLogsAction.prototype.reset = function () {
        this.hasLogs = false;
    };
    PickUpLogsAction.prototype.isDone = function () {
        return this.hasLogs;
    };
    PickUpLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare logs
        var supplyPiles = [];
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numLogs > 0) {
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
    PickUpLogsAction.prototype.perform = function (labourer) {
        if (this.target.numLogs > 0) {
            this.target.numLogs -= 1;
            this.hasLogs = true;
            //TODO play effect, change actor icon
            var backpack = labourer.backpack;
            backpack.numLogs = 1;
            return true;
        }
        else {
            // we got there but there was no logs available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpLogsAction;
}(GoapAction_1.GoapAction));
exports.PickUpLogsAction = PickUpLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxQaWNrVXBMb2dzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBS3REOzs7Ozs7R0FNRztBQUNIO0lBQXNDLG9DQUFVO0lBRy9DO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUloQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQTBDO1FBQzdGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7O0lBQ2xFLENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELHdEQUF3RDtRQUN4RCxJQUFJLFdBQVcsR0FBMEIsRUFBRSxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUM7UUFDeEMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRTVCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNkLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtvQkFDcEIsa0NBQWtDO29CQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFDO29CQUNqQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDM0M7cUJBQU07b0JBQ04sb0NBQW9DO29CQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7d0JBQ3ZCLGdDQUFnQzt3QkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQzt3QkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztxQkFDbkI7aUJBQ0Q7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixxQ0FBcUM7WUFDckMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUVyQixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVxQyx1QkFBVSxHQWtFL0M7QUFsRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTQ6MTAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6NDlcclxuICovXHJcbmV4cG9ydCBjbGFzcyBQaWNrVXBMb2dzQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDsgIC8vIHdoZXJlIHdlIGdldCB0aGUgbG9ncyBmcm9tXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNMb2dzLCBmYWxzZSk7IC8vIGRvbid0IGdldCBhIGxvZ3MgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpOyAvLyB3ZSBub3cgaGF2ZSBhIGxvZ3NcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpIHtcclxuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmhhc0xvZ3M7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGxvZ3NcclxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gW107XHJcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XHJcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcclxuXHRcdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdFx0XHRjbG9zZXN0RGlzdCA9IGRpc3Q7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnRhcmdldC5udW1Mb2dzID4gMCkge1xyXG5cdFx0XHR0aGlzLnRhcmdldC5udW1Mb2dzIC09IDE7XHJcblx0XHRcdHRoaXMuaGFzTG9ncyA9IHRydWU7XHJcblx0XHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cclxuXHRcdFx0bGV0IGJhY2twYWNrID0gbGFib3VyZXIuYmFja3BhY2s7XHJcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyBsb2dzIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0fVxyXG59Il19