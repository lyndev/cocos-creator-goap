
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffOreAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7298eqbu4dPhIuAI/16oKQq', 'DropOffOreAction');
// src/app/gamedata/actions/DropOffOreAction.ts

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
exports.DropOffOreAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var DropOffOreAction = /** @class */ (function (_super) {
    __extends(DropOffOreAction, _super);
    function DropOffOreAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffOre = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, true); // can't drop off ore if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, false); // we now have no ore
        _this.addEffect(ActionStatus_1.ActionStatus.CollectOre, true); // we collected ore
        return _this;
    }
    DropOffOreAction.prototype.reset = function () {
        this.droppedOffOre = false;
    };
    DropOffOreAction.prototype.isDone = function () {
        return this.droppedOffOre;
    };
    DropOffOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the ore
    };
    DropOffOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare ore
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
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
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    DropOffOreAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
        var backpack = labourer.backpack;
        this.target.numOre += backpack.numOre;
        this.droppedOffOre = true;
        backpack.numOre = 0;
        //TODO play effect, change actor icon
        return true;
    };
    return DropOffOreAction;
}(GoapAction_1.GoapAction));
exports.DropOffOreAction = DropOffOreAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZk9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXlEO0FBQ3pELHVEQUFxRDtBQUNyRCxzREFBb0Q7QUFFcEQsOENBQTRDO0FBQzVDLGtEQUFnRDtBQUdoRDtJQUFzQyxvQ0FBVTtJQUc1QztRQUFBLFlBQ0ksaUJBQU8sU0FJVjtRQVBPLG1CQUFhLEdBQUcsS0FBSyxDQUFBO1FBSXpCLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyxtREFBbUQ7UUFDbkcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLHFCQUFxQjtRQUNoRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsbUJBQW1COztJQUNyRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFBO0lBQzlCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzdCLENBQUM7SUFDTSwwQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBLENBQUMsa0VBQWtFO0lBQ2xGLENBQUM7SUFDTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3Qyx1REFBdUQ7UUFDdkQsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFBO1FBQ3BFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUE7UUFDdkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNYLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFBO2dCQUNoQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUMxQztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFBO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFBO1FBQ3pCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBMURBLEFBMERDLENBMURxQyx1QkFBVSxHQTBEL0M7QUExRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBkcm9wcGVkT2ZmT3JlID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50IC8vIHdoZXJlIHdlIGRyb3Agb2ZmIHRoZSBvcmVcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgdHJ1ZSkgLy8gY2FuJ3QgZHJvcCBvZmYgb3JlIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKSAvLyB3ZSBub3cgaGF2ZSBubyBvcmVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkNvbGxlY3RPcmUsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBvcmVcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcHBlZE9mZk9yZVxuICAgIH1cbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZSAvLyB5ZXMgd2UgbmVlZCB0byBiZSBuZWFyIGEgc3VwcGx5IHBpbGUgc28gd2UgY2FuIGRyb3Agb2ZmIHRoZSBvcmVcbiAgICB9XG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3JlXG4gICAgICAgIGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZnID0gYWdlbnQuZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcblx0XHRsZXQgbGFib3VyZXIgPSBub2RlLmdldENvbXBvbmVudChMYWJvdXJlcilcbiAgICAgICAgbGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bU9yZSArPSBiYWNrcGFjay5udW1PcmVcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmT3JlID0gdHJ1ZVxuICAgICAgICBiYWNrcGFjay5udW1PcmUgPSAwXG4gICAgICAgIC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==