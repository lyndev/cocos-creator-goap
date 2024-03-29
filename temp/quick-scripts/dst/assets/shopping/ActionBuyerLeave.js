
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/shopping/ActionBuyerLeave.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zaG9wcGluZy9BY3Rpb25CdXllckxlYXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDREQUEwRDtBQUMxRCw2Q0FBdUM7QUFHdkM7SUFBOEMsb0NBQVU7SUFHcEQ7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFQUyxXQUFLLEdBQVksS0FBSyxDQUFBO1FBSTVCLEtBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25DLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBOztJQUNsQyxDQUFDO0lBRUQsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxzREFBMkIsR0FBM0IsVUFBNEIsRUFBVztRQUNuQyxJQUFJLHFCQUFXLENBQUMsVUFBVSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcscUJBQVcsQ0FBQyxVQUFVLENBQUE7WUFDcEMsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUNELE9BQU8sS0FBSyxDQUFBO0lBQ2hCLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsSUFBYTtRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUNkLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVELDBDQUFlLEdBQWY7UUFDSSxPQUFPLElBQUksQ0FBQTtJQUNmLENBQUM7SUFDTCx1QkFBQztBQUFELENBcENBLEFBb0NDLENBcEM2Qyx1QkFBVSxHQW9DdkQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCBDb250ZXh0U2hvcCBmcm9tIFwiLi9Db250ZXh0U2hvcFwiXG5pbXBvcnQgTGVhdmVQb2ludCBmcm9tIFwiLi9MZWF2ZVBvaW50XCJcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uQnV5ZXJMZWF2ZSBleHRlbmRzIEdvYXBBY3Rpb24ge1xuICAgIHByb3RlY3RlZCBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHVibGljIHRhcmdldDogTGVhdmVQb2ludFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG4gICAgICAgIHRoaXMuYWRkUHJlY29uZGl0aW9uKFwicGF5ZWRcIiwgdHJ1ZSlcbiAgICAgICAgdGhpcy5hZGRQcmVjb25kaXRpb24oXCJsZWF2ZWRcIiwgZmFsc2UpXG4gICAgICAgIHRoaXMuYWRkRWZmZWN0KFwibGVhdmVkXCIsIHRydWUpXG4gICAgfVxuXG4gICAgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgIH1cblxuICAgIGlzRG9uZSgpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYkRvbmVcbiAgICB9XG5cbiAgICBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oZ286IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKENvbnRleHRTaG9wLmxlYXZlUG9pbnQpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gQ29udGV4dFNob3AubGVhdmVQb2ludFxuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgdGhpcy5iRG9uZSA9IHRydWVcbiAgICAgICAgY29uc29sZS5sb2coXCLnprvlvIBcIilcbiAgICAgICAgbm9kZS5kZXN0cm95KClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19