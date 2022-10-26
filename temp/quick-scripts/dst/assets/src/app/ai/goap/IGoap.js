
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGFpXFxnb2FwXFxJR29hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztHQU1HIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICogQERlc2NyaXB0aW9uOiBcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMDktMDYgMDA6MDk6MzggXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIFJhbm5hcllhbmcgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcclxuXHJcbi8qKlxyXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxyXG4gKiB0aGlzIGludGVyZmFjZS4gSXQgcHJvdmlkZXMgaW5mb3JtYXRpb24gdG8gdGhlIEdPQVBcclxuICogcGxhbm5lciBzbyBpdCBjYW4gcGxhbiB3aGF0IGFjdGlvbnMgdG8gdXNlLlxyXG4gKiBcclxuICogSXQgYWxzbyBwcm92aWRlcyBhbiBpbnRlcmZhY2UgZm9yIHRoZSBwbGFubmVyIHRvIGdpdmUgXHJcbiAqIGZlZWRiYWNrIHRvIHRoZSBBZ2VudCBhbmQgcmVwb3J0IHN1Y2Nlc3MvZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdvYXAge1xyXG5cdC8qKlxyXG5cdCAqIFRoZSBzdGFydGluZyBzdGF0ZSBvZiB0aGUgQWdlbnQgYW5kIHRoZSB3b3JsZC5cclxuXHQgKiBTdXBwbHkgd2hhdCBzdGF0ZXMgYXJlIG5lZWRlZCBmb3IgYWN0aW9ucyB0byBydW4uXHJcblx0ICovXHJcblx0Z2V0V29ybGRTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xyXG5cclxuXHRnZXRBdmFsaWFibGVBY3Rpb25zKCk6IEdvYXBBY3Rpb25bXTtcclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZSB0aGUgcGxhbm5lciBhIG5ldyBnb2FsIHNvIGl0IGNhbiBmaWd1cmUgb3V0IFxyXG5cdCAqIHRoZSBhY3Rpb25zIG5lZWRlZCB0byBmdWxmaWxsIGl0LlxyXG5cdCAqL1xyXG5cdGNyZWF0ZUdvYWxTdGF0ZSgpOiBNYXA8c3RyaW5nLCBPYmplY3Q+O1xyXG5cclxuXHQvKipcclxuXHQgKiBObyBzZXF1ZW5jZSBvZiBhY3Rpb25zIGNvdWxkIGJlIGZvdW5kIGZvciB0aGUgc3VwcGxpZWQgZ29hbC5cclxuXHQgKiBZb3Ugd2lsbCBuZWVkIHRvIHRyeSBhbm90aGVyIGdvYWxcclxuXHQgKi9cclxuXHRwbGFuRmFpbGVkKGZhaWxlZEdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4pOiB2b2lkO1xyXG5cclxuXHQvKipcclxuXHQgKiBBIHBsYW4gd2FzIGZvdW5kIGZvciB0aGUgc3VwcGxpZWQgZ29hbC5cclxuXHQgKiBUaGVzZSBhcmUgdGhlIGFjdGlvbnMgdGhlIEFnZW50IHdpbGwgcGVyZm9ybSwgaW4gb3JkZXIuXHJcblx0ICovXHJcblx0cGxhbkZvdW5kKGdvYWw6IE1hcDxzdHJpbmcsIE9iamVjdD4sIGFjdGlvbnM6IEdvYXBBY3Rpb25bXSk6IHZvaWQ7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFsbCBhY3Rpb25zIGFyZSBjb21wbGV0ZSBhbmQgdGhlIGdvYWwgd2FzIHJlYWNoZWQuIEhvb3JheSFcclxuXHQgKi9cclxuXHRhY3Rpb25zRmluaXNoZWQoKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogT25lIG9mIHRoZSBhY3Rpb25zIGNhdXNlZCB0aGUgcGxhbiB0byBhYm9ydC5cclxuXHQgKiBUaGF0IGFjdGlvbiBpcyByZXR1cm5lZC5cclxuXHQgKi9cclxuXHRwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZDtcclxuXHJcblx0LyoqXHJcblx0ICogQ2FsbGVkIGR1cmluZyBVcGRhdGUuIE1vdmUgdGhlIGFnZW50IHRvd2FyZHMgdGhlIHRhcmdldCBpbiBvcmRlclxyXG5cdCAqIGZvciB0aGUgbmV4dCBhY3Rpb24gdG8gYmUgYWJsZSB0byBwZXJmb3JtLlxyXG5cdCAqIFJldHVybiB0cnVlIGlmIHRoZSBBZ2VudCBpcyBhdCB0aGUgdGFyZ2V0IGFuZCB0aGUgbmV4dCBhY3Rpb24gY2FuIHBlcmZvcm0uXHJcblx0ICogRmFsc2UgaWYgaXQgaXMgbm90IHRoZXJlIHlldC5cclxuXHQgKi9cclxuXHRtb3ZlQWdlbnQobmV4dEFjdGlvbjogR29hcEFjdGlvbiwgZGVsdGE6IG51bWJlcik6IGJvb2xlYW47XHJcbn0iXX0=