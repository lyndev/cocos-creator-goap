
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/fsm/StateManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60a066a2llN0bkPyHeT3fDY', 'StateManager');
// src/app/ai/fsm/StateManager.ts

"use strict";
/*
 * @Description: 状态管理类
 * @Author: Rannar.Yang
 * @Date: 2018-06-29 10:16:55
 * @Last Modified by: Rannar.Yang
 * @Last Modified time: 2018-07-05 17:35:31
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateManager = void 0;
var StateManager = /** @class */ (function () {
    function StateManager(owner) {
        this._currentState = null;
        this._lastState = null;
        this._stateDic = {};
        this._owner = owner;
    }
    StateManager.prototype.isExist = function (stateKey) {
        return !!this._stateDic[stateKey];
    };
    StateManager.prototype.getStateByKey = function (stateKey) {
        return this._stateDic[stateKey];
    };
    /**
     * 注册状态
     * @param key
     * @param state
     *
     */
    StateManager.prototype.registerState = function (key, state) {
        if (this._owner != state.owner) {
            console.warn("statemachine 与 state 所有者不一致");
            return;
        }
        this._stateDic[key] = state;
    };
    /**
     * 移除状态
     * @param key
     *
     */
    StateManager.prototype.removeState = function (key) {
        delete this._stateDic[key];
    };
    /**
     * 改变状态
     * @param key
     * @param obj
     * @param isForce 当当前状态和要切换的状态相同时，是否强制切换状态
     */
    StateManager.prototype.changeState = function (key, obj, isForce) {
        if (obj === void 0) { obj = null; }
        if (isForce === void 0) { isForce = false; }
        if (!isForce && this._currentState && this._currentState.getStateKey() == key) {
            return;
        }
        var newState = this._stateDic[key];
        if (newState == null) {
            console.warn("unregister state type: " + key);
            return;
        }
        if (this._currentState != null) {
            this._currentState.onExit(newState.getStateKey());
        }
        this._lastState = this._currentState;
        this._currentState = newState;
        this._currentState.onEnter(obj);
    };
    StateManager.prototype.reEnterState = function (obj) {
        if (obj === void 0) { obj = null; }
        if (this._currentState)
            this._currentState.onReEnter(obj);
    };
    /**
     * 更新
     *
     */
    StateManager.prototype.update = function (timeStamp) {
        if (this._currentState != null)
            this._currentState.onUpdate(timeStamp);
    };
    /**
     * 当前状态
     * @return
     */
    StateManager.prototype.getCurrentState = function () {
        return this._currentState;
    };
    /**
     * 当前状态类型
     * @return
     */
    StateManager.prototype.getCurrentStateKey = function () {
        if (this._currentState != null) {
            return this._currentState.getStateKey();
        }
        return StateManager.InvalidState;
    };
    /**当前在的状态 */
    StateManager.prototype.isInState = function (stateKey) {
        return stateKey == this.getCurrentStateKey();
    };
    /**
     * 清除
     */
    StateManager.prototype.clear = function () {
        if (this._currentState != null)
            this._currentState.onExit(StateManager.InvalidState);
        this._stateDic = {};
        this._currentState = null;
        this._lastState = null;
    };
    /**清除最后的状态 */
    StateManager.prototype.dispose = function () {
        if (this._currentState != null)
            this._currentState.onExit(StateManager.InvalidState);
        this._currentState = null;
        this._lastState = null;
    };
    StateManager.InvalidState = "Invalid";
    return StateManager;
}());
exports.StateManager = StateManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9TdGF0ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRzs7O0FBSUg7SUFRQyxzQkFBWSxLQUFVO1FBSlosa0JBQWEsR0FBYyxJQUFJLENBQUM7UUFDaEMsZUFBVSxHQUFjLElBQUksQ0FBQztRQUl0QyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBR00sOEJBQU8sR0FBZCxVQUFlLFFBQWdCO1FBQzlCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVNLG9DQUFhLEdBQXBCLFVBQXFCLFFBQWdCO1FBQ3BDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxvQ0FBYSxHQUFwQixVQUFxQixHQUFXLEVBQUUsS0FBZ0I7UUFDakQsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDL0IsT0FBTyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzVDLE9BQU87U0FDUDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0lBQzdCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksa0NBQVcsR0FBbEIsVUFBbUIsR0FBVztRQUM3QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksa0NBQVcsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLEdBQWUsRUFBRSxPQUFlO1FBQWhDLG9CQUFBLEVBQUEsVUFBZTtRQUFFLHdCQUFBLEVBQUEsZUFBZTtRQUMvRCxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsSUFBSSxHQUFHLEVBQUU7WUFDOUUsT0FBTztTQUNQO1FBQ0QsSUFBSSxRQUFRLEdBQWMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM5QyxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDckIsT0FBTyxDQUFDLElBQUksQ0FBQyx5QkFBeUIsR0FBRyxHQUFHLENBQUMsQ0FBQztZQUM5QyxPQUFPO1NBQ1A7UUFFRCxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQy9CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ2xEO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixHQUFlO1FBQWYsb0JBQUEsRUFBQSxVQUFlO1FBQ2xDLElBQUksSUFBSSxDQUFDLGFBQWE7WUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLDZCQUFNLEdBQWIsVUFBYyxTQUFTO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBZSxHQUF0QjtRQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzQixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0kseUNBQWtCLEdBQXpCO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDeEM7UUFDRCxPQUFPLFlBQVksQ0FBQyxZQUFZLENBQUM7SUFDbEMsQ0FBQztJQUVELFlBQVk7SUFDTCxnQ0FBUyxHQUFoQixVQUFpQixRQUFnQjtRQUNoQyxPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUM5QyxDQUFDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBSyxHQUFaO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxhQUFhO0lBQ04sOEJBQU8sR0FBZDtRQUNDLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUN4QixDQUFDO0lBekhhLHlCQUFZLEdBQVcsU0FBUyxDQUFDO0lBMkhoRCxtQkFBQztDQTVIRCxBQTRIQyxJQUFBO0FBNUhZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBEZXNjcmlwdGlvbjog54q25oCB566h55CG57G7XG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA2LTI5IDEwOjE2OjU1IFxuICogQExhc3QgTW9kaWZpZWQgYnk6IFJhbm5hci5ZYW5nXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTA1IDE3OjM1OjMxXG4gKi9cblxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vc3RhdGUvU3RhdGVCYXNlXCI7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xuXHRwdWJsaWMgc3RhdGljIEludmFsaWRTdGF0ZTogc3RyaW5nID0gXCJJbnZhbGlkXCI7XG5cblx0cHJvdGVjdGVkIF9zdGF0ZURpYzogeyBba2V5OiBzdHJpbmddOiBTdGF0ZUJhc2UgfTtcblx0cHJvdGVjdGVkIF9jdXJyZW50U3RhdGU6IFN0YXRlQmFzZSA9IG51bGw7XG5cdHByb3RlY3RlZCBfbGFzdFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xuXHRwcm90ZWN0ZWQgX293bmVyOiBhbnk7XG5cblx0Y29uc3RydWN0b3Iob3duZXI6IGFueSkge1xuXHRcdHRoaXMuX3N0YXRlRGljID0ge307XG5cdFx0dGhpcy5fb3duZXIgPSBvd25lcjtcblx0fVxuXG5cblx0cHVibGljIGlzRXhpc3Qoc3RhdGVLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuXHRcdHJldHVybiAhIXRoaXMuX3N0YXRlRGljW3N0YXRlS2V5XTtcblx0fVxuXG5cdHB1YmxpYyBnZXRTdGF0ZUJ5S2V5KHN0YXRlS2V5OiBzdHJpbmcpOiBTdGF0ZUJhc2Uge1xuXHRcdHJldHVybiB0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV07XG5cdH1cblxuXHQvKipcblx0ICog5rOo5YaM54q25oCBIFxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBzdGF0ZVxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyByZWdpc3RlclN0YXRlKGtleTogc3RyaW5nLCBzdGF0ZTogU3RhdGVCYXNlKTogdm9pZCB7XG5cdFx0aWYgKHRoaXMuX293bmVyICE9IHN0YXRlLm93bmVyKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJzdGF0ZW1hY2hpbmUg5LiOIHN0YXRlIOaJgOacieiAheS4jeS4gOiHtFwiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5fc3RhdGVEaWNba2V5XSA9IHN0YXRlO1xuXHR9XG5cblx0LyoqXG5cdCAqIOenu+mZpOeKtuaAgSBcblx0ICogQHBhcmFtIGtleVxuXHQgKiBcblx0ICovXG5cdHB1YmxpYyByZW1vdmVTdGF0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xuXHRcdGRlbGV0ZSB0aGlzLl9zdGF0ZURpY1trZXldO1xuXHR9XG5cblx0LyoqXG5cdCAqIOaUueWPmOeKtuaAgSBcblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gb2JqXG5cdCAqIEBwYXJhbSBpc0ZvcmNlIOW9k+W9k+WJjeeKtuaAgeWSjOimgeWIh+aNoueahOeKtuaAgeebuOWQjOaXtu+8jOaYr+WQpuW8uuWItuWIh+aNoueKtuaAgVxuXHQgKi9cblx0cHVibGljIGNoYW5nZVN0YXRlKGtleTogc3RyaW5nLCBvYmo6IGFueSA9IG51bGwsIGlzRm9yY2UgPSBmYWxzZSk6IHZvaWQge1xuXHRcdGlmICghaXNGb3JjZSAmJiB0aGlzLl9jdXJyZW50U3RhdGUgJiYgdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KCkgPT0ga2V5KSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBuZXdTdGF0ZTogU3RhdGVCYXNlID0gdGhpcy5fc3RhdGVEaWNba2V5XTtcblx0XHRpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuXHRcdFx0Y29uc29sZS53YXJuKFwidW5yZWdpc3RlciBzdGF0ZSB0eXBlOiBcIiArIGtleSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpO1xuXHRcdH1cblxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBuZXdTdGF0ZTtcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FbnRlcihvYmopO1xuXHR9XG5cblx0cHVibGljIHJlRW50ZXJTdGF0ZShvYmo6IGFueSA9IG51bGwpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlKVxuXHRcdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uUmVFbnRlcihvYmopO1xuXHR9XG5cblx0LyoqXG5cdCAqIOabtOaWsCBcblx0ICogXG5cdCAqL1xuXHRwdWJsaWMgdXBkYXRlKHRpbWVTdGFtcCk6IHZvaWQge1xuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbClcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vblVwZGF0ZSh0aW1lU3RhbXApO1xuXHR9XG5cblx0LyoqXG5cdCAqIOW9k+WJjeeKtuaAgSAgXG5cdCAqIEByZXR1cm4gXG5cdCAqL1xuXHRwdWJsaWMgZ2V0Q3VycmVudFN0YXRlKCk6IFN0YXRlQmFzZSB7XG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZTtcblx0fVxuXHQvKipcblx0ICog5b2T5YmN54q25oCB57G75Z6LICBcblx0ICogQHJldHVybiBcblx0ICovXG5cdHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpIHtcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUuZ2V0U3RhdGVLZXkoKTtcblx0XHR9XG5cdFx0cmV0dXJuIFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGU7XG5cdH1cblxuXHQvKirlvZPliY3lnKjnmoTnirbmgIEgKi9cblx0cHVibGljIGlzSW5TdGF0ZShzdGF0ZUtleTogc3RyaW5nKSB7XG5cdFx0cmV0dXJuIHN0YXRlS2V5ID09IHRoaXMuZ2V0Q3VycmVudFN0YXRlS2V5KCk7XG5cdH1cblx0LyoqXG5cdCAqIOa4hemZpCBcblx0ICovXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xuXHRcdHRoaXMuX3N0YXRlRGljID0ge307XG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcblx0XHR0aGlzLl9sYXN0U3RhdGUgPSBudWxsO1xuXHR9XG5cdC8qKua4hemZpOacgOWQjueahOeKtuaAgSAqL1xuXHRwdWJsaWMgZGlzcG9zZSgpIHtcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGw7XG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gbnVsbDtcblx0fVxuXG59XG4iXX0=