
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ChopFirewoodAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20d3a8yS95Bma5uf0blkWk7', 'ChopFirewoodAction');
// src/app/gamedata/actions/ChopFirewoodAction.ts

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
exports.ChopFirewoodAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:09
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:35:57
 */
var ChopFirewoodAction = /** @class */ (function (_super) {
    __extends(ChopFirewoodAction, _super);
    function ChopFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, false); // if we have firewood we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, true);
        return _this;
    }
    ChopFirewoodAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopFirewoodAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopFirewoodAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopFirewoodAction.prototype.checkProceduralPrecondition = function (agent) {
        var labourer = agent;
        // find the nearest chopping block that we can chop our wood at
        var blocks = Environment_1.Environment.choppingBlockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            if (closest == null) {
                closest = block;
                closestDist = block.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = block.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = block;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopFirewoodAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numFirewood += 5;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            if (tool.destroyed()) {
                // TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopFirewoodAction;
}(GoapAction_1.GoapAction));
exports.ChopFirewoodAction = ChopFirewoodAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxDaG9wRmlyZXdvb2RBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBS3RELDhDQUE2QztBQUc3Qzs7Ozs7O0dBTUc7QUFDSDtJQUF3QyxzQ0FBVTtJQUtqRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN2QixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUcvQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyx5Q0FBeUM7UUFDaEcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDaEQsQ0FBQztJQUNNLGtDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ00sbUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsSUFBSSxRQUFRLEdBQWEsS0FBaUIsQ0FBQztRQUMzQywrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLEdBQTZCLHlCQUFXLENBQUMsa0JBQWtCLENBQUM7UUFDdEUsSUFBSSxPQUFPLEdBQTJCLElBQUksQ0FBQztRQUMzQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDYixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2hCLFdBQVcsR0FBRyxLQUFLLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxLQUFLLENBQUM7b0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUVELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFPLEdBQWQsVUFBZSxLQUFZO1FBQzFCLElBQUksUUFBUSxHQUFHLEtBQWlCLENBQUM7UUFDakMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDNUQsb0JBQW9CO1lBQ3BCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxXQUFXLElBQUksQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNyQixrQ0FBa0M7Z0JBQ2xDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQXhFQSxBQXdFQyxDQXhFdUMsdUJBQVUsR0F3RWpEO0FBeEVZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0Nob3BwaW5nQmxvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOTowOSBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wNCAxNzozNTo1N1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob3BGaXJld29vZEFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgY2hvcHBlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpOyAvLyBpZiB3ZSBoYXZlIGZpcmV3b29kIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0ZpcmV3b29kLCB0cnVlKTtcclxuXHR9XHJcblx0cHVibGljIHJlc2V0KCkge1xyXG5cdFx0dGhpcy5jaG9wcGVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcclxuXHRcdGxldCBsYWJvdXJlcjogTGFib3VyZXIgPSBhZ2VudCBhcyBMYWJvdXJlcjtcclxuXHRcdC8vIGZpbmQgdGhlIG5lYXJlc3QgY2hvcHBpbmcgYmxvY2sgdGhhdCB3ZSBjYW4gY2hvcCBvdXIgd29vZCBhdFxyXG5cdFx0bGV0IGJsb2NrczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IENob3BwaW5nQmxvY2tDb21wb25lbnQgPSBudWxsO1xyXG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xyXG5cclxuXHRcdGZvciAobGV0IGJsb2NrIG9mIGJsb2Nrcykge1xyXG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0Y2xvc2VzdCA9IGJsb2NrO1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gYmxvY2suZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xyXG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBibG9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBibG9jaztcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShpR29hcDogSUdvYXApOiBib29sZWFuIHtcclxuXHRcdGxldCBsYWJvdXJlciA9IGlHb2FwIGFzIExhYm91cmVyO1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcblx0XHRcdHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIGNob3BwaW5nXHJcblx0XHRcdGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFjaztcclxuXHRcdFx0YmFja3BhY2subnVtRmlyZXdvb2QgKz0gNTtcclxuXHRcdFx0dGhpcy5jaG9wcGVkID0gdHJ1ZTtcclxuXHRcdFx0bGV0IHRvb2wgPSBsYWJvdXJlci50b29sO1xyXG5cdFx0XHR0b29sLnVzZSgwLjM0KTtcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvLyBUT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xyXG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==