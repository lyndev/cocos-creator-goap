"use strict";
cc._RF.push(module, '15b08XdD/lNKZEZIyLqqjK4', 'GotoToiletAction');
// goap/GotoToiletAction.ts

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
exports.GotoToiletAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var Environment_1 = require("../src/app/gamedata/Environment");
var TimeUtil_1 = require("../src/utils/TimeUtil");
var ActionDataStatus_1 = require("./ActionDataStatus");
var GotoToiletAction = /** @class */ (function (_super) {
    __extends(GotoToiletAction, _super);
    function GotoToiletAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.addPrecondition(ActionDataStatus_1.ActionDataStatus.isTolietOk, false); // we need a tool to do this
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isTolietOk, true);
        return _this;
    }
    GotoToiletAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    GotoToiletAction.prototype.isDone = function () {
        return this.bDone;
    };
    GotoToiletAction.prototype.requiresInRange = function () {
        return true;
    };
    GotoToiletAction.prototype.checkProceduralPrecondition = function (agent) {
        this.target = Environment_1.Environment.toiletTarget;
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
    GotoToiletAction.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isTolietOk, true)
            this.bDone = true;
        }
        return true;
    };
    return GotoToiletAction;
}(GoapAction_1.GoapAction));
exports.GotoToiletAction = GotoToiletAction;

cc._RF.pop();