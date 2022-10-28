"use strict";
cc._RF.push(module, 'be89b8BYFpO8pTv0h7jcubV', 'ExigenceFireAction');
// goap/ExigenceFireAction.ts

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
exports.ExigenceFireAction = void 0;
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ActionDataStatus_1 = require("./ActionDataStatus");
var ExigenceFireAction = /** @class */ (function (_super) {
    __extends(ExigenceFireAction, _super);
    function ExigenceFireAction() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 1; // seconds
        _this.cost = 0;
        _this.addEffect(ActionDataStatus_1.ActionDataStatus.isCanOutfire, true);
        return _this;
    }
    ExigenceFireAction.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ExigenceFireAction.prototype.isDone = function () {
        return this.bDone;
    };
    ExigenceFireAction.prototype.requiresInRange = function () {
        return false;
    };
    ExigenceFireAction.prototype.checkProceduralPrecondition = function (agent) {
        return true;
    };
    ExigenceFireAction.prototype.perform = function (agent) {
        this.bDone = true;
        return true;
    };
    return ExigenceFireAction;
}(GoapAction_1.GoapAction));
exports.ExigenceFireAction = ExigenceFireAction;

cc._RF.pop();