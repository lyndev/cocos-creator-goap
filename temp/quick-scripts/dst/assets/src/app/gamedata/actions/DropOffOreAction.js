
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
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:11:26
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:34:51
 */
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
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(agent);
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
    DropOffOreAction.prototype.perform = function (labourer) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZk9yZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUd0RCw4Q0FBNkM7QUFJN0M7Ozs7OztHQU1HO0FBQ0g7SUFBc0Msb0NBQVU7SUFHL0M7UUFBQSxZQUNDLGlCQUFPLFNBSVA7UUFQTyxtQkFBYSxHQUFHLEtBQUssQ0FBQztRQUk3QixLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsbURBQW1EO1FBQ3BHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7UUFDakUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLG1CQUFtQjs7SUFDbkUsQ0FBQztJQUVNLGdDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM1QixDQUFDO0lBRU0saUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ00sMENBQWUsR0FBdEI7UUFDQyxPQUFPLElBQUksQ0FBQyxDQUFDLGtFQUFrRTtJQUNoRixDQUFDO0lBQ00sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWtCO1FBQ3BELHVEQUF1RDtRQUN2RCxJQUFJLFdBQVcsR0FBMEIseUJBQVcsQ0FBQyxlQUFlLENBQUM7UUFDckUsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFFNUIsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUNwQixrQ0FBa0M7Z0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7Z0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNOLG9DQUFvQztnQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO29CQUN2QixnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRix1QkFBQztBQUFELENBMURBLEFBMERDLENBMURxQyx1QkFBVSxHQTBEL0M7QUExRFksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgQmFja1BhY2tDb21wb25lbnQgfSBmcm9tIFwiLi4vQmFja1BhY2tDb21wb25lbnRcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMToyNiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM0OjUxXG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgb3JlXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBvcmUgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzT3JlLCBmYWxzZSk7IC8vIHdlIG5vdyBoYXZlIG5vIG9yZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0T3JlLCB0cnVlKTsgLy8gd2UgY29sbGVjdGVkIG9yZVxuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmT3JlO1xuXHR9XG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gZHJvcCBvZmYgdGhlIG9yZVxuXHR9XG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIG9yZVxuXHRcdGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChjbG9zZXN0ID09IG51bGwpIHtcblx0XHRcdFx0Ly8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0bGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZShhZ2VudCk7XG5cdFx0XHRcdGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdGNsb3Nlc3QgPSBzdXBwbHk7XG5cdFx0XHRcdFx0Y2xvc2VzdERpc3QgPSBkaXN0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XG5cblx0XHRyZXR1cm4gY2xvc2VzdCAhPSBudWxsO1xuXHR9XG5cblx0cHVibGljIHBlcmZvcm0obGFib3VyZXI6IExhYm91cmVyKTogYm9vbGVhbiB7XG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdHRoaXMudGFyZ2V0Lm51bU9yZSArPSBiYWNrcGFjay5udW1PcmU7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmT3JlID0gdHJ1ZTtcblx0XHRiYWNrcGFjay5udW1PcmUgPSAwO1xuXHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19