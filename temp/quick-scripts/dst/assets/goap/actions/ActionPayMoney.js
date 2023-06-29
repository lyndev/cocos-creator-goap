
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL2FjdGlvbnMvQWN0aW9uUGF5TW9uZXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtEQUE2RDtBQUc3RCxrRUFBZ0U7QUFDaEUscURBQStDO0FBRS9DO0lBQW9DLGtDQUFVO0lBSzFDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBTk8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFBO1FBQ3JCLGtCQUFZLEdBQVcsQ0FBQyxDQUFBLENBQUMsVUFBVTtRQUNwQyxVQUFJLEdBQVcsQ0FBQyxDQUFBOztJQUd2QixDQUFDO0lBRU0sOEJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFBO1FBQ2xCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFTSwrQkFBTSxHQUFiO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFBO0lBQ3JCLENBQUM7SUFFTSx3Q0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUVNLG9EQUEyQixHQUFsQyxVQUFtQyxJQUFhO1FBQzVDLElBQUkseUJBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxJQUFJLENBQUE7U0FDZDtJQUNMLENBQUM7SUFFTSxnQ0FBTyxHQUFkLFVBQWUsSUFBYTtRQUN4QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsa0JBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUU1RCxJQUFJLGtCQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3pELHdEQUF3RDtZQUN4RCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2YsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FyQ0EsQUFxQ0MsQ0FyQ21DLHVCQUFVLEdBcUM3QztBQXJDWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIlxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi8uLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCJcblxuZXhwb3J0IGNsYXNzIEFjdGlvblBheU1vbmV5IGV4dGVuZHMgR29hcEFjdGlvbiB7XG4gICAgcHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXG4gICAgcHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDBcbiAgICBwcml2YXRlIHdvcmtEdXJhdGlvbjogbnVtYmVyID0gMiAvLyBzZWNvbmRzXG4gICAgcHVibGljIGNvc3Q6IG51bWJlciA9IDFcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuYkRvbmUgPSBmYWxzZVxuICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IDBcbiAgICB9XG5cbiAgICBwdWJsaWMgaXNEb25lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iRG9uZVxuICAgIH1cblxuICAgIHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgcHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihub2RlOiBjYy5Ob2RlKTogYm9vbGVhbiB7XG4gICAgICAgIGlmIChFbnZpcm9ubWVudC5zdG9yZUEuaXNIYXZlR29vZHMoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBwZXJmb3JtKG5vZGU6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRUaW1lID09IDApIHRoaXMuc3RhcnRUaW1lID0gVGltZVV0aWwuZ2V0VGltZSgpXG5cbiAgICAgICAgaWYgKFRpbWVVdGlsLmdldFRpbWUoKSAtIHRoaXMuc3RhcnRUaW1lID4gdGhpcy53b3JrRHVyYXRpb24pIHtcbiAgICAgICAgICAgIC8vZW50aXR5Lm1lbW9yeS5zZXQoQWN0aW9uRGF0YVN0YXR1cy5pc0Nhbk91dGZpcmUsIHRydWUpXG4gICAgICAgICAgICB0aGlzLmJEb25lID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufVxuIl19