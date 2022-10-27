
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxmc21cXFN0YXRlTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HOzs7QUFLSDtJQVFDLHNCQUFZLEtBQVU7UUFKWixrQkFBYSxHQUFjLElBQUksQ0FBQztRQUNoQyxlQUFVLEdBQWMsSUFBSSxDQUFDO1FBSXRDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFHTSw4QkFBTyxHQUFkLFVBQWUsUUFBZ0I7UUFDOUIsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRU0sb0NBQWEsR0FBcEIsVUFBcUIsUUFBZ0I7UUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLG9DQUFhLEdBQXBCLFVBQXFCLEdBQVcsRUFBRSxLQUFnQjtRQUNqRCxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTtZQUMvQixPQUFPLENBQUMsSUFBSSxDQUFDLDZCQUE2QixDQUFDLENBQUM7WUFDNUMsT0FBTztTQUNQO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXO1FBQzdCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsR0FBZSxFQUFFLE9BQWU7UUFBaEMsb0JBQUEsRUFBQSxVQUFlO1FBQUUsd0JBQUEsRUFBQSxlQUFlO1FBQy9ELElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxJQUFJLEdBQUcsRUFBRTtZQUM5RSxPQUFPO1NBQ1A7UUFDRCxJQUFJLFFBQVEsR0FBYyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLElBQUksUUFBUSxJQUFJLElBQUksRUFBRTtZQUNyQixPQUFPLENBQUMsSUFBSSxDQUFDLHlCQUF5QixHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlDLE9BQU87U0FDUDtRQUVELElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDL0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDbEQ7UUFFRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDckMsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLG1DQUFZLEdBQW5CLFVBQW9CLEdBQWU7UUFBZixvQkFBQSxFQUFBLFVBQWU7UUFDbEMsSUFBSSxJQUFJLENBQUMsYUFBYTtZQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU0sR0FBYixVQUFjLFNBQVM7UUFDdEIsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNDQUFlLEdBQXRCO1FBQ0MsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzNCLENBQUM7SUFDRDs7O09BR0c7SUFDSSx5Q0FBa0IsR0FBekI7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztRQUNELE9BQU8sWUFBWSxDQUFDLFlBQVksQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWTtJQUNMLGdDQUFTLEdBQWhCLFVBQWlCLFFBQWdCO1FBQ2hDLE9BQU8sUUFBUSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFDRDs7T0FFRztJQUNJLDRCQUFLLEdBQVo7UUFDQyxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsQ0FBQztJQUNELGFBQWE7SUFDTiw4QkFBTyxHQUFkO1FBQ0MsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7SUF6SGEseUJBQVksR0FBVyxTQUFTLENBQUM7SUEySGhELG1CQUFDO0NBNUhELEFBNEhDLElBQUE7QUE1SFksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IOeKtuaAgeeuoeeQhuexu1xyXG4gKiBAQXV0aG9yOiBSYW5uYXIuWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDYtMjkgMTA6MTY6NTUgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXIuWWFuZ1xyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTA1IDE3OjM1OjMxXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4uL2dvYXAvR29hcEFnZW50XCI7XHJcbmltcG9ydCB7IFN0YXRlQmFzZSB9IGZyb20gXCIuL3N0YXRlL1N0YXRlQmFzZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlTWFuYWdlciB7XHJcblx0cHVibGljIHN0YXRpYyBJbnZhbGlkU3RhdGU6IHN0cmluZyA9IFwiSW52YWxpZFwiO1xyXG5cclxuXHRwcm90ZWN0ZWQgX3N0YXRlRGljOiB7IFtrZXk6IHN0cmluZ106IFN0YXRlQmFzZSB9O1xyXG5cdHByb3RlY3RlZCBfY3VycmVudFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xyXG5cdHByb3RlY3RlZCBfbGFzdFN0YXRlOiBTdGF0ZUJhc2UgPSBudWxsO1xyXG5cdHByb3RlY3RlZCBfb3duZXI6IEdvYXBBZ2VudDtcclxuXHJcblx0Y29uc3RydWN0b3Iob3duZXI6IGFueSkge1xyXG5cdFx0dGhpcy5fc3RhdGVEaWMgPSB7fTtcclxuXHRcdHRoaXMuX293bmVyID0gb3duZXI7XHJcblx0fVxyXG5cclxuXHJcblx0cHVibGljIGlzRXhpc3Qoc3RhdGVLZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuICEhdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGdldFN0YXRlQnlLZXkoc3RhdGVLZXk6IHN0cmluZyk6IFN0YXRlQmFzZSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fc3RhdGVEaWNbc3RhdGVLZXldO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICog5rOo5YaM54q25oCBIFxyXG5cdCAqIEBwYXJhbSBrZXlcclxuXHQgKiBAcGFyYW0gc3RhdGVcclxuXHQgKiBcclxuXHQgKi9cclxuXHRwdWJsaWMgcmVnaXN0ZXJTdGF0ZShrZXk6IHN0cmluZywgc3RhdGU6IFN0YXRlQmFzZSk6IHZvaWQge1xyXG5cdFx0aWYgKHRoaXMuX293bmVyICE9IHN0YXRlLm93bmVyKSB7XHJcblx0XHRcdGNvbnNvbGUud2FybihcInN0YXRlbWFjaGluZSDkuI4gc3RhdGUg5omA5pyJ6ICF5LiN5LiA6Ie0XCIpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR0aGlzLl9zdGF0ZURpY1trZXldID0gc3RhdGU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDnp7vpmaTnirbmgIEgXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyByZW1vdmVTdGF0ZShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG5cdFx0ZGVsZXRlIHRoaXMuX3N0YXRlRGljW2tleV07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmlLnlj5jnirbmgIEgXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIEBwYXJhbSBvYmpcclxuXHQgKiBAcGFyYW0gaXNGb3JjZSDlvZPlvZPliY3nirbmgIHlkozopoHliIfmjaLnmoTnirbmgIHnm7jlkIzml7bvvIzmmK/lkKblvLrliLbliIfmjaLnirbmgIFcclxuXHQgKi9cclxuXHRwdWJsaWMgY2hhbmdlU3RhdGUoa2V5OiBzdHJpbmcsIG9iajogYW55ID0gbnVsbCwgaXNGb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcblx0XHRpZiAoIWlzRm9yY2UgJiYgdGhpcy5fY3VycmVudFN0YXRlICYmIHRoaXMuX2N1cnJlbnRTdGF0ZS5nZXRTdGF0ZUtleSgpID09IGtleSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgbmV3U3RhdGU6IFN0YXRlQmFzZSA9IHRoaXMuX3N0YXRlRGljW2tleV07XHJcblx0XHRpZiAobmV3U3RhdGUgPT0gbnVsbCkge1xyXG5cdFx0XHRjb25zb2xlLndhcm4oXCJ1bnJlZ2lzdGVyIHN0YXRlIHR5cGU6IFwiICsga2V5KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkge1xyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KG5ld1N0YXRlLmdldFN0YXRlS2V5KCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IHRoaXMuX2N1cnJlbnRTdGF0ZTtcclxuXHRcdHRoaXMuX2N1cnJlbnRTdGF0ZSA9IG5ld1N0YXRlO1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uRW50ZXIob2JqKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZUVudGVyU3RhdGUob2JqOiBhbnkgPSBudWxsKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlKVxyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25SZUVudGVyKG9iaik7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDmm7TmlrAgXHJcblx0ICogXHJcblx0ICovXHJcblx0cHVibGljIHVwZGF0ZSh0aW1lU3RhbXApOiB2b2lkIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbClcclxuXHRcdFx0dGhpcy5fY3VycmVudFN0YXRlLm9uVXBkYXRlKHRpbWVTdGFtcCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiDlvZPliY3nirbmgIEgIFxyXG5cdCAqIEByZXR1cm4gXHJcblx0ICovXHJcblx0cHVibGljIGdldEN1cnJlbnRTdGF0ZSgpOiBTdGF0ZUJhc2Uge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRTdGF0ZTtcclxuXHR9XHJcblx0LyoqXHJcblx0ICog5b2T5YmN54q25oCB57G75Z6LICBcclxuXHQgKiBAcmV0dXJuIFxyXG5cdCAqL1xyXG5cdHB1YmxpYyBnZXRDdXJyZW50U3RhdGVLZXkoKTogc3RyaW5nIHtcclxuXHRcdGlmICh0aGlzLl9jdXJyZW50U3RhdGUgIT0gbnVsbCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fY3VycmVudFN0YXRlLmdldFN0YXRlS2V5KCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZTtcclxuXHR9XHJcblxyXG5cdC8qKuW9k+WJjeWcqOeahOeKtuaAgSAqL1xyXG5cdHB1YmxpYyBpc0luU3RhdGUoc3RhdGVLZXk6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHN0YXRlS2V5ID09IHRoaXMuZ2V0Q3VycmVudFN0YXRlS2V5KCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIOa4hemZpCBcclxuXHQgKi9cclxuXHRwdWJsaWMgY2xlYXIoKTogdm9pZCB7XHJcblx0XHRpZiAodGhpcy5fY3VycmVudFN0YXRlICE9IG51bGwpXHJcblx0XHRcdHRoaXMuX2N1cnJlbnRTdGF0ZS5vbkV4aXQoU3RhdGVNYW5hZ2VyLkludmFsaWRTdGF0ZSk7XHJcblx0XHR0aGlzLl9zdGF0ZURpYyA9IHt9O1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IG51bGw7XHJcblx0fVxyXG5cdC8qKua4hemZpOacgOWQjueahOeKtuaAgSAqL1xyXG5cdHB1YmxpYyBkaXNwb3NlKCkge1xyXG5cdFx0aWYgKHRoaXMuX2N1cnJlbnRTdGF0ZSAhPSBudWxsKVxyXG5cdFx0XHR0aGlzLl9jdXJyZW50U3RhdGUub25FeGl0KFN0YXRlTWFuYWdlci5JbnZhbGlkU3RhdGUpO1xyXG5cdFx0dGhpcy5fY3VycmVudFN0YXRlID0gbnVsbDtcclxuXHRcdHRoaXMuX2xhc3RTdGF0ZSA9IG51bGw7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=