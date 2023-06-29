"use strict";
cc._RF.push(module, 'c846bXR6A1J9bXFfPx/y+K0', 'ActionPayMoney');
// goap/actions/ActionPayMoney.ts

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
exports.ActionPayMoney = void 0;
var GoapAction_1 = require("../../src/app/ai/goap/GoapAction");
var Environment_1 = require("../../src/app/gamedata/Environment");
var TimeUtil_1 = require("../../src/utils/TimeUtil");
var ActionPayMoney = /** @class */ (function (_super) {
    __extends(ActionPayMoney, _super);
    function ActionPayMoney() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        return _this;
    }
    ActionPayMoney.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ActionPayMoney.prototype.isDone = function () {
        return this.bDone;
    };
    ActionPayMoney.prototype.requiresInRange = function () {
        return true;
    };
    ActionPayMoney.prototype.checkProceduralPrecondition = function (node) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionPayMoney.prototype.perform = function (node) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return ActionPayMoney;
}(GoapAction_1.GoapAction));
exports.ActionPayMoney = ActionPayMoney;

cc._RF.pop();