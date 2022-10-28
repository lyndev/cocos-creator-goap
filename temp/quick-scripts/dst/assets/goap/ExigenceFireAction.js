
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ29hcFxcRXhpZ2VuY2VGaXJlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0REFBMkQ7QUFNM0QsdURBQXNEO0FBR3REO0lBQXdDLHNDQUFVO0lBS2pEO1FBQUEsWUFDQyxpQkFBTyxTQUVQO1FBUE8sV0FBSyxHQUFZLEtBQUssQ0FBQTtRQUN0QixlQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUNyQyxVQUFJLEdBQVcsQ0FBQyxDQUFBO1FBR3RCLEtBQUksQ0FBQyxTQUFTLENBQUMsbUNBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDOztJQUNyRCxDQUFDO0lBRU0sa0NBQUssR0FBWjtRQUNDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ3BCLENBQUM7SUFFTSxtQ0FBTSxHQUFiO1FBQ0MsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ25CLENBQUM7SUFFTSw0Q0FBZSxHQUF0QjtRQUNDLE9BQU8sS0FBSyxDQUFDO0lBQ2QsQ0FBQztJQUVNLHdEQUEyQixHQUFsQyxVQUFtQyxLQUFnQjtRQUNsRCxPQUFPLElBQUksQ0FBQTtJQUNaLENBQUM7SUFFTSxvQ0FBTyxHQUFkLFVBQWUsS0FBZ0I7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUE7UUFDakIsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBQ0YseUJBQUM7QUFBRCxDQS9CQSxBQStCQyxDQS9CdUMsdUJBQVUsR0ErQmpEO0FBL0JZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvYXBBY3Rpb24gfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0dvYXBBY3Rpb25cIjtcclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL3NyYy9hcHAvYWkvZ29hcC9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi4vc3JjL2FwcC9haS9nb2FwL0lHb2FwXCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uL3NyYy9hcHAvYmFzZS9WR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBFbnZpcm9ubWVudCB9IGZyb20gXCIuLi9zcmMvYXBwL2dhbWVkYXRhL0Vudmlyb25tZW50XCI7XHJcbmltcG9ydCBUaW1lVXRpbCBmcm9tIFwiLi4vc3JjL3V0aWxzL1RpbWVVdGlsXCI7XHJcbmltcG9ydCB7IEFjdGlvbkRhdGFTdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25EYXRhU3RhdHVzXCI7XHJcbmltcG9ydCBFbnRpdHkgZnJvbSBcIi4vRW50aXR5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhpZ2VuY2VGaXJlQWN0aW9uIGV4dGVuZHMgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBiRG9uZTogYm9vbGVhbiA9IGZhbHNlXHJcblx0cHJpdmF0ZSBzdGFydFRpbWU6IG51bWJlciA9IDA7XHJcblx0cHJpdmF0ZSB3b3JrRHVyYXRpb246IG51bWJlciA9IDE7IC8vIHNlY29uZHNcclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMFxyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmFkZEVmZmVjdChBY3Rpb25EYXRhU3RhdHVzLmlzQ2FuT3V0ZmlyZSwgdHJ1ZSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVzZXQoKTogdm9pZCB7XHJcblx0XHR0aGlzLmJEb25lID0gZmFsc2U7XHJcblx0XHR0aGlzLnN0YXJ0VGltZSA9IDA7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgaXNEb25lKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuYkRvbmU7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVxdWlyZXNJblJhbmdlKCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdHJ1ZVxyXG5cdH1cclxuXHJcblx0cHVibGljIHBlcmZvcm0oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW4ge1xyXG5cdFx0dGhpcy5iRG9uZSA9IHRydWVcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxufSJdfQ==