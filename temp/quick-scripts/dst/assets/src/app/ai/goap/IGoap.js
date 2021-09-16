
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/ai/goap/IGoap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdc7dNcI0ZNtrT9XLEK2oCk', 'IGoap');
// src/app/ai/goap/IGoap.ts

"use strict";
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-09-06 00:09:38
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-09-06 00:09:38
 */
Object.defineProperty(exports, "__esModule", { value: true });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvSUdvYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXG4gKi9cblxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcblxuLyoqXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxuICogdGhpcyBpbnRlcmZhY2UuIEl0IHByb3ZpZGVzIGluZm9ybWF0aW9uIHRvIHRoZSBHT0FQXG4gKiBwbGFubmVyIHNvIGl0IGNhbiBwbGFuIHdoYXQgYWN0aW9ucyB0byB1c2UuXG4gKiBcbiAqIEl0IGFsc28gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciB0aGUgcGxhbm5lciB0byBnaXZlIFxuICogZmVlZGJhY2sgdG8gdGhlIEFnZW50IGFuZCByZXBvcnQgc3VjY2Vzcy9mYWlsdXJlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElHb2FwIHtcblx0LyoqXG5cdCAqIFRoZSBzdGFydGluZyBzdGF0ZSBvZiB0aGUgQWdlbnQgYW5kIHRoZSB3b3JsZC5cblx0ICogU3VwcGx5IHdoYXQgc3RhdGVzIGFyZSBuZWVkZWQgZm9yIGFjdGlvbnMgdG8gcnVuLlxuXHQgKi9cblx0Z2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xuXG5cdGdldEF2YWxpYWJsZUFjdGlvbnMoKTogR29hcEFjdGlvbltdO1xuXG5cdC8qKlxuXHQgKiBHaXZlIHRoZSBwbGFubmVyIGEgbmV3IGdvYWwgc28gaXQgY2FuIGZpZ3VyZSBvdXQgXG5cdCAqIHRoZSBhY3Rpb25zIG5lZWRlZCB0byBmdWxmaWxsIGl0LlxuXHQgKi9cblx0Y3JlYXRlR29hbFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD47XG5cblx0LyoqXG5cdCAqIE5vIHNlcXVlbmNlIG9mIGFjdGlvbnMgY291bGQgYmUgZm91bmQgZm9yIHRoZSBzdXBwbGllZCBnb2FsLlxuXHQgKiBZb3Ugd2lsbCBuZWVkIHRvIHRyeSBhbm90aGVyIGdvYWxcblx0ICovXG5cdHBsYW5GYWlsZWQoZmFpbGVkR29hbDogTWFwPHN0cmluZywgT2JqZWN0Pik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIEEgcGxhbiB3YXMgZm91bmQgZm9yIHRoZSBzdXBwbGllZCBnb2FsLlxuXHQgKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgdGhlIEFnZW50IHdpbGwgcGVyZm9ybSwgaW4gb3JkZXIuXG5cdCAqL1xuXHRwbGFuRm91bmQoZ29hbDogTWFwPHN0cmluZywgT2JqZWN0PiwgYWN0aW9uczogR29hcEFjdGlvbltdKTogdm9pZDtcblxuXHQvKipcblx0ICogQWxsIGFjdGlvbnMgYXJlIGNvbXBsZXRlIGFuZCB0aGUgZ29hbCB3YXMgcmVhY2hlZC4gSG9vcmF5IVxuXHQgKi9cblx0YWN0aW9uc0ZpbmlzaGVkKCk6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIE9uZSBvZiB0aGUgYWN0aW9ucyBjYXVzZWQgdGhlIHBsYW4gdG8gYWJvcnQuXG5cdCAqIFRoYXQgYWN0aW9uIGlzIHJldHVybmVkLlxuXHQgKi9cblx0cGxhbkFib3J0ZWQoYWJvcnRlcjogR29hcEFjdGlvbik6IHZvaWQ7XG5cblx0LyoqXG5cdCAqIENhbGxlZCBkdXJpbmcgVXBkYXRlLiBNb3ZlIHRoZSBhZ2VudCB0b3dhcmRzIHRoZSB0YXJnZXQgaW4gb3JkZXJcblx0ICogZm9yIHRoZSBuZXh0IGFjdGlvbiB0byBiZSBhYmxlIHRvIHBlcmZvcm0uXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBBZ2VudCBpcyBhdCB0aGUgdGFyZ2V0IGFuZCB0aGUgbmV4dCBhY3Rpb24gY2FuIHBlcmZvcm0uXG5cdCAqIEZhbHNlIGlmIGl0IGlzIG5vdCB0aGVyZSB5ZXQuXG5cdCAqL1xuXHRtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW47XG59Il19