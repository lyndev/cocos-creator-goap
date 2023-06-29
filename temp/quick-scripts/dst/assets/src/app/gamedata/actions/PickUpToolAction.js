
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpToolAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '95cc6Nqz3dKYYtSiyYrsRs5', 'PickUpToolAction');
// src/app/gamedata/actions/PickUpToolAction.ts

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
exports.PickUpToolAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var PickUpToolAction = /** @class */ (function (_super) {
    __extends(PickUpToolAction, _super);
    function PickUpToolAction() {
        var _this = _super.call(this) || this;
        _this.hasTool = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, false); // don't get a tool if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasTool, true); // we now have a tool
        return _this;
    }
    PickUpToolAction.prototype.reset = function () {
        this.hasTool = false;
    };
    PickUpToolAction.prototype.isDone = function () {
        return this.hasTool;
    };
    PickUpToolAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpToolAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare tools
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numTools > 0) {
                if (closest == null) {
                    // first one, so choose it for now
                    closest = supply;
                    closestDist = supply.distanceSquare(vg);
                }
                else {
                    // is this one closer than the last?
                    var dist = supply.distanceSquare(vg);
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
    PickUpToolAction.prototype.perform = function (node) {
        if (this.target.numTools > 0) {
            this.target.numTools -= 1;
            this.hasTool = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
            // create the tool and add it to the agent
            labourer.pickUpTool();
            return true;
        }
        else {
            // we got there but there was no tool available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpToolAction;
}(GoapAction_1.GoapAction));
exports.PickUpToolAction = PickUpToolAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwVG9vbEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFDcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUdoRDtJQUFzQyxvQ0FBVTtJQUc1QztRQUFBLFlBQ0ksaUJBQU8sU0FHVjtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUE7UUFJNUIsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLDBDQUEwQztRQUM1RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMscUJBQXFCOztJQUNwRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFBO0lBQ3hCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFjO1FBQzdDLHlEQUF5RDtRQUN6RCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUE7UUFDcEUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQTtRQUN2QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ1gsSUFBSSxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtnQkFDckIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO29CQUNqQixrQ0FBa0M7b0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUE7b0JBQ2hCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2lCQUMxQztxQkFBTTtvQkFDSCxvQ0FBb0M7b0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7b0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTt3QkFDcEIsZ0NBQWdDO3dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO3dCQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO3FCQUNyQjtpQkFDSjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUE7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUE7WUFDbkIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsMENBQTBDO1lBQzFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQTtZQUNyQixPQUFPLElBQUksQ0FBQTtTQUNkO2FBQU07WUFDSCwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUE7U0FDZjtJQUNMLENBQUM7SUFDTCx1QkFBQztBQUFELENBaEVBLEFBZ0VDLENBaEVxQyx1QkFBVSxHQWdFL0M7QUFoRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBQaWNrVXBUb29sQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBoYXNUb29sOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGdldCB0aGUgdG9vbCBmcm9tXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNUb29sLCBmYWxzZSkgLy8gZG9uJ3QgZ2V0IGEgdG9vbCBpZiB3ZSBhbHJlYWR5IGhhdmUgb25lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNUb29sLCB0cnVlKSAvLyB3ZSBub3cgaGF2ZSBhIHRvb2xcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaGFzVG9vbCA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzVG9vbFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcbiAgICAgICAgbGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuICAgICAgICAgICAgaWYgKHN1cHBseS5udW1Ub29scyA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLnRhcmdldC5udW1Ub29scyA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm51bVRvb2xzIC09IDFcbiAgICAgICAgICAgIHRoaXMuaGFzVG9vbCA9IHRydWVcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0b29sIGFuZCBhZGQgaXQgdG8gdGhlIGFnZW50XG4gICAgICAgICAgICBsYWJvdXJlci5waWNrVXBUb29sKClcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyB0b29sIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=