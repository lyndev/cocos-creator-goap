
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
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
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
    DropOffToolsAction.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZlRvb2xzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUNwRCw4Q0FBNEM7QUFJNUM7SUFBd0Msc0NBQVU7SUFHOUM7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQTyxxQkFBZSxHQUFZLEtBQUssQ0FBQTtRQUlwQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMscURBQXFEO1FBQzFHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyx1QkFBdUI7UUFDdkUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLHFCQUFxQjs7SUFDekUsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtJQUNoQyxDQUFDO0lBRU0sbUNBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQTtJQUMvQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQSxDQUFDLG9FQUFvRTtJQUNwRixDQUFDO0lBRU0sd0RBQTJCLEdBQWxDLFVBQW1DLEtBQWM7UUFDN0MseURBQXlEO1FBQ3pELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQTtRQUNwRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFBO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtRQUMzQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQTtRQUN4QyxLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDWCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtnQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7YUFDMUM7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2dCQUM1QyxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQTtpQkFDckI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1FBQzNCLHFDQUFxQztRQUVyQyxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx5QkFBQztBQUFELENBekRBLEFBeURDLENBekR1Qyx1QkFBVSxHQXlEakQ7QUF6RFksZ0RBQWtCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvQWN0aW9uU3RhdHVzXCJcbmltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vRW52aXJvbm1lbnRcIlxuaW1wb3J0IHsgTGFib3VyZXIgfSBmcm9tIFwiLi4vbGFib3VyZXJzL0xhYm91cmVyXCJcbmltcG9ydCB7IFN1cHBseVBpbGVDb21wb25lbnQgfSBmcm9tIFwiLi4vU3VwcGx5UGlsZUNvbXBvbmVudFwiXG5cbmV4cG9ydCBjbGFzcyBEcm9wT2ZmVG9vbHNBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGRyb3BwZWRPZmZUb29sczogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogU3VwcGx5UGlsZUNvbXBvbmVudCAvLyB3aGVyZSB3ZSBkcm9wIG9mZiB0aGUgIHRvb2xzXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNOZXdUb29scywgdHJ1ZSkgLy8gY2FuJ3QgZHJvcCBvZmYgdG9vbHMgaWYgd2UgZG9uJ3QgYWxyZWFkeSBoYXZlIHNvbWVcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkhhc05ld1Rvb2xzLCBmYWxzZSkgLy8gd2Ugbm93IGhhdmUgbm8gdG9vbHNcbiAgICAgICAgdGhpcy5hZGRFZmZlY3QoQWN0aW9uU3RhdHVzLkNvbGxlY3RUb29scywgdHJ1ZSkgLy8gd2UgY29sbGVjdGVkIHRvb2xzXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRyb3BwZWRPZmZUb29scyA9IGZhbHNlXG4gICAgfVxuXG4gICAgcHVibGljIGlzRG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZHJvcHBlZE9mZlRvb2xzXG4gICAgfVxuXG4gICAgcHVibGljIHJlcXVpcmVzSW5SYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRydWUgLy8geWVzIHdlIG5lZWQgdG8gYmUgbmVhciBhIHN1cHBseSBwaWxlIHNvIHdlIGNhbiBkcm9wIG9mZiB0aGUgdG9vbHNcbiAgICB9XG5cbiAgICBwdWJsaWMgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIC8vVE9ETzogZmluZCB0aGUgbmVhcmVzdCBzdXBwbHkgcGlsZSB0aGF0IGhhcyBzcGFyZSB0b29sc1xuICAgICAgICBsZXQgc3VwcGx5UGlsZXM6IFN1cHBseVBpbGVDb21wb25lbnRbXSA9IEVudmlyb25tZW50LnN1cHBseVBpbGVDb21wc1xuICAgICAgICBsZXQgY2xvc2VzdDogU3VwcGx5UGlsZUNvbXBvbmVudCA9IG51bGxcbiAgICAgICAgbGV0IGNsb3Nlc3REaXN0OiBudW1iZXIgPSAwXG4gICAgICAgIGxldCB2ZyA9IGFnZW50LmdldENvbXBvbmVudChWR2FtZU9iamVjdClcbiAgICAgICAgZm9yIChsZXQgc3VwcGx5IG9mIHN1cHBseVBpbGVzKSB7XG4gICAgICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgLy8gZmlyc3Qgb25lLCBzbyBjaG9vc2UgaXQgZm9yIG5vd1xuICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gaXMgdGhpcyBvbmUgY2xvc2VyIHRoYW4gdGhlIGxhc3Q/XG4gICAgICAgICAgICAgICAgbGV0IGRpc3Q6IG51bWJlciA9IHN1cHBseS5kaXN0YW5jZVNxdWFyZSh2ZylcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IGNsb3Nlc3REaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGZvdW5kIGEgY2xvc2VyIG9uZSwgdXNlIGl0XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3QgPSBzdXBwbHlcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBkaXN0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHJldHVybiBmYWxzZVxuXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gY2xvc2VzdFxuXG4gICAgICAgIHJldHVybiBjbG9zZXN0ICE9IG51bGxcbiAgICB9XG5cbiAgICBwdWJsaWMgcGVyZm9ybShub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bVRvb2xzICs9IDJcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmVG9vbHMgPSB0cnVlXG4gICAgICAgIC8vVE9ETyBwbGF5IGVmZmVjdCwgY2hhbmdlIGFjdG9yIGljb25cblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==