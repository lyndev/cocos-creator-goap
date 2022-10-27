
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BOzs7Ozs7R0FNRztBQUNIO0lBZ0JDO1FBWlEsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVqQzs7NkJBRXFCO1FBQ2QsU0FBSSxHQUFXLENBQUMsQ0FBQztRQVF2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFDaEQsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBZ0NEOzs7T0FHRztJQUNJLDhCQUFTLEdBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixPQUFnQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEtBQVU7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTSx1Q0FBa0IsR0FBekIsVUFBMEIsR0FBVztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQVU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxpQ0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQkFBVyxxQ0FBYTthQUF4QjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLCtCQUFPO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0YsaUJBQUM7QUFBRCxDQXpGQSxBQXlGQyxJQUFBO0FBekZxQixnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbnRpdHkgZnJvbSBcIi4uLy4uLy4uLy4uL2dvYXAvRW50aXR5XCI7XHJcbmltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IEdvYXBBZ2VudCB9IGZyb20gXCIuL0dvYXBBZ2VudFwiO1xyXG5pbXBvcnQgeyBJR29hcCB9IGZyb20gXCIuL0lHb2FwXCI7XHJcblxyXG4vKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0wOS0wNiAwMDowOToyNiBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wOS0wNiAwMDowOToyNiBcclxuICovXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBHb2FwQWN0aW9uIHtcclxuXHRwcml2YXRlIHByZWNvbmRpdGlvbnM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD47XHJcblx0cHJpdmF0ZSBlZmZlY3RzOiBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+O1xyXG5cclxuXHRwcml2YXRlIGluUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcblx0Lyog5omn6KGM5Yqo5L2c55qE5oiQ5pys44CCXHJcblx0KiDmib7lh7rpgILlkIjliqjkvZznmoTph43ph4/jgIJcclxuXHQqIOabtOaUueWug+WwhuW9seWTjeWcqOiuoeWIkuacn+mXtOmAieaLqeeahOaTjeS9nOOAgiovXHJcblx0cHVibGljIGNvc3Q6IG51bWJlciA9IDE7XHJcblxyXG5cclxuXHQvKipcclxuXHQqIOS4gOS4quWKqOS9nOmAmuW4uOW/hemhu+WcqOS4gOS4quWvueixoeS4iuaJp+ihjOOAgui/meWwseaYr+mCo+S4quWvueixoeOAguWPr+S7peS4uuepuuOAgiAqL1xyXG5cdHB1YmxpYyB0YXJnZXQ6IFZHYW1lT2JqZWN0O1xyXG5cclxuXHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLnByZWNvbmRpdGlvbnMgPSBuZXcgTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PigpO1xyXG5cdFx0dGhpcy5lZmZlY3RzID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBkb1Jlc2V0KCkge1xyXG5cdFx0dGhpcy5pblJhbmdlID0gZmFsc2U7XHJcblx0XHR0aGlzLnRhcmdldCA9IG51bGw7XHJcblx0XHR0aGlzLnJlc2V0KCk7XHJcblx0fVxyXG5cdC8qKlxyXG5cdCAqIFJlc2V0IGFueSB2YXJpYWJsZXMgdGhhdCBuZWVkIHRvIGJlIHJlc2V0IGJlZm9yZSBwbGFubmluZyBoYXBwZW5zIGFnYWluLlxyXG5cdCAqL1xyXG5cdGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElzIHRoZSBhY3Rpb24gZG9uZT9cclxuXHQgKi9cclxuXHRhYnN0cmFjdCBpc0RvbmUoKTogYm9vbGVhbjtcclxuXHJcblx0LyoqXHJcblx0ICogUHJvY2VkdXJhbGx5IGNoZWNrIGlmIHRoaXMgYWN0aW9uIGNhbiBydW4uIE5vdCBhbGwgYWN0aW9uc1xyXG5cdCAqIHdpbGwgbmVlZCB0aGlzLCBidXQgc29tZSBtaWdodC5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCBjaGVja1Byb2NlZHVyYWxQcmVjb25kaXRpb24oYWdlbnQ6IEdvYXBBZ2VudCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1biB0aGUgYWN0aW9uLlxyXG5cdCAqIFJldHVybnMgVHJ1ZSBpZiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2VcclxuXHQgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXHJcblx0ICogdGhlIGFjdGlvbiBxdWV1ZSBzaG91bGQgY2xlYXIgb3V0IGFuZCB0aGUgZ29hbCBjYW5ub3QgYmUgcmVhY2hlZC5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCBwZXJmb3JtKGFnZW50OiBHb2FwQWdlbnQpOiBib29sZWFuO1xyXG5cclxuXHQvKipcclxuXHQgKiBEb2VzIHRoaXMgYWN0aW9uIG5lZWQgdG8gYmUgd2l0aGluIHJhbmdlIG9mIGEgdGFyZ2V0IGdhbWUgb2JqZWN0P1xyXG5cdCAqIElmIG5vdCB0aGVuIHRoZSBtb3ZlVG8gc3RhdGUgd2lsbCBub3QgbmVlZCB0byBydW4gZm9yIHRoaXMgYWN0aW9uLlxyXG5cdCAqL1xyXG5cdGFic3RyYWN0IHJlcXVpcmVzSW5SYW5nZSgpOiBib29sZWFuO1xyXG5cclxuXHJcblx0LyoqXHJcblx0ICogQXJlIHdlIGluIHJhbmdlIG9mIHRoZSB0YXJnZXQ/XHJcblx0ICogVGhlIE1vdmVUbyBzdGF0ZSB3aWxsIHNldCB0aGlzIGFuZCBpdCBnZXRzIHJlc2V0IGVhY2ggdGltZSB0aGlzIGFjdGlvbiBpcyBwZXJmb3JtZWQuXHJcblx0ICovXHJcblx0cHVibGljIGlzSW5SYW5nZSgpOiBib29sZWFuIHtcclxuXHRcdHJldHVybiB0aGlzLmluUmFuZ2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2V0SW5SYW5nZShpblJhbmdlOiBib29sZWFuKTogdm9pZCB7XHJcblx0XHR0aGlzLmluUmFuZ2UgPSBpblJhbmdlO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZFByZWNvbmRpdGlvbihrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5wcmVjb25kaXRpb25zLnNldChrZXksIHZhbHVlKVxyXG5cdH1cclxuXHJcblx0cHVibGljIHJlbW92ZVByZWNvbmRpdGlvbihrZXk6IHN0cmluZykge1xyXG5cdFx0dGhpcy5wcmVjb25kaXRpb25zLmRlbGV0ZShrZXkpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIGFkZEVmZmVjdChrZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG5cdFx0dGhpcy5lZmZlY3RzLnNldChrZXksIHZhbHVlKTtcclxuXHR9XHJcblx0cHVibGljIHJlbW92ZUVmZmVjdChrZXk6IHN0cmluZykge1xyXG5cdFx0dGhpcy5lZmZlY3RzLmRlbGV0ZShrZXkpO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0IFByZWNvbmRpdGlvbnMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5wcmVjb25kaXRpb25zO1xyXG5cdH1cclxuXHRwdWJsaWMgZ2V0IEVmZmVjdHMoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5lZmZlY3RzO1xyXG5cdH1cclxufSJdfQ==