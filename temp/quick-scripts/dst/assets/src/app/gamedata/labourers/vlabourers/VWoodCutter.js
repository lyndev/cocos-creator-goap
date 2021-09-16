
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VWoodCutter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '20744NAa29Glpqjazi0V1md', 'VWoodCutter');
// src/app/gamedata/labourers/vlabourers/VWoodCutter.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.VWoodCutter = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 伐木工
 * @Author: RannarYang
 * @Date: 2018-11-03 12:13:51
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:39
 */
var VWoodCutter = /** @class */ (function (_super) {
    __extends(VWoodCutter, _super);
    function VWoodCutter() {
        return _super.call(this) || this;
    }
    return VWoodCutter;
}(VLabourer_1.VLabourer));
exports.VWoodCutter = VWoodCutter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvYXBwL2dhbWVkYXRhL2xhYm91cmVycy92bGFib3VyZXJzL1ZXb29kQ3V0dGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx5Q0FBd0M7QUFFeEM7Ozs7OztHQU1HO0FBQ0g7SUFBaUMsK0JBQVM7SUFFekM7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixrQkFBQztBQUFELENBTEEsQUFLQyxDQUxnQyxxQkFBUyxHQUt6QztBQUxZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV29vZEN1dHRlciB9IGZyb20gXCIuLi9Xb29kQ3V0dGVyXCI7XG5pbXBvcnQgeyBWTGFib3VyZXIgfSBmcm9tIFwiLi9WTGFib3VyZXJcIjtcblxuLypcbiAqIEBEZXNjcmlwdGlvbjog5LyQ5pyo5belXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTM6NTEgXG4gKiBATGFzdCBNb2RpZmllZCBieTogUmFubmFyWWFuZ1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxMjoxNzozOVxuICovXG5leHBvcnQgY2xhc3MgVldvb2RDdXR0ZXIgZXh0ZW5kcyBWTGFib3VyZXIge1xuXHRwcm90ZWN0ZWQgbGFib3VyZXI6IFdvb2RDdXR0ZXI7XG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXHR9XG59Il19