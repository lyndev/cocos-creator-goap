
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/actions/DropOffLogsAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '10608rxZehFOLOeFOjwHzym', 'DropOffLogsAction');
// src/app/gamedata/actions/DropOffLogsAction.ts

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
exports.DropOffLogsAction = void 0;
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var DropOffLogsAction = /** @class */ (function (_super) {
    __extends(DropOffLogsAction, _super);
    function DropOffLogsAction() {
        var _this = _super.call(this) || this;
        _this.droppedOffLogs = false;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, true); // can't drop off logs if we don't already have some
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, false); // we now have no logs
        _this.addEffect(ActionStatus_1.ActionStatus.CollectLogs, true); // we collected logs
        return _this;
    }
    DropOffLogsAction.prototype.reset = function () {
        this.droppedOffLogs = false;
    };
    DropOffLogsAction.prototype.isDone = function () {
        return this.droppedOffLogs;
    };
    DropOffLogsAction.prototype.requiresInRange = function () {
        return true;
    };
    DropOffLogsAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest supply pile
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
    DropOffLogsAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
        var backpack = labourer.backpack;
        this.target.numLogs += backpack.numLogs;
        this.droppedOffLogs = true;
        backpack.numLogs = 0;
        return true;
    };
    return DropOffLogsAction;
}(GoapAction_1.GoapAction));
exports.DropOffLogsAction = DropOffLogsAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2FjdGlvbnMvRHJvcE9mZkxvZ3NBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUF5RDtBQUN6RCx1REFBcUQ7QUFDckQsc0RBQW9EO0FBRXBELDhDQUE0QztBQUM1QyxrREFBZ0Q7QUFJaEQ7SUFBdUMscUNBQVU7SUFHN0M7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQTyxvQkFBYyxHQUFZLEtBQUssQ0FBQTtRQUluQyxLQUFJLENBQUMsZUFBZSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBLENBQUMsb0RBQW9EO1FBQ3JHLEtBQUksQ0FBQyxTQUFTLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUEsQ0FBQyxzQkFBc0I7UUFDbEUsS0FBSSxDQUFDLFNBQVMsQ0FBQywyQkFBWSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQSxDQUFDLG9CQUFvQjs7SUFDdkUsQ0FBQztJQUVNLGlDQUFLLEdBQVo7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQTtJQUMvQixDQUFDO0lBRU0sa0NBQU0sR0FBYjtRQUNJLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQTtJQUM5QixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBYztRQUM3QyxvQ0FBb0M7UUFDcEMsSUFBSSxXQUFXLEdBQTBCLHlCQUFXLENBQUMsZUFBZSxDQUFBO1FBQ3BFLElBQUksT0FBTyxHQUF3QixJQUFJLENBQUE7UUFDdkMsSUFBSSxXQUFXLEdBQVcsQ0FBQyxDQUFBO1FBQzNCLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMseUJBQVcsQ0FBQyxDQUFBO1FBQ3hDLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQUksTUFBTSxvQkFBQTtZQUNYLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsa0NBQWtDO2dCQUNsQyxPQUFPLEdBQUcsTUFBTSxDQUFBO2dCQUNoQixXQUFXLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUMxQztpQkFBTTtnQkFDSCxvQ0FBb0M7Z0JBQ3BDLElBQUksSUFBSSxHQUFXLE1BQU0sQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQzVDLElBQUksSUFBSSxHQUFHLFdBQVcsRUFBRTtvQkFDcEIsZ0NBQWdDO29CQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFBO29CQUNoQixXQUFXLEdBQUcsSUFBSSxDQUFBO2lCQUNyQjthQUNKO1NBQ0o7UUFDRCxJQUFJLE9BQU8sSUFBSSxJQUFJO1lBQUUsT0FBTyxLQUFLLENBQUE7UUFFakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7UUFFckIsT0FBTyxPQUFPLElBQUksSUFBSSxDQUFBO0lBQzFCLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUM5QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFRLENBQUMsQ0FBQTtRQUNwQyxJQUFJLFFBQVEsR0FBc0IsUUFBUSxDQUFDLFFBQVEsQ0FBQTtRQUNuRCxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFBO1FBQzFCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFBO1FBRXBCLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0EzREEsQUEyREMsQ0EzRHNDLHVCQUFVLEdBMkRoRDtBQTNEWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi4vLi4vYWkvZ29hcC9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBCYWNrUGFja0NvbXBvbmVudCB9IGZyb20gXCIuLi9CYWNrUGFja0NvbXBvbmVudFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9FbnZpcm9ubWVudFwiXG5pbXBvcnQgeyBMYWJvdXJlciB9IGZyb20gXCIuLi9sYWJvdXJlcnMvTGFib3VyZXJcIlxuaW1wb3J0IHsgU3VwcGx5UGlsZUNvbXBvbmVudCB9IGZyb20gXCIuLi9TdXBwbHlQaWxlQ29tcG9uZW50XCJcblxuXG5leHBvcnQgY2xhc3MgRHJvcE9mZkxvZ3NBY3Rpb24gZXh0ZW5kcyBHb2FwQWN0aW9uIHtcbiAgICBwcml2YXRlIGRyb3BwZWRPZmZMb2dzOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgdGFyZ2V0OiBTdXBwbHlQaWxlQ29tcG9uZW50XG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKEFjdGlvblN0YXR1cy5IYXNMb2dzLCB0cnVlKSAvLyBjYW4ndCBkcm9wIG9mZiBsb2dzIGlmIHdlIGRvbid0IGFscmVhZHkgaGF2ZSBzb21lXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KEFjdGlvblN0YXR1cy5IYXNMb2dzLCBmYWxzZSkgLy8gd2Ugbm93IGhhdmUgbm8gbG9nc1xuICAgICAgICB0aGlzLmFkZEVmZmVjdChBY3Rpb25TdGF0dXMuQ29sbGVjdExvZ3MsIHRydWUpIC8vIHdlIGNvbGxlY3RlZCBsb2dzXG4gICAgfVxuXG4gICAgcHVibGljIHJlc2V0KCkge1xuICAgICAgICB0aGlzLmRyb3BwZWRPZmZMb2dzID0gZmFsc2VcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5kcm9wcGVkT2ZmTG9nc1xuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogY2MuTm9kZSk6IGJvb2xlYW4ge1xuICAgICAgICAvLyBUT0RPOmZpbmQgdGhlIG5lYXJlc3Qgc3VwcGx5IHBpbGVcbiAgICAgICAgbGV0IHN1cHBseVBpbGVzOiBTdXBwbHlQaWxlQ29tcG9uZW50W10gPSBFbnZpcm9ubWVudC5zdXBwbHlQaWxlQ29tcHNcbiAgICAgICAgbGV0IGNsb3Nlc3Q6IFN1cHBseVBpbGVDb21wb25lbnQgPSBudWxsXG4gICAgICAgIGxldCBjbG9zZXN0RGlzdDogbnVtYmVyID0gMFxuICAgICAgICBsZXQgdmcgPSBhZ2VudC5nZXRDb21wb25lbnQoVkdhbWVPYmplY3QpXG4gICAgICAgIGZvciAobGV0IHN1cHBseSBvZiBzdXBwbHlQaWxlcykge1xuICAgICAgICAgICAgaWYgKGNsb3Nlc3QgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGZpcnN0IG9uZSwgc28gY2hvb3NlIGl0IGZvciBub3dcbiAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgY2xvc2VzdERpc3QgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGlzIHRoaXMgb25lIGNsb3NlciB0aGFuIHRoZSBsYXN0P1xuICAgICAgICAgICAgICAgIGxldCBkaXN0OiBudW1iZXIgPSBzdXBwbHkuZGlzdGFuY2VTcXVhcmUodmcpXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBjbG9zZXN0RGlzdCkge1xuICAgICAgICAgICAgICAgICAgICAvLyB3ZSBmb3VuZCBhIGNsb3NlciBvbmUsIHVzZSBpdFxuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0ID0gc3VwcGx5XG4gICAgICAgICAgICAgICAgICAgIGNsb3Nlc3REaXN0ID0gZGlzdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xvc2VzdCA9PSBudWxsKSByZXR1cm4gZmFsc2VcblxuICAgICAgICB0aGlzLnRhcmdldCA9IGNsb3Nlc3RcblxuICAgICAgICByZXR1cm4gY2xvc2VzdCAhPSBudWxsXG4gICAgfVxuXG4gICAgcHVibGljIHBlcmZvcm0obm9kZTogY2MuTm9kZSk6IGJvb2xlYW4ge1xuXHRcdGxldCBsYWJvdXJlciA9IG5vZGUuZ2V0Q29tcG9uZW50KExhYm91cmVyKVxuICAgICAgICBsZXQgYmFja3BhY2s6IEJhY2tQYWNrQ29tcG9uZW50ID0gbGFib3VyZXIuYmFja3BhY2tcbiAgICAgICAgdGhpcy50YXJnZXQubnVtTG9ncyArPSBiYWNrcGFjay5udW1Mb2dzXG4gICAgICAgIHRoaXMuZHJvcHBlZE9mZkxvZ3MgPSB0cnVlXG4gICAgICAgIGJhY2twYWNrLm51bUxvZ3MgPSAwXG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG59XG4iXX0=