
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
        this.preconditions = new Map();
        this.effects = new Map();
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
        this.preconditions.set(key, value);
    };
    GoapAction.prototype.removePrecondition = function (key) {
        this.preconditions.delete(key);
    };
    GoapAction.prototype.addEffect = function (key, value) {
        this.effects.set(key, value);
    };
    GoapAction.prototype.removeEffect = function (key) {
        this.effects.delete(key);
    };
    Object.defineProperty(GoapAction.prototype, "Preconditions", {
        get: function () {
            return this.preconditions;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GoapAction.prototype, "Effects", {
        get: function () {
            return this.effects;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7R0FNRztBQUNIO0lBb0JDO1FBaEJRLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFFakM7OzZCQUVxQjtRQUNkLFNBQUksR0FBVyxDQUFDLENBQUM7UUFZdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWdDRDs7O09BR0c7SUFDSSw4QkFBUyxHQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxLQUFVO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00saUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0JBQVcscUNBQWE7YUFBeEI7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywrQkFBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNGLGlCQUFDO0FBQUQsQ0E3RkEsQUE2RkMsSUFBQTtBQTdGcUIsZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW50aXR5IGZyb20gXCIuLi8uLi8uLi8uLi9nb2FwL0VudGl0eVwiO1xyXG5pbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEFjdGlvblN0YXR1cyB9IGZyb20gXCIuL0FjdGlvblN0YXR1c1wiO1xyXG5pbXBvcnQgeyBHb2FwQWdlbnQgfSBmcm9tIFwiLi9Hb2FwQWdlbnRcIjtcclxuaW1wb3J0IHsgSUdvYXAgfSBmcm9tIFwiLi9JR29hcFwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmcgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXHJcbiAqL1xyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR29hcEFjdGlvbiB7XHJcblx0cHJpdmF0ZSBwcmVjb25kaXRpb25zOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+O1xyXG5cdHByaXZhdGUgZWZmZWN0czogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcclxuXHJcblx0cHJpdmF0ZSBpblJhbmdlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdC8qIOaJp+ihjOWKqOS9nOeahOaIkOacrOOAglxyXG5cdCog5om+5Ye66YCC5ZCI5Yqo5L2c55qE6YeN6YeP44CCXHJcblx0KiDmm7TmlLnlroPlsIblvbHlk43lnKjorqHliJLmnJ/pl7TpgInmi6nnmoTmk43kvZzjgIIqL1xyXG5cdHB1YmxpYyBjb3N0OiBudW1iZXIgPSAxO1xyXG5cclxuXHJcblx0LyoqXHJcblx0KiDkuIDkuKrliqjkvZzpgJrluLjlv4XpobvlnKjkuIDkuKrlr7nosaHkuIrmiafooYzjgILov5nlsLHmmK/pgqPkuKrlr7nosaHjgILlj6/ku6XkuLrnqbrjgIIgKi9cclxuXHRwdWJsaWMgdGFyZ2V0OiBWR2FtZU9iamVjdDtcclxuXHRcclxuXHJcblx0Ly8g5Yqo5L2c5omA5bGeXHJcblx0cHVibGljIGdvYXBBZ2VudDpHb2FwQWdlbnRcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcmVjb25kaXRpb25zID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHRcdHRoaXMuZWZmZWN0cyA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZG9SZXNldCgpIHtcclxuXHRcdHRoaXMuaW5SYW5nZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXNldCgpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBSZXNldCBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSByZXNldCBiZWZvcmUgcGxhbm5pbmcgaGFwcGVucyBhZ2Fpbi5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyB0aGUgYWN0aW9uIGRvbmU/XHJcblx0ICovXHJcblx0YWJzdHJhY3QgaXNEb25lKCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2NlZHVyYWxseSBjaGVjayBpZiB0aGlzIGFjdGlvbiBjYW4gcnVuLiBOb3QgYWxsIGFjdGlvbnNcclxuXHQgKiB3aWxsIG5lZWQgdGhpcywgYnV0IHNvbWUgbWlnaHQuXHJcblx0ICovXHJcblx0YWJzdHJhY3QgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBSdW4gdGhlIGFjdGlvbi5cclxuXHQgKiBSZXR1cm5zIFRydWUgaWYgdGhlIGFjdGlvbiBwZXJmb3JtZWQgc3VjY2Vzc2Z1bGx5IG9yIGZhbHNlXHJcblx0ICogaWYgc29tZXRoaW5nIGhhcHBlbmVkIGFuZCBpdCBjYW4gbm8gbG9uZ2VyIHBlcmZvcm0uIEluIHRoaXMgY2FzZVxyXG5cdCAqIHRoZSBhY3Rpb24gcXVldWUgc2hvdWxkIGNsZWFyIG91dCBhbmQgdGhlIGdvYWwgY2Fubm90IGJlIHJlYWNoZWQuXHJcblx0ICovXHJcblx0YWJzdHJhY3QgcGVyZm9ybShhZ2VudDogR29hcEFnZW50KTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogRG9lcyB0aGlzIGFjdGlvbiBuZWVkIHRvIGJlIHdpdGhpbiByYW5nZSBvZiBhIHRhcmdldCBnYW1lIG9iamVjdD9cclxuXHQgKiBJZiBub3QgdGhlbiB0aGUgbW92ZVRvIHN0YXRlIHdpbGwgbm90IG5lZWQgdG8gcnVuIGZvciB0aGlzIGFjdGlvbi5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCByZXF1aXJlc0luUmFuZ2UoKTogYm9vbGVhbjtcclxuXHJcblxyXG5cdC8qKlxyXG5cdCAqIEFyZSB3ZSBpbiByYW5nZSBvZiB0aGUgdGFyZ2V0P1xyXG5cdCAqIFRoZSBNb3ZlVG8gc3RhdGUgd2lsbCBzZXQgdGhpcyBhbmQgaXQgZ2V0cyByZXNldCBlYWNoIHRpbWUgdGhpcyBhY3Rpb24gaXMgcGVyZm9ybWVkLlxyXG5cdCAqL1xyXG5cdHB1YmxpYyBpc0luUmFuZ2UoKTogYm9vbGVhbiB7XHJcblx0XHRyZXR1cm4gdGhpcy5pblJhbmdlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xyXG5cdFx0dGhpcy5pblJhbmdlID0gaW5SYW5nZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5zZXQoa2V5LCB2YWx1ZSlcclxuXHR9XHJcblxyXG5cdHB1YmxpYyByZW1vdmVQcmVjb25kaXRpb24oa2V5OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuXHRcdHRoaXMuZWZmZWN0cy5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0fVxyXG5cdHB1YmxpYyByZW1vdmVFZmZlY3Qoa2V5OiBzdHJpbmcpIHtcclxuXHRcdHRoaXMuZWZmZWN0cy5kZWxldGUoa2V5KTtcclxuXHR9XHJcblx0cHVibGljIGdldCBQcmVjb25kaXRpb25zKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucHJlY29uZGl0aW9ucztcclxuXHR9XHJcblx0cHVibGljIGdldCBFZmZlY3RzKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZWZmZWN0cztcclxuXHR9XHJcbn0iXX0=