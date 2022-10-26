"use strict";
cc._RF.push(module, 'e3892QFKmhKUZZMUoET4jUr', 'MineOreAction');
// src/app/gamedata/actions/MineOreAction.ts

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
exports.MineOreAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var Environment_1 = require("../Environment");
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:13:23
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-10-28 11:36:36
 */
var MineOreAction = /** @class */ (function (_super) {
    __extends(MineOreAction, _super);
    function MineOreAction() {
        var _this = _super.call(this) || this;
        _this.mined = false;
        _this.startTime = 0;
        _this.miningDuration = 2; // seconds;
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasOre, false); // if we have ore we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasOre, true);
        return _this;
    }
    MineOreAction.prototype.reset = function () {
        this.mined = false;
        this.startTime = 0;
    };
    MineOreAction.prototype.isDone = function () {
        return this.mined;
    };
    MineOreAction.prototype.requiresInRange = function () {
        return true; // yes we need to be near a rock
    };
    MineOreAction.prototype.checkProceduralPrecondition = function (agent) {
        //TODO: find the nearest rock that we can mine
        var rocks = Environment_1.Environment.rockComps;
        var closest = null;
        var closestDist = 0;
        for (var _i = 0, rocks_1 = rocks; _i < rocks_1.length; _i++) {
            var rock = rocks_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = rock;
                closestDist = rock.distanceSquare(agent);
            }
            else {
                // is this one closer than the last?
                var dist = rock.distanceSquare(agent);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = rock;
                    closestDist = dist;
                }
            }
        }
        this.target = closest;
        return closest != null;
    };
    MineOreAction.prototype.perform = function (labourer) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.miningDuration) {
            // finished mining
            var backpack = labourer.backpack;
            ;
            backpack.numOre += 2;
            this.mined = true;
            var tool = labourer.tool;
            tool.use(0.5);
            if (tool.destroyed()) {
                //TODO:删除 Destroy(backpack.tool);
                labourer.destroyTool();
            }
        }
        return true;
    };
    return MineOreAction;
}(GoapAction_1.GoapAction));
exports.MineOreAction = MineOreAction;

cc._RF.pop();