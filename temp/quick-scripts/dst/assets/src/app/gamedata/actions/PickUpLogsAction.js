
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
var VGameObject_1 = require("../../base/VGameObject");
var Labourer_1 = require("../labourers/Labourer");
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
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numLogs > 0) {
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
    PickUpLogsAction.prototype.perform = function (node) {
        if (this.target.numLogs > 0) {
            this.target.numLogs -= 1;
            this.hasLogs = true;
            var labourer = node.getComponent(Labourer_1.Labourer);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwTG9nc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQTBEO0FBQzFELHVEQUFzRDtBQUN0RCxzREFBcUQ7QUFDckQsa0RBQWlEO0FBR2pEO0lBQXNDLG9DQUFVO0lBRy9DO1FBQUEsWUFDQyxpQkFBTyxTQUdQO1FBTk8sYUFBTyxHQUFZLEtBQUssQ0FBQztRQUloQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsMENBQTBDO1FBQzdGLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUI7O0lBQ2xFLENBQUM7SUFFTSxnQ0FBSyxHQUFaO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVNLGlDQUFNLEdBQWI7UUFDQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDckIsQ0FBQztJQUVNLDBDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sc0RBQTJCLEdBQWxDLFVBQW1DLEtBQWE7UUFDL0Msd0RBQXdEO1FBQ3hELElBQUksV0FBVyxHQUEwQixFQUFFLENBQUM7UUFDNUMsSUFBSSxPQUFPLEdBQXdCLElBQUksQ0FBQztRQUN4QyxJQUFJLFdBQVcsR0FBVyxDQUFDLENBQUM7UUFDNUIsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyx5QkFBVyxDQUFDLENBQUE7UUFDeEMsS0FBbUIsVUFBVyxFQUFYLDJCQUFXLEVBQVgseUJBQVcsRUFBWCxJQUFXLEVBQUU7WUFBM0IsSUFBSSxNQUFNLG9CQUFBO1lBQ2QsSUFBSSxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxPQUFPLElBQUksSUFBSSxFQUFFO29CQUNwQixrQ0FBa0M7b0JBQ2xDLE9BQU8sR0FBRyxNQUFNLENBQUM7b0JBQ2pCLFdBQVcsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUN4QztxQkFBTTtvQkFDTixvQ0FBb0M7b0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQzdDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTt3QkFDdkIsZ0NBQWdDO3dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDO3dCQUNqQixXQUFXLEdBQUcsSUFBSSxDQUFDO3FCQUNuQjtpQkFDRDthQUNEO1NBQ0Q7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQ2xCLE9BQU8sS0FBSyxDQUFDO1FBRWQsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFFdEIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxrQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUMzQixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQztZQUNqQyxRQUFRLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztZQUVyQixPQUFPLElBQUksQ0FBQztTQUNaO2FBQU07WUFDTiwrRkFBK0Y7WUFDL0YsT0FBTyxLQUFLLENBQUM7U0FDYjtJQUNGLENBQUM7SUFDRix1QkFBQztBQUFELENBbEVBLEFBa0VDLENBbEVxQyx1QkFBVSxHQWtFL0M7QUFsRVksNENBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCI7XG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiO1xuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcblxuZXhwb3J0IGNsYXNzIFBpY2tVcExvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcblx0cHJpdmF0ZSBoYXNMb2dzOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7ICAvLyB3aGVyZSB3ZSBnZXQgdGhlIGxvZ3MgZnJvbVxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzTG9ncywgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBsb2dzIGlmIHdlIGFscmVhZHkgaGF2ZSBvbmVcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuSGFzTG9ncywgdHJ1ZSk7IC8vIHdlIG5vdyBoYXZlIGEgbG9nc1xuXHR9XG5cblx0cHVibGljIHJlc2V0KCkge1xuXHRcdHRoaXMuaGFzTG9ncyA9IGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5oYXNMb2dzO1xuXHR9XG5cblx0cHVibGljIHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6Y2MuTm9kZSk6IGJvb2xlYW4ge1xuXHRcdC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBsb2dzXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBbXTtcblx0XHRsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGw7XG5cdFx0bGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwO1xuXHRcdGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcblx0XHRcdGlmIChzdXBwbHkubnVtTG9ncyA+IDApIHtcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZnKTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG5cdFx0aWYgKHRoaXMudGFyZ2V0Lm51bUxvZ3MgPiAwKSB7XG5cdFx0XHR0aGlzLnRhcmdldC5udW1Mb2dzIC09IDE7XG5cdFx0XHR0aGlzLmhhc0xvZ3MgPSB0cnVlO1xuXHRcdFx0bGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG5cdFx0XHRsZXQgYmFja3BhY2sgPSBsYWJvdXJlci5iYWNrcGFjaztcblx0XHRcdGJhY2twYWNrLm51bUxvZ3MgPSAxO1xuXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2UgZ290IHRoZXJlIGJ1dCB0aGVyZSB3YXMgbm8gbG9ncyBhdmFpbGFibGUhIFNvbWVvbmUgZ290IHRoZXJlIGZpcnN0LiBDYW5ub3QgcGVyZm9ybSBhY3Rpb25cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cbn0iXX0=