"use strict";
cc._RF.push(module, 'b311214WgZAj5PBr8Y1dgV3', 'ActionBuyShopItem');
// goap/actions/ActionBuyShopItem.ts

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
exports.ActionBuyShopItem = void 0;
var GoapAction_1 = require("../../src/app/ai/goap/GoapAction");
var Environment_1 = require("../../src/app/gamedata/Environment");
var TimeUtil_1 = require("../../src/utils/TimeUtil");
var ActionBuyShopItem = /** @class */ (function (_super) {
    __extends(ActionBuyShopItem, _super);
    function ActionBuyShopItem() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.startTime = 0;
        _this.workDuration = 2; // seconds
        _this.cost = 1;
        return _this;
    }
    ActionBuyShopItem.prototype.reset = function () {
        this.bDone = false;
        this.startTime = 0;
    };
    ActionBuyShopItem.prototype.isDone = function () {
        return this.bDone;
    };
    ActionBuyShopItem.prototype.requiresInRange = function () {
        return true;
    };
    ActionBuyShopItem.prototype.checkProceduralPrecondition = function (agent) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionBuyShopItem.prototype.perform = function (agent) {
        if (this.startTime == 0)
            this.startTime = TimeUtil_1.default.getTime();
        if (TimeUtil_1.default.getTime() - this.startTime > this.workDuration) {
            //entity.memory.set(ActionDataStatus.isCanOutfire, true)
            this.bDone = true;
        }
        return true;
    };
    return ActionBuyShopItem;
}(GoapAction_1.GoapAction));
exports.ActionBuyShopItem = ActionBuyShopItem;

cc._RF.pop();