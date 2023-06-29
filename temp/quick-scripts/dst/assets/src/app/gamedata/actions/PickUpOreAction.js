
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35193pU0a9AtZnUpyjRwk1B', 'PickUpOreAction');
// src/app/gamedata/actions/PickUpOreAction.ts

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
exports.PickUpOreAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var PickUpOreAction = /** @class */ (function (_super) {
    __extends(PickUpOreAction, _super);
    function PickUpOreAction() {
        var _this = _super.call(this) || this;
        _this.hasOre = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, false); // don't get a ore if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, true); // we now have a ore
        return _this;
    }
    PickUpOreAction.prototype.reset = function () {
        this.hasOre = false;
    };
    PickUpOreAction.prototype.isDone = function () {
        return this.hasOre;
    };
    PickUpOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can pick up the ore
    };
    PickUpOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //find the nearest supply pile that has spare ores
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numOre >= 3) {
                // we need to take 3 ore
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
    PickUpOreAction.prototype.perform = function (node) {
        if (this.target.numOre >= 3) {
            this.target.numOre -= 3;
            this.hasOre = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
            //TODO play effect, change actor icon
            var backpack = labourer.backpack;
            backpack.numOre += 3;
            return true;
        }
        else {
            // we got there but there was no ore available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpOreAction;
}(GoapAction_1.GoapAction));
exports.PickUpOreAction = PickUpOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUVwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBR2hEO0lBQXFDLG1DQUFVO0lBRzNDO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBTk8sWUFBTSxHQUFZLEtBQUssQ0FBQTtRQUkzQixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFBLENBQUMseUNBQXlDO1FBQzFGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxvQkFBb0I7O0lBQ2xFLENBQUM7SUFFTSwrQkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUE7SUFDdkIsQ0FBQztJQUVNLGdDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7SUFDdEIsQ0FBQztJQUVNLHlDQUFlLEdBQXRCO1FBQ0ksT0FBTyxJQUFJLENBQUEsQ0FBQyxpRUFBaUU7SUFDakYsQ0FBQztJQUVNLHFEQUEyQixHQUFsQyxVQUFtQyxLQUFjO1FBQzdDLGtEQUFrRDtRQUNsRCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUE7UUFDcEUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQTtRQUN2QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUE7UUFDM0IsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ1gsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDcEIsd0JBQXdCO2dCQUN4QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ2pCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7aUJBQzFDO3FCQUFNO29CQUNILG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTtvQkFDNUMsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUNwQixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUE7d0JBQ2hCLFdBQVcsR0FBRyxJQUFJLENBQUE7cUJBQ3JCO2lCQUNKO2FBQ0o7U0FDSjtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFBRSxPQUFPLEtBQUssQ0FBQTtRQUVqQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTtRQUVyQixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxJQUFhO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQTtZQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtZQUNsQixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtZQUMxQyxxQ0FBcUM7WUFDckMsSUFBSSxRQUFRLEdBQXNCLFFBQVEsQ0FBQyxRQUFRLENBQUE7WUFDbkQsUUFBUSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUE7WUFFcEIsT0FBTyxJQUFJLENBQUE7U0FDZDthQUFNO1lBQ0gsOEZBQThGO1lBQzlGLE9BQU8sS0FBSyxDQUFBO1NBQ2Y7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQW5FQSxBQW1FQyxDQW5Fb0MsdUJBQVUsR0FtRTlDO0FBbkVZLDBDQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBQaWNrVXBPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGhhc09yZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudCAvLyB3aGVyZSB3ZSBnZXQgdGhlIG9yZSBmcm9tXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyBkb24ndCBnZXQgYSBvcmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzT3JlLCB0cnVlKSAvLyB3ZSBub3cgaGF2ZSBhIG9yZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oYXNPcmUgPSBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0RvbmUoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc09yZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gcGljayB1cCB0aGUgb3JlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL2ZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3Jlc1xuICAgICAgICBsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG4gICAgICAgICAgICBpZiAoc3VwcGx5Lm51bU9yZSA+PSAzKSB7XG4gICAgICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB0YWtlIDMgb3JlXG4gICAgICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQubnVtT3JlID49IDMpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0Lm51bU9yZSAtPSAzXG4gICAgICAgICAgICB0aGlzLmhhc09yZSA9IHRydWVcbiAgICAgICAgICAgIGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICAgICAgLy9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxuICAgICAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgICAgICBiYWNrcGFjay5udW1PcmUgKz0gM1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gb3JlIGF2YWlsYWJsZSEgU29tZW9uZSBnb3QgdGhlcmUgZmlyc3QuIENhbm5vdCBwZXJmb3JtIGFjdGlvblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=