
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, rocks_1 = rocks; _i < rocks_1.length; _i++) {
            var rock = rocks_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = rock;
                closestDist = rock.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = rock.distanceSquare(vg);
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
    MineOreAction.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            var labourer = node.getComponent(Labourer_1.Labourer);
            var backpack = labourer.backpack;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvTWluZU9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQThDO0FBQzlDLDJEQUF5RDtBQUN6RCx1REFBcUQ7QUFDckQsc0RBQW9EO0FBRXBELDhDQUE0QztBQUU1QyxrREFBZ0Q7QUFHaEQ7SUFBbUMsaUNBQVU7SUFNekM7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFWTyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBRXRCLGVBQVMsR0FBVyxDQUFDLENBQUE7UUFDckIsb0JBQWMsR0FBVyxDQUFDLENBQUEsQ0FBQyxXQUFXO1FBSTFDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyw0QkFBNEI7UUFDN0UsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLG9DQUFvQztRQUNyRixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUM3QyxDQUFDO0lBRU0sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSw4QkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx1Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBLENBQUMsZ0NBQWdDO0lBQ2hELENBQUM7SUFFTSxtREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyw4Q0FBOEM7UUFDOUMsSUFBSSxLQUFLLEdBQXdCLHlCQUFXLENBQUMsU0FBUyxDQUFBO1FBQ3RELElBQUksT0FBTyxHQUFzQixJQUFJLENBQUE7UUFDckMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQWlCLFVBQUssRUFBTCxlQUFLLEVBQUwsbUJBQUssRUFBTCxJQUFLLEVBQUU7WUFBbkIsSUFBSSxJQUFJLGNBQUE7WUFDVCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLElBQUksQ0FBQTtnQkFDZCxXQUFXLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUN4QztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzFDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsSUFBSSxDQUFBO29CQUNkLFdBQVcsR0FBRyxJQUFJLENBQUE7aUJBQ3JCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sK0JBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDNUQsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUMzRCxrQkFBa0I7WUFDbEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUE7WUFDbkQsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7WUFDcEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDakIsSUFBSSxJQUFJLEdBQWtCLFFBQVEsQ0FBQyxJQUFJLENBQUE7WUFDdkMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUNsQixpQ0FBaUM7Z0JBQ2pDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQTthQUN6QjtTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQXJFQSxBQXFFQyxDQXJFa0MsdUJBQVUsR0FxRTVDO0FBckVZLHNDQUFhIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBJcm9uUm9ja0NvbXBvbmVudCB9IGZyb20gXCIuLi9Jcm9uUm9ja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuaW1wb3J0IHsgVG9vbENvbXBvbmVudCB9IGZyb20gXCIuLi9Ub29sQ29tcG9uZW50XCJcblxuZXhwb3J0IGNsYXNzIE1pbmVPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIG1pbmVkOiBib29sZWFuID0gZmFsc2VcblxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwXG4gICAgcHJpdmF0ZSBtaW5pbmdEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyBpZiB3ZSBoYXZlIG9yZSB3ZSBkb24ndCB3YW50IG1vcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMubWluZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5taW5lZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSByb2NrXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgcm9jayB0aGF0IHdlIGNhbiBtaW5lXG4gICAgICAgIGxldCByb2NrczogSXJvblJvY2tDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnJvY2tDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogSXJvblJvY2tDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHJvY2sgb2Ygcm9ja3MpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHJvY2tcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHJvY2suZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSByb2NrLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHJvY2tcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLm1pbmluZ0R1cmF0aW9uKSB7XG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBtaW5pbmdcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgICAgICBiYWNrcGFjay5udW1PcmUgKz0gMlxuICAgICAgICAgICAgdGhpcy5taW5lZCA9IHRydWVcbiAgICAgICAgICAgIGxldCB0b29sOiBUb29sQ29tcG9uZW50ID0gbGFib3VyZXIudG9vbFxuICAgICAgICAgICAgdG9vbC51c2UoMC41KVxuICAgICAgICAgICAgaWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICAvL1RPRE865Yig6ZmkIERlc3Ryb3koYmFja3BhY2sudG9vbCk7XG4gICAgICAgICAgICAgICAgbGFib3VyZXIuZGVzdHJveVRvb2woKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19