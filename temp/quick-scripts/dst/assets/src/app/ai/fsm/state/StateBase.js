
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/state/StateBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a7215gBjVCG7JMSK5HcnBT', 'StateBase');
// src/app/ai/fsm/state/StateBase.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateBase = void 0;
var StateManager_1 = require("../StateManager");
/*
 * @Description: 状态基类
 * @Author: Rannar.Yang
 * @Date: 2018-06-29 10:17:10
 * @Last Modified by: Rannar.Yang
 * @Last Modified time: 2018-06-29 10:17:32
 */
var StateBase = /** @class */ (function () {
    function StateBase(owner) {
        this._owner = owner;
    }
    Object.defineProperty(StateBase.prototype, "owner", {
        get: function () {
            return this._owner;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 进入状态
     */
    StateBase.prototype.onEnter = function (obj) {
        if (obj === void 0) { obj = null; }
    };
    /**
     * 再次进入状态
     * @param obj
     * @return
     */
    StateBase.prototype.onReEnter = function (obj) {
        if (obj === void 0) { obj = null; }
    };
    /**
     * 状态更新
     * @return
     */
    StateBase.prototype.onUpdate = function (timeStamp) { };
    /**
     * 离开状态结束
     * @param string
     * @return
     *
     */
    StateBase.prototype.onExit = function (preKey) {
        if (preKey === void 0) { preKey = undefined; }
    };
    /**
     * 返回状态ID
     * @return
     *
     */
    StateBase.prototype.getStateKey = function () {
        return StateManager_1.StateManager.InvalidState;
    };
    return StateBase;
}());
exports.StateBase = StateBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBRS9DOzs7Ozs7R0FNRztBQUNIO0lBT0MsbUJBQVksS0FBVTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVUsQ0FBQztJQUV6Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFVLENBQUM7SUFFM0M7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFVLENBQUM7SUFFNUM7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBVSxDQUFDO0lBQ25EOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNDLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB5Z+657G7IFxuICogQEF1dGhvcjogUmFubmFyLllhbmcgXG4gKiBARGF0ZTogMjAxOC0wNi0yOSAxMDoxNzoxMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wNi0yOSAxMDoxNzozMlxuICovXG5leHBvcnQgY2xhc3MgU3RhdGVCYXNlIHtcblxuXHRwcm90ZWN0ZWQgX293bmVyOiBhbnk7XG5cblx0cHVibGljIGdldCBvd25lcigpOiBhbnkge1xuXHRcdHJldHVybiB0aGlzLl9vd25lcjtcblx0fVxuXHRjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XG5cdFx0dGhpcy5fb3duZXIgPSBvd25lcjtcblx0fVxuXHQvKipcblx0ICog6L+b5YWl54q25oCBIFxuXHQgKi9cblx0cHVibGljIG9uRW50ZXIob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7IH1cblxuXHQvKipcblx0ICog5YaN5qyh6L+b5YWl54q25oCBIFxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEByZXR1cm4gXG5cdCAqL1xuXHRwdWJsaWMgb25SZUVudGVyKG9iajogYW55ID0gbnVsbCk6IHZvaWQgeyB9XG5cblx0LyoqXG5cdCAqIOeKtuaAgeabtOaWsCBcblx0ICogQHJldHVybiBcblx0ICovXG5cdHB1YmxpYyBvblVwZGF0ZSh0aW1lU3RhbXA6IG51bWJlcik6IHZvaWQgeyB9XG5cblx0LyoqXG5cdCAqIOemu+W8gOeKtuaAgee7k+adnyBcblx0ICogQHBhcmFtIHN0cmluZ1xuXHQgKiBAcmV0dXJuIFxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyBvbkV4aXQocHJlS2V5OiBzdHJpbmcgPSB1bmRlZmluZWQpOiB2b2lkIHsgfVxuXHQvKipcblx0ICog6L+U5Zue54q25oCBSUQgXG5cdCAqIEByZXR1cm4gXG5cdCAqIFxuXHQgKi9cblx0cHVibGljIGdldFN0YXRlS2V5KCk6IHN0cmluZyB7XG5cdFx0cmV0dXJuIFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGU7XG5cdH1cblxufVxuIl19