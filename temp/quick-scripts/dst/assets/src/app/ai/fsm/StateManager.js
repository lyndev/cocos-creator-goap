
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXFN0YXRlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7QUFJSDtJQVFDLHNCQUFZLEtBQVU7UUFKWixrQkFBYSxHQUFjLElBQUksQ0FBQztRQUNoQyxlQUFVLEdBQWMsSUFBSSxDQUFDO1FBSXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFHTSw4QkFBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZSxFQUFFLE9BQWU7UUFBaEMsb0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQy9ELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUM5RSxPQUFPO1NBQ1A7UUFDRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEdBQWU7UUFBZixvQkFBQSxFQUFBLFVBQWU7UUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLFNBQVM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRDs7O09BR0c7SUFDSSx5Q0FBa0IsR0FBekI7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtJQUNMLGdDQUFTLEdBQWhCLFVBQWlCLFFBQWdCO1FBQ2hDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRDs7T0FFRztJQUNJLDRCQUFLLEdBQVo7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELGFBQWE7SUFDTiw4QkFBTyxHQUFkO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUF6SGEseUJBQVksR0FBVyxTQUFTLENBQUM7SUEySGhELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7QUE1SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IOeKtuaAgeeuoeeQhuexu1xyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDYtMjkgMTA6MTY6NTUgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTA1IDE3OjM1OjMxXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vc3RhdGUvU3RhdGVCYXNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVNYW5hZ2VyIHtcclxuXHRwdWJsaWMgc3RhdGljIEludmFsaWRTdGF0ZTogc3RyaW5nID0gXCJJbnZhbGlkXCI7XHJcblxyXG5cdHByb3RlY3RlZCBfc3RhdGVEaWM6IHsgW2tleTogc3RyaW5nXTogU3RhdGVCYXNlIH07XHJcblx0cHJvdGVjdGVkIF9jdXJyZW50U3RhdGU6IFN0YXRlQmFzZSA9IG51bGw7XHJcblx0cHJvdGVjdGVkIF9sYXN0U3RhdGU6IFN0YXRlQmFzZSA9IG51bGw7XHJcblx0cHJvdGVjdGVkIF9vd25lcjogYW55O1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XHJcblx0XHR0aGlzLl9zdGF0ZURpYyA9IHt9O1xyXG5cdFx0dGhpcy5fb3duZXIgPSBvd25lcjtcclxuXHR9XHJcblxyXG5cclxuXHRwdWJsaWMgaXNFeGlzdChzdGF0ZUtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gISF0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV07XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZ2V0U3RhdGVCeUtleShzdGF0ZUtleTogc3RyaW5nKTogU3RhdGVCYXNlIHtcclxuXHRcdHJldHVybiB0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDms6jlhoznirbmgIEgXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIEBwYXJhbSBzdGF0ZVxyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZWdpc3RlclN0YXRlKGtleTogc3RyaW5nLCBzdGF0ZTogU3RhdGVCYXNlKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fb3duZXIgIT0gc3RhdGUub3duZXIpIHtcclxuXHRcdFx0Y29uc29sZS53YXJuKFwic3RhdGVtYWNoaW5lIOS4jiBzdGF0ZSDmiYDmnInogIXkuI3kuIDoh7RcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMuX3N0YXRlRGljW2tleV0gPSBzdGF0ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOenu+mZpOeKtuaAgSBcclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogXHJcblx0ICovXHJcblx0cHVibGljIHJlbW92ZVN0YXRlKGtleTogc3RyaW5nKTogdm9pZCB7XHJcblx0XHRkZWxldGUgdGhpcy5fc3RhdGVEaWNba2V5XTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOaUueWPmOeKtuaAgSBcclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogQHBhcmFtIG9ialxyXG5cdCAqIEBwYXJhbSBpc0ZvcmNlIOW9k+W9k+WJjeeKtuaAgeWSjOimgeWIh+aNoueahOeKtuaAgeebuOWQjOaXtu+8jOaYr+WQpuW8uuWItuWIh+aNoueKtuaAgVxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjaGFuZ2VTdGF0ZShrZXk6IHN0cmluZywgb2JqOiBhbnkgPSBudWxsLCBpc0ZvcmNlID0gZmFsc2UpOiB2b2lkIHtcclxuXHRcdGlmICghaXNGb3JjZSAmJiB0aGlzLl9jdXJyZW50U3RhdGUgJiYgdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KCkgPT0ga2V5KSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBuZXdTdGF0ZTogU3RhdGVCYXNlID0gdGhpcy5fc3RhdGVEaWNba2V5XTtcclxuXHRcdGlmIChuZXdTdGF0ZSA9PSBudWxsKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcInVucmVnaXN0ZXIgc3RhdGUgdHlwZTogXCIgKyBrZXkpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vbkV4aXQobmV3U3RhdGUuZ2V0U3RhdGVLZXkoKSk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gdGhpcy5fY3VycmVudFN0YXRlO1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbmV3U3RhdGU7XHJcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FbnRlcihvYmopO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHJlRW50ZXJTdGF0ZShvYmo6IGFueSA9IG51bGwpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUpXHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vblJlRW50ZXIob2JqKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOabtOaWsCBcclxuXHQgKiBcclxuXHQgKi9cclxuXHRwdWJsaWMgdXBkYXRlKHRpbWVTdGFtcCk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25VcGRhdGUodGltZVN0YW1wKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIOW9k+WJjeeKtuaAgSAgXHJcblx0ICogQHJldHVybiBcclxuXHQgKi9cclxuXHRwdWJsaWMgZ2V0Q3VycmVudFN0YXRlKCk6IFN0YXRlQmFzZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiDlvZPliY3nirbmgIHnsbvlnosgIFxyXG5cdCAqIEByZXR1cm4gXHJcblx0ICovXHJcblx0cHVibGljIGdldEN1cnJlbnRTdGF0ZUtleSgpOiBzdHJpbmcge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGUuZ2V0U3RhdGVLZXkoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlO1xyXG5cdH1cclxuXHJcblx0Lyoq5b2T5YmN5Zyo55qE54q25oCBICovXHJcblx0cHVibGljIGlzSW5TdGF0ZShzdGF0ZUtleTogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gc3RhdGVLZXkgPT0gdGhpcy5nZXRDdXJyZW50U3RhdGVLZXkoKTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICog5riF6ZmkIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBjbGVhcigpOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbClcclxuXHRcdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uRXhpdChTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlKTtcclxuXHRcdHRoaXMuX3N0YXRlRGljID0ge307XHJcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gbnVsbDtcclxuXHR9XHJcblx0Lyoq5riF6Zmk5pyA5ZCO55qE54q25oCBICovXHJcblx0cHVibGljIGRpc3Bvc2UoKSB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vbkV4aXQoU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZSk7XHJcblx0XHR0aGlzLl9jdXJyZW50U3RhdGUgPSBudWxsO1xyXG5cdFx0dGhpcy5fbGFzdFN0YXRlID0gbnVsbDtcclxuXHR9XHJcblxyXG59XHJcbiJdfQ==