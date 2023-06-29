
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2FpL2dvYXAvSUdvYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBARGVzY3JpcHRpb246IFxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcbiAqIEBEYXRlOiAyMDE4LTA5LTA2IDAwOjA5OjM4IFxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDktMDYgMDA6MDk6MzggXG4gKi9cblxuaW1wb3J0IHsgR29hcEFjdGlvbiB9IGZyb20gXCIuL0dvYXBBY3Rpb25cIjtcblxuLyoqXG4gKiBBbnkgYWdlbnQgdGhhdCB3YW50cyB0byB1c2UgR09BUCBtdXN0IGltcGxlbWVudFxuICogdGhpcyBpbnRlcmZhY2UuIEl0IHByb3ZpZGVzIGluZm9ybWF0aW9uIHRvIHRoZSBHT0FQXG4gKiBwbGFubmVyIHNvIGl0IGNhbiBwbGFuIHdoYXQgYWN0aW9ucyB0byB1c2UuXG4gKiBcbiAqIEl0IGFsc28gcHJvdmlkZXMgYW4gaW50ZXJmYWNlIGZvciB0aGUgcGxhbm5lciB0byBnaXZlIFxuICogZmVlZGJhY2sgdG8gdGhlIEFnZW50IGFuZCByZXBvcnQgc3VjY2Vzcy9mYWlsdXJlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFx0SUdvYXAge1xuXHQvKipcblx0ICogVGhlIHN0YXJ0aW5nIHN0YXRlIG9mIHRoZSBBZ2VudCBhbmQgdGhlIHdvcmxkLlxuXHQgKiBTdXBwbHkgd2hhdCBzdGF0ZXMgYXJlIG5lZWRlZCBmb3IgYWN0aW9ucyB0byBydW4uXG5cdCAqL1xuXHRnZXRXb3JsZFN0YXRlKCk6IE1hcDxzdHJpbmcsIE9iamVjdD47XG5cblx0Z2V0QXZhbGlhYmxlQWN0aW9ucygpOiBHb2FwQWN0aW9uW107XG5cblx0LyoqXG5cdCAqIEdpdmUgdGhlIHBsYW5uZXIgYSBuZXcgZ29hbCBzbyBpdCBjYW4gZmlndXJlIG91dCBcblx0ICogdGhlIGFjdGlvbnMgbmVlZGVkIHRvIGZ1bGZpbGwgaXQuXG5cdCAqL1xuXHRjcmVhdGVHb2FsU3RhdGUoKTogTWFwPHN0cmluZywgT2JqZWN0PjtcblxuXHQvKipcblx0ICogTm8gc2VxdWVuY2Ugb2YgYWN0aW9ucyBjb3VsZCBiZSBmb3VuZCBmb3IgdGhlIHN1cHBsaWVkIGdvYWwuXG5cdCAqIFlvdSB3aWxsIG5lZWQgdG8gdHJ5IGFub3RoZXIgZ29hbFxuXHQgKi9cblx0cGxhbkZhaWxlZChmYWlsZWRHb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+KTogdm9pZDtcblxuXHQvKipcblx0ICogQSBwbGFuIHdhcyBmb3VuZCBmb3IgdGhlIHN1cHBsaWVkIGdvYWwuXG5cdCAqIFRoZXNlIGFyZSB0aGUgYWN0aW9ucyB0aGUgQWdlbnQgd2lsbCBwZXJmb3JtLCBpbiBvcmRlci5cblx0ICovXG5cdHBsYW5Gb3VuZChnb2FsOiBNYXA8c3RyaW5nLCBPYmplY3Q+LCBhY3Rpb25zOiBHb2FwQWN0aW9uW10pOiB2b2lkO1xuXG5cdC8qKlxuXHQgKiBBbGwgYWN0aW9ucyBhcmUgY29tcGxldGUgYW5kIHRoZSBnb2FsIHdhcyByZWFjaGVkLiBIb29yYXkhXG5cdCAqL1xuXHRhY3Rpb25zRmluaXNoZWQoKTogdm9pZDtcblxuXHQvKipcblx0ICogT25lIG9mIHRoZSBhY3Rpb25zIGNhdXNlZCB0aGUgcGxhbiB0byBhYm9ydC5cblx0ICogVGhhdCBhY3Rpb24gaXMgcmV0dXJuZWQuXG5cdCAqL1xuXHRwbGFuQWJvcnRlZChhYm9ydGVyOiBHb2FwQWN0aW9uKTogdm9pZDtcblxuXHQvKipcblx0ICogQ2FsbGVkIGR1cmluZyBVcGRhdGUuIE1vdmUgdGhlIGFnZW50IHRvd2FyZHMgdGhlIHRhcmdldCBpbiBvcmRlclxuXHQgKiBmb3IgdGhlIG5leHQgYWN0aW9uIHRvIGJlIGFibGUgdG8gcGVyZm9ybS5cblx0ICogUmV0dXJuIHRydWUgaWYgdGhlIEFnZW50IGlzIGF0IHRoZSB0YXJnZXQgYW5kIHRoZSBuZXh0IGFjdGlvbiBjYW4gcGVyZm9ybS5cblx0ICogRmFsc2UgaWYgaXQgaXMgbm90IHRoZXJlIHlldC5cblx0ICovXG5cdG1vdmVBZ2VudChuZXh0QWN0aW9uOiBHb2FwQWN0aW9uLCBkZWx0YTogbnVtYmVyKTogYm9vbGVhbjtcbn0iXX0=