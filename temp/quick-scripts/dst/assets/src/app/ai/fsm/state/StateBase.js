
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXHN0YXRlXFxTdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQStDO0FBRS9DOzs7Ozs7R0FNRztBQUNIO0lBT0MsbUJBQVksS0FBVTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVUsQ0FBQztJQUV6Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFVLENBQUM7SUFFM0M7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFVLENBQUM7SUFFNUM7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBVSxDQUFDO0lBQ25EOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNDLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVGLGdCQUFDO0FBQUQsQ0E1Q0EsQUE0Q0MsSUFBQTtBQTVDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB5Z+657G7IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDYtMjkgMTA6MTc6MTAgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA2LTI5IDEwOjE3OjMyXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgU3RhdGVCYXNlIHtcclxuXHJcblx0cHJvdGVjdGVkIF9vd25lcjogYW55O1xyXG5cclxuXHRwdWJsaWMgZ2V0IG93bmVyKCk6IGFueSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fb3duZXI7XHJcblx0fVxyXG5cdGNvbnN0cnVjdG9yKG93bmVyOiBhbnkpIHtcclxuXHRcdHRoaXMuX293bmVyID0gb3duZXI7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOi/m+WFpeeKtuaAgSBcclxuXHQgKi9cclxuXHRwdWJsaWMgb25FbnRlcihvYmo6IGFueSA9IG51bGwpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDlho3mrKHov5vlhaXnirbmgIEgXHJcblx0ICogQHBhcmFtIG9ialxyXG5cdCAqIEByZXR1cm4gXHJcblx0ICovXHJcblx0cHVibGljIG9uUmVFbnRlcihvYmo6IGFueSA9IG51bGwpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDnirbmgIHmm7TmlrAgXHJcblx0ICogQHJldHVybiBcclxuXHQgKi9cclxuXHRwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHsgfVxyXG5cclxuXHQvKipcclxuXHQgKiDnprvlvIDnirbmgIHnu5PmnZ8gXHJcblx0ICogQHBhcmFtIHN0cmluZ1xyXG5cdCAqIEByZXR1cm4gXHJcblx0ICogXHJcblx0ICovXHJcblx0cHVibGljIG9uRXhpdChwcmVLZXk6IHN0cmluZyA9IHVuZGVmaW5lZCk6IHZvaWQgeyB9XHJcblx0LyoqXHJcblx0ICog6L+U5Zue54q25oCBSUQgXHJcblx0ICogQHJldHVybiBcclxuXHQgKiBcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0U3RhdGVLZXkoKTogc3RyaW5nIHtcclxuXHRcdHJldHVybiBTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlO1xyXG5cdH1cclxuXHJcbn1cclxuIl19