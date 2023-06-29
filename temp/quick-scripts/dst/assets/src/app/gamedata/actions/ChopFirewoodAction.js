
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
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
    ChopFirewoodAction.prototype.checkProceduralPrecondition = function (go) {
        // find the nearest chopping block that we can chop our wood at
        var blocks = Environment_1.Environment.choppingBlockComps;
        var closest = null;
        var closestDist = 0;
        var vg = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            if (closest == null) {
                closest = block;
                closestDist = block.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = block.distanceSquare(vg);
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
    ChopFirewoodAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvQ2hvcEZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEM7QUFDOUMsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFHcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUVoRDtJQUF3QyxzQ0FBVTtJQUs5QztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVRPLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFDeEIsZUFBUyxHQUFXLENBQUMsQ0FBQTtRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQTtRQUkzQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsNEJBQTRCO1FBQzdFLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyx5Q0FBeUM7UUFDL0YsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQTs7SUFDbEQsQ0FBQztJQUNNLGtDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBQ00sbUNBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQTtJQUN2QixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsRUFBVztRQUMxQywrREFBK0Q7UUFDL0QsSUFBSSxNQUFNLEdBQTZCLHlCQUFXLENBQUMsa0JBQWtCLENBQUE7UUFDckUsSUFBSSxPQUFPLEdBQTJCLElBQUksQ0FBQTtRQUMxQyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDckMsS0FBa0IsVUFBTSxFQUFOLGlCQUFNLEVBQU4sb0JBQU0sRUFBTixJQUFNLEVBQUU7WUFBckIsSUFBSSxLQUFLLGVBQUE7WUFDVixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxLQUFLLENBQUE7Z0JBQ2YsV0FBVyxHQUFHLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDekM7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxLQUFLLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUMzQyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLEtBQUssQ0FBQTtvQkFDZixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFFRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUMxQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUM1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELG9CQUFvQjtZQUNwQixJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtZQUNuRCxRQUFRLENBQUMsV0FBVyxJQUFJLENBQUMsQ0FBQTtZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQTtZQUNuQixJQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO1lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDZCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUUsRUFBRTtnQkFDbEIsa0NBQWtDO2dCQUNsQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7YUFDekI7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHlCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRXVDLHVCQUFVLEdBb0VqRDtBQXBFWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWxzL1RpbWVVdGlsXCJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCJcbmltcG9ydCB7IENob3BwaW5nQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuXG5leHBvcnQgY2xhc3MgQ2hvcEZpcmV3b29kQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBjaG9wcGVkOiBib29sZWFuID0gZmFsc2VcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMFxuICAgIHB1YmxpYyB3b3JrRHVyYXRpb246IG51bWJlciA9IDJcblx0XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBuZWVkIGEgdG9vbCB0byBkbyB0aGlzXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpIC8vIGlmIHdlIGhhdmUgZmlyZXdvb2Qgd2UgZG9uJ3Qgd2FudCBtb3JlXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgdHJ1ZSlcbiAgICB9XG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmNob3BwZWQgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvcHBlZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihnbzogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBmaW5kIHRoZSBuZWFyZXN0IGNob3BwaW5nIGJsb2NrIHRoYXQgd2UgY2FuIGNob3Agb3VyIHdvb2QgYXRcbiAgICAgICAgbGV0IGJsb2NrczogQ2hvcHBpbmdCbG9ja0NvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuY2hvcHBpbmdCbG9ja0NvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBDaG9wcGluZ0Jsb2NrQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBibG9jayBvZiBibG9ja3MpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gYmxvY2tcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGJsb2NrLmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gYmxvY2suZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gYmxvY2tcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0VGltZSA9PSAwKSB0aGlzLnN0YXJ0VGltZSA9IFRpbWVVdGlsLmdldFRpbWUoKVxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xuICAgICAgICAgICAgLy8gZmluaXNoZWQgY2hvcHBpbmdcbiAgICAgICAgICAgIGxldCBiYWNrcGFjazogQmFja1BhY2tDb21wb25lbnQgPSBsYWJvdXJlci5iYWNrcGFja1xuICAgICAgICAgICAgYmFja3BhY2subnVtRmlyZXdvb2QgKz0gNVxuICAgICAgICAgICAgdGhpcy5jaG9wcGVkID0gdHJ1ZVxuICAgICAgICAgICAgbGV0IHRvb2wgPSBsYWJvdXJlci50b29sXG4gICAgICAgICAgICB0b29sLnVzZSgwLjM0KVxuICAgICAgICAgICAgaWYgKHRvb2wuZGVzdHJveWVkKCkpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOuWIoOmZpCBEZXN0cm95KGJhY2twYWNrLnRvb2wpO1xuICAgICAgICAgICAgICAgIGxhYm91cmVyLmRlc3Ryb3lUb29sKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==