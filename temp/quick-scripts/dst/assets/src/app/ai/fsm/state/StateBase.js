
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9zdGF0ZS9TdGF0ZUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQThDO0FBQzlDO0lBTUksbUJBQVksS0FBYztRQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBTEQsc0JBQVcsNEJBQUs7YUFBaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUE7UUFDdEIsQ0FBQzs7O09BQUE7SUFJRDs7T0FFRztJQUNJLDJCQUFPLEdBQWQsVUFBZSxHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO0lBQVMsQ0FBQztJQUV4Qzs7OztPQUlHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsR0FBZTtRQUFmLG9CQUFBLEVBQUEsVUFBZTtJQUFTLENBQUM7SUFFMUM7OztPQUdHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixTQUFpQixJQUFTLENBQUM7SUFFM0M7Ozs7O09BS0c7SUFDSSwwQkFBTSxHQUFiLFVBQWMsTUFBMEI7UUFBMUIsdUJBQUEsRUFBQSxrQkFBMEI7SUFBUyxDQUFDO0lBQ2xEOzs7O09BSUc7SUFDSSwrQkFBVyxHQUFsQjtRQUNJLE9BQU8sMkJBQVksQ0FBQyxZQUFZLENBQUE7SUFDcEMsQ0FBQztJQUNMLGdCQUFDO0FBQUQsQ0ExQ0EsQUEwQ0MsSUFBQTtBQTFDWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTWFuYWdlciB9IGZyb20gXCIuLi9TdGF0ZU1hbmFnZXJcIlxuZXhwb3J0IGNsYXNzIFN0YXRlQmFzZSB7XG4gICAgcHJvdGVjdGVkIF9vd25lcjogY2MuTm9kZVxuXG4gICAgcHVibGljIGdldCBvd25lcigpOiBjYy5Ob2RlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX293bmVyXG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKG93bmVyOiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuX293bmVyID0gb3duZXJcbiAgICB9XG4gICAgLyoqXG4gICAgICog6L+b5YWl54q25oCBXG4gICAgICovXG4gICAgcHVibGljIG9uRW50ZXIob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7fVxuXG4gICAgLyoqXG4gICAgICog5YaN5qyh6L+b5YWl54q25oCBXG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25SZUVudGVyKG9iajogYW55ID0gbnVsbCk6IHZvaWQge31cblxuICAgIC8qKlxuICAgICAqIOeKtuaAgeabtOaWsFxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgb25VcGRhdGUodGltZVN0YW1wOiBudW1iZXIpOiB2b2lkIHt9XG5cbiAgICAvKipcbiAgICAgKiDnprvlvIDnirbmgIHnu5PmnZ9cbiAgICAgKiBAcGFyYW0gc3RyaW5nXG4gICAgICogQHJldHVyblxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIG9uRXhpdChwcmVLZXk6IHN0cmluZyA9IHVuZGVmaW5lZCk6IHZvaWQge31cbiAgICAvKipcbiAgICAgKiDov5Tlm57nirbmgIFJRFxuICAgICAqIEByZXR1cm5cbiAgICAgKlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGF0ZUtleSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZVxuICAgIH1cbn1cbiJdfQ==