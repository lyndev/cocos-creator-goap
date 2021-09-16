
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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:14:55
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:37:41
 */
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
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (supply.numOre >= 3) { // we need to take 3 ore
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
    PickUpOreAction.prototype.perform = function (labourer) {
        if (this.target.numOre >= 3) {
            this.target.numOre -= 3;
            this.hasOre = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvUGlja1VwT3JlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsdURBQXNEO0FBR3RELDhDQUE2QztBQUk3Qzs7Ozs7O0dBTUc7QUFDSDtJQUFxQyxtQ0FBVTtJQUc5QztRQUFBLFlBQ0MsaUJBQU8sU0FHUDtRQU5PLFlBQU0sR0FBWSxLQUFLLENBQUM7UUFJL0IsS0FBSSxDQUFDLGVBQWUsQ0FBQywyQkFBWSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLHlDQUF5QztRQUMzRixLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsb0JBQW9COztJQUNoRSxDQUFDO0lBRU0sK0JBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxnQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3BCLENBQUM7SUFFTSx5Q0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLENBQUMsaUVBQWlFO0lBQy9FLENBQUM7SUFFTSxxREFBMkIsR0FBbEMsVUFBbUMsS0FBa0I7UUFDcEQsa0RBQWtEO1FBQ2xELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQztRQUNyRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFDO1FBQ3hDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQztRQUU1QixLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDZCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFLEVBQUUsd0JBQXdCO2dCQUNqRCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGtDQUFrQztvQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDakIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzNDO3FCQUFNO29CQUNOLG9DQUFvQztvQkFDcEMsSUFBSSxJQUFJLEdBQVcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEQsSUFBSSxJQUFJLEdBQUcsV0FBVyxFQUFFO3dCQUN2QixnQ0FBZ0M7d0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUM7d0JBQ2pCLFdBQVcsR0FBRyxJQUFJLENBQUM7cUJBQ25CO2lCQUNEO2FBQ0Q7U0FDRDtRQUNELElBQUksT0FBTyxJQUFJLElBQUk7WUFDbEIsT0FBTyxLQUFLLENBQUM7UUFFZCxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUV0QixPQUFPLE9BQU8sSUFBSSxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUVNLGlDQUFPLEdBQWQsVUFBZSxRQUFrQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIscUNBQXFDO1lBQ3JDLElBQUksUUFBUSxHQUFzQixRQUFRLENBQUMsUUFBUSxDQUFDO1lBQ3BELFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1lBRXJCLE9BQU8sSUFBSSxDQUFDO1NBQ1o7YUFBTTtZQUNOLDhGQUE4RjtZQUM5RixPQUFPLEtBQUssQ0FBQztTQUNiO0lBQ0YsQ0FBQztJQUdGLHNCQUFDO0FBQUQsQ0FwRUEsQUFvRUMsQ0FwRW9DLHVCQUFVLEdBb0U5QztBQXBFWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiO1xuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIjtcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEJhY2tQYWNrQ29tcG9uZW50IH0gZnJvbSBcIi4uL0JhY2tQYWNrQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiO1xuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCI7XG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MTQ6NTUgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMC0yOCAxMTozNzo0MVxuICovXG5leHBvcnQgY2xhc3MgUGlja1VwT3JlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG5cdHByaXZhdGUgaGFzT3JlOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQ7IC8vIHdoZXJlIHdlIGdldCB0aGUgb3JlIGZyb21cblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy5hZGRQcmVjb25kaXRpb24oQWN0aW9uU3RhdHVzLkhhc09yZSwgZmFsc2UpOyAvLyBkb24ndCBnZXQgYSBvcmUgaWYgd2UgYWxyZWFkeSBoYXZlIG9uZVxuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNPcmUsIHRydWUpOyAvLyB3ZSBub3cgaGF2ZSBhIG9yZVxuXHR9XG5cblx0cHVibGljIHJlc2V0KCk6IHZvaWQge1xuXHRcdHRoaXMuaGFzT3JlID0gZmFsc2U7XG5cdH1cblxuXHRwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiB0aGlzLmhhc09yZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWU7IC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gcGljayB1cCB0aGUgb3JlXG5cdH1cblxuXHRwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW4ge1xuXHRcdC8vZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSBvcmVzXG5cdFx0bGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHM7XG5cdFx0bGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsO1xuXHRcdGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMDtcblxuXHRcdGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuXHRcdFx0aWYgKHN1cHBseS5udW1PcmUgPj0gMykgeyAvLyB3ZSBuZWVkIHRvIHRha2UgMyBvcmVcblx0XHRcdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcblx0XHRcdFx0XHRjbG9zZXN0ID0gc3VwcGx5O1xuXHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cblx0XHRcdFx0XHRsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKGFnZW50KTtcblx0XHRcdFx0XHRpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG5cdFx0XHRcdFx0XHQvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuXHRcdFx0XHRcdFx0Y2xvc2VzdCA9IHN1cHBseTtcblx0XHRcdFx0XHRcdGNsb3Nlc3REaXN0ID0gZGlzdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGNsb3Nlc3QgPT0gbnVsbClcblx0XHRcdHJldHVybiBmYWxzZTtcblxuXHRcdHRoaXMudGFyZ2V0ID0gY2xvc2VzdDtcblxuXHRcdHJldHVybiBjbG9zZXN0ICE9IG51bGw7XG5cdH1cblxuXHRwdWJsaWMgcGVyZm9ybShsYWJvdXJlcjogTGFib3VyZXIpOiBib29sZWFuIHtcblx0XHRpZiAodGhpcy50YXJnZXQubnVtT3JlID49IDMpIHtcblx0XHRcdHRoaXMudGFyZ2V0Lm51bU9yZSAtPSAzO1xuXHRcdFx0dGhpcy5oYXNPcmUgPSB0cnVlO1xuXHRcdFx0Ly9UT0RPIHBsYXkgZWZmZWN0LCBjaGFuZ2UgYWN0b3IgaWNvblxuXHRcdFx0bGV0IGJhY2twYWNrOiBCYWNrUGFja0NvbXBvbmVudCA9IGxhYm91cmVyLmJhY2twYWNrO1xuXHRcdFx0YmFja3BhY2subnVtT3JlICs9IDM7XG5cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB3ZSBnb3QgdGhlcmUgYnV0IHRoZXJlIHdhcyBubyBvcmUgYXZhaWxhYmxlISBTb21lb25lIGdvdCB0aGVyZSBmaXJzdC4gQ2Fubm90IHBlcmZvcm0gYWN0aW9uXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cblxufSJdfQ==