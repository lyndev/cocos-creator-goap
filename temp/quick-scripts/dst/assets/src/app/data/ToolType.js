
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/app/data/ToolType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd4e5bt584VL7qvlagZk2P9P', 'ToolType');
// src/app/data/ToolType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolType = void 0;
/*
 * @Description:
 * @Author: RannarYang
 * @Date: 2018-11-03 19:01:10
 * @Last Modified by:   RannarYang
 * @Last Modified time: 2018-11-03 19:01:10
 */
var ToolType = /** @class */ (function () {
    function ToolType() {
    }
    ToolType.getSource = function (type) {
        return type + '_png';
    };
    ToolType.Axe = 'axe';
    ToolType.Pick = 'pick';
    return ToolType;
}());
exports.ToolType = ToolType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc3JjXFxhcHBcXGRhdGFcXFRvb2xUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7R0FNRztBQUNIO0lBQUE7SUFNQSxDQUFDO0lBSGMsa0JBQVMsR0FBdkIsVUFBd0IsSUFBWTtRQUNuQyxPQUFPLElBQUksR0FBRyxNQUFNLENBQUM7SUFDdEIsQ0FBQztJQUphLFlBQUcsR0FBVyxLQUFLLENBQUM7SUFDcEIsYUFBSSxHQUFXLE1BQU0sQ0FBQztJQUlyQyxlQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKiBAQXV0aG9yOiBSYW5uYXJZYW5nIFxyXG4gKiBARGF0ZTogMjAxOC0xMS0wMyAxOTowMToxMCBcclxuICogQExhc3QgTW9kaWZpZWQgYnk6ICAgUmFubmFyWWFuZyBcclxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0xMS0wMyAxOTowMToxMCBcclxuICovXHJcbmV4cG9ydCBjbGFzcyBUb29sVHlwZSB7XHJcblx0cHVibGljIHN0YXRpYyBBeGU6IHN0cmluZyA9ICdheGUnO1xyXG5cdHB1YmxpYyBzdGF0aWMgUGljazogc3RyaW5nID0gJ3BpY2snO1xyXG5cdHB1YmxpYyBzdGF0aWMgZ2V0U291cmNlKHR5cGU6IHN0cmluZykge1xyXG5cdFx0cmV0dXJuIHR5cGUgKyAnX3BuZyc7XHJcblx0fVxyXG59Il19