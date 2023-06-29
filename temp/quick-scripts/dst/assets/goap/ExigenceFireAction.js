
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/goap/ExigenceFireAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9nb2FwL0V4aWdlbmNlRmlyZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNERBQTJEO0FBTTNELHVEQUFzRDtBQUd0RDtJQUF3QyxzQ0FBVTtJQUtqRDtRQUFBLFlBQ0MsaUJBQU8sU0FFUDtRQVBPLFdBQUssR0FBWSxLQUFLLENBQUE7UUFDdEIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixrQkFBWSxHQUFXLENBQUMsQ0FBQyxDQUFDLFVBQVU7UUFDckMsVUFBSSxHQUFXLENBQUMsQ0FBQTtRQUd0QixLQUFJLENBQUMsU0FBUyxDQUFDLG1DQUFnQixDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQzs7SUFDckQsQ0FBQztJQUVNLGtDQUFLLEdBQVo7UUFDQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRU0sbUNBQU0sR0FBYjtRQUNDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNuQixDQUFDO0lBRU0sNENBQWUsR0FBdEI7UUFDQyxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTSx3REFBMkIsR0FBbEMsVUFBbUMsS0FBZ0I7UUFDbEQsT0FBTyxJQUFJLENBQUE7SUFDWixDQUFDO0lBRU0sb0NBQU8sR0FBZCxVQUFlLEtBQWdCO1FBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFBO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUNGLHlCQUFDO0FBQUQsQ0EvQkEsQUErQkMsQ0EvQnVDLHVCQUFVLEdBK0JqRDtBQS9CWSxnREFBa0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHb2FwQWN0aW9uIH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWN0aW9uXCI7XG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBZ2VudFwiO1xuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi9zcmMvYXBwL2Jhc2UvVkdhbWVPYmplY3RcIjtcbmltcG9ydCB7IEVudmlyb25tZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvZ2FtZWRhdGEvRW52aXJvbm1lbnRcIjtcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XG5pbXBvcnQgeyBBY3Rpb25EYXRhU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uRGF0YVN0YXR1c1wiO1xuaW1wb3J0IEVudGl0eSBmcm9tIFwiLi9FbnRpdHlcIjtcblxuZXhwb3J0IGNsYXNzIEV4aWdlbmNlRmlyZUFjdGlvbiBleHRlbmRzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIGJEb25lOiBib29sZWFuID0gZmFsc2Vcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgd29ya0R1cmF0aW9uOiBudW1iZXIgPSAxOyAvLyBzZWNvbmRzXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAwXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuYWRkRWZmZWN0KEFjdGlvbkRhdGFTdGF0dXMuaXNDYW5PdXRmaXJlLCB0cnVlKTtcblx0fVxuXG5cdHB1YmxpYyByZXNldCgpOiB2b2lkIHtcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XG5cdFx0dGhpcy5zdGFydFRpbWUgPSAwO1xuXHR9XG5cblx0cHVibGljIGlzRG9uZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5iRG9uZTtcblx0fVxuXG5cdHB1YmxpYyByZXF1aXJlc0luUmFuZ2UoKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XG5cdFx0cmV0dXJuIHRydWVcblx0fVxuXG5cdHB1YmxpYyBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuIHtcblx0XHR0aGlzLmJEb25lID0gdHJ1ZVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59Il19