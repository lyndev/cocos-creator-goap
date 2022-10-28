"use strict";
cc._RF.push(module, 'b5d14iVLfRFabOSdGozcxsv', 'GotoEquipmentAction');
// goap/GotoEquipmentAction.ts

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
exports.GotoEquipmentAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoEquipmentAction = /** @class */ (function (_super) {
    __extends(GotoEquipmentAction, _super);
    function GotoEquipmentAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isEquipOk, true);
        return _this;
    }
    GotoEquipmentAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoEquipmentAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoEquipmentAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoEquipmentAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.equipTarget;
        return this.target != null;
        // // TODO:find the nearest tree that we can chop
        // let trees: TreeComponent[] = Environment.treeComps;
        // let closest: TreeComponent = null;
        // let closestDist: number = 0;
        // for (let tree of trees) {
        // 	if (closest == null) {
        // 		// first one, so choose it for now
        // 		closest = tree;
        // 		closestDist = tree.distanceSquare(agent);
        // 	} else {
        // 		// is this one closer than the last?
        // 		let dist: number = tree.distanceSquare(agent);
        // 		if (dist < closestDist) {
        // 			// we found a closer one, use it
        // 			closest = tree;
        // 			closestDist = dist;
        // 		}
        // 	}
        // }
        // if (closest == null)
        // 	return false;
        // this.target = closest;
        // return closest != null;
    };
    GotoEquipmentAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isEquipOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoEquipmentAction;
}(GoapAction_1.GoapAction));
exports.GotoEquipmentAction = GotoEquipmentAction;

cc._RF.pop();