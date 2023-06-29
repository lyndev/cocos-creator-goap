
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
/**
 * 状态管理类
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2ZzbS9TdGF0ZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFHSDtJQVFJLHNCQUFZLEtBQVU7UUFKWixrQkFBYSxHQUFjLElBQUksQ0FBQTtRQUMvQixlQUFVLEdBQWMsSUFBSSxDQUFBO1FBSWxDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFBO1FBQ25CLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO0lBQ3ZCLENBQUM7SUFFTSw4QkFBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDM0IsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDakMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFnQjtRQUM5QyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUM1QixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUE7WUFDM0MsT0FBTTtTQUNUO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUE7SUFDL0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZSxFQUFFLE9BQWU7UUFBaEMsb0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQzVELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUMzRSxPQUFNO1NBQ1Q7UUFDRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzdDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQzdDLE9BQU07U0FDVDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUE7U0FDcEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUE7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUE7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEdBQWU7UUFBZixvQkFBQSxFQUFBLFVBQWU7UUFDL0IsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQzdELENBQUM7SUFFRDs7O09BR0c7SUFDSSw2QkFBTSxHQUFiLFVBQWMsU0FBUztRQUNuQixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUFFRDs7O09BR0c7SUFDSSxzQ0FBZSxHQUF0QjtRQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQTtJQUM3QixDQUFDO0lBQ0Q7OztPQUdHO0lBQ0kseUNBQWtCLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksRUFBRTtZQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDMUM7UUFDRCxPQUFPLFlBQVksQ0FBQyxZQUFZLENBQUE7SUFDcEMsQ0FBQztJQUVELFlBQVk7SUFDTCxnQ0FBUyxHQUFoQixVQUFpQixRQUFnQjtRQUM3QixPQUFPLFFBQVEsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQTtJQUNoRCxDQUFDO0lBQ0Q7O09BRUc7SUFDSSw0QkFBSyxHQUFaO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7UUFDbkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQUNELGFBQWE7SUFDTiw4QkFBTyxHQUFkO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDMUIsQ0FBQztJQXBIYSx5QkFBWSxHQUFXLFNBQVMsQ0FBQTtJQXFIbEQsbUJBQUM7Q0F0SEQsQUFzSEMsSUFBQTtBQXRIWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog54q25oCB566h55CG57G7XG4gKi9cblxuaW1wb3J0IHsgU3RhdGVCYXNlIH0gZnJvbSBcIi4vc3RhdGUvU3RhdGVCYXNlXCJcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hbmFnZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgSW52YWxpZFN0YXRlOiBzdHJpbmcgPSBcIkludmFsaWRcIlxuXG4gICAgcHJvdGVjdGVkIF9zdGF0ZURpYzogeyBba2V5OiBzdHJpbmddOiBTdGF0ZUJhc2UgfVxuICAgIHByb3RlY3RlZCBfY3VycmVudFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsXG4gICAgcHJvdGVjdGVkIF9sYXN0U3RhdGU6IFN0YXRlQmFzZSA9IG51bGxcbiAgICBwcm90ZWN0ZWQgX293bmVyOiBjYy5Ob2RlXG5cbiAgICBjb25zdHJ1Y3Rvcihvd25lcjogYW55KSB7XG4gICAgICAgIHRoaXMuX3N0YXRlRGljID0ge31cbiAgICAgICAgdGhpcy5fb3duZXIgPSBvd25lclxuICAgIH1cblxuICAgIHB1YmxpYyBpc0V4aXN0KHN0YXRlS2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldXG4gICAgfVxuXG4gICAgcHVibGljIGdldFN0YXRlQnlLZXkoc3RhdGVLZXk6IHN0cmluZyk6IFN0YXRlQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0ZURpY1tzdGF0ZUtleV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDms6jlhoznirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIHN0YXRlXG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVnaXN0ZXJTdGF0ZShrZXk6IHN0cmluZywgc3RhdGU6IFN0YXRlQmFzZSk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5fb3duZXIgIT0gc3RhdGUub3duZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcInN0YXRlbWFjaGluZSDkuI4gc3RhdGUg5omA5pyJ6ICF5LiN5LiA6Ie0XCIpXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9zdGF0ZURpY1trZXldID0gc3RhdGVcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnp7vpmaTnirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICpcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVtb3ZlU3RhdGUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgZGVsZXRlIHRoaXMuX3N0YXRlRGljW2tleV1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmlLnlj5jnirbmgIFcbiAgICAgKiBAcGFyYW0ga2V5XG4gICAgICogQHBhcmFtIG9ialxuICAgICAqIEBwYXJhbSBpc0ZvcmNlIOW9k+W9k+WJjeeKtuaAgeWSjOimgeWIh+aNoueahOeKtuaAgeebuOWQjOaXtu+8jOaYr+WQpuW8uuWItuWIh+aNoueKtuaAgVxuICAgICAqL1xuICAgIHB1YmxpYyBjaGFuZ2VTdGF0ZShrZXk6IHN0cmluZywgb2JqOiBhbnkgPSBudWxsLCBpc0ZvcmNlID0gZmFsc2UpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFpc0ZvcmNlICYmIHRoaXMuX2N1cnJlbnRTdGF0ZSAmJiB0aGlzLl9jdXJyZW50U3RhdGUuZ2V0U3RhdGVLZXkoKSA9PSBrZXkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHZhciBuZXdTdGF0ZTogU3RhdGVCYXNlID0gdGhpcy5fc3RhdGVEaWNba2V5XVxuICAgICAgICBpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwidW5yZWdpc3RlciBzdGF0ZSB0eXBlOiBcIiArIGtleSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9sYXN0U3RhdGUgPSB0aGlzLl9jdXJyZW50U3RhdGVcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlID0gbmV3U3RhdGVcbiAgICAgICAgdGhpcy5fY3VycmVudFN0YXRlLm9uRW50ZXIob2JqKVxuICAgIH1cblxuICAgIHB1YmxpYyByZUVudGVyU3RhdGUob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U3RhdGUpIHRoaXMuX2N1cnJlbnRTdGF0ZS5vblJlRW50ZXIob2JqKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOabtOaWsFxuICAgICAqXG4gICAgICovXG4gICAgcHVibGljIHVwZGF0ZSh0aW1lU3RhbXApOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB0aGlzLl9jdXJyZW50U3RhdGUub25VcGRhdGUodGltZVN0YW1wKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOW9k+WJjeeKtuaAgVxuICAgICAqIEByZXR1cm5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q3VycmVudFN0YXRlKCk6IFN0YXRlQmFzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50U3RhdGVcbiAgICB9XG4gICAgLyoqXG4gICAgICog5b2T5YmN54q25oCB57G75Z6LXG4gICAgICogQHJldHVyblxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZVxuICAgIH1cblxuICAgIC8qKuW9k+WJjeWcqOeahOeKtuaAgSAqL1xuICAgIHB1YmxpYyBpc0luU3RhdGUoc3RhdGVLZXk6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RhdGVLZXkgPT0gdGhpcy5nZXRDdXJyZW50U3RhdGVLZXkoKVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmuIXpmaRcbiAgICAgKi9cbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkgdGhpcy5fY3VycmVudFN0YXRlLm9uRXhpdChTdGF0ZU1hbmFnZXIuSW52YWxpZFN0YXRlKVxuICAgICAgICB0aGlzLl9zdGF0ZURpYyA9IHt9XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGxcbiAgICAgICAgdGhpcy5fbGFzdFN0YXRlID0gbnVsbFxuICAgIH1cbiAgICAvKirmuIXpmaTmnIDlkI7nmoTnirbmgIEgKi9cbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKSB0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG51bGxcbiAgICAgICAgdGhpcy5fbGFzdFN0YXRlID0gbnVsbFxuICAgIH1cbn1cbiJdfQ==