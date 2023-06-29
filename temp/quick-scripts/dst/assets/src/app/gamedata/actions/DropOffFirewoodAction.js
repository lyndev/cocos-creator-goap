
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffFirewoodAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a407ri6IhPLIFFb7c1jdCa', 'DropOffFirewoodAction');
// src/app/gamedata/actions/DropOffFirewoodAction.ts

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
exports.DropOffFirewoodAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var DropOffFirewoodAction = /** @class */ (function (_super) {
    __extends(DropOffFirewoodAction, _super);
    function DropOffFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffFirewood = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, true); // can't drop off firewood if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, false); // we now have no firewood
        _this.addEffect(ActionStatus_1.ActionStatus.CollectFirewood, true); // we collected firewood
        return _this;
    }
    DropOffFirewoodAction.prototype.reset = function () {
        this.droppedOffFirewood = false;
    };
    DropOffFirewoodAction.prototype.isDone = function () {
        return this.droppedOffFirewood;
    };
    DropOffFirewoodAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a supply pile so we can drop off the firewood
    };
    DropOffFirewoodAction.prototype.checkProceduralPrecondition = function (go) {
        // TODO:find the nearest supply pile that has spare firewood
        var supplyPiles = Environment_1.Environment.supplyPileComps;
        var closest = null;
        var closestDist = 0;
        var vGameObject = go.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, supplyPiles_1 = supplyPiles; _i < supplyPiles_1.length; _i++) {
            var supply = supplyPiles_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = supply;
                closestDist = supply.distanceSquare(vGameObject);
            }
            else {
                // is this one closer than the last?
                var dist = supply.distanceSquare(vGameObject);
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
    DropOffFirewoodAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
        var backpack = labourer.backpack;
        this.target.numFirewood += backpack.numFirewood;
        backpack.numFirewood = 0;
        this.droppedOffFirewood = true;
        return true;
    };
    return DropOffFirewoodAction;
}(GoapAction_1.GoapAction));
exports.DropOffFirewoodAction = DropOffFirewoodAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkZpcmV3b29kQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBeUQ7QUFDekQsdURBQXFEO0FBQ3JELHNEQUFvRDtBQUNwRCw4Q0FBNEM7QUFDNUMsa0RBQWdEO0FBR2hEO0lBQTJDLHlDQUFVO0lBR2pEO1FBQUEsWUFDSSxpQkFBTyxTQUlWO1FBUE8sd0JBQWtCLEdBQVksS0FBSyxDQUFBO1FBSXZDLEtBQUksQ0FBQyxlQUFlLENBQUMsMkJBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUEsQ0FBQyx3REFBd0Q7UUFDN0csS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQSxDQUFDLDBCQUEwQjtRQUMxRSxLQUFJLENBQUMsU0FBUyxDQUFDLDJCQUFZLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsd0JBQXdCOztJQUMvRSxDQUFDO0lBRU0scUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUE7SUFDbkMsQ0FBQztJQUVNLHNDQUFNLEdBQWI7UUFDSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQTtJQUNsQyxDQUFDO0lBRU0sK0NBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQSxDQUFDLHVFQUF1RTtJQUN2RixDQUFDO0lBQ00sMkRBQTJCLEdBQWxDLFVBQW1DLEVBQVc7UUFDMUMsNERBQTREO1FBQzVELElBQUksV0FBVyxHQUEwQix5QkFBVyxDQUFDLGVBQWUsQ0FBQTtRQUNwRSxJQUFJLE9BQU8sR0FBd0IsSUFBSSxDQUFBO1FBQ3ZDLElBQUksV0FBVyxHQUFXLENBQUMsQ0FBQTtRQUMzQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLHlCQUFXLENBQUMsQ0FBQTtRQUM5QyxLQUFtQixVQUFXLEVBQVgsMkJBQVcsRUFBWCx5QkFBVyxFQUFYLElBQVcsRUFBRTtZQUEzQixJQUFJLE1BQU0sb0JBQUE7WUFDWCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7Z0JBQ2pCLGtDQUFrQztnQkFDbEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtnQkFDaEIsV0FBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLENBQUE7YUFDbkQ7aUJBQU07Z0JBQ0gsb0NBQW9DO2dCQUNwQyxJQUFJLElBQUksR0FBVyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFBO2dCQUNyRCxJQUFJLElBQUksR0FBRyxXQUFXLEVBQUU7b0JBQ3BCLGdDQUFnQztvQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQTtvQkFDaEIsV0FBVyxHQUFHLElBQUksQ0FBQTtpQkFDckI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxPQUFPLElBQUksSUFBSTtZQUFFLE9BQU8sS0FBSyxDQUFBO1FBRWpDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO1FBRXJCLE9BQU8sT0FBTyxJQUFJLElBQUksQ0FBQTtJQUMxQixDQUFDO0lBRU0sdUNBQU8sR0FBZCxVQUFlLElBQWE7UUFDeEIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxtQkFBUSxDQUFDLENBQUE7UUFDMUMsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxRQUFRLENBQUMsV0FBVyxDQUFBO1FBQ3JELFFBQVEsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7UUFDOUIsT0FBTyxJQUFJLENBQUE7SUFDZixDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQXpEQSxBQXlEQyxDQXpEMEMsdUJBQVUsR0F5RHBEO0FBekRZLHNEQUFxQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0FjdGlvblN0YXR1c1wiXG5pbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL2FpL2dvYXAvR29hcEFjdGlvblwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL0Vudmlyb25tZW50XCJcbmltcG9ydCB7IExhYm91cmVyIH0gZnJvbSBcIi4uL2xhYm91cmVycy9MYWJvdXJlclwiXG5pbXBvcnQgeyBTdXBwbHlQaWxlQ29tcG9uZW50IH0gZnJvbSBcIi4uL1N1cHBseVBpbGVDb21wb25lbnRcIlxuXG5leHBvcnQgY2xhc3MgRHJvcE9mZkZpcmV3b29kQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBkcm9wcGVkT2ZmRmlyZXdvb2Q6IGJvb2xlYW4gPSBmYWxzZVxuICAgIHB1YmxpYyB0YXJnZXQ6IFN1cHBseVBpbGVDb21wb25lbnQgLy8gd2hlcmUgd2UgZHJvcCBvZmYgdGhlIG9yZVxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKVxuICAgICAgICB0aGlzLmFkZFByZWNvbmRpdGlvbihBY3Rpb25TdGF0dXMuSGFzRmlyZXdvb2QsIHRydWUpIC8vIGNhbid0IGRyb3Agb2ZmIGZpcmV3b29kIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNGaXJld29vZCwgZmFsc2UpIC8vIHdlIG5vdyBoYXZlIG5vIGZpcmV3b29kXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5Db2xsZWN0RmlyZXdvb2QsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBmaXJld29vZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kcm9wcGVkT2ZmRmlyZXdvb2QgPSBmYWxzZVxuICAgIH1cblxuICAgIHB1YmxpYyBpc0RvbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRyb3BwZWRPZmZGaXJld29vZFxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlIC8vIHllcyB3ZSBuZWVkIHRvIGJlIG5lYXIgYSBzdXBwbHkgcGlsZSBzbyB3ZSBjYW4gZHJvcCBvZmYgdGhlIGZpcmV3b29kXG4gICAgfVxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgLy8gVE9ETzpmaW5kIHRoZSBuZWFyZXN0IHN1cHBseSBwaWxlIHRoYXQgaGFzIHNwYXJlIGZpcmV3b29kXG4gICAgICAgIGxldCBzdXBwbHlQaWxlczogU3VwcGx5UGlsZUNvbXBvbmVudFtdID0gRW52aXJvbm1lbnQuc3VwcGx5UGlsZUNvbXBzXG4gICAgICAgIGxldCBjbG9zZXN0OiBTdXBwbHlQaWxlQ29tcG9uZW50ID0gbnVsbFxuICAgICAgICBsZXQgY2xvc2VzdERpc3Q6IG51bWJlciA9IDBcbiAgICAgICAgbGV0IHZHYW1lT2JqZWN0ID0gZ28uZ2V0Q29tcG9uZW50KFZHYW1lT2JqZWN0KVxuICAgICAgICBmb3IgKGxldCBzdXBwbHkgb2Ygc3VwcGx5UGlsZXMpIHtcbiAgICAgICAgICAgIGlmIChjbG9zZXN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBvbmUsIHNvIGNob29zZSBpdCBmb3Igbm93XG4gICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZHYW1lT2JqZWN0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBpcyB0aGlzIG9uZSBjbG9zZXIgdGhhbiB0aGUgbGFzdD9cbiAgICAgICAgICAgICAgICBsZXQgZGlzdDogbnVtYmVyID0gc3VwcGx5LmRpc3RhbmNlU3F1YXJlKHZHYW1lT2JqZWN0KVxuICAgICAgICAgICAgICAgIGlmIChkaXN0IDwgY2xvc2VzdERpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2UgZm91bmQgYSBjbG9zZXIgb25lLCB1c2UgaXRcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VzdCA9IHN1cHBseVxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0RGlzdCA9IGRpc3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkgcmV0dXJuIGZhbHNlXG5cbiAgICAgICAgdGhpcy50YXJnZXQgPSBjbG9zZXN0XG5cbiAgICAgICAgcmV0dXJuIGNsb3Nlc3QgIT0gbnVsbFxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGxhYm91cmVyID0gbm9kZS5nZXRDb21wb25lbnQoTGFib3VyZXIpXG4gICAgICAgIGxldCBiYWNrcGFjayA9IGxhYm91cmVyLmJhY2twYWNrXG4gICAgICAgIHRoaXMudGFyZ2V0Lm51bUZpcmV3b29kICs9IGJhY2twYWNrLm51bUZpcmV3b29kXG5cdFx0YmFja3BhY2subnVtRmlyZXdvb2QgPSAwXG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZkZpcmV3b29kID0gdHJ1ZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbn1cbiJdfQ==