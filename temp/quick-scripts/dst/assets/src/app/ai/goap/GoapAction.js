
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/GoapAction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb66cSHr3JCl5d2q3MzKcU5', 'GoapAction');
// src/app/ai/goap/GoapAction.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoapAction = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:26
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:26
 */
var GoapAction = /** @class */ (function () {
    function GoapAction() {
        this.inRange = false;
        /* 执行动作的成本。
         * 找出适合动作的重量。
         * 更改它将影响在计划期间选择的操作。*/
        this.cost = 1;
        this._preconditions = new Map();
        this._effects = new Map();
    }
    GoapAction.prototype.doReset = function () {
        this.inRange = false;
        this.target = null;
        this.reset();
    };
    /**
     * Are we in range of the target?
     * The MoveTo state will set this and it gets reset each time this action is performed.
     */
    GoapAction.prototype.isInRange = function () {
        return this.inRange;
    };
    GoapAction.prototype.setInRange = function (inRange) {
        this.inRange = inRange;
    };
    GoapAction.prototype.addPrecondition = function (key, value) {
        this._preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this._preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this._effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this._effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "preconditions", {
        get: function () {
            return this._preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "effects", {
        get: function () {
            return this._effects;
        },
        enumerable: false,
        configurable: true
    });
    return GoapAction;
}());
exports.GoapAction = GoapAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQTs7Ozs7O0dBTUc7QUFDSDtJQWdCSTtRQWJRLFlBQU8sR0FBWSxLQUFLLENBQUE7UUFDaEM7OzhCQUVzQjtRQUNmLFNBQUksR0FBVyxDQUFDLENBQUE7UUFVbkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQTtRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFBO0lBQ25ELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2hCLENBQUM7SUErQkQ7OztPQUdHO0lBQ0ksOEJBQVMsR0FBaEI7UUFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUVNLCtCQUFVLEdBQWpCLFVBQWtCLE9BQWdCO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzFCLENBQUM7SUFFTSxvQ0FBZSxHQUF0QixVQUF1QixHQUFXLEVBQUUsS0FBVTtRQUMxQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDdkMsQ0FBQztJQUVNLHVDQUFrQixHQUF6QixVQUEwQixHQUFXO1FBQ2pDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTSw4QkFBUyxHQUFoQixVQUFpQixHQUFXLEVBQUUsS0FBVTtRQUNwQyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVNLGlDQUFZLEdBQW5CLFVBQW9CLEdBQVc7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDN0IsQ0FBQztJQUVELHNCQUFXLHFDQUFhO2FBQXhCO1lBQ0ksT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFBO1FBQzlCLENBQUM7OztPQUFBO0lBRUQsc0JBQVcsK0JBQU87YUFBbEI7WUFDSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUE7UUFDeEIsQ0FBQzs7O09BQUE7SUFDTCxpQkFBQztBQUFELENBM0ZBLEFBMkZDLElBQUE7QUEzRnFCLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVudGl0eSBmcm9tIFwiLi4vLi4vLi4vLi4vZ29hcC9FbnRpdHlcIlxuaW1wb3J0IHsgVkdhbWVPYmplY3QgfSBmcm9tIFwiLi4vLi4vYmFzZS9WR2FtZU9iamVjdFwiXG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIlxuaW1wb3J0IHsgR29hcEFnZW50IH0gZnJvbSBcIi4vR29hcEFnZW50XCJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIlxuXG4vKlxuICogQERlc2NyaXB0aW9uOlxuICogQEF1dGhvcjogUmFubmFyWWFuZ1xuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjZcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmdcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MjZcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdvYXBBY3Rpb24ge1xuICAgIHByaXZhdGUgX3ByZWNvbmRpdGlvbnM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD5cbiAgICBwcml2YXRlIF9lZmZlY3RzOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+XG4gICAgcHJpdmF0ZSBpblJhbmdlOiBib29sZWFuID0gZmFsc2VcbiAgICAvKiDmiafooYzliqjkvZznmoTmiJDmnKzjgIJcbiAgICAgKiDmib7lh7rpgILlkIjliqjkvZznmoTph43ph4/jgIJcbiAgICAgKiDmm7TmlLnlroPlsIblvbHlk43lnKjorqHliJLmnJ/pl7TpgInmi6nnmoTmk43kvZzjgIIqL1xuICAgIHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxXG5cbiAgICAvKipcbiAgICAgKiDliqjkvZzmiafooYznmoTnm67moIflr7nosaHvvIzlj6/ku6XkuLrnqbrjgIIgKi9cbiAgICBwdWJsaWMgdGFyZ2V0OiBhbnlcblxuICAgIC8vIOWKqOS9nOaJgOWxnlxuICAgIHB1YmxpYyBnb2FwQWdlbnQ6IEdvYXBBZ2VudFxuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9wcmVjb25kaXRpb25zID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKVxuICAgICAgICB0aGlzLl9lZmZlY3RzID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKVxuICAgIH1cblxuICAgIHB1YmxpYyBkb1Jlc2V0KCkge1xuICAgICAgICB0aGlzLmluUmFuZ2UgPSBmYWxzZVxuICAgICAgICB0aGlzLnRhcmdldCA9IG51bGxcbiAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlc2V0IGFueSB2YXJpYWJsZXMgdGhhdCBuZWVkIHRvIGJlIHJlc2V0IGJlZm9yZSBwbGFubmluZyBoYXBwZW5zIGFnYWluLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlc2V0KCk6IHZvaWRcblxuICAgIC8qKlxuICAgICAqIElzIHRoZSBhY3Rpb24gZG9uZT9cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBpc0RvbmUoKTogYm9vbGVhblxuXG4gICAgLyoqXG4gICAgICogUHJvY2VkdXJhbGx5IGNoZWNrIGlmIHRoaXMgYWN0aW9uIGNhbiBydW4uIE5vdCBhbGwgYWN0aW9uc1xuICAgICAqIHdpbGwgbmVlZCB0aGlzLCBidXQgc29tZSBtaWdodC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24obm9kZTogY2MuTm9kZSk6IGJvb2xlYW5cblxuICAgIC8qKlxuICAgICAqIFJ1biB0aGUgYWN0aW9uLlxuICAgICAqIFJldHVybnMgVHJ1ZSBpZiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2VcbiAgICAgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXG4gICAgICogdGhlIGFjdGlvbiBxdWV1ZSBzaG91bGQgY2xlYXIgb3V0IGFuZCB0aGUgZ29hbCBjYW5ub3QgYmUgcmVhY2hlZC5cbiAgICAgKi9cbiAgICBhYnN0cmFjdCBwZXJmb3JtKGdvYXA6IGNjLk5vZGUpOiBib29sZWFuXG5cbiAgICAvKipcbiAgICAgKiBEb2VzIHRoaXMgYWN0aW9uIG5lZWQgdG8gYmUgd2l0aGluIHJhbmdlIG9mIGEgdGFyZ2V0IGdhbWUgb2JqZWN0P1xuICAgICAqIElmIG5vdCB0aGVuIHRoZSBtb3ZlVG8gc3RhdGUgd2lsbCBub3QgbmVlZCB0byBydW4gZm9yIHRoaXMgYWN0aW9uLlxuICAgICAqL1xuICAgIGFic3RyYWN0IHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuXG5cbiAgICAvKipcbiAgICAgKiBBcmUgd2UgaW4gcmFuZ2Ugb2YgdGhlIHRhcmdldD9cbiAgICAgKiBUaGUgTW92ZVRvIHN0YXRlIHdpbGwgc2V0IHRoaXMgYW5kIGl0IGdldHMgcmVzZXQgZWFjaCB0aW1lIHRoaXMgYWN0aW9uIGlzIHBlcmZvcm1lZC5cbiAgICAgKi9cbiAgICBwdWJsaWMgaXNJblJhbmdlKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5pblJhbmdlXG4gICAgfVxuXG4gICAgcHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICB0aGlzLmluUmFuZ2UgPSBpblJhbmdlXG4gICAgfVxuXG4gICAgcHVibGljIGFkZFByZWNvbmRpdGlvbihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLl9wcmVjb25kaXRpb25zLnNldChrZXksIHZhbHVlKVxuICAgIH1cblxuICAgIHB1YmxpYyByZW1vdmVQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5fcHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KVxuICAgIH1cblxuICAgIHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICAgICAgdGhpcy5fZWZmZWN0cy5zZXQoa2V5LCB2YWx1ZSlcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVtb3ZlRWZmZWN0KGtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2VmZmVjdHMuZGVsZXRlKGtleSlcbiAgICB9XG5cbiAgICBwdWJsaWMgZ2V0IHByZWNvbmRpdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcmVjb25kaXRpb25zXG4gICAgfVxuXG4gICAgcHVibGljIGdldCBlZmZlY3RzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZWZmZWN0c1xuICAgIH1cbn1cbiJdfQ==