
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/PickUpLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bb45aiSJ6xB45/z/NGUU+uT', 'PickUpLogsAction');
// src/app/gamedata/actions/PickUpLogsAction.ts

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
exports.PickUpLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:14:10
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:49
 */
var PickUpLogsAction = /** @class */ (function (_super) {
    __extends(PickUpLogsAction, _super);
    function PickUpLogsAction() {
        var _this = _super.call(this) || this;
        _this.hasLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // don't get a logs if we already have one
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true); // we now have a logs
        return _this;
    }
    PickUpLogsAction.prototype.reset = function () {
        this.hasLogs = false;
    };
    PickUpLogsAction.prototype.isDone = function () {
        return this.hasLogs;
    };
    PickUpLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    PickUpLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest supply pile that has spare logs
        var supplyPiles = [];
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numLogs > 0) {
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
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    PickUpLogsAction.prototype.perform = function (labourer) {
        if (this.target.numLogs > 0) {
            this.target.numLogs -= 1;
            this.hasLogs = true;
            //TODO play effect, change actor icon
            var backpack = labourer.backpack;
            backpack.numLogs = 1;
            return true;
        }
        else {
            // we got there but there was no logs available! Someone got there first. Cannot perform action
            return false;
        }
    };
    return PickUpLogsAction;
}(GoapAction_1.GoapAction));
exports.PickUpLogsAction = PickUpLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUt0RDs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFJaEMsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLDBDQUEwQztRQUM3RixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMscUJBQXFCOztJQUNsRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVNLHNEQUEyQixHQUFsQyxVQUFtQyxLQUFrQjtRQUNwRCx3REFBd0Q7UUFDeEQsSUFBSSxXQUFXLEdBQTBCLEVBQUUsQ0FBQztRQUM1QyxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGtDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIscUNBQXFDO1lBQ3JDLElBQUksUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7WUFDakMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFckIsT0FBTyxJQUFJLENBQUM7U0FDWjthQUFNO1lBQ04sK0ZBQStGO1lBQy9GLE9BQU8sS0FBSyxDQUFDO1NBQ2I7SUFDRixDQUFDO0lBQ0YsdUJBQUM7QUFBRCxDQWxFQSxBQWtFQyxDQWxFcUMsdUJBQVUsR0FrRS9DO0FBbEVZLDRDQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiO1xuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XG5cbi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjE0OjEwIFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTAtMjggMTE6MzY6NDlcbiAqL1xuZXhwb3J0IGNsYXNzIFBpY2tVcExvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7ICAvLyB3aGVyZSB3ZSBnZXQgdGhlIGxvZ3MgZnJvbVxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBsb2dzIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdHJ1ZSk7IC8vIHdlIG5vdyBoYXZlIGEgbG9nc1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNMb2dzO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XG5cdFx0Ly9UT0RPOiBmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGxvZ3Ncblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IFtdO1xuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcblx0XHRsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDA7XG5cblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50YXJnZXQubnVtTG9ncyA+IDApIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bUxvZ3MgLT0gMTtcblx0XHRcdHRoaXMuaGFzTG9ncyA9IHRydWU7XG5cdFx0XHQvL1RPRE8gcGxheSBlZmZlY3QsIGNoYW5nZSBhY3RvciBpY29uXG5cdFx0XHRsZXQgYmFja3BhY2sgPSBsYWJvdXJlci5iYWNrcGFjaztcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gbG9ncyBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=