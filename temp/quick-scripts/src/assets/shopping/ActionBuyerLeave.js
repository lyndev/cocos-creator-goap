"use strict";
cc._RF.push(module, '197c4TPN7FPlZ3RZYCMUa1Y', 'ActionBuyerLeave');
// shopping/ActionBuyerLeave.ts

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
var GoapAction_1 = require("../src/app/ai/goap/GoapAction");
var ContextShop_1 = require("./ContextShop");
var ActionBuyerLeave = /** @class */ (function (_super) {
    __extends(ActionBuyerLeave, _super);
    function ActionBuyerLeave() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("payed", true);
        _this.addPrecondition("leaved", false);
        _this.addEffect("leaved", true);
        return _this;
    }
    ActionBuyerLeave.prototype.reset = function () {
        this.bDone = false;
    };
    ActionBuyerLeave.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyerLeave.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.leavePoint) {
            this.target = ContextShop_1.default.leavePoint;
            return true;
        }
        return false;
    };
    ActionBuyerLeave.prototype.perform = function (node) {
        this.bDone = true;
        console.log("离开");
        node.destroy();
        return true;
    };
    ActionBuyerLeave.prototype.requiresInRange = function () {
        return true;
    };
    return ActionBuyerLeave;
}(GoapAction_1.GoapAction));
exports.default = ActionBuyerLeave;

cc._RF.pop();