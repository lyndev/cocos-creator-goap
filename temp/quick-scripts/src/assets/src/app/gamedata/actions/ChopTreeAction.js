"use strict";
cc._RF.push(module, '4ebd9M+JMxGE4m2I9agiweP', 'ChopTreeAction');
// src/app/gamedata/actions/ChopTreeAction.ts

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
exports.ChopTreeAction = void 0;
var TimeUtil_1 = require("../../../utils/TimeUtil");
var ActionStatus_1 = require("../../ai/goap/ActionStatus");
var GoapAction_1 = require("../../ai/goap/GoapAction");
var VGameObject_1 = require("../../base/VGameObject");
var Environment_1 = require("../Environment");
var Labourer_1 = require("../labourers/Labourer");
var ChopTreeAction = /** @class */ (function (_super) {
    __extends(ChopTreeAction, _super);
    function ChopTreeAction() {
        var _this = _super.call(this) || this;
        _this.chopped = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasTool, true); // we need a tool to do this
        _this.addPrecondition(ActionStatus_1.ActionStatus.HasLogs, false); // if we have logs we don't want more
        _this.addEffect(ActionStatus_1.ActionStatus.HasLogs, true);
        return _this;
    }
    ChopTreeAction.prototype.reset = function () {
        this.chopped = false;
        this.startTime = 0;
    };
    ChopTreeAction.prototype.isDone = function () {
        return this.chopped;
    };
    ChopTreeAction.prototype.requiresInRange = function () {
        return true;
    };
    ChopTreeAction.prototype.checkProceduralPrecondition = function (agent) {
        // TODO:find the nearest tree that we can chop
        var trees = Environment_1.Environment.treeComps;
        var closest = null;
        var closestDist = 0;
        var vg = agent.getComponent(VGameObject_1.VGameObject);
        for (var _i = 0, trees_1 = trees; _i < trees_1.length; _i++) {
            var tree = trees_1[_i];
            if (closest == null) {
                // first one, so choose it for now
                closest = tree;
                closestDist = tree.distanceSquare(vg);
            }
            else {
                // is this one closer than the last?
                var dist = tree.distanceSquare(vg);
                if (dist < closestDist) {
                    // we found a closer one, use it
                    closest = tree;
                    closestDist = dist;
                }
            }
        }
        if (closest == null)
            return false;
        this.target = closest;
        return closest != null;
    };
    ChopTreeAction.prototype.perform = function (node) {
        var labourer = node.getComponent(Labourer_1.Labourer);
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            // finished chopping
            var backpack = labourer.backpack;
            backpack.numLogs += 1;
            this.chopped = true;
            var tool = labourer.tool;
            tool.use(0.34);
            console.log("使用工具", this.constructor.name);
            if (tool.destroyed()) {
                // TODO: Destroy(backpack.tool);
                // backpack.tool = null;
                labourer.destroyTool();
            }
        }
        return true;
    };
    return ChopTreeAction;
}(GoapAction_1.GoapAction));
exports.ChopTreeAction = ChopTreeAction;

cc._RF.pop();