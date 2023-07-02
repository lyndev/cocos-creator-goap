"use strict";
cc._RF.push(module, 'e5750Vsf2BFpZuOqhMaaWXT', 'ActionGetBag');
// shopping/ActionGetBag.ts

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
var ActionGetBag = /** @class */ (function (_super) {
    __extends(ActionGetBag, _super);
    function ActionGetBag() {
        var _this = _super.call(this) || this;
        _this.bDone = false;
        _this.addPrecondition("hasBag", false);
        _this.addEffect("hasBag", true);
        return _this;
    }
    ActionGetBag.prototype.reset = function () {
        this.bDone = false;
    };
    ActionGetBag.prototype.isDone = function () {
        return this.bDone;
    };
    ActionGetBag.prototype.checkProceduralPrecondition = function (go) {
        if (ContextShop_1.default.bagPoint) {
            this.target = ContextShop_1.default.bagPoint;
            return true;
        }
        return false;
    };
    ActionGetBag.prototype.perform = function (node) {
        this.bDone = true;
        console.log("拿到购物篮");
        return true;
    };
    ActionGetBag.prototype.requiresInRange = function () {
        return true;
    };
    return ActionGetBag;
}(GoapAction_1.GoapAction));
exports.default = ActionGetBag;

cc._RF.pop();