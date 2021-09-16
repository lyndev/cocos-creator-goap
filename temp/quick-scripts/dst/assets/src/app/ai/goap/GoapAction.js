
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
        /* The cost of performing the action.
         * Figure out a weight that suits the action.
         * Changing it will affect what actions are chosen during planning.*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvR29hcEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTs7Ozs7O0dBTUc7QUFDSDtJQWVDO1FBWFEsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUVqQzs7NkVBRXFFO1FBQzlELFNBQUksR0FBVyxDQUFDLENBQUM7UUFPdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLEdBQUcsRUFBd0IsQ0FBQztRQUNyRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF3QixDQUFDO0lBQ2hELENBQUM7SUFFTSw0QkFBTyxHQUFkO1FBQ0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQWdDRDs7O09BR0c7SUFDSSw4QkFBUyxHQUFoQjtRQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUNyQixDQUFDO0lBRU0sK0JBQVUsR0FBakIsVUFBa0IsT0FBZ0I7UUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVNLG9DQUFlLEdBQXRCLFVBQXVCLEdBQVcsRUFBRSxLQUFVO1FBQzdDLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sdUNBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ00saUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0Qsc0JBQVcscUNBQWE7YUFBeEI7WUFDQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFDRCxzQkFBVywrQkFBTzthQUFsQjtZQUNDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUNGLGlCQUFDO0FBQUQsQ0F4RkEsQUF3RkMsSUFBQTtBQXhGcUIsZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWR2FtZU9iamVjdCB9IGZyb20gXCIuLi8uLi9iYXNlL1ZHYW1lT2JqZWN0XCI7XG5pbXBvcnQgeyBBY3Rpb25TdGF0dXMgfSBmcm9tIFwiLi9BY3Rpb25TdGF0dXNcIjtcbmltcG9ydCB7IElHb2FwIH0gZnJvbSBcIi4vSUdvYXBcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjogXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MjYgXG4gKiBATGFzdCBNb2RpZmllZCBieTogICBSYW5uYXJZYW5nIFxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wOS0wNiAwMDowOToyNiBcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdvYXBBY3Rpb24ge1xuXHRwcml2YXRlIHByZWNvbmRpdGlvbnM6IE1hcDxBY3Rpb25TdGF0dXMsIE9iamVjdD47XG5cdHByaXZhdGUgZWZmZWN0czogTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PjtcblxuXHRwcml2YXRlIGluUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuXHQvKiBUaGUgY29zdCBvZiBwZXJmb3JtaW5nIHRoZSBhY3Rpb24uIFxuXHQgKiBGaWd1cmUgb3V0IGEgd2VpZ2h0IHRoYXQgc3VpdHMgdGhlIGFjdGlvbi4gXG5cdCAqIENoYW5naW5nIGl0IHdpbGwgYWZmZWN0IHdoYXQgYWN0aW9ucyBhcmUgY2hvc2VuIGR1cmluZyBwbGFubmluZy4qL1xuXHRwdWJsaWMgY29zdDogbnVtYmVyID0gMTtcblxuXHQvKipcblx0ICogQW4gYWN0aW9uIG9mdGVuIGhhcyB0byBwZXJmb3JtIG9uIGFuIG9iamVjdC4gVGhpcyBpcyB0aGF0IG9iamVjdC4gQ2FuIGJlIG51bGwuICovXG5cdHB1YmxpYyB0YXJnZXQ6IFZHYW1lT2JqZWN0O1xuXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLnByZWNvbmRpdGlvbnMgPSBuZXcgTWFwPEFjdGlvblN0YXR1cywgT2JqZWN0PigpO1xuXHRcdHRoaXMuZWZmZWN0cyA9IG5ldyBNYXA8QWN0aW9uU3RhdHVzLCBPYmplY3Q+KCk7XG5cdH1cblxuXHRwdWJsaWMgZG9SZXNldCgpIHtcblx0XHR0aGlzLmluUmFuZ2UgPSBmYWxzZTtcblx0XHR0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5yZXNldCgpO1xuXHR9XG5cdC8qKlxuXHQgKiBSZXNldCBhbnkgdmFyaWFibGVzIHRoYXQgbmVlZCB0byBiZSByZXNldCBiZWZvcmUgcGxhbm5pbmcgaGFwcGVucyBhZ2Fpbi5cblx0ICovXG5cdGFic3RyYWN0IHJlc2V0KCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIElzIHRoZSBhY3Rpb24gZG9uZT9cblx0ICovXG5cdGFic3RyYWN0IGlzRG9uZSgpOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBQcm9jZWR1cmFsbHkgY2hlY2sgaWYgdGhpcyBhY3Rpb24gY2FuIHJ1bi4gTm90IGFsbCBhY3Rpb25zXG5cdCAqIHdpbGwgbmVlZCB0aGlzLCBidXQgc29tZSBtaWdodC5cblx0ICovXG5cdGFic3RyYWN0IGNoZWNrUHJvY2VkdXJhbFByZWNvbmRpdGlvbihhZ2VudDogVkdhbWVPYmplY3QpOiBib29sZWFuO1xuXG5cdC8qKlxuXHQgKiBSdW4gdGhlIGFjdGlvbi5cblx0ICogUmV0dXJucyBUcnVlIGlmIHRoZSBhY3Rpb24gcGVyZm9ybWVkIHN1Y2Nlc3NmdWxseSBvciBmYWxzZVxuXHQgKiBpZiBzb21ldGhpbmcgaGFwcGVuZWQgYW5kIGl0IGNhbiBubyBsb25nZXIgcGVyZm9ybS4gSW4gdGhpcyBjYXNlXG5cdCAqIHRoZSBhY3Rpb24gcXVldWUgc2hvdWxkIGNsZWFyIG91dCBhbmQgdGhlIGdvYWwgY2Fubm90IGJlIHJlYWNoZWQuXG5cdCAqL1xuXHRhYnN0cmFjdCBwZXJmb3JtKGlHb2FwOiBJR29hcCk6IGJvb2xlYW47XG5cblx0LyoqXG5cdCAqIERvZXMgdGhpcyBhY3Rpb24gbmVlZCB0byBiZSB3aXRoaW4gcmFuZ2Ugb2YgYSB0YXJnZXQgZ2FtZSBvYmplY3Q/XG5cdCAqIElmIG5vdCB0aGVuIHRoZSBtb3ZlVG8gc3RhdGUgd2lsbCBub3QgbmVlZCB0byBydW4gZm9yIHRoaXMgYWN0aW9uLlxuXHQgKi9cblx0YWJzdHJhY3QgcmVxdWlyZXNJblJhbmdlKCk6IGJvb2xlYW47XG5cblxuXHQvKipcblx0ICogQXJlIHdlIGluIHJhbmdlIG9mIHRoZSB0YXJnZXQ/XG5cdCAqIFRoZSBNb3ZlVG8gc3RhdGUgd2lsbCBzZXQgdGhpcyBhbmQgaXQgZ2V0cyByZXNldCBlYWNoIHRpbWUgdGhpcyBhY3Rpb24gaXMgcGVyZm9ybWVkLlxuXHQgKi9cblx0cHVibGljIGlzSW5SYW5nZSgpOiBib29sZWFuIHtcblx0XHRyZXR1cm4gdGhpcy5pblJhbmdlO1xuXHR9XG5cblx0cHVibGljIHNldEluUmFuZ2UoaW5SYW5nZTogYm9vbGVhbik6IHZvaWQge1xuXHRcdHRoaXMuaW5SYW5nZSA9IGluUmFuZ2U7XG5cdH1cblxuXHRwdWJsaWMgYWRkUHJlY29uZGl0aW9uKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG5cdFx0dGhpcy5wcmVjb25kaXRpb25zLnNldChrZXksIHZhbHVlKVxuXHR9XG5cblx0cHVibGljIHJlbW92ZVByZWNvbmRpdGlvbihrZXk6IHN0cmluZykge1xuXHRcdHRoaXMucHJlY29uZGl0aW9ucy5kZWxldGUoa2V5KTtcblx0fVxuXG5cdHB1YmxpYyBhZGRFZmZlY3Qoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcblx0XHR0aGlzLmVmZmVjdHMuc2V0KGtleSwgdmFsdWUpO1xuXHR9XG5cdHB1YmxpYyByZW1vdmVFZmZlY3Qoa2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLmVmZmVjdHMuZGVsZXRlKGtleSk7XG5cdH1cblx0cHVibGljIGdldCBQcmVjb25kaXRpb25zKCkge1xuXHRcdHJldHVybiB0aGlzLnByZWNvbmRpdGlvbnM7XG5cdH1cblx0cHVibGljIGdldCBFZmZlY3RzKCkge1xuXHRcdHJldHVybiB0aGlzLmVmZmVjdHM7XG5cdH1cbn0iXX0=