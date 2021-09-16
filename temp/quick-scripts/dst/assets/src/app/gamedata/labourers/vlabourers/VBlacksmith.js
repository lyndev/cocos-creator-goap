
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VBlacksmith.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6fc27eGHPBKt4F9PnFtM0nj', 'VBlacksmith');
// src/app/gamedata/labourers/vlabourers/VBlacksmith.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VBlacksmith = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 铁匠
 * @Author: RannarYang
 * @Date: 2018-11-03 12:13:59
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:16:30
 */
var VBlacksmith = /** @class */ (function (_super) {
    __extends(VBlacksmith, _super);
    function VBlacksmith() {
        return _super.call(this) || this;
    }
    return VBlacksmith;
}(VLabourer_1.VLabourer));
exports.VBlacksmith = VBlacksmith;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZCbGFja3NtaXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxhY2tzbWl0aCB9IGZyb20gXCIuLi9CbGFja3NtaXRoXCI7XG5pbXBvcnQgeyBWTGFib3VyZXIgfSBmcm9tIFwiLi9WTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog6ZOB5YygXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTkgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNjozMFxuICovXG5leHBvcnQgY2xhc3MgVkJsYWNrc21pdGggZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IEJsYWNrc21pdGg7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19