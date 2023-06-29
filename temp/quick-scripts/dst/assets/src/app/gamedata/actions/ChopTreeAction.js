
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = tree;
                closestDist = tree.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = tree.distanceSquare(vg);
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
    ChopTreeAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcFRyZWVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUE4QztBQUM5QywyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUVwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBSWhEO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBVE8sYUFBTyxHQUFZLEtBQUssQ0FBQTtRQUV4QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUd2QyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQzdFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyxxQ0FBcUM7UUFDdkYsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDOUMsQ0FBQztJQUNNLDhCQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRU0sK0JBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRU0sd0NBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQW9CLHlCQUFXLENBQUMsU0FBUyxDQUFBO1FBQ2xELElBQUksT0FBTyxHQUFrQixJQUFJLENBQUE7UUFDakMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBbkIsSUFBSSxJQUFJLGNBQUE7WUFDVCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN4QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzFDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFBO29CQUNkLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQVEsQ0FBQyxDQUFBO1FBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxrQkFBUSxDQUFDLE9BQU8sRUFBRSxDQUFBO1FBQzVELElBQUksa0JBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDekQsb0JBQW9CO1lBQ3BCLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFBO1lBQ25ELFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFBO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFBO1lBQ25CLElBQUksSUFBSSxHQUFrQixRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3ZDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQzFDLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNsQixnQ0FBZ0M7Z0JBQ2hDLHdCQUF3QjtnQkFDeEIsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFBO2FBQ3pCO1NBQ0o7UUFDRCxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCxxQkFBQztBQUFELENBdEVBLEFBc0VDLENBdEVtQyx1QkFBVSxHQXNFN0M7QUF0RVksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiXG5pbXBvcnQgeyBUb29sQ29tcG9uZW50IH0gZnJvbSBcIi4uL1Rvb2xDb21wb25lbnRcIlxuaW1wb3J0IHsgVHJlZUNvbXBvbmVudCB9IGZyb20gXCIuLi9UcmVlQ29tcG9uZW50XCJcblxuZXhwb3J0IGNsYXNzIENob3BUcmVlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDIgLy8gc2Vjb25kc1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzVG9vbCwgdHJ1ZSkgLy8gd2UgbmVlZCBhIHRvb2wgdG8gZG8gdGhpc1xuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpIC8vIGlmIHdlIGhhdmUgbG9ncyB3ZSBkb24ndCB3YW50IG1vcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc0xvZ3MsIHRydWUpXG4gICAgfVxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jaG9wcGVkID0gZmFsc2VcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSAwXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvcHBlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHRyZWUgdGhhdCB3ZSBjYW4gY2hvcFxuICAgICAgICBsZXQgdHJlZXM6IFRyZWVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnRyZWVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogVHJlZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgdHJlZSBvZiB0cmVlcykge1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gdHJlZVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gdHJlZS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHRyZWUuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gdHJlZVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgLy8gZmluaXNoZWQgY2hvcHBpbmdcbiAgICAgICAgICAgIGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFja1xuICAgICAgICAgICAgYmFja3BhY2subnVtTG9ncyArPSAxXG4gICAgICAgICAgICB0aGlzLmNob3BwZWQgPSB0cnVlXG4gICAgICAgICAgICBsZXQgdG9vbDogVG9vbENvbXBvbmVudCA9IGxhYm91cmVyLnRvb2xcbiAgICAgICAgICAgIHRvb2wudXNlKDAuMzQpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOW3peWFt1wiLCB0aGlzLmNvbnN0cnVjdG9yLm5hbWUpXG4gICAgICAgICAgICBpZiAodG9vbC5kZXN0cm95ZWQoKSkge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IERlc3Ryb3koYmFja3BhY2sudG9vbCk7XG4gICAgICAgICAgICAgICAgLy8gYmFja3BhY2sudG9vbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgbGFib3VyZXIuZGVzdHJveVRvb2woKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19