
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/actions/ActionPayMoney.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    ActionPayMoney.prototype.checkProceduralPrecondition = function (agent) {
        if (Environment_1.Environment.storeA.isHaveGoods()) {
            return true;
        }
    };
    ActionPayMoney.prototype.perform = function (agent) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcYWN0aW9uc1xcQWN0aW9uUGF5TW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE4RDtBQUk5RCxrRUFBaUU7QUFDakUscURBQWdEO0FBSWhEO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxvREFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDL0MsSUFBSSx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUNsQyxPQUFPLElBQUksQ0FBQTtTQUNkO0lBQ0wsQ0FBQztJQUVNLGdDQUFPLEdBQWQsVUFBZSxLQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLGtCQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFeEMsSUFBSSxrQkFBUSxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN6RCx3REFBd0Q7WUFDeEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7U0FDcEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQXRDQSxBQXNDQyxDQXRDbUMsdUJBQVUsR0FzQzdDO0FBdENZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvblwiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2FpL2dvYXAvSUdvYXBcIjtcclxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcclxuaW1wb3J0IFRpbWVVdGlsIGZyb20gXCIuLi8uLi9zcmMvdXRpbHMvVGltZVV0aWxcIjtcclxuaW1wb3J0IHsgQWN0aW9uRGF0YVN0YXR1cyB9IGZyb20gXCIuLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4uL0VudGl0eVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjdGlvblBheU1vbmV5IGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcbiAgICBwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2VcclxuICAgIHByaXZhdGUgc3RhcnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDI7IC8vIHNlY29uZHNcclxuICAgIHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5iRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaXNEb25lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJEb25lO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKEVudmlyb25tZW50LnN0b3JlQS5pc0hhdmVHb29kcygpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5zdGFydFRpbWUgPT0gMClcclxuICAgICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBUaW1lVXRpbC5nZXRUaW1lKCk7XHJcblxyXG4gICAgICAgIGlmIChUaW1lVXRpbC5nZXRUaW1lKCkgLSB0aGlzLnN0YXJ0VGltZSA+IHRoaXMud29ya0R1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXHJcbiAgICAgICAgICAgIHRoaXMuYkRvbmUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59Il19