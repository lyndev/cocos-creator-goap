"use strict";
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