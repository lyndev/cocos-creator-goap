
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffToolsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cbb0eLsmetHRKewZGK6CtyY', 'DropOffToolsAction');
// src/app/gamedata/actions/DropOffToolsAction.ts

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
exports.DropOffToolsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:11:39
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:35:24
 */
var DropOffToolsAction = /** @class */ (function (_super) {
    __extends(DropOffToolsAction, _super);
    function DropOffToolsAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffTools = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasNewTools, true); // can't drop off tools if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasNewTools, false); // we now have no tools
        _this.addEffect(ActionStatus_1.ActionStatus.CollectTools, true); // we collected tools
        return _this;
    }
    DropOffToolsAction.prototype.reset = function () {
        this.droppedOffTools = false;
    };
    DropOffToolsAction.prototype.isDone = function () {
        return this.droppedOffTools;
    };
    DropOffToolsAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the tools
    };
    DropOffToolsAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare tools
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
    DropOffToolsAction.prototype.perform = function (labourer) {
        this.target.numTools += 2;
        this.droppedOffTools = true;
        //TODO play effect, change actor icon
        return true;
    };
    return DropOffToolsAction;
}(GoapAction_1.GoapAction));
exports.DropOffToolsAction = DropOffToolsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZlRvb2xzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBRXRELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUF3QyxzQ0FBVTtJQUdqRDtRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVBPLHFCQUFlLEdBQVksS0FBSyxDQUFDO1FBSXhDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxREFBcUQ7UUFDM0csS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHVCQUF1QjtRQUN4RSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUN2RSxDQUFDO0lBRU0sa0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQzlCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzdCLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsb0VBQW9FO0lBQ2xGLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUM1QixxQ0FBcUM7UUFFckMsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQTFEQSxBQTBEQyxDQTFEdUMsdUJBQVUsR0EwRGpEO0FBMURZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCI7XG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiO1xuXG4vKlxuICogQERlc2NyaXB0aW9uOiBcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMTozOSBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTEwLTI4IDExOjM1OjI0XG4gKi9cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmVG9vbHNBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBkcm9wcGVkT2ZmVG9vbHM6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudDsgLy8gd2hlcmUgd2UgZHJvcCBvZmYgdGhlICB0b29sc1xuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTmV3VG9vbHMsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiB0b29scyBpZiB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgc29tZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgZmFsc2UpOyAvLyB3ZSBub3cgaGF2ZSBubyB0b29sc1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0VG9vbHMsIHRydWUpOyAvLyB3ZSBjb2xsZWN0ZWQgdG9vbHNcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmRyb3BwZWRPZmZUb29scyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5kcm9wcGVkT2ZmVG9vbHM7XG5cdH1cblxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xuXHRcdHJldHVybiB0cnVlOyAvLyB5ZXMgd2UgbmVlZCB0byBiZSBuZWFyIGEgc3VwcGx5IHBpbGUgc28gd2UgY2FuIGRyb3Agb2ZmIHRoZSB0b29sc1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuIHtcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgdG9vbHNcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXG5cdFx0Zm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG5cdFx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0Y2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG5cdFx0XHRcdGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUoYWdlbnQpO1xuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0Ly8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoY2xvc2VzdCA9PSBudWxsKVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0dGhpcy50YXJnZXQgPSBjbG9zZXN0O1xuXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xuXHRcdHRoaXMudGFyZ2V0Lm51bVRvb2xzICs9IDI7XG5cdFx0dGhpcy5kcm9wcGVkT2ZmVG9vbHMgPSB0cnVlO1xuXHRcdC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19