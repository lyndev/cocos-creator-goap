"use strict";
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