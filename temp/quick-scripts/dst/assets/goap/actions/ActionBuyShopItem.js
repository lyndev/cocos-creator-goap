
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/actions/ActionBuyShopItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcYWN0aW9uc1xcQWN0aW9uQnV5U2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUk5RCxrRUFBaUU7QUFDakUscURBQWdEO0FBSWhEO0lBQXVDLHFDQUFVO0lBSzdDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSx1REFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDL0MsSUFBSSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQUVNLG1DQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQXRDQSxBQXNDQyxDQXRDc0MsdUJBQVUsR0FzQ2hEO0FBdENZLDhDQUFpQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xyXG5pbXBvcnQgRW50aXR5IGZyb20gXCIuLi9FbnRpdHlcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25CdXlTaG9wSXRlbSBleHRlbmRzIEdvYXBBY3Rpb24ge1xyXG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICBwcml2YXRlIHN0YXJ0VGltZTogbnVtYmVyID0gMDtcclxuICAgIHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAyOyAvLyBzZWNvbmRzXHJcbiAgICBwdWJsaWMgY29zdDogbnVtYmVyID0gMVxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRG9uZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcGVyZm9ybShhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICBpZiAoVGltZVV0aWwuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUgPiB0aGlzLndvcmtEdXJhdGlvbikge1xyXG4gICAgICAgICAgICAvL2VudGl0eS5tZW1vcnkuc2V0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKVxyXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufSJdfQ==