
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/MineOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3892QFKmhKUZZMUoET4jUr', 'MineOreAction');
// src/app/gamedata/actions/MineOreAction.ts

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
exports.MineOreAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:13:23
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:36
 */
var MineOreAction = /** @class */ (function (_super) {
    __extends(MineOreAction, _super);
    function MineOreAction() {
        var _this = _super.call(this) || this;
        _this.mined = false;
        _this.startTime = 0;
        _this.miningDuration = 2; // seconds;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, false); // if we have ore we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, true);
        return _this;
    }
    MineOreAction.prototype.reset = function () {
        this.mined = false;
        this.startTime = 0;
    };
    MineOreAction.prototype.isDone = function () {
        return this.mined;
    };
    MineOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a rock
    };
    MineOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest rock that we can mine
        var rocks = Environment_1.Environment.rockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, rocks_1 = rocks; _i < rocks_1.length; _i++) {
            var rock = rocks_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = rock;
                closestDist = rock.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = rock.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = rock;
                    closestDist = dist;
                }
            }
        }
        this.target = closest;
        return closest != null;
    };
    MineOreAction.prototype.perform = function (labourer) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            var backpack = labourer.backpack;
            ;
            backpack.numOre += 2;
            this.mined = true;
            var tool = labourer.tool;
            tool.use(0.5);
            if (tool.destroyed()) {
                //TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return MineOreAction;
}(GoapAction_1.GoapAction));
exports.MineOreAction = MineOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxNaW5lT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFLN0M7Ozs7OztHQU1HO0FBQ0g7SUFBbUMsaUNBQVU7SUFNNUM7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFWTyxXQUFLLEdBQVksS0FBSyxDQUFDO1FBRXZCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsb0JBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXO1FBSTlDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7UUFDOUUsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLG9DQUFvQztRQUN0RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUMzQyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsZ0NBQWdDO0lBQzlDLENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsOENBQThDO1FBQzlDLElBQUksS0FBSyxHQUF3Qix5QkFBVyxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLE9BQU8sR0FBc0IsSUFBSSxDQUFDO1FBQ3RDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFpQixVQUFLLEVBQUwsZUFBSyxFQUFMLG1CQUFLLEVBQUwsSUFBSyxFQUFFO1lBQW5CLElBQUksSUFBSSxjQUFBO1lBQ1osSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUM7Z0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDekM7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFDO2lCQUNuQjthQUNEO1NBQ0Q7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLCtCQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM5RCxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFBQSxDQUFDO1lBQ3JELFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLElBQUksSUFBSSxHQUFrQixRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDckIsaUNBQWlDO2dCQUNqQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkI7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0F0RUEsQUFzRUMsQ0F0RWtDLHVCQUFVLEdBc0U1QztBQXRFWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IHsgSXJvblJvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vSXJvblJvY2tDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XHJcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTM6MjMgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6MzZcclxuICovXHJcbmV4cG9ydCBjbGFzcyBNaW5lT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBtaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuXHRwcml2YXRlIG1pbmluZ0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzO1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHRzdXBlcigpO1xyXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXHJcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIGlmIHdlIGhhdmUgb3JlIHdlIGRvbid0IHdhbnQgbW9yZVxyXG5cdFx0dGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLm1pbmVkID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMubWluZWQ7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSByb2NrXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xyXG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHJvY2sgdGhhdCB3ZSBjYW4gbWluZVxyXG5cdFx0bGV0IHJvY2tzOiBJcm9uUm9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQucm9ja0NvbXBzO1xyXG5cdFx0bGV0IGNsb3Nlc3Q6IElyb25Sb2NrQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCByb2NrIG9mIHJvY2tzKSB7XHJcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcclxuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XHJcblx0XHRcdFx0Y2xvc2VzdCA9IHJvY2s7XHJcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSByb2NrLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gcm9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XHJcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xyXG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcclxuXHRcdFx0XHRcdGNsb3Nlc3QgPSByb2NrO1xyXG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xyXG5cclxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKVxyXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcclxuXHJcblx0XHRpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLm1pbmluZ0R1cmF0aW9uKSB7XHJcblx0XHRcdC8vIGZpbmlzaGVkIG1pbmluZ1xyXG5cdFx0XHRsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2s7O1xyXG5cdFx0XHRiYWNrcGFjay5udW1PcmUgKz0gMjtcclxuXHRcdFx0dGhpcy5taW5lZCA9IHRydWU7XHJcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcclxuXHRcdFx0dG9vbC51c2UoMC41KTtcclxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcclxuXHRcdFx0XHQvL1RPRE865Yig6ZmkIERlc3Ryb3koYmFja3BhY2sudG9vbCk7XHJcblx0XHRcdFx0bGFib3VyZXIuZGVzdHJveVRvb2woKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fVxyXG59Il19