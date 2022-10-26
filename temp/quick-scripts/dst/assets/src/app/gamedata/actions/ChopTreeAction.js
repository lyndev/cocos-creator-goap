
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/ChopTreeAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4ebd9M+JMxGE4m2I9agiweP', 'ChopTreeAction');
// src/app/gamedata/actions/ChopTreeAction.ts

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
exports.ChopTreeAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:12
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:32:23
 */
var ChopTreeAction = /** @class */ (function (_super) {
    __extends(ChopTreeAction, _super);
    function ChopTreeAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // if we have logs we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true);
        return _this;
    }
    ChopTreeAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopTreeAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopTreeAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopTreeAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest tree that we can chop
        var trees = Environment_1.Environment.treeComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = tree;
                closestDist = tree.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = tree.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = tree;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopTreeAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numLogs += 1;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            console.log("使用工具", this.constructor.name);
            if (tool.destroyed()) {
                // TODO: Destroy(backpack.tool);
                // backpack.tool = null;
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopTreeAction;
}(GoapAction_1.GoapAction));
exports.ChopTreeAction = ChopTreeAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxDaG9wVHJlZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFJdEQsOENBQTZDO0FBSzdDOzs7Ozs7R0FNRztBQUNIO0lBQW9DLGtDQUFVO0lBSzdDO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBVE8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUczQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUM7UUFDeEYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDNUMsQ0FBQztJQUNNLDhCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUFvQix5QkFBVyxDQUFDLFNBQVMsQ0FBQztRQUNuRCxJQUFJLE9BQU8sR0FBa0IsSUFBSSxDQUFDO1FBQ2xDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFpQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1lBQW5CLElBQUksSUFBSSxjQUFBO1lBQ1osSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsS0FBWTtRQUMxQixJQUFJLFFBQVEsR0FBRyxLQUFpQixDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQzVELG9CQUFvQjtZQUNwQixJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNwRCxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztZQUNwQixJQUFJLElBQUksR0FBa0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDckIsZ0NBQWdDO2dCQUNoQyx3QkFBd0I7Z0JBQ3hCLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QjtTQUNEO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YscUJBQUM7QUFBRCxDQXpFQSxBQXlFQyxDQXpFbUMsdUJBQVUsR0F5RTdDO0FBekVZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiO1xyXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9JR29hcFwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xyXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9UcmVlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxMiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozMjoyM1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIENob3BUcmVlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKTsgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gaWYgd2UgaGF2ZSBsb2dzIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpO1xyXG5cdH1cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmNob3BwZWQgPSBmYWxzZTtcclxuXHRcdHRoaXMuc3RhcnRUaW1lID0gMDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBpc0RvbmUoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxyXG5cdFx0bGV0IHRyZWVzOiBUcmVlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC50cmVlQ29tcHM7XHJcblx0XHRsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XHJcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XHJcblxyXG5cdFx0Zm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xyXG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XHJcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xyXG5cdFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XHJcblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xyXG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcclxuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XHJcblx0XHRcdFx0XHRjbG9zZXN0ID0gdHJlZTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XHJcblx0XHRpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuXHRcdFx0dGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG5cdFx0aWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcclxuXHRcdFx0Ly8gZmluaXNoZWQgY2hvcHBpbmdcclxuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xyXG5cdFx0XHRiYWNrcGFjay5udW1Mb2dzICs9IDE7XHJcblx0XHRcdHRoaXMuY2hvcHBlZCA9IHRydWU7XHJcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcclxuXHRcdFx0dG9vbC51c2UoMC4zNCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKFwi5L2/55So5bel5YW3XCIsIHRoaXMuY29uc3RydWN0b3IubmFtZSlcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvLyBUT0RPOiBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xyXG5cdFx0XHRcdC8vIGJhY2twYWNrLnRvb2wgPSBudWxsO1xyXG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==