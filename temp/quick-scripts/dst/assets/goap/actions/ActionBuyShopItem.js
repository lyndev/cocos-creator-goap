
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
    ActionBuyShopItem.prototype.checkProceduralPrecondition = function (node) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionBuyShopItem.prototype.perform = function (node) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2FjdGlvbnMvQWN0aW9uQnV5U2hvcEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE2RDtBQUk3RCxrRUFBZ0U7QUFDaEUscURBQStDO0FBSS9DO0lBQXVDLHFDQUFVO0lBSzdDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUNwQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0saUNBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSxrQ0FBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSwyQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLHVEQUEyQixHQUFsQyxVQUFtQyxJQUFhO1FBQzVDLElBQUkseUJBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUE7U0FDZDtJQUNMLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUU1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ3NDLHVCQUFVLEdBcUNoRDtBQXJDWSw4Q0FBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFnZW50XCJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYWkvZ29hcC9JR29hcFwiXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIlxuaW1wb3J0IHsgRW52aXJvbm1lbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9nYW1lZGF0YS9FbnZpcm9ubWVudFwiXG5pbXBvcnQgVGltZVV0aWwgZnJvbSBcIi4uLy4uL3NyYy91dGlscy9UaW1lVXRpbFwiXG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4uL0FjdGlvbkRhdGFTdGF0dXNcIlxuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vRW50aXR5XCJcblxuZXhwb3J0IGNsYXNzIEFjdGlvbkJ1eVNob3BJdGVtIGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvc3Q6IG51bWJlciA9IDFcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19