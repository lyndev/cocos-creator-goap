
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxhY3Rpb25zXFxEcm9wT2ZmT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFzQyxvQ0FBVTtJQUcvQztRQUFBLFlBQ0MsaUJBQU8sU0FJUDtRQVBPLG1CQUFhLEdBQUcsS0FBSyxDQUFDO1FBSTdCLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxtREFBbUQ7UUFDcEcsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHFCQUFxQjtRQUNqRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQW1COztJQUNuRSxDQUFDO0lBRU0sZ0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQzVCLENBQUM7SUFFTSxpQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDTSwwQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsa0VBQWtFO0lBQ2hGLENBQUM7SUFDTSxzREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsdURBQXVEO1FBQ3ZELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztnQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ04sb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3ZCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDbkI7YUFDRDtTQUNEO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUNsQixPQUFPLEtBQUssQ0FBQztRQUVkLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBRXRCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQztJQUN4QixDQUFDO0lBRU0sa0NBQU8sR0FBZCxVQUFlLFFBQWtCO1FBQ2hDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1FBQ3BELElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDdEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDcEIscUNBQXFDO1FBRXJDLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHVCQUFDO0FBQUQsQ0ExREEsQUEwREMsQ0ExRHFDLHVCQUFVLEdBMEQvQztBQTFEWSw0Q0FBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIjtcclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xyXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIjtcclxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDoxMToyNiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hcllhbmdcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozNDo1MVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERyb3BPZmZPcmVBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIGRyb3BwZWRPZmZPcmUgPSBmYWxzZTtcclxuXHRwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50OyAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgb3JlXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0c3VwZXIoKTtcclxuXHRcdHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyBjYW4ndCBkcm9wIG9mZiBvcmUgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcclxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIGZhbHNlKTsgLy8gd2Ugbm93IGhhdmUgbm8gb3JlXHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdE9yZSwgdHJ1ZSk7IC8vIHdlIGNvbGxlY3RlZCBvcmVcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZXNldCgpIHtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGlzRG9uZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmRyb3BwZWRPZmZPcmU7XHJcblx0fVxyXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcblx0XHRyZXR1cm4gdHJ1ZTsgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgb3JlXHJcblx0fVxyXG5cdHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IFZHYW1lT2JqZWN0KTogYm9vbGVhbiB7XHJcblx0XHQvL1RPRE86IGZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGUgdGhhdCBoYXMgc3BhcmUgb3JlXHJcblx0XHRsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wcztcclxuXHRcdGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbDtcclxuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcclxuXHJcblx0XHRmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcclxuXHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcclxuXHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xyXG5cdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cclxuXHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcclxuXHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XHJcblx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxyXG5cdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcclxuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChjbG9zZXN0ID09IG51bGwpXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR0aGlzLnRhcmdldCA9IGNsb3Nlc3Q7XHJcblxyXG5cdFx0cmV0dXJuIGNsb3Nlc3QgIT0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBwZXJmb3JtKGxhYm91cmVyOiBMYWJvdXJlcik6IGJvb2xlYW4ge1xyXG5cdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xyXG5cdFx0dGhpcy50YXJnZXQubnVtT3JlICs9IGJhY2twYWNrLm51bU9yZTtcclxuXHRcdHRoaXMuZHJvcHBlZE9mZk9yZSA9IHRydWU7XHJcblx0XHRiYWNrcGFjay5udW1PcmUgPSAwO1xyXG5cdFx0Ly9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxyXG5cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==