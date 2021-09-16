
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvTWluZU9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQStDO0FBQy9DLDJEQUEwRDtBQUMxRCx1REFBc0Q7QUFHdEQsOENBQTZDO0FBSzdDOzs7Ozs7R0FNRztBQUNIO0lBQW1DLGlDQUFVO0lBTTVDO1FBQUEsWUFDQyxpQkFBTyxTQUlQO1FBVk8sV0FBSyxHQUFZLEtBQUssQ0FBQztRQUV2QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLG9CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUMsV0FBVztRQUk5QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsNEJBQTRCO1FBQzlFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxvQ0FBb0M7UUFDdEYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDM0MsQ0FBQztJQUVNLDZCQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sOEJBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sdUNBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxDQUFDLGdDQUFnQztJQUM5QyxDQUFDO0lBRU0sbURBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELDhDQUE4QztRQUM5QyxJQUFJLEtBQUssR0FBd0IseUJBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxPQUFPLEdBQXNCLElBQUksQ0FBQztRQUN0QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUksY0FBQTtZQUNaLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSwrQkFBTyxHQUFkLFVBQWUsUUFBa0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRXJDLElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDOUQsa0JBQWtCO1lBQ2xCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQUEsQ0FBQztZQUNyRCxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNsQixJQUFJLElBQUksR0FBa0IsUUFBUSxDQUFDLElBQUksQ0FBQztZQUN4QyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3JCLGlDQUFpQztnQkFDakMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZCO1NBQ0Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixvQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVrQyx1QkFBVSxHQXNFNUM7QUF0RVksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIjtcbmltcG9ydCB7IElyb25Sb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0lyb25Sb2NrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFRvb2xDb21wb25lbnQgfSBmcm9tIFwiLi4vVG9vbENvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMzoyMyBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM2OjM2XG4gKi9cbmV4cG9ydCBjbGFzcyBNaW5lT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgbWluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSBtaW5pbmdEdXJhdGlvbjogbnVtYmVyID0gMjsgLy8gc2Vjb25kcztcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSk7IC8vIHdlIG5lZWQgYSB0b29sIHRvIGRvIHRoaXNcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIGlmIHdlIGhhdmUgb3JlIHdlIGRvbid0IHdhbnQgbW9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpO1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMubWluZWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLm1pbmVkO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHJvY2tcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHJvY2sgdGhhdCB3ZSBjYW4gbWluZVxuXHRcdGxldCByb2NrczogSXJvblJvY2tDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnJvY2tDb21wcztcblx0XHRsZXQgY2xvc2VzdDogSXJvblJvY2tDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IHJvY2sgb2Ygcm9ja3MpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gcm9jaztcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSByb2NrLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gcm9jay5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSByb2NrO1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMubWluaW5nRHVyYXRpb24pIHtcblx0XHRcdC8vIGZpbmlzaGVkIG1pbmluZ1xuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrOztcblx0XHRcdGJhY2twYWNrLm51bU9yZSArPSAyO1xuXHRcdFx0dGhpcy5taW5lZCA9IHRydWU7XG5cdFx0XHRsZXQgdG9vbDogVG9vbENvbXBvbmVudCA9IGxhYm91cmVyLnRvb2w7XG5cdFx0XHR0b29sLnVzZSgwLjUpO1xuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcblx0XHRcdFx0Ly9UT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xuXHRcdFx0XHRsYWJvdXJlci5kZXN0cm95VG9vbCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSJdfQ==