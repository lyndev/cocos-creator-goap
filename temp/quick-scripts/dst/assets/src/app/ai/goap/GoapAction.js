
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxHb2FwQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlBOzs7Ozs7R0FNRztBQUNIO0lBZ0JDO1FBWlEsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVqQzs7NkJBRXFCO1FBQ2QsU0FBSSxHQUFXLENBQUMsQ0FBQztRQVF2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO1FBQ3JELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLEVBQXdCLENBQUM7SUFDaEQsQ0FBQztJQUVNLDRCQUFPLEdBQWQ7UUFDQyxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBZ0NEOzs7T0FHRztJQUNJLDhCQUFTLEdBQWhCO1FBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3JCLENBQUM7SUFFTSwrQkFBVSxHQUFqQixVQUFrQixPQUFnQjtRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBRU0sb0NBQWUsR0FBdEIsVUFBdUIsR0FBVyxFQUFFLEtBQVU7UUFDN0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ25DLENBQUM7SUFFTSx1Q0FBa0IsR0FBekIsVUFBMEIsR0FBVztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sOEJBQVMsR0FBaEIsVUFBaUIsR0FBVyxFQUFFLEtBQVU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFDTSxpQ0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzlCLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFDRCxzQkFBVyxxQ0FBYTthQUF4QjtZQUNDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUNELHNCQUFXLCtCQUFPO2FBQWxCO1lBQ0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBQ0YsaUJBQUM7QUFBRCxDQXpGQSxBQXlGQyxJQUFBO0FBekZxQixnQ0FBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZHYW1lT2JqZWN0IH0gZnJvbSBcIi4uLy4uL2Jhc2UvVkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQWN0aW9uU3RhdHVzIH0gZnJvbSBcIi4vQWN0aW9uU3RhdHVzXCI7XHJcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIjtcclxuXHJcbi8qXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqIEBBdXRob3I6IFJhbm5hcllhbmcgXHJcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjI2IFxyXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSYW5uYXJZYW5nIFxyXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA5LTA2IDAwOjA5OjI2IFxyXG4gKi9cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdvYXBBY3Rpb24ge1xyXG5cdHByaXZhdGUgcHJlY29uZGl0aW9uczogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcclxuXHRwcml2YXRlIGVmZmVjdHM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD47XHJcblxyXG5cdHByaXZhdGUgaW5SYW5nZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHQvKiDmiafooYzliqjkvZznmoTmiJDmnKzjgIJcclxuXHQqIOaJvuWHuumAguWQiOWKqOS9nOeahOmHjemHj+OAglxyXG5cdCog5pu05pS55a6D5bCG5b2x5ZON5Zyo6K6h5YiS5pyf6Ze06YCJ5oup55qE5pON5L2c44CCKi9cclxuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMTtcclxuXHJcblx0XHJcblx0LyoqXHJcblx0KiDkuIDkuKrliqjkvZzpgJrluLjlv4XpobvlnKjkuIDkuKrlr7nosaHkuIrmiafooYzjgILov5nlsLHmmK/pgqPkuKrlr7nosaHjgILlj6/ku6XkuLrnqbrjgIIgKi9cclxuXHRwdWJsaWMgdGFyZ2V0OiBWR2FtZU9iamVjdDtcclxuXHJcblx0cHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5wcmVjb25kaXRpb25zID0gbmV3IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD4oKTtcclxuXHRcdHRoaXMuZWZmZWN0cyA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgZG9SZXNldCgpIHtcclxuXHRcdHRoaXMuaW5SYW5nZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy50YXJnZXQgPSBudWxsO1xyXG5cdFx0dGhpcy5yZXNldCgpO1xyXG5cdH1cclxuXHQvKipcclxuXHQgKiBSZXNldCBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSByZXNldCBiZWZvcmUgcGxhbm5pbmcgaGFwcGVucyBhZ2Fpbi5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCByZXNldCgpOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBJcyB0aGUgYWN0aW9uIGRvbmU/XHJcblx0ICovXHJcblx0YWJzdHJhY3QgaXNEb25lKCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFByb2NlZHVyYWxseSBjaGVjayBpZiB0aGlzIGFjdGlvbiBjYW4gcnVuLiBOb3QgYWxsIGFjdGlvbnNcclxuXHQgKiB3aWxsIG5lZWQgdGhpcywgYnV0IHNvbWUgbWlnaHQuXHJcblx0ICovXHJcblx0YWJzdHJhY3QgY2hlY2tQcm9jZWR1cmFsUHJlY29uZGl0aW9uKGFnZW50OiBWR2FtZU9iamVjdCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJ1biB0aGUgYWN0aW9uLlxyXG5cdCAqIFJldHVybnMgVHJ1ZSBpZiB0aGUgYWN0aW9uIHBlcmZvcm1lZCBzdWNjZXNzZnVsbHkgb3IgZmFsc2VcclxuXHQgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXHJcblx0ICogdGhlIGFjdGlvbiBxdWV1ZSBzaG91bGQgY2xlYXIgb3V0IGFuZCB0aGUgZ29hbCBjYW5ub3QgYmUgcmVhY2hlZC5cclxuXHQgKi9cclxuXHRhYnN0cmFjdCBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW47XHJcblxyXG5cdC8qKlxyXG5cdCAqIERvZXMgdGhpcyBhY3Rpb24gbmVlZCB0byBiZSB3aXRoaW4gcmFuZ2Ugb2YgYSB0YXJnZXQgZ2FtZSBvYmplY3Q/XHJcblx0ICogSWYgbm90IHRoZW4gdGhlIG1vdmVUbyBzdGF0ZSB3aWxsIG5vdCBuZWVkIHRvIHJ1biBmb3IgdGhpcyBhY3Rpb24uXHJcblx0ICovXHJcblx0YWJzdHJhY3QgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW47XHJcblxyXG5cclxuXHQvKipcclxuXHQgKiBBcmUgd2UgaW4gcmFuZ2Ugb2YgdGhlIHRhcmdldD9cclxuXHQgKiBUaGUgTW92ZVRvIHN0YXRlIHdpbGwgc2V0IHRoaXMgYW5kIGl0IGdldHMgcmVzZXQgZWFjaCB0aW1lIHRoaXMgYWN0aW9uIGlzIHBlcmZvcm1lZC5cclxuXHQgKi9cclxuXHRwdWJsaWMgaXNJblJhbmdlKCk6IGJvb2xlYW4ge1xyXG5cdFx0cmV0dXJuIHRoaXMuaW5SYW5nZTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZXRJblJhbmdlKGluUmFuZ2U6IGJvb2xlYW4pOiB2b2lkIHtcclxuXHRcdHRoaXMuaW5SYW5nZSA9IGluUmFuZ2U7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkUHJlY29uZGl0aW9uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLnByZWNvbmRpdGlvbnMuc2V0KGtleSwgdmFsdWUpXHJcblx0fVxyXG5cclxuXHRwdWJsaWMgcmVtb3ZlUHJlY29uZGl0aW9uKGtleTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnByZWNvbmRpdGlvbnMuZGVsZXRlKGtleSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgYWRkRWZmZWN0KGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcblx0XHR0aGlzLmVmZmVjdHMuc2V0KGtleSwgdmFsdWUpO1xyXG5cdH1cclxuXHRwdWJsaWMgcmVtb3ZlRWZmZWN0KGtleTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLmVmZmVjdHMuZGVsZXRlKGtleSk7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXQgUHJlY29uZGl0aW9ucygpIHtcclxuXHRcdHJldHVybiB0aGlzLnByZWNvbmRpdGlvbnM7XHJcblx0fVxyXG5cdHB1YmxpYyBnZXQgRWZmZWN0cygpIHtcclxuXHRcdHJldHVybiB0aGlzLmVmZmVjdHM7XHJcblx0fVxyXG59Il19