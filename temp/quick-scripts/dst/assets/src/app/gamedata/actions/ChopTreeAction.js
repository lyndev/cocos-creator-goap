
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcFRyZWVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUMvQywyREFBMEQ7QUFDMUQsdURBQXNEO0FBSXRELDhDQUE2QztBQUs3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFvQyxrQ0FBVTtJQUs3QztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFHM0MsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLDRCQUE0QjtRQUM5RSxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMscUNBQXFDO1FBQ3hGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7O0lBQzVDLENBQUM7SUFDTSw4QkFBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVNLCtCQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLHdDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ00sb0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELDhDQUE4QztRQUM5QyxJQUFJLEtBQUssR0FBb0IseUJBQVcsQ0FBQyxTQUFTLENBQUM7UUFDbkQsSUFBSSxPQUFPLEdBQWtCLElBQUksQ0FBQztRQUNsQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBaUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFuQixJQUFJLElBQUksY0FBQTtZQUNaLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDcEIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNmLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3pDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDOUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ2YsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sZ0NBQU8sR0FBZCxVQUFlLEtBQVk7UUFDMUIsSUFBSSxRQUFRLEdBQUcsS0FBaUIsQ0FBQztRQUNqQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUN0QixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFckMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUM1RCxvQkFBb0I7WUFDcEIsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDcEQsUUFBUSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxJQUFJLEdBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDMUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7Z0JBQ3JCLGdDQUFnQztnQkFDaEMsd0JBQXdCO2dCQUN4QixRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDdkI7U0FDRDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHFCQUFDO0FBQUQsQ0F6RUEsQUF5RUMsQ0F6RW1DLHVCQUFVLEdBeUU3QztBQXpFWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvVGltZVV0aWxcIjtcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvSUdvYXBcIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIjtcbmltcG9ydCB7IFRyZWVDb21wb25lbnQgfSBmcm9tIFwiLi4vVHJlZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToxMiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjMyOjIzXG4gKi9cbmV4cG9ydCBjbGFzcyBDaG9wVHJlZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGNob3BwZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHRwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc1Rvb2wsIHRydWUpOyAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIGZhbHNlKTsgLy8gaWYgd2UgaGF2ZSBsb2dzIHdlIGRvbid0IHdhbnQgbW9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNMb2dzLCB0cnVlKTtcblx0fVxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG5cdFx0dGhpcy5jaG9wcGVkID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5jaG9wcGVkO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vIFRPRE86ZmluZCB0aGUgbmVhcmVzdCB0cmVlIHRoYXQgd2UgY2FuIGNob3Bcblx0XHRsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHQvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG5cdFx0XHRcdGNsb3Nlc3QgPSB0cmVlO1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHRyZWUuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSB0cmVlLmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0aWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuXHRcdFx0XHRcdC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHRyZWU7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0oaUdvYXA6IElHb2FwKTogYm9vbGVhbiB7XG5cdFx0bGV0IGxhYm91cmVyID0gaUdvYXAgYXMgTGFib3VyZXI7XG5cdFx0aWYgKHRoaXMuc3RhcnRUaW1lID09IDApXG5cdFx0XHR0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKTtcblxuXHRcdGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XG5cdFx0XHQvLyBmaW5pc2hlZCBjaG9wcGluZ1xuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdFx0YmFja3BhY2subnVtTG9ncyArPSAxO1xuXHRcdFx0dGhpcy5jaG9wcGVkID0gdHJ1ZTtcblx0XHRcdGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbDtcblx0XHRcdHRvb2wudXNlKDAuMzQpO1xuXHRcdFx0Y29uc29sZS5sb2coXCLkvb/nlKjlt6XlhbdcIiwgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lKVxuXHRcdFx0aWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcblx0XHRcdFx0Ly8gVE9ETzogRGVzdHJveShiYWNrcGFjay50b29sKTtcblx0XHRcdFx0Ly8gYmFja3BhY2sudG9vbCA9IG51bGw7XG5cdFx0XHRcdGxhYm91cmVyLmRlc3Ryb3lUb29sKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19