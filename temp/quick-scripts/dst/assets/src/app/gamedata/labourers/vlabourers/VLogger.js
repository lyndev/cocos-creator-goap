
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/gamedata/labourers/vlabourers/VLogger.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfe74JLQLhNwoE4/6eg7Aoi', 'VLogger');
// src/app/gamedata/labourers/vlabourers/VLogger.ts

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
exports.VLogger = void 0;
var VLabourer_1 = require("./VLabourer");
/*
 * @Description: 樵夫
 * @Author: RannarYang
 * @Date: 2018-11-03 12:14:09
 * @Last Modified by: RannarYang
 * @Last Modified time: 2018-11-03 12:17:04
 */
var VLogger = /** @class */ (function (_super) {
    __extends(VLogger, _super);
    //protected labourer: Logger;
    function VLogger() {
        return _super.call(this) || this;
    }
    return VLogger;
}(VLabourer_1.VLabourer));
exports.VLogger = VLogger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGdhbWVkYXRhXFxsYWJvdXJlcnNcXHZsYWJvdXJlcnNcXFZMb2dnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUV4Qzs7Ozs7O0dBTUc7QUFDSDtJQUE2QiwyQkFBUztJQUNyQyw2QkFBNkI7SUFDN0I7ZUFDQyxpQkFBTztJQUNSLENBQUM7SUFDRixjQUFDO0FBQUQsQ0FMQSxBQUtDLENBTDRCLHFCQUFTLEdBS3JDO0FBTFksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi4vTG9nZ2VyXCI7XHJcbmltcG9ydCB7IFZMYWJvdXJlciB9IGZyb20gXCIuL1ZMYWJvdXJlclwiO1xyXG5cclxuLypcclxuICogQERlc2NyaXB0aW9uOiDmqLXlpKtcclxuICogQEF1dGhvcjogUmFubmFyWWFuZyBcclxuICogQERhdGU6IDIwMTgtMTEtMDMgMTI6MTQ6MDkgXHJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBSYW5uYXJZYW5nXHJcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMTEtMDMgMTI6MTc6MDRcclxuICovXHJcbmV4cG9ydCBjbGFzcyBWTG9nZ2VyIGV4dGVuZHMgVkxhYm91cmVyIHtcclxuXHQvL3Byb3RlY3RlZCBsYWJvdXJlcjogTG9nZ2VyO1xyXG5cdHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0fVxyXG59Il19