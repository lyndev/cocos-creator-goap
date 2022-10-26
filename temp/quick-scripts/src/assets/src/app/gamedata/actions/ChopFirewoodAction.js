"use strict";
cc._RF.push(module, '20d3a8yS95Bma5uf0blkWk7', 'ChopFirewoodAction');
// src/app/gamedata/actions/ChopFirewoodAction.ts

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
exports.ChopFirewoodAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:09
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-04 17:35:57
 */
var ChopFirewoodAction = /** @class */ (function (_super) {
    __extends(ChopFirewoodAction, _super);
    function ChopFirewoodAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasFirewood, false); // if we have firewood we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasFirewood, true);
        return _this;
    }
    ChopFirewoodAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopFirewoodAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopFirewoodAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopFirewoodAction.prototype.checkProceduralPrecondition = function (agent) {
        var labourer = agent;
        // find the nearest chopping block that we can chop our wood at
        var blocks = Environment_1.Environment.choppingBlockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, blocks_1 = blocks; _i < blocks_1.length; _i++) {
            var block = blocks_1[_i];
            if (closest == null) {
                closest = block;
                closestDist = block.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = block.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = block;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopFirewoodAction.prototype.perform = function (iGoap) {
        var labourer = iGoap;
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numFirewood += 5;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            if (tool.destroyed()) {
                // TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopFirewoodAction;
}(GoapAction_1.GoapAction));
exports.ChopFirewoodAction = ChopFirewoodAction;

cc._RF.pop();